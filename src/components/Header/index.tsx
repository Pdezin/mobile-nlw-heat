import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { UserPhoto } from "../UserPhoto";
import LogoSvg from "../../assets/logo.svg";

export const Header = () => {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <UserPhoto imageUri={"https://github.com/pdezin.png"} />
      <TouchableOpacity>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
