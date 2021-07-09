import React, {useState, useContext} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {UserContext} from "../ContextApi";

export default function AddCity({navigation}) {
	const {userData} = useContext(UserContext);
	const [data, setData] = userData;
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const handleClick = () => {
		alert('Country and city added!');
		const pushedData = {country: country, city: city, locations: []};
		setData(data => [pushedData, ...data]);
	}
	return (
		<View style={styles.container}>
			<Text style={styles.secondhead}>Enter Country </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCountry(text)}
			
			/>
			<Text style={styles.secondhead}> Enter City </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCity(text)}
			
			/>
			<TouchableOpacity
				style={styles.button}
			>
				<Text style={styles.head} onPress={handleClick}>Add City</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.footbutton}
			>
				<Text style={styles.head} onPress={() => navigation.navigate('Cities')}>View City List!</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 130,
    marginBottom: 120,
    backgroundColor: '#324AB2',
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
    color: 'white',
    borderColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 170,
  },
  footbutton: {
    marginLeft: 15,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 250,
    height: 70,
  },
  head: {
    marginBottom: 3,
    color: '#324AB2',
    fontSize: 18,
 },
  secondhead: {
   color: 'white',
    fontSize: 18,
    width: 140,

 },
});
