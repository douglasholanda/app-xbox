import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import styles from './styles';
import xcloud from '../../assets/fundo-xcloud.png';
import xcloud1 from '../../assets/xcloud-1.png';

export default function TelaNuvem() {
    return (
        <ImageBackground source={xcloud} style={styles.container}>
            <Text style={styles.title}>Xbox Cloud Gaming</Text>
            <Text style={styles.subtitle}>Serviço de streaming de jogos</Text>
            <Text style={styles.p}>
                Jogue mais de 100 jogos de console de alta qualidade no seu
                dispositivo favorito.
            </Text>
            <Text style={styles.p}>
                Desktop, Notebook, console ou até mesmo celular pode se tornar
                um XBOX.
            </Text>
            <Text style={styles.p}>
                Através de uma assinatura você terá um XBOX virtual sempre que
                precisar.
            </Text>
            <Image source={xcloud1} style={styles.img} />
        </ImageBackground>
    );
}
