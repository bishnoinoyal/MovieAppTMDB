import React from "react";
import ScreenTemplate from "../layout/ScreenTemplate";

const MovieScreen = ({ route }) => {
  const platform = "movie";
  const filters = ["popular", "now_playing", "top_rated", "upcoming"];

  return <ScreenTemplate platform={platform} filters={filters} />;
};

export default MovieScreen;
