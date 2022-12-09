import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const data = [
  {id: '1', title: 'First Item'},
  {id: '2', title: 'Second Item'},
  {id: '3', title: 'Third Item'},
  {id: '4', title: 'Fourth Item'},
];

const exampleSearch = () => {
  return (
    <View style={styles.container}>
      <Text>Basic FlatList Example</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
export default exampleSearch;
