import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "./movieSlice";
import Card from "../components/Card";
import MyPagination from "../components/MyPagination";
import "../components/css/Movies.css"

const Movies = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => {
    return state.movies.popularmovies.results;
  });
const[currentPage,setCurrentPage]=useState(1);
  console.log(moviesList);
  

  useEffect(() => {
    dispatch(getPopularMovies(currentPage));
  }, [currentPage]);

  return (
    <div className="App1">
      <span className="pagetitle">Most Popular movies</span>
     
      <div className="popular">

      {moviesList &&
        moviesList.map((m) => (
          <Card key={m.id} release_date={m.release_date} vote_count={m.vote_count}overview={m.overview} poster={m.poster_path} title={m.title} />
        ))}
        </div>
        <MyPagination setCurrentPage={setCurrentPage}/>
  
    </div>
  );
};
export default Movies;
