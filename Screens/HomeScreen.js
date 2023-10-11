import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native"

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          senha: "",
        };
      }
    render() {
        return (
            <View>
                <Text>Tela Inicial</Text>
            </View>
        )
    }
}