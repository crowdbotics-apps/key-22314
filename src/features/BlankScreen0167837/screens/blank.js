import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_17: "",
    TextInput_3: "",
    TextInput_5: "",
    TextInput_7: "",
    TextInput_9: "",
    TextInput_11: "",
    TextInput_13: "",
    TextInput_15: "",
    TextInput_19: ""
  }

  render = () => (
    <View>
      <TextInput
        placeholder="Transactions"
        style={styles.TextInput_17}
        value={this.state.TextInput_17}
        onChangeText={nextValue => this.setState({ TextInput_17: nextValue })}
      />
      <TextInput
        placeholder="Mcdonalds.              8.25"
        multiline={true}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <TextInput
        placeholder="PAYOFF.                   +0.75"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Starbucks.                4.66"
        style={styles.TextInput_7}
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <TextInput
        placeholder="PAYOFF.                   +0.34"
        style={styles.TextInput_9}
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
      <TextInput
        placeholder="Target.                      22.50"
        value={this.state.TextInput_11}
        onChangeText={nextValue => this.setState({ TextInput_11: nextValue })}
      />
      <TextInput
        placeholder="PAYOFF.                   +0.50"
        style={styles.TextInput_13}
        value={this.state.TextInput_13}
        onChangeText={nextValue => this.setState({ TextInput_13: nextValue })}
      />
      <TextInput
        placeholder="Total with PAYOFF.                                          $37.00"
        style={styles.TextInput_15}
        value={this.state.TextInput_15}
        onChangeText={nextValue => this.setState({ TextInput_15: nextValue })}
      />
      <TextInput
        placeholder="Amount added to loan debt:                           $1.59"
        value={this.state.TextInput_19}
        onChangeText={nextValue => this.setState({ TextInput_19: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  TextInput_17: { fontSize: 18, fontFamily: "Nunito-Bold" },
  TextInput_3: {},
  TextInput_5: { color: "#de1717", fontWeight: "bold" },
  TextInput_7: { color: "#e81111" },
  TextInput_9: { fontWeight: "bold" },
  TextInput_11: {},
  TextInput_13: { fontWeight: "bold" },
  TextInput_15: { fontWeight: "bold" },
  TextInput_19: {}
})
