import { Box, Image, Text, HStack, VStack } from "@gluestack-ui/themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import { imgURL } from "../api/Api";
import { useNavigation } from "@react-navigation/native";

const CardSingle = ({ item, type }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    console.log("handleNavigation function called");

    navigation.navigate("Media", { itemId: item.id, type: item.media_type ? item.media_type : type });
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
          <TouchableOpacity style={styles.moreDetailsbutton} underlayColor="#00ced1" onPress={handleNavigation}>
            <Text style={styles.detailsText}>More Details</Text>
          </TouchableOpacity>
        </VStack>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  moreDetailsbutton: {
    backgroundColor: "#00ced1",
    borderRadius: 4,
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: "18",
    fontWeight: "bold",
    width: 200,
  },
  detailsText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default CardSingle;
