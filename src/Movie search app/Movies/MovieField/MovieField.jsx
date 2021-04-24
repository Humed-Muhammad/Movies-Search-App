import React from "react";
import "./MovieField.css";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

const MovieField = ({ data }) => {
  return (
    <div className="card-cont">
      {data.length
        ? data.map((item) => (
            <Card
              className="movie-card"
              key={item.imdbID}
              image={item.Poster}
              header={item.Title}
              meta={item.Year}
              description={item.Type}
            />
          ))
        : null}
    </div>
  );
};

export default MovieField;
