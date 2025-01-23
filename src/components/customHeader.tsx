import { Image, ImageBackground, StyleSheet,Text ,View } from 'react-native'
import React from 'react'

import { Icons, Images } from '../assets'
import { SCREEN_WIDTH,vh ,vw} from '../utils/scaling'


const CustomHeader:React.FC = () => {
  return (
    <ImageBackground source={Images.img} style={styles.head}>
        <Image source={Icons.logo} style={styles.logo}/>
        <Text style={styles.text1}>QUIVIO</Text>
        <Text style={styles.text2}>Complete Business Management</Text>
      
    </ImageBackground>
   
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    head:{
        width:SCREEN_WIDTH,
        height:vh(397),
        justifyContent:'flex-end',
        padding:vw(30),
    },
    logo:{
        width:vw(240),
        height:vh(83),
        resizeMode:'contain'
    },
    text1:{
        fontFamily:'Montserrat-Bold',
        color:'white',
        fontSize:40,
    },
    text2:{
        fontFamily:'Montserrat-Light',
        color:'white',
    
    },
})