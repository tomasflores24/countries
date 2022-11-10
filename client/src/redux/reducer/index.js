import {GET_COUNTRIES, GET_COUNTRIE_DETAIL, GET_COUNTRIES_NAME, CREATE_ACTIVITY,CLEAR_DETAIL, IS_LOADING, GET_COUNTRIES_FILTER} from '../action';

const initialState = {
    countries: [],
    countrie_detail: {},
    countrie_name: [],
    create_activity: {},
    is_loading: false,
    countries_filter: []
}

const rootReducer = (state = initialState, { type , payload}) => {

    switch (type) {

        case GET_COUNTRIES:
          return {...state, countries : payload, countrie_continent: payload};

        case GET_COUNTRIES_FILTER:
          if(payload.typeFilter === 'CONTINENT'){
            console.log("REDUCE FUIKLTER",payload)
            const data = state.countries.filter( c => c.continent === payload.selectInfo );
            return {...state, countries_filter: data };
          }
          // ACTIVITY
        
        case GET_COUNTRIE_DETAIL:
            return {...state, countrie_detail: payload};

        case GET_COUNTRIES_NAME:
            return {...state, countrie_name: payload}

        case CREATE_ACTIVITY: // * _____MODIDICAR______________
          return {...state};

        case CLEAR_DETAIL: 
          return {...state, countrie_detail: payload};

        case IS_LOADING:
          return {...state, is_loading: payload}

        default:
          return state;
    }
}

export default rootReducer;
