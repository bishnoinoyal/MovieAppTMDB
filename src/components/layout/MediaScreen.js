import { useEffect, useState } from "react";
import { fetchMediaDetails } from "../services/api";
import MediaLayout from "../layout/MediaLayout";
import { useRoute, useNavigation } from "@react-navigation/native";

const MediaScreen = (params) => {
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
    console.log(data.original_title);
    const title = data.original_title || data.original_name || "Media";
    navigation.setOptions({ title: title });
  };
  const fetchData = async () => {
    try {
      const shows = await fetchMediaDetails(itemId, type);
      setData(shows);
      updateHeaderTitle(shows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return <MediaLayout item={data} />;
};

export default MediaScreen;
