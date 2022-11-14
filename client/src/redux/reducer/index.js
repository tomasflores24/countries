import {GET_COUNTRIES, GET_COUNTRIE_DETAIL, GET_COUNTRIES_NAME, CREATE_ACTIVITY,CLEAR_DETAIL, IS_LOADING, GET_COUNTRIES_FILTER} from '../action';

const initialState = {
    countries: [],
    countrie_detail: {},
    // countrie_name: [],
    create_activity: {},
    is_loading: false,
    countries_filter: [],
}

const rootReducer = (state = initialState, { type , payload}) => {

    switch (type) {

        case GET_COUNTRIES:
          return {...state, countries : payload, countries_filter: payload};

        case GET_COUNTRIES_FILTER:
          
          // if( payload === 'population') {
          //   console.log("POPUL")
          //   return {...state, countries_filter: state.countries.slice(0, 5)}
          // }
          if(payload === 'ALL') return {...state, countries_filter: state.countries }
          const filterXcontinent = [...state.countries].filter( c => c.continent === payload );
          return {...state, countries_filter: filterXcontinent};
          // ACTIVITY

        
        case GET_COUNTRIE_DETAIL:
            return {...state, countrie_detail: payload};

        case GET_COUNTRIES_NAME:
          return {...state, countries_filter: payload}

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