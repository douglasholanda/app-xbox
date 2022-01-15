import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

import console1 from '../../assets/console-1-2.png';
import console2 from '../../assets/console-2.png';

export default function TelaConsoles() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <Image source={console1} style={styles.img} />
                <Text style={styles.title}>Xbox Series S</Text>
                <Text style={styles.subtitle}>
                    Desempenho de última geração no menor Xbox de todos os
                    tempos.
                </Text>
                <Text style={styles.p}>
                    O Series S é pra quem busca jogos da nova geração gastando
                    pouco. É o console mais barato da nova geração. Ele é o
                    equilíbrio entre gráfico e performance.
                </Text>
            </View>
            <View style={styles.box}>
                <Image source={console2} style={styles.img} />
                <Text style={styles.title}>Xbox Series X</Text>
                <Text style={styles.subtitle}>
                    O Xbox mais rápido e poderoso de todos os tempos.
                </Text>
                <Text style={styles.p}>
                    O Series X é pra quem quer poder absoluto. O console mais
                    poderoso do mercado, excelência em gráficos e performance.
                </Text>
            </View>
        </ScrollView>
    );
}
