/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Text, View } from 'react-native';
import { generalStyles } from '@src/constants/styles/generalStyles';

/* -------------------------------------------------------------------------- */
/*                                Class Serach                                */
/* -------------------------------------------------------------------------- */

export default class Search extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={[generalStyles.center, generalStyles.coverHeight]}>
        <Text>Search</Text>
      </View>
    );
  }
}
