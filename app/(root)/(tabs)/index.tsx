import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold underline text-primary-300 font-rubik text-lg" >Welcome to Restate</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Link href="/sign-in" >Sign In</Link>
    </View>
  );
}
