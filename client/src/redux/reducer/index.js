import {GET_COUNTRIES, GET_COUNTRIE_DETAIL, GET_COUNTRIES_NAME,CLEAR_DETAIL, IS_LOADING, GET_COUNTRIES_FILTER, GET_ACTIVITIES} from '../action';

const initialState = {
    countries: [],
    countrie_detail: {},
    is_loading: false,
    countries_filter: [],
    activities: [],
}

const rootReducer = (state = initialState, { type , payload}) => {
  switch (type) {

    case GET_COUNTRIES: return {...state, countries : payload, countries_filter: payload};

    case GET_COUNTRIES_FILTER:
      const {continent, nameOrPopulation, order} = payload;
      const countries = continent === 'ALL' ? [...state.countries] : [...state.countries].filter( c => c.continent === continent);

      const obj = {
        [continent]: {
          name:{
            ASC: [...countries].sort((a, b) => (a.name < b.name ? -1 : 1)),
            DESC:[...countries].sort((a, b) => (a.name > b.name ? -1 : 1)),
          },
          population:{
            ASC: [...countries].sort((a, b) => (a.population < b.population ? -1 : 1)),
            DESC:[...countries].sort((a, b) => (a.population > b.population ? -1 : 1)),
          },
        }
      }
      return {...state, countries_filter: obj[continent][nameOrPopulation][order]};
      
    case GET_COUNTRIES_NAME:
      if(!payload) return {...state}
      return {...state, countries_filter: payload}
        
    case GET_COUNTRIE_DETAIL: return {...state, countrie_detail: payload};
    case CLEAR_DETAIL: return {...state, countrie_detail: payload};
    case GET_ACTIVITIES: return {...state, activities: payload}
    case IS_LOADING: return {...state, is_loading: payload}
    default: return state;
  }
}

export default rootReducer;