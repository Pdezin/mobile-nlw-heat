import React from "react";
import { ScrollView } from "react-native";
import { Message } from "../Message";
import { styles } from "./styles";

export const MessageList = () => {
  const message = {
    id: "1234",
    text: "Mensagem de teste",
    user: {
      name: "Pedro",
      avatar_url: "https://github.com/pdezin.png",
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
};
