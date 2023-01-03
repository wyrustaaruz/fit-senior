import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/redux/store';
import Navigation from './src/navigation';
import useColorScheme from './src/hooks/useColorScheme';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <StatusBar />
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light" />
      </SafeAreaProvider>
    </Provider>
  );
}
