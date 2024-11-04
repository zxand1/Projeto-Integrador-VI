import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";

export default function terceira() {
  return (
    <SafeAreaView style={styles.containerMain}>
    <StatusBar hidden/>

        <View style={styles.containerPrincipal}>
            <View style={styles.containerPrincipalTexto}>
                <Text style={styles.texto}>Encontrando seu carro...</Text>
            </View>
            
        </View>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({

    containerMain:{
        flex:1,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    },

    containerPrincipal:{
        
    },

    containerPrincipalTexto:{
        
    },

    texto:{
        fontSize:24,
        fontWeight:800,
        color:'#474747'
    }
})
