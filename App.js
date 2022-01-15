import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './components/TelaInicial';
import TelaConsoles from './components/TelaConsoles';
import TelaJogos from './components/TelaJogos';
import TelaNuvem from './components/TelaNuvem';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tela Inicial" component={TelaInicial} />
                <Stack.Screen name="Consoles" component={TelaConsoles} />
                <Stack.Screen name="Jogos" component={TelaJogos} />
                <Stack.Screen name="Nuvem" component={TelaNuvem} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
