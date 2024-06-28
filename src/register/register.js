import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import AssetBg from '../../assets/bg_light.png'

const RegisterScreen = () => {
  const [name, setName] = useState('Crayond');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('67890 89765');
  const [email, setEmail] = useState('crayond@gmail.com');
  const [address, setAddress] = useState('Enter address here');

  return (

    <View style={styles.container}>
      <Image
        source={require('../../assets/register_Bg.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Earn loyalty for every purchase</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Profile details</Text>
        <Text style={styles.subLabel}>Please provide your basic details to proceed further</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          {name !== '' && <Text style={styles.filledInputLabel}>Name</Text>}
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.phoneInputContainer}>
            <View style={styles.countryCodeContainer}>
              <Image
                source={require('../../assets/flag.png')}
                style={styles.flagImage}
              />
              <TextInput
                style={styles.countryCode}
                placeholder="+966"
                value={countryCode}
                onChangeText={setCountryCode}
              />
            </View>
            <View style={styles.divider} />
            <TextInput
              style={styles.phoneNumber}
              placeholder="Mobile Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          {(countryCode !== '' || phoneNumber !== '') && (
            <Text style={styles.filledInputLabelNo}>Mobile Number</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          {email !== '' && <Text style={styles.filledInputLabel}>Email</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputAddress}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          {address !== '' && <Text style={styles.filledInputLabel}>Address</Text>}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D6EFE7',

  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
    width: 150,
    color: '#02111A',
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#02111a',
  },
  subLabel: {
    fontSize: 14,
    color: '#4E585E',
    marginBottom: 20,
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  inputContainer: {
    marginBottom: 15,
    position: 'relative',

  },
  input: {
    height: 62,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputAddress: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  filledInputLabel: {
    position: 'absolute',
    top: 8,
    left: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#888',
  },
  filledInputLabelNo: {
    position: 'absolute',
    top: 4,
    left: 100,
    backgroundColor: '#E6EAEB',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#888',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6EAEB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 10,
  },
  countryCode: {
    color: '#fff',
    fontWeight: 'bold',
  },
  phoneNumber: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#E6EAEB',
    color: '#000',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#30AF89',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    width: 1,
    height: '70%',
    backgroundColor: '#B3B8BB',
    marginHorizontal: 8,
  },
});

export default RegisterScreen;
