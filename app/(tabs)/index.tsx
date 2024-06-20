import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Happy: require("@/assets/fonts/Happy.otf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Ou qualquer componente de carregamento
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <Text style={styles.titleText}>Bem vindo</Text>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.container}>
        <Text style={styles.subtitleText}>Sobre o app:</Text>
        <Text style={styles.defaultText}>
          <Text style={styles.defaultSemiBold}>
            é um aplicativo de que divulga todas as suas redes sociais, permitindo que voce
            compartilhe suas informações com outras pessoas assim promovendo uma integração 
            maior. 
          </Text>
        </Text>
      </ThemedView>
      <ThemedView style={styles.container}>
        <Text style={styles.subtitleText}>Sobre mim:</Text>
        <Text style={styles.defaultText}>
          Ola me chamo murilo henrique e desenvolvi um aplicativo que divulga minhas redes sociais
        </Text>
        <Image
          source={require("@/assets/images/Murilo.png")}
          style={styles.aboutImage}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent:'center',
    alignItems:'center',
  },
  reactLogo: {
    height: 300,
    width: 550,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  titleText: {
    fontSize: 28,
    color: "#FFFFFF",
    fontFamily: "Happy", // Aplicação da fonte Monolite
    textAlign: "center",
    marginBottom: 15,
  },
  subtitleText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Happy", // Aplicação da fonte Monolite
    marginBottom: 10,
    textAlign: "center",
  },
  defaultText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Happy", // Aplicação da fonte Monolite
    lineHeight: 24,
    textAlign: "center",
  },
  defaultSemiBold: {
    fontWeight: "600",
  },
  aboutImage: {
    width: 200,
    height: 200,
    marginRight: 8,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
  },
});