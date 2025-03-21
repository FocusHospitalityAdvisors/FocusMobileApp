import React from 'react';
import { View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Focus</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>

            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} placeholder="email@domain.com" placeholderTextColor="#B0B0B0" />

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="password" placeholderTextColor="#B0B0B0" secureTextEntry />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <Text style={styles.registerText}>
            Need an account? <Text style={styles.registerLink}>Register</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'left',
    paddingHorizontal: 25,
  },
  leftContainer: {
    alignSelf: 'flex-start', 
    width: '100%', 
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 25,
    textAlign: 'left',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
    marginBottom: 15,
    borderBottomWidth: 1,
  },
  button: {
    width: '100%',
    backgroundColor: '#054922',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
  },
  registerLink: {
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default LoginScreen;
