import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomePage extends Component {
	static navigationOptions = {
		title: 'Home'
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Button color="teal" title={"Go to Profile"} onPress={()=>navigate('Profile')} />
			</View>
		);
	}
}
