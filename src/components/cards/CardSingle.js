import { Box, Image, Text, Button, HStack, VStack } from "@gluestack-ui/themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import { imgURL } from "../api/Api";
import { useNavigation } from "@react-navigation/native";
import SingleViewScreen from "../screens/SingleViewScreen";

const CardSingle = ({ item, type }) => {
  const navigation = useNavigation();

  const navigateToSingleView = () => {
    navigation.navigate("SingleView", {
      title: item.title,
      popularity: item.popularity,
      releaseDate: item.release_date,
      description: item.overview,
      posterUrl: imgURL(item.backdrop_path),
    });
  };
  return (
    <Box py="$2" flexWrap="nowrap">
      <HStack width={"auto"} gap={12}>
        <Image
          size="xl"
          borderRadius="$none"
          alt="Poster or backdrop image"
          source={{
            uri: item.backdrop_path ? imgURL(item.backdrop_path) : imgURL(item.poster_path),
          }}
        />
        <VStack justifyContent="space-between">
          {item.title ? <Text style={styles.nameText}>{item.title}</Text> : <Text style={styles.nameText}>{item.name}</Text>}
          <Text>Popularity: {item.popularity}</Text>
          {item.release_date ? <Text>Realease date: {item.release_date}</Text> : <Text>Realease date: {item.first_air_date}</Text>}
          <TouchableOpacity style={styles.moreDetailsButton} onPress={navigateToSingleView}>
            <Text style={styles.buttonText}>More Details</Text>
          </TouchableOpacity>
        </VStack>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  moreDetailsButton: {
    backgroundColor: "#00ced1",
    borderRadius: 10,
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  nameText: {
    fontSize: "18",
    fontWeight: "bold",
    width: 200,
  },
});

export default CardSingle;
