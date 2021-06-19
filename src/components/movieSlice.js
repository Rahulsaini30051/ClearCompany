import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from "@reduxjs/toolkit";
  
  
  export const getPopularMovies= createAsyncThunk(
      "api/movies",
      async (pageNumber) => {
        return fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${pageNumber}`).then((res) =>
          res.json()
        );
      }
    );
    
    
    const movieSlice = createSlice({
      name: "movies",
        initialState:{
        movies_api_status: null,
        popularmovies: []
      },
      reducers: {},
      extraReducers: {
        [getPopularMovies.pending]: (state) => {
          state.movies_api_status = "loading";
        },
    
        [getPopularMovies.fulfilled]: (state, {payload: results } ) => {
          state.popularmovies = results;
          state.movies_api_status = "success";  
        },
    
        [getPopularMovies.rejected]: (state) => {
          state.movies_api_status = "failed";
        },
      },
    });
    
    
    
    export default movieSlice.reducer;