import { useState,useEffect } from "react";

export const useFetch = (apiPath,queryterm ="") => {
    const [eachMovie, SeteachMovie]= useState([])
    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=b80d59c33d6d57ed9c7e3713f91c188a&query=${queryterm}`
    useEffect(()=>{
      async function fetchMovies(){
        const response = await fetch(url);
        const json = await response.json();
        SeteachMovie(json.results);
      }
      fetchMovies();
      },[url])
  return (

    {eachMovie}
  )
}

