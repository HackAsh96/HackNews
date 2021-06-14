import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Colors from './src/constants/Colors';
import { CustomFonts } from './src/constants/Fonts';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Navigation } from './src/navigation';
import store from './src/redux/store';
import { getLimitedTopStories } from './src/redux/actions';



export default class App extends React.Component<{}, {}>{
  state = {
    isLoadingComplete: false
  };
  componentDidMount() {
    this._loadResourcesAsync();
  }
  _loadResourcesAsync = async () => {
    await Font.loadAsync(CustomFonts)
  };
  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={(error: any) => console.warn(error)}
          onFinish={() => {
            this.setState({ isLoadingComplete: true })
            store.dispatch(getLimitedTopStories())
          }}
        />
      );
    }
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <Navigation />
          <StatusBar />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.cherryPie
  }
})