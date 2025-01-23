import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { vh, vw } from '../utils/scaling'; 
import { Icons } from '../assets'; 

const CustomToast = ({ msg, icon, visible }) => {
  if (!visible) return null; 

  return (
    <View style={styles.toastContainer}>
      <View style={styles.toastMessage}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.message}>{msg}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
   
    zIndex: 1000,
    backgroundColor:'#CA392F',
    width:720,
    height:134,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastMessage: {
    flexDirection: 'row',
    gap:32,
    borderRadius: 10,
    padding: vh(10),
    alignItems: 'center',
    justifyContent: 'center',

  },
  icon: {
    width: 30,
    height: 30,
  
  },
  message: {
    color: 'white',
    fontSize: 32,
    fontWeight:600,
    fontFamily: 'Montserrat-Thin', 
  },
});

export default CustomToast;
