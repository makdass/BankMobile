import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Login = () => {

const [email,setEmail]= useState('')
const [sifre, setSifre]=useState()
  return (
 
    <View style={{width:'100%',height:'90%'}}> 
<           View style={{alignItems:'center', justifyContent:'center', width:'100%',height:250 ,backgroundColor:'pink'}}>
                    <Text style={{fontWeight:'bold', fontSize:30, }}>MAKDAS BANK</Text>    
            </View>
                   
            <View style={{flexDirection:'row',}}>

            
                <View style={styles.wievler}>
                        <Text style={styles.Yazilar}>E mail </Text> 

                        <TextInput keyboardType='email-address'  value={email} onChange={(e)=> setEmail(e.target.value)} style={styles.inputlar}  />
                        {console.log({email})}
                </View>



                <View style={styles.wievler}>
                        <Text style={styles.Yazilar}> Sifre</Text>
                        <TextInput style={styles.inputlar} value={sifre} onChange={(e)=> setSifre(e.target.value)}/>
                        {console.log({sifre})}
                </View>
                
            </View>

            <View style={{margin:15}} >

            
            <Button title='tıkla'></Button>
            
            </View>
            <View style={{width:'100%',height:50 ,justifyContent:'center', alignItems:'center',flexDirection:'row', marginHorizontal:15}}>


            <FontAwesome name="euro" size={24} color="black" />
            <FontAwesome name="dollar" size={24} color="black" />
            </View>

    </View>
   )
}

export default Login

const styles = StyleSheet.create({
    Yazilar: {

   
    fontSize:25,
    fontWeight:'bold'
 },
 wievler:{
    marginHorizontal:15,
    alignItems:'center',
    justifyContent:'center',
    width:'40%',
    
    
    
 },
 inputlar:{
    marginTop:15,
    width:80,
    height:25,
    borderColor:'black',
    borderWidth:2,
    fontSize:14
 }
})