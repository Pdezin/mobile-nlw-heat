import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";
import { COLORS } from "../../theme";

export const SignInBox = () => {
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GIHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
    </View>
  );
};
