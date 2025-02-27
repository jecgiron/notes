import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import HomeImage from "@/assets/images/notesLogo.png";
import { useRouter } from "expo-router";
const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.contianer}>
      <Image source={HomeImage} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes App</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/notes")}>
        <Text style={styles.buttonText}> Start </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
