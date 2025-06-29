import icons from '@/constants/icons'
import images from '@/constants/images'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Link, Redirect } from 'expo-router'
import React from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {

  const {refetch , isLoggedIn , loading} = useGlobalContext();

  if (!loading && isLoggedIn) <Redirect href="/" />

  const handleLogin = async () =>{
    const result = await login();
    if (result){
      refetch();
    }else{
      Alert.alert("Error", "Login failed");
    }
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain'  />
        <Link href="/profile" >Home</Link>
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200' >Welcome to Real Scout</Text>
          <Text className='text-3xl font-rubik-bold text-center text-black-300 mt-2'>
            Let's Get You Closer To {"\n"}
            <Text className='text-primary-300'>Your Dream Home</Text>
          </Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login with Google</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View className='flex flex-row items-center justify-center gap-3'>
                <Image source={icons.google} className='w-6 h-6' resizeMode='contain' />
                <Text className='text-lg font-rubik-medium text-black-300'>Continue with Google</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn