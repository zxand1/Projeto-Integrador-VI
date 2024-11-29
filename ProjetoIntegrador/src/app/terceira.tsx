import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from "expo-status-bar";

export default function Terceira() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulando o carregamento por alguns segundos
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.containerMain}>
            <StatusBar hidden />

            <View style={styles.containerPrincipal}>
                <View style={styles.containerTexto}>
                    <Text style={styles.texto}>Estamos localizando seu carro</Text>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#3B82F6" style={styles.loadingSpinner} />
                ) : (
                    <Text style={styles.foundText}>Carro localizado com sucesso!</Text>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerPrincipal: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    containerTexto: {
        marginBottom: 20,
        alignItems: 'center',
    },

    texto: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#474747',
        textAlign: 'center',
    },

    loadingSpinner: {
        marginVertical: 30,
    },

    foundText: {
        fontSize: 22,
        color: '#28a745',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
});
