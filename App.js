import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  StatusBar,
  Text,
} from 'react-native';
import data from './locations.json';

const chicagoIcon = require('./images/chicago.png');

renderRow =({item}) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Image source={chicagoIcon} style={styles.icon} />
      </View>
      <View style={styles.info}>
        <Text style={styles.items}>{item.name} Items</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.webaddress}>{item.webaddress}</Text>
      </View>
    </View>
  );
}

 export default function  App () {
   
  return (
    
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>City Guide</Text>  
      </View>
      

      <FlatList data={data} renderItem={renderRow} /> 
      <StatusBar style="auto" />
    </View>
   
  );
  
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ede2e0',
  },
  title: {
    backgroundColor: '#1c7da5',
    color: '#ede2e0',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  titleContainer: {
    flexGrow: .5,
    backgroundColor:'#1c7da5',
    justifyContent: 'center',
    color: '1c7da5'
  },
  row: {
    borderColor: '#7b7983',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#1f3243',
    borderColor: '#1f3243',
    borderRadius: 40,
    justifyContent: 'center',
    height: 70,
    width: 70,

  },
  icon: {
    height: 45,
    width: 45,
   
  },
  items: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#122737',
    marginBottom: 5,
    marginLeft: 25
  },
  address: {
    color: '#3c4f62 ',
    fontSize: 16,
    marginLeft: 25
  },
  webaddress: {
    color: '#3c4f62 ',
    fontSize: 16,
    marginLeft: 25,
    fontStyle: 'italic',
  },

});

