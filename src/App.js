import React from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import { Header, CryptoContainer } from './components';

const App = () => {
    return (
        <View style={container} >
          <StatusBar
            backgroundColor="#000000"
            barStyle="light-content"
            translucent={false} />
          <Header />
          <CryptoContainer style={cryptoContainer} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#000000"
  },
  cryptoContainer: {
    flex: 1
  }
})

const { container, cryptoContainer } = styles;


export default App;