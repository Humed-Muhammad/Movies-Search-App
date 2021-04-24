import React, { useState, useEffect } from "react";
import "./Movies.css";
import { fetchMovieData } from "../Api";
import MovieField from "./MovieField/MovieField.jsx";
import { motion } from "framer-motion";
let variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    rotate: [360, 0],
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
      repeat: 50,
      repeatType: "revers",
    },
  },
};

let Movies = () => {
  let [name, setName] = useState("");
  let [page, setPage] = useState(1);
  let [value, setValue] = useState({ name: "book" });
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setData(await fetchMovieData(value.name, page));
    };
    fetchApi();
  }, [value.name, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue({ name: name });
    setName("");
    setPage(1);
    setData([]);
  };
  const handlePageUp = () => {
    setPage(page + 1);
  };
  const handlePageDown = () => {
    setPage(page - 1);
  };
  console.log(data);
  console.log(name, value.name, page);

  return (
    <div className="movie-cont">
      <h1 className="movie-header">Search Your Favorite Movies</h1>
      <div className="movie-search">
        <input
          className="movie-input"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          placeholder="Search Movies"
          type="text"
          name="search-input"
          id=""
        />
        <button
          onClick={handleSubmit}
          className="movie-btn"
          type="submit"
          name="submit"
        >
          Search
        </button>
      </div>
      {data.length ? (
        <MovieField data={data} />
      ) : (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="movie-loadding-cont"
        ></motion.div>
      )}

      <div className="btn-cont">
        {page > 1 ? (
          <button
            style={{ cursor: "pointer" }}
            onClick={handlePageDown}
            className="page-btn"
          >
            {"<"}
          </button>
        ) : null}
        <button className="page">{page}</button>
        <button
          style={{ cursor: "pointer" }}
          onClick={handlePageUp}
          className="page-btn"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Movies;
