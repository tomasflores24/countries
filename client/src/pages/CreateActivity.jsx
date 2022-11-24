import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { CreateActivityForm, getCountries } from '../redux/action';
import NavBar from '../components/NavBar';
import '../styles/pages/CreateActivity.css'

function CreateActivity() {
  const dispatch = useDispatch();
  const { countries } = useSelector( state => state);
  const [form, setForm] = useState({
    name:'',
    difficulty: 1,
    duration : 1,
    season : 'summer',
    countriesActivity: []
  });
  useEffect(() => dispatch(getCountries()), [dispatch]);

  const setDataForm  = (e) =>{
    const {value,name} = e.target;
    if( name !== 'countriesActivity' ){
      setForm( {...form, [name]: value} );
    }else if(!form.countriesActivity.includes(value)){
      setForm({...form, [name]: [...form.countriesActivity, value] });
    }
    document.getElementById('countriesActivity').selectedIndex = 0;
  }
  const resetForm = () => {
    setForm({name:'', difficulty: 1, duration : 1, season : 'summer',     countriesActivity: [] });
    document.getElementById('countriesActivity').selectedIndex = 0;
    document.getElementById('season').selectedIndex = 0;
  }
  const validation = () =>{
    const {name, difficulty, duration, season, countriesActivity} = form;
    try {
      if(!name || name.length > 30) throw new Error('Name Invalidate');
      if(difficulty > 5 || difficulty < 1 || isNaN(difficulty))  throw new Error('difficulty Invalidate');
      if(duration > 6 || duration < 1 || isNaN(duration))  throw new Error('duration Invalidate');
      if(season !== 'summer' && season !== 'autumn' && season !== 'winter' && season !== 'spring') throw new Error('season Invalidate');
      if(countriesActivity.length === 0) throw new Error('countriesActivity Invalidate');
      return false;
    } catch (err) {
      return err.message;
    }
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const responseValidation = validation();
    if( responseValidation ) return alert( responseValidation );
    dispatch(CreateActivityForm(form));
    resetForm();
  } 
  const deleteCountry = (e, name) =>{
    e.preventDefault();
    document.getElementById('countriesActivity').selectedIndex = 0;
    setForm({...form, countriesActivity: form.countriesActivity.filter( c => c !== name )});    
  } 

    return (
  <>
  <NavBar />
  <form className='form__container' id='form' onSubmit={handleSubmit} >
    <div className='flx'>
      <label htmlFor="name">Name </label>
      <input type="text" id='name' value={form.name} className='name__input ' name='name' onChange={setDataForm}/> <br />
    </div>

    <div className='flx'>
      <label htmlFor="difficulty">Difficulty</label>
      <input type="range" min="1" max="5" value={form.difficulty} name='difficulty' id='difficulty' onChange={setDataForm}/> <br />
      <p>{form.difficulty}/5</p>
    </div>

    <div className='flx'>
      <label htmlFor="duration">Duration</label>
      <input type="range" min="1" max="6" value={form.duration} name='duration' id='duration' onChange={setDataForm}/> <br />
      <p>{form.duration} hs</p>
    </div>

    <select name="season" id="season" onChange={setDataForm} className='select__season'>
      <option value='summer'>summer</option>
      <option value='autumn'>autumn</option>
      <option value='winter'>winter</option>
      <option value='spring'>spring</option>
    </select>

    <select name="countriesActivity" id="countriesActivity" onChange={setDataForm} className='select__season'>
      <option value="">Seleccionar Countries</option>
      {countries.length && countries.map( c => <option key={c.id} value={c.name}>{c.name}</option>)}
    </select> 
    <p>Countries : <b>{form.countriesActivity.length}</b></p>
    <div>
      <div className="container__activities__countries">
        {form.countriesActivity && form.countriesActivity.map( (c,i) => (
          <div key={i} className='countrie__activity'>
            <p>{c}</p>
            <button key={i} onClick={e => deleteCountry(e,c)}>x</button>
          </div>
        ))}
      </div>
    </div>
    <input type='submit' className='btn__submit' id='btn' />
  </form>
  </>
  )
}

export default CreateActivity