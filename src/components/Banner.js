import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./css/Banner.css";

// Image base URL
const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
   const [movie, setMovie] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(requests.fetchNetflixOriginals);
         setMovie(
            request.data.results[
               Math.floor(Math.random() * request.data.results.length - 1)
            ]
         );
      }
      fetchData();
   }, []);

   function truncate(str, n) {
      return str?.length > n ? str.slice(0, n - 1) + "..." : str;
   }

   return (
      <header
         className="banner"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
         }}
      >
         <div className="banner__contents">
            <h1 className="banner__title">
               {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className="banner__buttons">
               <button className="banner__button">Play</button>
               <button className="banner__button">My List</button>
            </div>

            {/* <p className="banner__description">{movie?.overview}</p> */}
            <p className="banner__description">
               {window.innerWidth < 438
                  ? truncate(movie?.overview, 200)
                  : truncate(movie?.overview, 300)}
            </p>
         </div>
      </header>
   );
}

export default Banner;
