import React from 'react'
import { View, Text, Image } from 'react-native'
import {UserIcon, ChevronDownIcon } from "react-native-heroicons/outline"

const Header = () => {
  return (
    <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image 
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            
            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                <View className=' flex-row items-center '>
                    <Text className='text-lg font-bold'>Current Location</Text>
                    <ChevronDownIcon color='#00CCBB' size={20} />
                </View>
            </View>

            <UserIcon color='#00CCBB' size={35} />
        </View>
  )
}

export default Header