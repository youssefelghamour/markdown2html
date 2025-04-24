import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    appFooter: {
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        background: 'linear-gradient(225deg, #302f46, #000000)',
        display: 'flex',
        marginTop: 45,
        color: 'white',
        flexDirection: 'column',
    },
  
    footerMessage: {
        padding: '20px 35px',
        display: 'flex',
        fontSize: 11,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #f2f2f2, #ffffff)',
        color: '#302f46',
    },
  
    footerContainer: {
        padding: '20px 35px',
        display: 'flex',
        justifyContent: 'space-around',
    },
  
    footerLogoContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
  
    footerLogoText: {
        display: 'flex',
        alignItems: 'center',
    },
  
    footerLogoTextH3: {
        fontFamily: '"Special Gothic Expanded One", sans-serif',
        fontSize: 18,
        marginLeft: 10,
    },
  
    footerLogo: {
        height: 40,
        width: 40,
        filter: 'brightness(1.6)',
    },
  
    footerLogoH4: {
        color: '#aaaac0',
    },
  
    footerLogoP: {
        fontSize: 13,
        color: '#9090a5',
        width: '55%',
    },
  
    footerNav: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
  
    footerNavLink: {
        textDecoration: 'none',
        color: 'white',
        fontSize: 17,
        margin: '0 12px',
        transition: 'transform 0.3s ease',
        ':hover': {
            transform: 'scale(1.1)',
        },
    },
  
    footerSocials: {
        fontSize: '2rem',
        marginTop: 20,
    },
});

export default styles;