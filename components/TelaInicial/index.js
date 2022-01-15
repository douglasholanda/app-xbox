import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

import logo from '../../assets/logo.png';
import console from '../../assets/console-1.png';
import jogo from '../../assets/jogo-1.png';
import xcloud from '../../assets/xcloud-1.png';

export default function TelaInicial(props) {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.img} />
            <Text style={styles.title}>Xbox</Text>
            <Text style={styles.subtitle}>
                Xbox é uma marca de consoles criada pela Microsoft. Toque nos
                cards para conhecer.
            </Text>
            <Pressable
                onPress={() => {
                    props.navigation.navigate('Consoles');
                }}
                style={styles.box}
            >
                <Image source={console} style={styles.boxImg} />
                <Text style={styles.boxText}>Conheça os consoles</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    props.navigation.navigate('Jogos');
                }}
                style={styles.box}
            >
                <Image source={jogo} style={styles.boxImg} />
                <Text style={styles.boxText}>Conheça os jogos</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    props.navigation.navigate('Nuvem');
                }}
                style={styles.box}
            >
                <Image source={xcloud} style={styles.boxImg} />
                <Text style={styles.boxText}>Conheça o xCloud</Text>
            </Pressable>
        </View>
    );
}
