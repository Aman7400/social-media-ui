import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Headline, TextInput as PaperTextInput, HelperText } from 'react-native-paper'
import { fonts } from '../../theme/theme'
import { useForm, Controller } from "react-hook-form";
import regex from "../../constants/regex";
import axios from 'axios';

const BACKEND_URL = "http://localhost:8000/api"

const Register = ({ navigation }) => {

  const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      fullName: '',
      userName: '',
      email: '',
      password: '',
    }
  });


  const onRegister = async (data) => {
    try {

      const res = await axios.post(`${BACKEND_URL}/user/register`, { ...data })

      if (res.data.id) {

        alert("Account Created Successfully");
        reset({
          fullName: '',
          email: '',
          userName: '',
          password: '',
        });
        setTimeout(() => {
          navigation.navigate("Login");
        }, 3000);

      }


    } catch (error) {

      alert("Register Error: " + error.response.data.message)

    } finally {
    }
  }



  if (isSubmitting) {
    return <View style={{ flex: 1 }}>
      <ActivityIndicator style={{ flex: 1 }} />
    </View>
  }



  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{
        flex: 1,
        width: '100%',
        padding: 24,
        justifyContent: 'center'
      }}>
        <Headline style={{
          fontFamily: fonts.bold,
          textAlign: 'center',
          fontSize: 32,
          marginBottom: 16
        }} >
          Find new friends with Socially
        </Headline>

        {/* Full Name */}

        <Controller
          control={control}
          rules={{
            required: 'Full Name is required',
            minLength: {
              value: 2,
              message: 'Full Name must be at least 2 characters'
            }

          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PaperTextInput
              label="Full Name"
              onBlur={onBlur}
              error={errors.fullName}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              style={{ marginBottom: 8 }}
              right={<PaperTextInput.Icon name="account" color={errors.fullName ? "red" : "blue"} />}
            />
          )}
          name="fullName"
        />
        {errors.fullName &&
          <HelperText type="error" visible={errors.fullName}>
            {errors?.fullName?.message}
          </HelperText>
        }

         {/* Username */}

         <Controller
          control={control}
          rules={{
            required: 'User Name is required',
            minLength: {
              value: 4,
              message: 'Full Name must be at least 4 characters' // ! Regexp is required','
            }

          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PaperTextInput
              label="Username"
              onBlur={onBlur}
              error={errors.userName}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              style={{ marginBottom: 8 }}
              right={<PaperTextInput.Icon name="account" color={errors.fullName ? "red" : "blue"} />}
            />
          )}
          name="userName"
        />
        {errors.userName &&
          <HelperText type="error" visible={errors.userName}>
            {errors?.userName?.message}
          </HelperText>
        }

        {/* Email */}

        <Controller
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: regex.emailRegex,
              message: 'Please enter a valid email address'
            }

          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PaperTextInput
              label="Email"
              onBlur={onBlur}
              error={errors.email}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              style={{ marginBottom: 8 }}
              right={<PaperTextInput.Icon name="email" color={errors.email ? "red" : "blue"} />}
            />
          )}
          name="email"
        />
        {errors.email &&
          <HelperText type="error" visible={errors.email}>
            {errors?.email?.message}
          </HelperText>
        }

        {/* Password */}

        <Controller
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }

          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PaperTextInput
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              error={errors.password}
              secureTextEntry
              style={{ marginBottom: 8 }}
              right={<PaperTextInput.Icon name="lock" color={errors.password ? "tomato" : "blue"} />}
            />
          )}
          name="password"
        />
        {errors.password &&
          <HelperText type="error" visible={errors.password}>
            {errors?.password?.message}
          </HelperText>
        }

        <Button onPress={handleSubmit(onRegister)} style={{ padding: 8 }} mode="contained">Sign Up</Button>
        <Button onPress={
          () => navigation.navigate("Login")
        }>Have an Account? Login</Button>
      </View>
    </SafeAreaView>
  )
}

export default Register