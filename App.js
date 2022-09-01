import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import Signinup from './screens/signinup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Camera from './screens/camera';
//import SuperTokens from 'supertokens-react-native';

//SuperTokens.init({    apiDomain: "http://localhost:3000",    apiBasePath: "/auth"});

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Signinup} />
        <Stack.Screen name = "Camera" component={Camera}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({

});

export default App;
