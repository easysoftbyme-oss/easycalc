import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const App = () => {
const [sayi1, setSayi1]= useState("");
const [sayi2, setSayi2]= useState("");
const [sayi3, setSonuc]= useState("");

const topla = ()=>{
  setSonuc(Number(sayi1) + Number(sayi2))
}

const cikar = ()=>{
  setSonuc(Number(sayi1) - Number(sayi2))
}

const carp = ()=>{
  setSonuc(Number(sayi1) * Number(sayi2))
}

const bol = ()=>{
  setSonuc(Number(sayi1) / Number(sayi2))
}


  return (
    <View style= {styles.container}>
      <Text>Calculator</Text>

      <TextInput style={styles.input}
        placeholder='1. Sayı'
        keyboardType='numeric'
        value={sayi1}
        onChangeText={setSayi1}
      />
      <TextInput style={styles.input}
        placeholder='2. Sayı'
        keyboardType='numeric'
        value={sayi2}
        onChangeText={setSayi2}
      />
      <View style= {styles.button}>
        <button title='+' onPress={topla}/>
        <button title='-' onPress={cikar}/>
        <button title='*' onPress={carp}/>
        <button title='/' onPress={bol}/>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'blue'
  },
  title:{
    fontSize:28,
    textAlign:'center',
    marginBottom:30
  },
  buttons:{
    gap:10
  },
  input:{
    borderWidth:1,
    borderColor:blue,
    padding:15,
    marginBottom:15,
    borderRadius:32
  }
})