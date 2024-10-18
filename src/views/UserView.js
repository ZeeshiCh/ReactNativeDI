// src/views/UserView.js
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useDI } from '../contexts/DIContext';

const UserView = observer(() => {
    const { userViewModel } = useDI();

    useEffect(() => {
        userViewModel.loadUser(1);
    }, []);

    return (
        <View style={styles.container}>
            {userViewModel.user ? (
                <>
                    <Text style={styles.label}>ID:</Text>
                    <Text style={styles.value}>{userViewModel.user.id}</Text>
                    
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>{userViewModel.user.name}</Text>
                    
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{userViewModel.user.email}</Text>
                </>
            ) : (
                <Text style={styles.noUser}>No User Loaded</Text>
            )}

            {userViewModel.isLoading && (
                <ActivityIndicator size="large" color="#ffffff" />  
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    value: {
        fontSize: 16,
        marginVertical: 5,
    },
    noUser: {
        fontSize: 16,
        color: 'gray',
    },
});

export default UserView;
