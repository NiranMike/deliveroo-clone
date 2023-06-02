import React, { useLayoutEffect } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import {UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline"
import Header from '../components/Header';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      })
  },[])
  return (
    <SafeAreaView className='bg-white pt-5'>
        <Header />
        {/* Search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row flex-1 items-center space-x-2  bg-gray-200 p-3'>
            <MagnifyingGlassIcon color='gray' size={20} />
            <TextInput placeholder='Restaurants and Cuisines' 
              keyboardType='default'
            />
          </View>

          <AdjustmentsVerticalIcon color='#00CCBB' />
        </View>

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          className='bg-gray-100 '>
          {/* Categories */}
          <Categories />
        {/* Featured rows */}
        <FeaturedRow 
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow 
          id="456"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeaturedRow 
          id="789"
          title="Offers near you!"
          description="Whhy not support your local restaurant tonight!"
        />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen