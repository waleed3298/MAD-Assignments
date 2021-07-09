import React, { useState } from 'react';
import { Alert } from 'react-native'; 
import { Text, View, StyleSheet, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import Swipeout from 'react-native-swipeout';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
   var [itemArray, setItem] = useState([
    { name: 'Item#1', id: '1', quantity: 5 },
    { name: 'Item#2', id: '2', quantity: 5 },
    { name: 'Item#3', id: '3', quantity: 5 },
    { name: 'Item#4', id: '4', quantity: 5 },
  ]);

  const [getText, setText] = useState(' ');
   const [getD, setD] = useState(' ');
      const [getID, setID] = useState(' ');
var x = itemArray.length

   const onAdd = () => {
 var newArray = [...itemArray , {key: x+1, name: getText }];
    setItem(newArray);
    x = x+1
  setText(' ')
  };
    const onDelete = () => {
 var newArray = [...itemArray ];

 newArray =  ' '
    setItem(newArray);
  
  
  };
const press = (itemd) => {
 
   setText(itemd.name)
   setD(itemd.name)
   setID(itemd.id)

  
  };
  
  const update = () => {
var newArr = [...itemArray];
   newArr[getID-1].name = getText
setItem[itemArray]
setText(' ')
  };
  

  

  return (
   
    <View style={styles.container}>
    <TextInput style = {styles.textbox} placeholder = "enter item"  onChangeText = {val => setText(val) }value = {getText} />
  <View style = {styles.btn}>
    <Button color = "purple" title =" add item" onPress= {() => onAdd(getText)}/ >
      <Button color = "red" title =" DeleteAll" onPress= {() => onDelete(getText)}/ >  
    
 <Button color = "pink" title =" Update" onPress= {() => update(getText)}/ >  
</View>
 
 <FlatList
        data={itemArray}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index}) => (
          <View style ={styles.flat}>
        <TouchableOpacity onPress= {(value) =>  press(item)} >
        
            <Text >{item.name}</Text>
          
             </TouchableOpacity>
    </View>

  )} />

</View>

  );
  
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 3,
  },
   textbox: {
    borderColor: "black",
    borderWidth: 5 ,
    textAlign: 'center',
    
  },
  flat: {
    marginTop: 20,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24

  },
  btn: {
    flexDirection: "row",
  
  }
});
