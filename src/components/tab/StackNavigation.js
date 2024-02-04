import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator, ActionsheetItem, ActionsheetIcon, ActionsheetItemText } from "@gluestack-ui/themed";
import { Icon, CheckIcon } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import { dataDetails } from "../api/Api";
import { useRoute, useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MediaScreenContents = (params) => {
  const route = useRoute();
  const navigation = useNavigation();

  const { itemId, type } = route.params;

  useEffect(() => {
    fetchData();
    navigation.setOptions({
      headerBackTitle: "Back to List",
    });
  }, [itemId, type]);

  const [data, setData] = useState(null);

  const updateHeaderTitle = (data) => {
    const title = data.original_title || data.original_name || "Media";
    navigation.setOptions({ title: title });
  };

  const fetchData = async () => {
    try {
      const shows = await dataDetails(itemId, type);
      setData(shows);
      updateHeaderTitle(shows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return <MediaScreenContents item={data} />;
};

const StackNavigation = () => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filters = ["Filter_1", "Filter_2", "Filter_3"];
  const handleClose = () => setShowActionsheet(false);
  const onSelectFilter = (filter) => setSelectedFilter(filter);

  const handleClosing = (filter) => {
    handleClose();
    onSelectFilter(filter);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={{
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#00ced1",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen name="Media" options={{ title: "Media Screen" }}>
          {(props) => <MediaScreenContents {...props} />}
        </Stack.Screen>
      </Stack.Navigator>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {filters.map((filter, main) => (
            <ActionsheetItem
              key={main}
              onPress={() => handleClosing(filter)}
              style={{
                backgroundColor: filter === selectedFilter ? "#00ced1" : "transparent",
              }}>
              <ActionsheetItemText
                style={{
                  color: filter === selectedFilter ? "#fff" : "#000",
                }}>
                {filter}
              </ActionsheetItemText>
              {filter === selectedFilter && <Icon color={"#fff"} as={CheckIcon} />}
            </ActionsheetItem>
          ))}
        </ActionsheetContent>
      </Actionsheet>
    </NavigationContainer>
  );
};

export default StackNavigation;
