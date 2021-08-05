import React, { useEffect, useState } from "react";
// API
import API from "../API";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "./HeroImage";
// Hook
import { useHomeFetch } from "../hook/usdHomeFetch";
// Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  // const [state, setState] = useState();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const fetchMovies = async (page, searchTerm = "") => {
  //   try {
  //     setError(false);
  //     setLoading(true);

  //     const movies = await API.fetchMovies(searchTerm, page);
  //     console.log(movies);

  //     setState((prev) => ({
  //       ...movies,
  //       results:
  //         page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
  //     }));
  //   } catch (error) {
  //     setError(true);
  //   }
  //   setLoading(false);
  // };
  // // Initial render
  // useEffect(() => {
  //   fetchMovies(1);
  // }, []);
  // Move to hook/useHomeFetch.js

  const { state, loading, error } = useHomeFetch();

  console.log(state);
  return (
    <div>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        ></HeroImage>
      ) : null}
    </div>
  );
};

export default Home;
