import Expo from 'expo';
import React from 'react';
import {
  Button,
  TextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Right
} from 'native-base';

import Hello from './Hello';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tip: 0.2,
      isReady: false,
    }
  }

  // First loads all fonts, sets isReady to true, & finally loads components
  // Had to change async name from "loadFonts" to "componentWillMount"
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  updateCustomTip(customTip) {
    if(customTip) {
      this.setState({
        tip: parseFloat(customTip) / 100,
      });
    } else {
      this.setState({ tip: 0 });
    }
  }

  render() {

    // The tip variable calculates 20% of the passed value & displays it.
    let tip = 0.00;
    if(this.state.inputValue) {
      tip = parseFloat(this.state.inputValue) * this.state.tip;
      // Rounds the value and ensures there are only two nums after decimal(4.99)
      tip = (Math.round(tip * 100) / 100).toFixed(2);
    }

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Content padder>
          <Header>
            <Left/>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <View style={styles.container}>
            <Text>
              ${tip}
            </Text>
            <TextInput
              value={this.state.inputValue}
              keyboardType="numeric"
              placeholder="0.00"
              style={styles.input}
              onChangeText={(text)=> this.setState({inputValue: text})}
            />
            <View style={styles.buttonGroup}>
              <Button
                onPress={() => this.setState({ tip: 0.1 })}
                title="10%"
                color="#1aad5b"
                accessibilityLabel="YourLabelHere"
              />
              <Button
                onPress={() => this.setState({ tip: 0.2 })}
                title="20%"
                color="#1aad5b"
                accessibilityLabel="YourLabelHere"
              />
              <Button
                onPress={() => this.setState({ tip: 0.25 })}
                title="25%"
                color="#1aad5b"
                accessibilityLabel="YourLabelHere"
              />
              <TextInput
                value={(this.state.tip * 100).toString()}
                style={styles.customTip}
                keyboardType="numeric"
                placeholder="20%"
                onChangeText={(customTip) => this.updateCustomTip(customTip)}
              />
            </View>
          </View>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
  },
  input: {
    // height: 100,
    height: 40 ,
    width: '100%',
    borderColor: '#333',
    // borderBottomWidth: 1,
    borderWidth: 1,
    padding: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  customTip: {
    height: 30,
    width: 60,
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  }
});
