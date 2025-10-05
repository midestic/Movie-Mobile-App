const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// ✅ Add ".cjs" support so lucide-react-native can be resolved
config.resolver.sourceExts.push("cjs");

module.exports = withNativeWind(config, { input: "./app/globals.css" });
