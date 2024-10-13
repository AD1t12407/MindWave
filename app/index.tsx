import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('/Users/aditinarayan/Desktop/reactnative/my-app/assets/images/Logo1.png')} style={styles.logo} />
            <Text style={styles.title}>Tune Your Health with EEG Beats</Text>

            <Pressable style={styles.loginButton}>
                <Link href="/Screens/Login">
                    <Text style={styles.buttonText}>Login</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.signupButton}>
                <Link href="/Screens/signup">
                    <Text style={styles.buttonText}>Sign up free</Text>
                </Link>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginBottom: 40,
    },
    loginButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 20,
        marginBottom: 20,
    },
    signupButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default HomeScreen;
