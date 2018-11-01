import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.hello}>'Fo-shizzle up in this hizzle...word to big bird!'</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hello: {
    backgroundColor: '#00ff00',
    fontSize: 24
  }
});
