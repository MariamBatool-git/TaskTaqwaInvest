import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import Signinup from './screens/signinup';
//import SuperTokens from 'supertokens-react-native';

//SuperTokens.init({    apiDomain: "http://localhost:3000",    apiBasePath: "/auth"});


const App = () => {
  return (
    <View style = {{flex : 1, justifyContent : 'center'}}>
      
      <Signinup/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
