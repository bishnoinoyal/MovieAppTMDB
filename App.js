import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./src/components/tab/StackNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <StackNavigation />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
