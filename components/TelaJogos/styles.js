import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
    },
    title: {
        color: '#107C0F',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#b6b8bf',
    },
    box: {
        marginBottom: 20,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    boxImg: {
        width: 300,
        height: 150,
        marginBottom: 10,
    },
    boxGradient: {
        backgroundColor: 'black',
        opacity: 0.7,
    },
    boxTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        opacity: 1,
        paddingLeft: 10,
        paddingVertical: 10,
    },
    boxText: {
        textAlign: 'justify',
        color: 'white',
        fontSize: 13,
        width: 300,
    },
});

export default styles;
