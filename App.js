import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import realm from "./realm";

export default class App extends Component {
  state = {};

  componentWillMount() {
    const dogs = realm.objects("Dog");

    this.setState({ name: dogs[0].name });

    //-------------------------------------------------------------------------
    // 1. Realm listener does _not_ leak
    //-------------------------------------------------------------------------
    realm.addListener("change", () => {
      this.setState({ name: realm.objects("Dog")[0].name });
    });

    //-------------------------------------------------------------------------
    // 2. Results listener _leaks_
    //-------------------------------------------------------------------------
    // dogs.addListener(dogs => {
    //   this.setState({ name: dogs[0].name });
    // });

    //-------------------------------------------------------------------------
    // 3. Object listener _leaks_
    //-------------------------------------------------------------------------
    // const dog = dogs[0];
    // dog.addListener(({ name }) => {
    //   this.setState({ name });
    // });
  }

  componentWillUnmount() {
    realm.removeAllListeners();
  }

  render() {
    const { name } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.data}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  data: {
    textAlign: "center",
    color: "#333333"
  }
});
