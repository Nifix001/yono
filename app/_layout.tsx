;
import { Stack } from "expo-router";
import "./global.css";
import { StatusBar } from "react-native";

const RootLayout = () => {

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </>
  );
};

export default RootLayout;