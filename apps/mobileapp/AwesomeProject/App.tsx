/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

import {greeting} from 'cool-package';
import {useSampleHook} from 'cool-package/hooks';

function App(): React.JSX.Element {
  const [hasChangedVar, setHasChangedVar] = useSampleHook();

  /*
  <Text>{greeting}</Text>
            <Text>{hasChangedVar ? 'Changed var' : 'Did not change var'}</Text>
            <Text>{greeting2}</Text>
            <Text>
              {hasChangedVar2 ? 'Changed var 2' : 'Did not change var 2'}
            </Text>
  */

  return (
    <View>
      <Text>Test app</Text>
    </View>
  );
}

export default App;
