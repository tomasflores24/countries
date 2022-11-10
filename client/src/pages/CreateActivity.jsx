import React, { useEffect, useState } from 'react'
import '../styles/pages/CreateActivity.css'
import {useDispatch, useSelector} from 'react-redux';
import { getCountries } from '../redux/action';
// ? Cambiar el duration en el model a INTEGER.
// name difficulty duration season

function CreateActivity() {
  const dispatch = useDispatch();
  const { countries } = useSelector( state => state);
  
  const [form, setForm] = useState({
    name:'',
    difficulty: '',
    duration : '',
    season : '',
    countriesActivity: []
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const setDataForm  = (e) =>{
    const {value,name, id} = e.target;
    if( name !== 'countriesActivity' ){
      setForm( {...form, [name]: value} );
    }else if(!form.countriesActivity.includes(value)){
      setForm({...form, [name]: [...form.countriesActivity, value] });
    }
    validation(value, name, id);
  }

  const validation = (value, nameEtiq,id) =>{
    // console.log(value, "=>", id);
    // console.log("\n");

    switch (nameEtiq) {
      case 'name':
        if(value === "" || value.length > 50){
          document.getElementById(id).classList.add('form__name__error');
        }else{
          document.getElementById(id).classList.remove('form__name__error');
        }

        break;
    
      default:
        break;
    }
    // ! ME falta hacer las valudaciones, dependiendo que id hago dif
    document.getElementById(id).classList.add('err')
    // if( countriesActivity.length === 0 ){
    //   document.getElementById('form').classList.remove('form__container');
    //   document.getElementById('form').classList.add('form__container__error');
    // }
    // console.log(name, difficulty, duration, season, countriesActivity)

  }
    //     e.target.classList.add('err');
    //     document.getElementById('btn').disabled = true
    //     e.target.classList.remove('err');
    //     document.getElementById('btn').disabled = false
  const deleteCountry = (e, name) =>{
    e.preventDefault();
    setForm({...form, countriesActivity: form.countriesActivity.filter( c => c !== name )});    
  } 
  const countriesActivity = (e) =>{
    e.preventDefault();
    setForm({...form, countriesActivity: []});
  } 

    return (
      <form className='form__container' id='form'>

      <label htmlFor="name">Name</label>
      <input type="text" id='name' value={form.name} className='name__input ' name='name' onChange={setDataForm}/> <br />

      <label htmlFor="difficulty">difficulty</label>
      <input type="range" min="1" max="5" defaultValue={1} name='difficulty' id='difficulty' onChange={setDataForm}/> <br />

      <label htmlFor="duration">duration</label>
      <input type="range" min="1" max="6" defaultValue={1} name='duration' id='duration' onChange={setDataForm}/> <br />

      <select name="season" id="season" onChange={setDataForm}>
        <option value='summer'>summer</option>
        <option value='autumn'>autumn</option>
        <option value='winter'>winter</option>
        <option value='spring'>spring</option>
      </select>

    <br/>
      <select name="countriesActivity" id="countriesActivity" onChange={setDataForm}>
        <option value="">Seleccionar Countries</option>
        {countries.length && countries.map( c => <option key={c.id} value={c.name}>{c.name}</option>)}
      </select> <br />

      <button className='btn' id='btn' disabled={true}>Crear</button>
      <hr />
      <div>
        <p>Name : {form.name}</p>
        <p>difficulty : {form.difficulty}</p>
        <p>duration : {form.duration}</p>
        <p>season : {form.season}</p>
        <hr />
      </div>
      {form.countriesActivity && form.countriesActivity.map( (c,i) => (
        <div key={i}>
          <p>{c}</p>
          <button key={i} onClick={e => deleteCountry(e,c)}>x</button>
          <br />
        </div>
      ))}
      {form.countriesActivity.length > 0 && <button onClick={countriesActivity}>Clear</button>}

    </form>
  )
}

export default CreateActivity

//TODO Ruta de creación de actividad turística: debe contener

//TODO [ ] Un formulario controlado con JavaScript con los siguientes campos:
//TODO Nombre
//TODO Dificultad
//TODO Duración
//TODO Temporada
//TODO [ ] Posibilidad de seleccionar/agregar varios países en simultáneo
//TODO [ ] Botón/Opción para crear una nueva actividad turística
