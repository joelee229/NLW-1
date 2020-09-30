import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './pages/Detail';
import Points from './pages/Points';
import Home from './pages/Home';

const Stack = createStackNavigator();

const Routes = () => {
    

    return (
        <NavigationContainer>
            <Stack.Navigator 
                headerMode="none"
                screenOptions = {{
                    cardStyle: {
                        backgroundColor: "#f0f0f5"
                    }
                }} 
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Points" component={Points} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default Routes;