import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SignupScreen: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const router = useRouter();

    const handleSignup = () => {
        // Handle signup logic here
        router.push('./daily'); // Navigate to daily questionnaire
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Username</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="grey"
                value={username}
                onChangeText={setUsername}
            />

            <Text style={styles.label}>Enter Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="grey"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="grey"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <Pressable style={styles.signupButton} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign up</Text>
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
    label: {
        color: 'white',
        marginBottom: 10,
        fontSize: 16,
    },
    input: {
        width: '80%',
        padding: 10,
        backgroundColor: '#1C1C1C',
        color: 'white',
        borderRadius: 5,
        marginBottom: 20,
    },
    signupButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default SignupScreen;
