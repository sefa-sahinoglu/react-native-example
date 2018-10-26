import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ProfilePage extends Component {
	static navigationOptions = {
        title: 'Profile Page'
	};
	render() {
		return (
			<View>
				<Text> Profile Page </Text>
			</View>
		);
	}
}
