/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React, { ReactNode, Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Card from '../../components/card';
import { generalStyles } from '../../constants/styles/generalStyles';
import { Post } from '../../core/types';
import { PostStates } from '../../reducer/postsReducer';
import SimpleButton from '../../components/button';
import { mainColor } from '../../constants/general';

/* -------------------------------------------------------------------------- */
/*                                 Class Posts                                */
/* -------------------------------------------------------------------------- */

type Props = {
    getAllPosts: () => Promise<void>,
    postsStates: PostStates,
}

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

  async componentDidMount(): Promise<void> {
      await this.props.getAllPosts()
  }

  refresh = () : void => {
    this.setState({
      refreshing: true,
    }, async () => {
        await this.props.getAllPosts()
    })
    this.setState({
      refreshing: false,
    })
  }

  render(): ReactNode {
    const { loading, error, posts } = this.props.postsStates;
    return (
      <View style={[generalStyles.center, generalStyles.statusBarSpace]}>
        {loading ? (
            <View style={[generalStyles.coverHeight, generalStyles.center]}>
                <ActivityIndicator size="large" color={mainColor}/>
            </View>
        ) : (
            error ? (
                <View style={[generalStyles.coverHeight, generalStyles.center]}>
                   <Text style={[generalStyles.center, generalStyles.errorText]}>Something went wrong</Text>
                   <SimpleButton buttonText='Refresh' onPress={this.props.getAllPosts} />
                </View>
            ) : (
               <FlatList
                inverted
                refreshing={this.state.refreshing}
                onRefresh={this.refresh}
                data={posts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Card item={item} />}
               />
            )
        )}
      </View>
    );
  }
}