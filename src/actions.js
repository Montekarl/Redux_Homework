export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});

export const setMostPopularMovies = (list) => ({
  type: 'setMostPopularMovies',
  list,
});

export const setGenres = (listOfGenres) => ({
  type: 'setGenres',
  listOfGenres,
});

export const setFilteredMovies = (list) => ({
  type: 'setFilteredMovies',
  list,
});