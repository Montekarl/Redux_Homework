import { combineReducers } from 'redux';


const initialState = {
  showCards: true,
};

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleCards': return {
      ...state,
      showCards: action.shouldShow,
    };
    default: return state;
  }
};

const initialStateOfCards = {
  mostPopular: [],
};

const cards = (state = initialStateOfCards, action) => {
  switch (action.type) {
    case 'setMostPopularMovies': return {
      ...state,
      mostPopular: action.list,
    };
    case 'setFilteredMovies':
      return {
        ...state,
        mostPopular: action.list
      };
    default: return state;
  }
};
const initialStateOfGenres = {
  genresList: []
};

export const genres = (state = initialStateOfGenres, action) => {
  switch(action.type){
    case 'setGenres': return {
      ...state,
      genresList: action.listOfGenres,
    };
    default: return state;
  }
};

export const rootReducer = combineReducers({
  componentState,
  cards,
  genres,
});
