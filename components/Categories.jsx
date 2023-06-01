import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
      <ScrollView 
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
    {/* Category Card */}
      <CategoryCard imgUrl="https://images.pexels.com/photos/9673721/pexels-photo-9673721.jpeg?auto=compress&cs=tinysrgb&w=600" title='testing'/>
      <CategoryCard imgUrl="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600" title='testing'/>
      <CategoryCard imgUrl="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" title='testing'/>
      <CategoryCard imgUrl="https://images.pexels.com/photos/9673721/pexels-photo-9673721.jpeg?auto=compress&cs=tinysrgb&w=600" title='testing'/>
      <CategoryCard imgUrl="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600" title='testing'/>
      <CategoryCard imgUrl="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" title='testing'/>
    </ScrollView>
  )
}

export default Categories