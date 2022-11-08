import axios from 'axios'
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_COUNTRIE_DETAIL = 'GET_COUNTRIE_DETAIL';
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const IS_LOADING = 'IS_LOADING';

export function getCountries(payload){
    return (dispatch) => {
        dispatch({type:IS_LOADING, payload: true});
        
        axios('http://localhost:3001/countries')
        .then( resp => resp.data)
        .then( countries => {
            dispatch({type:GET_COUNTRIES, payload: countries.all});
            dispatch({type:IS_LOADING, payload: false});
        } )
        .catch( err => console.log(err) );
        
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
            dispatch({type: GET_COUNTRIES_NAME, payload: countriesName});
            dispatch({type:IS_LOADING, payload: false});
        })

    }
}

export function clearDetail(payload){
    return (dispatch) => dispatch({type : CLEAR_DETAIL, payload: {}});
}



