import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="text-center  w-full h-[100vh] flex justify-center items-center">
      <Text className="text-[40px] text-accent">Welcome</Text>

      <Link href={"/onboarding"}>onboarding</Link>
    </View>
  );
}
