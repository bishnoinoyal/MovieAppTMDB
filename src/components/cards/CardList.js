import { View, FlatList, Text } from "@gluestack-ui/themed";
import CardSingle from "./CardSingle";

const CardList = ({ data, type }) => {
  console.log("CardList function called");

  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => <CardSingle item={item.media_type === "person" ? (item.known_for.length > 0 ? item.known_for[0] : item) : item} type={type} />} />
    </View>
  );
};

export default CardList;
