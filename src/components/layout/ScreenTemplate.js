import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { fetchDataFromAPI } from "../api/Api";

import MenuBottom from "./MenuBottom";
import CardList from "../cards/CardList";
import SearchFun from "../searchFunction/SearchFun";

const ScreenTemplate = ({ platform, filters }) => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filters.length > 0) {
      setSelectedFilter(filters[0]);
      fetchData(filters[0]);
    }
  }, []);

  const handleClose = () => setShowActionsheet(!showActionsheet);

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    setShowActionsheet(false);
    fetchData(filter);
  };

  const fetchData = async (filter) => {
    try {
      const shows = await fetchDataFromAPI(platform, filter);
      setData(shows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View>
      <View style={styles.searchFun}>
        <SearchFun handleClose={handleClose} showSearchButton={false} selectedFilter={selectedFilter} />
      </View>
      <MenuBottom handleClose={handleClose} showActionsheet={showActionsheet} filters={filters} onSelectFilter={handleFilterSelection} selectedFilter={selectedFilter} />
      <View style={styles.listContainer}>
        <CardList data={data} type={platform} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  searchFun: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 70,
    marginVertical: 15,
  },
  listContainer: {
    width: "100%",
    margin: 20,
    height: "85%",
  },
  button: {
    padding: 5,
    margin: 15,
    width: "40%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "transparent",
  },
  hStack: {
    justifyContent: "space-between",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ScreenTemplate;
