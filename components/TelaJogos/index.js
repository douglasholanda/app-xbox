import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';

import forza from '../../assets/forza.jpg';
import cyber from '../../assets/jogo-2.png';
import halo from '../../assets/halo.jpg';

export default function TelaJogos() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Jogos em 4k</Text>
            <Text style={styles.subtitle}>
                Os principais jogos estão aqui. Veja abaixo três exemplos de
                grande sucesso.
            </Text>

            <View style={styles.box}>
                <ImageBackground
                    style={styles.boxImg}
                    source={forza}
                    resizeMode="cover"
                >
                    <View style={styles.boxGradient}>
                        <Text style={styles.boxTitle}>Forza Horizon 5</Text>
                    </View>
                </ImageBackground>
                <Text style={styles.boxText}>
                    Forza Horizon 5 é um jogo de corrida. É o quinto jogo da
                    série Forza Horizon e o décimo segundo título principal da
                    franquia Forza. O jogo se passa em uma representação
                    ficcional do México.
                </Text>
            </View>
            <View style={styles.box}>
                <ImageBackground
                    style={styles.boxImg}
                    source={cyber}
                    resizeMode="cover"
                >
                    <View style={styles.boxGradient}>
                        <Text style={styles.boxTitle}>Cyberpunk 2077</Text>
                    </View>
                </ImageBackground>
                <Text style={styles.boxText}>
                    Cyberpunk 2077 é um jogo eletrônico de RPG de ação
                    desenvolvido e publicado pela CD Projekt.
                </Text>
            </View>
            <View style={styles.box}>
                <ImageBackground
                    style={styles.boxImg}
                    source={halo}
                    resizeMode="cover"
                >
                    <View style={styles.boxGradient}>
                        <Text style={styles.boxTitle}>Halo 5: Guardians</Text>
                    </View>
                </ImageBackground>
                <Text style={styles.boxText}>
                    Halo 5: Guardians é um videojogo de tiro em primeira pessoa,
                    parte da franquia Halo e sequência de Halo 4.
                </Text>
            </View>
        </ScrollView>
    );
}
