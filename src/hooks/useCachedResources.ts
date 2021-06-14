import * as Font from 'expo-font';
import * as React from 'react';
import { CustomFonts } from '../constants/Fonts';
import { getLimitedTopStories } from '../redux/actions';
import store from '../redux/store'
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts and Top stories
        await Font.loadAsync(CustomFonts);
        store.dispatch(getLimitedTopStories())
      } catch (error) {
        console.warn(error);
      } finally {
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
