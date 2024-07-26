import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const MenuItemsFetch = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  
 const getMenu = async () => {
  try {
    const response = await fetch(
    // 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
      'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json'
    );
    const json = await response.json();
    setData(json.menu);
    console.log(json.menu);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

    useEffect(() => {
    getMenu();
  }, []);

  const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{'$' +price}</Text>
  </View>
);

  const renderItem = ({ item }) => <Item name={item.title} price={item.price} />;



  return (
    <SafeAreaView style={menuStyles.container}>
      {isLoading ? (
    <ActivityIndicator />
    ) : (
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={renderItem}
      />
    )}
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
});

export default MenuItemsFetch;