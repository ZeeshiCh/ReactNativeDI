import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DIProvider } from "./src/contexts/DIContext";

import UserView from "./src/views/UserView";

export default function App() {
  return (
    <DIProvider>
      <UserView />
    </DIProvider>
  );
}
