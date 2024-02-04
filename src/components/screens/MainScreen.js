import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MovieScreen from "./MovieScreen";
import SearchScreen from "./SearchScreen";
import TVShowsScreen from "./TVShowsScreen";

const Tab = createMaterialTopTabNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          tabBarStyle: { backgroundColor: "white" },
        },
      }}>
      <Tab.Screen name="Movies" component={MovieScreen} />
      <Tab.Screen name="Search Results" component={SearchScreen} />
      <Tab.Screen name="TV Shows" component={TVShowsScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
