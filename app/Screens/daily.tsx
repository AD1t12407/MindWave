import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const DailyQuestionnaire: React.FC = () => {
    const [response, setResponse] = useState<string>('');

    const handleNext = () => {
        // Handle submission or navigation
        console.log(response);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>How was your day?</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your response here..."
                placeholderTextColor="grey"
                value={response}
                onChangeText={setResponse}
            />
            <Pressable style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
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
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        backgroundColor: '#1C1C1C',
        color: 'white',
        borderRadius: 5,
        marginBottom: 20,
    },
    nextButton: {
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

export default DailyQuestionnaire;
