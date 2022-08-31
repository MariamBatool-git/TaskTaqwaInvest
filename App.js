import React from 'react';
import { StyleSheet } from 'react-native';

import SuperTokens from 'supertokens-react-native';

SuperTokens.init({    apiDomain: "http://localhost:3000",    apiBasePath: "/auth"});


const App = () => {
  return (
    <View>
      
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
