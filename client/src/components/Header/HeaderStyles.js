import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    appHeader: {
        height: '8%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '20px',
        color: '#302f46',
        width: '100%',
        backgroundColor: 'white',
        padding: '2% 3%',
        justifyContent: 'space-between',
    },
  
    headerLogoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
  
    appHeaderTitle: {
        fontFamily: '"Special Gothic Expanded One", sans-serif',
        fontSize: 18,
        marginLeft: 10,
    },
  
    headerLogo: {
        height: 40,
        filter: 'contrast(1.5)',
    },
  
    nav: {
        display: 'flex',
        alignItems: 'center',
    },
  
    navLink: {
        textDecoration: 'none',
        color: '#302f46',
        fontSize: 17,
        margin: '0 12px',
        transition: 'transform 0.3s ease',
        fontWeight: 'bold',

        ':hover': {
            transform: 'scale(1.1)',
        },
    },
});

export default styles;