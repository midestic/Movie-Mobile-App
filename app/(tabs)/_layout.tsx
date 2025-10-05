import { Tabs } from "expo-router";
import { Bookmark, Home, Search, User } from "lucide-react-native";
import { Text, View } from "react-native";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden bg-purple-400">
                  <Home color="black" size={15} />
                  <Text className="text-secondary text-base font-semibold ml-2">
                    Home
                  </Text>
                </View>
              ) : (
                <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden ">
                  <Home className="text-purple-400 size-5" />
                </View>
              )}
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden bg-purple-400">
                  <Bookmark color="black" size={15} />
                  <Text className="text-secondary text-base font-semibold ml-2">
                    Saved
                  </Text>
                </View>
              ) : (
                <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden ">
                  <Bookmark className="text-purple-400 size-5" />
                </View>
              )}
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden bg-purple-400">
                  <Search color="black" size={15} />
                  <Text className="text-secondary text-base font-semibold ml-2">
                    Search
                  </Text>
                </View>
              ) : (
                <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden ">
                  <Search className="text-purple-400 size-5" />
                </View>
              )}
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden bg-purple-400">
                  <User color="#151312" size={15} />
                  <Text className="text-secondary text-base font-semibold ml-2">
                    Profile
                  </Text>
                </View>
              ) : (
                <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden ">
                  <User className="text-purple-400 size-5" />
                </View>
              )}
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
