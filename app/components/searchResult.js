import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';


import { List, ListItem } from 'react-native-elements'


class SearchResult extends React.Component {
  renderRow (item) {
    let title;
    if (item.word){
      title = `${item.kana} 【${item.word}】`;
    } else {
      title = item.kana;
    }

    return (
      <ListItem
        key={item.id}        
        title={title}
        subtitle={item.first_definition}
        hideChevron={true}
      />
    )
  }

  render () {
    return (
      <List>
        {
          this.props.dataSource.map((item) => (
            this.renderRow(item)
          ))
        }
      </List>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default SearchResult;