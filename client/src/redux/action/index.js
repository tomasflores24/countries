import axios from 'axios'
export const GET_COUNTRIES = 'GET_COUNTRIES';
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
        .then( countries => dispatch({type:GET_COUNTRIES, payload: countries.all}))
        .catch( err => alert(`Error: ${err.message}`) )
        .finally( () => setTimeout(() => dispatch({type:IS_LOADING, payload: false}), 650) );
    }
}

export function getCountrieId(payload){
    return (dispatch) => {
        dispatch({type: GET_COUNTRIE_DETAIL, payload: {}});
        dispatch({type:IS_LOADING, payload: true});

        axios(`http://localhost:3001/countries/${payload}`)
        .then(resp => resp.data)
        .then( countrieDetail => dispatch({type: GET_COUNTRIE_DETAIL, payload: countrieDetail.infoxId}) )
        .catch( err => dispatch({type: GET_COUNTRIE_DETAIL, payload: false}))
        .finally( () => setTimeout(() => dispatch({type:IS_LOADING, payload: false}), 800) );
    }
}

export function getCountriesName(payload){ 
    return (dispatch) => {
        dispatch({type:IS_LOADING, payload: true});
        axios(`http://localhost:3001/countries?name=${payload}`)
        .then(resp => resp.data)
        .then( countriesName => dispatch({type: GET_COUNTRIES_NAME, payload: countriesName.coun}) )
        .catch( () => alert('The Country was not found') )
        .finally( () => dispatch({type:IS_LOADING, payload: false}) );
    }
}

export function clearDetail(payload){
    return (dispatch) => dispatch({type : CLEAR_DETAIL, payload: {}} );
}

export function getCountriesFilter(payload){
    return (dispatch) => dispatch( {type : GET_COUNTRIES_FILTER, payload } );
}

export function CreateActivityForm(payload){
    return (dispatch) => {
        axios.post('http://localhost:3001/activities',{
            name : payload.name.toLowerCase(),
            difficulty: payload.difficulty,
            duration: payload.duration,
            season: payload.season,
            nameCountries: payload.countriesActivity
        })
        .then( postResponse => alert(postResponse.data.msj) )
        .catch( err => alert(err.response.data.msgError) )
    }
}

export function getActivities(payload){
    return (dispatch) => {
        dispatch({type : IS_LOADING, payload: true});
        axios('http://localhost:3001/activities')
        .then(resp => resp.data)
        .then( activ => dispatch({type : GET_ACTIVITIES, payload: activ.activities}))
        .catch(err=> console.log(err.message))
        .finally( () => dispatch({type : IS_LOADING, payload: false}) );
    }
}