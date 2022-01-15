import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2E2D',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#107C0F',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    subtitle: {
        color: '#9B9D9E',
        textAlign: 'center',
        marginBottom: 20,
    },
    box: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: '#107C0F',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 250,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 50,
        paddingHorizontal: 40,
        paddingVertical: 10,
    },
    boxImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        paddingRight: 50,
    },
    boxText: {
        color: '#D0E4CE',
        fontSize: 16,
        textAlign: 'left',
        paddingHorizontal: 30,
    },
});

export default styles;
