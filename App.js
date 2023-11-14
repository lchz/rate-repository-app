import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from "react-router-native";

import Constants from 'expo-constants';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import { ApolloProvider } from '@apollo/client';


const apolloClient = createApolloClient()

const App = () => {
  console.log('Manifest:', Constants.manifest)
  
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />  
        </ApolloProvider>
      </NativeRouter>

      {/* <StatusBar style="auto" /> */}
    </>
  )
}

export default App;
