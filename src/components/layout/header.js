import { Box, SafeAreaView } from "@gluestack-ui/themed";
import React from "react";

const header = () => {
  return (
    <SafeAreaView>
      <Box bg="#2c3e50" alignItems="center" justifyContent="center" safeAreaTop py={5}>
        <Text color="#fff" fontSize={20} fontWeight="bold">
          Movie App
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default header;
