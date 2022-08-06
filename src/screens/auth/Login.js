import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Headline,HelperText, TextInput as PaperTextInput} from 'react-native-paper'
import { fonts } from '../../theme/theme'
import { useForm, Controller } from "react-hook-form";
import regex from '../../constants/regex';
import { AuthContext } from '../../contexts/AuthContext'

const Login = ({navigation}) => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        email: '',
        password: ''
    }
});


const { login } = React.useContext(AuthContext);

const onSubmit = data => login(data)


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
          fontFamily:fonts.bold,
          marginBottom:16
        }} >
          Welcome Back,
        </Headline>

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

                <Controller
                    control={control}
                    rules={{
                        required: 'Password is required',
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <PaperTextInput
                            label="Password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            autoCapitalize="none"
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


        <Button style={{ padding: 8 }} mode="contained"  onPress={handleSubmit(onSubmit)}>Sign In</Button>
        <Button onPress={
          () => navigation.navigate("Register")
        }>Create a New Account ?</Button>
      </View>
    </SafeAreaView>
  )
}

export default Login