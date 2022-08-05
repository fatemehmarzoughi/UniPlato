/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import axios from '../../core/_axios';
import React, { ReactNode, Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../../components/card';
import { generalStyles } from '../../constants/styles/generalStyles';
import { Post } from '../../core/types';

/* -------------------------------------------------------------------------- */
/*                                 Class Posts                                */
/* -------------------------------------------------------------------------- */

type Props = {}

type States = {
  flatListItems: Array<Post>
  refreshing: boolean,
}

export default class Posts extends Component<Props, States> {
  constructor(params: Props){
    super(params);
    this.state = {
      flatListItems: [],
      refreshing: false,
    }
  }

  getData = async () : Promise<void> => {
    const result = await axios.get('/api/v1/mock-data');
    const data: Array<Post> = result.data.data.data;
    this.setState({
      flatListItems : data
    })
  }

  async componentDidMount(): Promise<void> {
      await this.getData()
  }

  refresh = () : void => {
    this.setState({
      refreshing: true,
    }, async () => {
      await this.getData();
    })
    this.setState({
      refreshing: false,
    })
  }

  render(): ReactNode {
    return (
      <View style={[generalStyles.center, generalStyles.statusBarSpace]}>
        <FlatList
         inverted
         refreshing={this.state.refreshing}
         onRefresh={this.refresh}
         data={this.state.flatListItems}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({item}) => <Card item={item} />}
        />
      </View>
    );
  }
}