import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    img: {
        width: 180,
        height: 180,
        marginBottom: 5,
    },
    title: {
        color: '#107C0F',
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    p: {
        textAlign: 'center',
    },
});

export default styles;
