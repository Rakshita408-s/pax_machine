import { StyleSheet, Text, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { vh} from '../utils/scaling';

interface CustomButtonProps{
    text:string;
    style?:TextStyle;
    onPress:()=>void;
    disable?:boolean;
}
const CustomButton:React.FC<CustomButtonProps> = ({text,style,onPress,disable}) => {
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress} disabled={disable}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2B798E',
        paddingVertical:46,
        borderRadius:10,
      
        
    },
    text:{
        color:"black",
        fontFamily:'Montserrat-Bold',
        fontWeight:'600',
        fontSize:24,
    }
})