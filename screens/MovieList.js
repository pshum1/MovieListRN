import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

class ApiContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

  componentDidMount(){
      this.goForFetch()
  }

    goForFetch = () => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("getting data from fetch", responseJson);
        setTimeout(() => {
          this.setState({data:responseJson.movies})
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.back}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <View styles ={styles.view}>
                <Text style = {styles.head}
                  onPress={() => navigation.navigate("Details", { item: item })}
                >
                  {item.title}
                </Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
export default function MovieList() {
  const navigation = useNavigation();

  return <ApiContainer navigation ={navigation}/>
}

const styles = StyleSheet.create({
  back: {
    textAlign: "center"
  },
  head: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
  },
  view: {
    margin: 5,
    padding: 5,
  },
});
