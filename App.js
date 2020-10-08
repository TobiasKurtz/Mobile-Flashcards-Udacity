import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import Dashboard from "./components/Dashboard";
import { StackNavigator } from "react-navigation";

const MainNavigator = StackNavigator({
  Home: {
    screen: Dashboard,
    navigationOptions: {
      title: "Decks",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "black",
      },
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}
