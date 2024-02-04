import { StyleSheet, TouchableOpacity } from "react-native";
import { HStack, Text, Button, ButtonText, ButtonIcon, SearchIcon, ChevronDownIcon } from "@gluestack-ui/themed";

const SearchFun = ({ handleClose, showSearchButton, selectedFilter, handleSearchButton }) => {
  const handlePress = () => {
    handleSearchButton();
  };

  return (
    <HStack style={styles.container}>
      <TouchableOpacity onPress={handleClose} style={styles.button}>
        <HStack gap={30} style={styles.hStack}>
          <Text>{selectedFilter}</Text>
          <ButtonIcon as={ChevronDownIcon} />
        </HStack>
      </TouchableOpacity>
      {showSearchButton ? (
        <Button onPress={handlePress} size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} style={styles.searchButton}>
          <ButtonIcon as={SearchIcon} />
          <ButtonText> Search</ButtonText>
        </Button>
      ) : (
        <></>
      )}
    </HStack>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
  },
  hStack: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  button: {
    padding: 5,
    width: "60%",
    borderWidth: 1,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: "#00ced1",
  },
});

export default SearchFun;
