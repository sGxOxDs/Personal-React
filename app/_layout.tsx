import { Stack } from "expo-router";
import { HelmetProvider } from "react-helmet-async";

export default function RootLayout() {
  return (
    <HelmetProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </HelmetProvider>
  );
}
