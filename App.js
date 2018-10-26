import React from 'react';
import { StyleSheet } from 'react-native';
import HomePage from './src/pages/HomePage';
import ProfilePage from './src/pages/ProfilePage';

import { createMaterialTopTabNavigator } from 'react-navigation';

const App = createMaterialTopTabNavigator(
	{
		Home: { screen: HomePage },
		Profile: { screen: ProfilePage }
	}
);

export default App;
