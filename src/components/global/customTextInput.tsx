import React, { useState } from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import { TextInput, } from 'react-native-paper';



interface CustomInputProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  icon1?: any;
  icon2?: any;
  error?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  icon1,
  icon2,
  placeholder,
  secureTextEntry,
  error = false,
}) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);




  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
 
  return (
    
    <View style={styles.inputContainer}>
      <TextInput
        mode="flat"
        label= {<Text style={[{fontSize:isFocused?28:28,fontFamily: 'Montserrat-Light',fontWeight:'500'}]}>{label}</Text>}
        value={value}
        secureTextEntry={showPassword}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        right={
          icon2 && (
            <TextInput.Icon
              onPress={togglePasswordVisibility}
              icon={() => (
                <Image
                  source={icon2}
                  style={[styles.iconStyle, { tintColor: error ? 'red' : 'grey' }]}
                />
              )}
            />
          )
        }
        left={
          icon1 && (
            <TextInput.Icon
              icon={() => (
                <Image
                  source={icon1}
                  style={[styles.iconStyle, { tintColor: error ? 'red' : 'grey' }]}
                />
              )}
            />
          )
        }
        textColor="white"
        
        placeholderTextColor="white"
        underlineColor="transparent"
        activeOutlineColor="transparent"
        underlineStyle={{
          display: "none"
        }}

        theme={{

          colors: {
            primary: error && isFocused ? 'red' : 'white',
          }
        }}
        style={[
          styles.input,
          {
            borderColor: error ? 'red' : '#348597',
            fontSize:isFocused?20:28

          },
        ]}

        numberOfLines={1}
        placeholder={placeholder}
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 25,
    backgroundColor: '#01171F',

    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,

  },
  input: {
    flex: 1,
    backgroundColor: '#01152B',
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    height: 90,
    // fontSize: 28,
    // fontFamily: 'Montserrat-Light'


  },
  iconStyle: {
    width: 35,
    height: 35,
    resizeMode: 'contain',

  }
});

export default CustomInput;
