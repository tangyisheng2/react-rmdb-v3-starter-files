import React from "react";
// API
// import API from "../API";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
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

  const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch();

  console.log(state);
  return (
    <div>
      {!searchTerm && // Now showing HeroImage when there is a search term
      state.results[0] ? ( // Show image when fetch a result
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        ></HeroImage>
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <Grid
        header={
          searchTerm ? "Search Result" : "Popular Movies" /* Header of grids */
        }
      >
        {state.results.map((movie) => (
          // <div key={movie.id}>{movie.title}</div>
          <Thumb
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path // Old way字符串拼接
                : NoImage
            }
            movieId={movie.id}
          ></Thumb>
        ))}
      </Grid>
      {loading && <Spinner></Spinner>}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More"></Button>
      )}
    </div>
  );
};

export default Home;
