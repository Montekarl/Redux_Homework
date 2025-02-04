import axios from 'axios';
import { setMostPopularMovies, setGenres, setFilteredMovies } from './actions';
import { endpoints } from './config';

export const getMostPopularMovies = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((data) => {
      dispatch(setMostPopularMovies(data.data.results));
    });
};

export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((data) => {
            dispatch(setGenres(data.data.genres));
        })
};

export const getFilteredMovies = (id) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(id))
        .then((data) => {
            dispatch(setFilteredMovies(data.data.results));
        });
};