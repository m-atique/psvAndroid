import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function Home(): JSX.Element {
    return(
       <View className='flex flex-wrap  flex-row  h-5/6 gap-4 justify-center pt-20 '>
       <View className='bg-yellow-200 h-1/3 w-5/12 rounded-md shadow-md shadow-black'>
        <Text className='text-center font-bold p-3'>Driver Data</Text>
       </View>
       <View className='bg-green-200 h-1/3 w-5/12 rounded-md shadow-md shadow-black'>
        <Text className='text-center font-bold p-3'>PSV Data</Text>
       </View>
       <View className='bg-blue-200 h-1/3 w-5/12 rounded-md shadow-md shadow-black'>
        <Text className='text-center font-bold p-3'>Company Data </Text>
       </View>
       <View className='bg-red-200 h-1/3 w-5/12 rounded-md shadow-md shadow-black'>
        <Text className='text-center font-bold p-3'>Traveling Data</Text>
       </View>
       </View>

    )
}
export default Home
