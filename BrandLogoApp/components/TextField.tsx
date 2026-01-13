import colors from "@/app/styles/colors";
import defaultStyles from "@/app/styles/defaultStyles";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";



/*
Used chatgpt to be able to hide and show the password
date:1/13/26
https://chatgpt.com/share/696695e2-d710-800f-880b-61a9b6279619 
*/

type propsType = {
  placeholder: string;
  placeholderTextColor?: string;
  borderColor?: string;
  value: string; 
  onChangeText: (newValue: string) => void; 
  secure?: boolean;
};

const TextField: React.FC<propsType> = ({
  placeholder,
  placeholderTextColor = colors.textOnDark,
  borderColor = colors.primary,
  value,
  onChangeText,
  secure = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{ position: "relative" }}>
      <TextInput
        style={[defaultStyles.inputBoxes, { borderColor: borderColor }]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
         secureTextEntry={secure && !showPassword}
      />
      {secure && (
        <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: [{ translateY: -10 }],
          }}>
          <Text style={{color: colors.secondary}} >{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextField;
