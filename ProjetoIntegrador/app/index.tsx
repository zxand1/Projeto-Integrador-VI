import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/styles'; // Importa o arquivo de estilos
import { Link } from 'expo-router';

export default function index() {
  return (
    <View>
    <Text style={styles.title}>Olá! Boas Vindas!</Text>
      <View style={styles.container}>         
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/bmw-serie-3.png')} // substitua pela URL da imagem do carro
            style={styles.carImage}
            resizeMode="contain"
          />
        </View>          
      </View>
      
      <View style={styles.containerAlign}>
        <View style={styles.alignRight}>
          <Text style={styles.instruction}>
            Clique sobre o botão abaixo para localizar seu carro
          </Text>
        </View>
            <TouchableOpacity style={styles.button}>
              <Link href="/teste">
              clica aqui
              </Link>
              <Text style={styles.buttonText}>→</Text>
            </TouchableOpacity>
      </View>
  </View>
  )
};