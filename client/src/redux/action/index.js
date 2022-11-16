import axios from 'axios'
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_COUNTRIE_DETAIL = 'GET_COUNTRIE_DETAIL';
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const IS_LOADING = 'IS_LOADING';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';

export const GET_COUNTRIES_FILTER = 'GET_COUNTRIES_FILTER';

export function getCountries(payload){
    return (dispatch) => {
        dispatch({type:IS_LOADING, payload: true});
        
        axios('http://localhost:3001/countries')
        .then( resp => resp.data)
        .then( countries => {
            dispatch({type:GET_COUNTRIES, payload: countries.all})
            dispatch({type:IS_LOADING, payload: false});
        } )
        .catch( err => console.log(`Error: ${err.message}`, err) );
        // .catch( err => dispatch({type:'ERROR'}) );
        
    }
}

export function getCountrieId(payload){
    return (dispatch) => {
        dispatch({type:IS_LOADING, payload: true});
        axios(`http://localhost:3001/countries/${payload}`)
        .then(resp => resp.data)
        .then( countrieDetail => {
            dispatch({type: GET_COUNTRIE_DETAIL, payload: countrieDetail.infoxId});
            dispatch({type:IS_LOADING, payload: false});
        })

    }
}

export function getCountriesName(payload){ 
    return (dispatch) => {
        dispatch({type:IS_LOADING, payload: true});
        axios(`http://localhost:3001/countries?name=${payload}`)
        .then(resp => resp.data)
        .then( countriesName => {
            // console.log(countriesName.coun)
            dispatch({type: GET_COUNTRIES_NAME, payload: countriesName.coun});
            dispatch({type:IS_LOADING, payload: false});
        })
        .catch( err => {
            dispatch({type:IS_LOADING, payload: false});
            alert('No se encontro el pais efe.');
        })
    }
}

export function clearDetail(payload){
    return (dispatch) => dispatch({type : CLEAR_DETAIL, payload: {}});
}

export function getCountriesFilter(payload){
    return (dispatch) => dispatch( {type : GET_COUNTRIES_FILTER, payload } );
}



export function CreateActivityForm(payload){
    return (dispatch) => {
        // console.log("Action CREATE => =>", payload);
        axios.post('http://localhost:3001/activities',{
            name : payload.name,
            difficulty: payload.difficulty,
            duration: payload.duration,
            season: payload.season,

            nameCountries: payload.countriesActivity
        })
    }
}

export function getActivities(payload){
    return (dispatch) => {
        dispatch({type : IS_LOADING, payload: true});
        
        axios('http://localhost:3001/activities')
        .then(resp => resp.data)
        .then( activ => {
            dispatch({type : GET_ACTIVITIES, payload: activ.activities});
            dispatch({type : IS_LOADING, payload: false});
        })
        .catch(err=> console.log(err.message))

    }
}

// ? Falta usar el ID de pais que deberia llegar para hacer la relacion.