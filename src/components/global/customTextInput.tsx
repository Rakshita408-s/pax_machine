import React, { useState } from 'react';
import { View, StyleSheet,Image} from 'react-native';
import { TextInput,  } from 'react-native-paper';



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
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode="flat"
        label={label}
        value={value}
        secureTextEntry={showPassword}
        onChangeText={onChangeText}
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
        // multiline={true}
        activeOutlineColor="transparent"
        underlineStyle={{
          display: "none"
        }}
        
        theme={{ 
        
          colors: { 
          primary: error ? 'red' : '#ABB3BA', 
        }
         }}
        style={[
          styles.input,
          {
            borderColor: error ? 'red' : '#348597',
            fontSize:28,
            fontFamily:'Montserrat-Light'
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
    height: 110,
 

  },
  iconStyle:{
    width:25,
    height:25,
    resizeMode:'contain',
  
  }
});

export default CustomInput;
