import React from "react";
import ScreenTemplate from "../layout/ScreenTemplate";

const TVShowsScreen = ({ route }) => {
  const platform = "tv";
  const filters = ["airing_today", "top_rated", "on_the_air", "popular"];

  return <ScreenTemplate platform={platform} filters={filters} />;
};

export default TVShowsScreen;
