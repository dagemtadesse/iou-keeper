import { Google } from "@/components/icons/Google";
import { Logo } from "@/components/icons/Logo";
import { View, Pressable, Text, } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <View style={styles.pageContainer}>
      <StatusBar style={"light"} />

      <View style={styles.logoContainer}>
        <Logo />
        <Text style={styles.logoText}>IOU's</Text>
      </View>

      <Text style={styles.heroText}>Welcome Back!</Text>
      <Text style={styles.heroDescription}>Please log in to continue.</Text>

      <Pressable style={styles.buttonContainer}>
        <Google />
        <Text style={styles.buttonText}>login with Google</Text>
      </Pressable>
    </View>
  );
}

const styles = {
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 16
  },
  logoContainer: { flexDirection: "row", alignItems: "center", gap: 12 },
  logoText: {
    color: "#fff",
    fontSize: 28,
    lineHeight: 36,
    fontWeight: 400,
  },
  heroText: {
    color: "#fff",
    fontSize: 45,
    lineHeight: 54,
    fontWeight: 500,
    marginTop: 24,
  },
  heroDescription: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    fontWeight: "300",
  },
  buttonText: { color: "#fff", fontSize: 14, lineHeight: 20, fontWeight: 600 },
  buttonContainer: {
    backgroundColor: "#3A8F4F",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 1000,
    marginTop: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
} as const;
