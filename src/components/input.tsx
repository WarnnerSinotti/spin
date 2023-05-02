import React, { useState } from 'react';
import { TextInput } from 'react-native';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (newEmail: any) => {
    setEmail(newEmail);
  };

  const validateEmail = (email: any) => {
    // Regex para validar endereços de email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={handleEmailChange}
      value={email}
      placeholder="Digite seu email aqui"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      textContentType="emailAddress"
      onBlur={() => {
        if (!validateEmail(email)) {
          alert('Por favor, digite um endereço de email válido.');
        }
      }}
    />
  );
};

export default EmailInput;
