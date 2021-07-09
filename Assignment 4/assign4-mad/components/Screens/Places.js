import React, {useContext, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {UserContext} from '../ContextApi';

export default function Places({navigation}) {
  const index = navigation.getParam('index');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const {userData} = useContext(UserContext);
  const [data, setData] = userData;
  const updateLocation = () => {
    alert('Location name and info added!');
    navigation.navigate('Cities');
    data[index].locations.push({name: name, info: info});
    setData(data);
  };
  return (
    <ScrollView style={styles.scrollview}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title={'Back'} onPress={() => navigation.navigate('Cities')} />
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          {data[index].city}
        </Text>
        <View />
      </View>
      <View>
        {data[index].locations.length > 0 ? (
          data[index].locations.map((value, index) => (
            <View key={index}>
              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'white',
                  borderWidth: 2,
                  margin: 5,
                }}>
                <Text>{value.name}</Text>
                <Text>{value.info}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={{color:'white', alignItems: 'center',}}>No location for this city!</Text>
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Info"
        onChangeText={text => setInfo(text)}
      />
      	<TouchableOpacity
				style={styles.footbutton}
			>
				<Text style={styles.button} onPress={updateLocation}>Add Location!</Text>
			</TouchableOpacity>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor:'#324AB2',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    borderColor:'white'
  },
  scrollItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#324AB2',
    width: '90%',
    height: 50,
    padding: 10,
    margin: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  scrollviewText: {
    fontSize: 25,
    color: 'white',
  },
  scrollview: {
    width: '100%',
    height: '100%',
        backgroundColor:'#324AB2',
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 170,
    marginRight: 30,
    color: '#324AB2',
    fontSize: 18,
  },
   footbutton: {
    marginLeft: 45,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: 'white',
     color: '#324AB2',
    padding: 10,
    width: 250,
    height: 70,
  },
  logo: {
    height: 128,
    width: 128,
  },
});
