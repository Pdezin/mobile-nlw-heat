import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ColorValue,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>["name"];
  isLoading?: boolean;
}

export const Button = ({
  title,
  backgroundColor,
  color,
  icon,
  isLoading = false,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          {icon && <AntDesign name={icon} size={24} style={styles.icon} />}
          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
