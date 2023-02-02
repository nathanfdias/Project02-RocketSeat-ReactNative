import { StatusBar } from 'react-native';
import { Groups } from './src/screens/Groups/index';
import { ThemeProvider } from 'styled-components';
// import { ActivityIndicator} from 'react-native';

import { Loading } from './src/components/Loading';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });



  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparente" translucent/>
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
