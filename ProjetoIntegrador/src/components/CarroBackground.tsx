import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const CarroBackground = () => {
  return (
    <ImageBackground
      source={require('@/src/assets/images/bmw-serie-3.png')}
      style={styles.ImagemBackground}
    />
  )
}

const styles = StyleSheet.create({
    
  ImagemBackground:{
    flex:1,
    width:390,
    height:453,
    position:'absolute',
    bottom:0
  }
  
})

export default CarroBackground