import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import axios from "../axios";
import "./css/Row.css";

// Image base URL
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, subtitle }) {
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      }
      fetchData();
   }, [fetchUrl]);

   const opts = {
      height: "390",
      width: "100%",
      playerVars: {
         // https://developers.google.com/youtube/plaer_parameters
         autoplay: 1,
      },
   };

   const handleClick = (movie) => {
      if (trailerUrl) {
         setTrailerUrl("");
      } else {
         movieTrailer(movie?.original_name || movie?.name || movie?.title)
            .then((url) => {
               // http://youtube.com/watch?v=XtMhy8QkqU
               const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
      }
   };

   return (
      <div className="row">
         <h2 className={`row__title ${subtitle && "subtitle"}`}>{title}</h2>

         <div className="row__posters">
            {movies?.map((movie) => (
               <img
                  key={movie.id}
                  src={`${base_url}${movie?.poster_path}`}
                  alt={movie.name}
                  className="row__poster"
                  onClick={() => handleClick(movie)}
               />
            ))}
         </div>
         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
   );
}

export default Row;
