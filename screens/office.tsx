import React from 'react';
import {useState,useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const data = {
  regions: {
    North: {
      Zones: {
        MC_1: {
          sectors: {
            Lsm: {
              beats: ['Beat1', 'Beat2', 'Beat-LEBP'],
            },
            M2: {
              beats: ['Beat11', 'Beat12', 'Beat-10'],
            },
            M3: {
              beats: ['Beat13', 'Beat14', 'Beat-15'],
            },
          },
        },
        MC_2: {
          sectors: {
            Lsabm: {
              beats: ['Beat110', 'Beat102', 'Beat-123'],
            },
            M21: {
              beats: ['Beat112', 'Beat122', 'Beat-102'],
            },
            M31: {
              beats: ['Beat132', 'Beat142', 'Beat-152'],
            },
          }
        },
        MC_3: {},
      },
    },
    Central: {},
  },
};

function Office(): JSX.Element {






  const [isopen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);


   const [isopen2, setIsOpen2] = useState(false);
  const [currentZone, setCurrentZone] = useState(null);

   const [isopen3, setIsOpen3] = useState(false);
  const [currentSector, setCurrentSector] = useState(null);

  const [isopen4, setIsOpen4] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(null);

  const region = Object.keys(data.regions).map(val => {
    return {label: val, value: val};
  });

  const zones =Object.keys(data.regions.North.Zones).map(val => {
    return {label: val, value: val};
  });

   const sectors =Object.keys(data.regions.North.Zones.MC_1.sectors).map(val => {
    return {label: val, value: val};
  });

  const beats =Object.keys(data.regions.North.Zones.MC_1.sectors.Lsm.beats).map(val => {
    return {label: val, value: val};
  });


 
  return (
    <View>
      <SafeAreaView>
        <View className="bg-blue-300 w-full p-4  text-yellow-300 shadow-md shadow-black">
          <Text className=" font-bold ">OFFICE DETAIL</Text>
        </View>
      </SafeAreaView >

      <View className=" bg-slate-200,flex flex-1 px-5 py-3 my-5 z-40">
        <DropDownPicker
          
          items={region}
          open={isopen}
          setOpen={() => setIsOpen(!isopen)}
          value={currentValue}
          setValue={val => setCurrentValue(val)}
          placeholder="Select Region"
          placeholderStyle={{color: 'gray'}}
        />
      </View>

      <View className=" bg-slate-200,flex flex-1 px-5 py-3 my-5 z-30">
        <DropDownPicker
        
          items={zones}
          open={isopen2}
          setOpen={() => setIsOpen2(!isopen2)}
          value={currentZone}
          setValue={val => setCurrentZone(val)}
          placeholder="Select Zone"
          placeholderStyle={{color: 'gray'}}
        />
      </View>

      <View className=" bg-slate-200,flex flex-1 px-5 py-3 my-5 z-20">
        <DropDownPicker
        
          items={sectors}
          open={isopen3}
          setOpen={() => setIsOpen3(!isopen3)}
          value={currentSector}
          setValue={val => setCurrentSector(val)}
          placeholder="Select Sector"
          placeholderStyle={{color: 'gray'}}
        />
      </View>
      <View className=" bg-slate-200,flex flex-1 px-5 py-3 my-5 z-10">
        <DropDownPicker
       
          items={beats}
          open={isopen4}
          setOpen={() => setIsOpen4(!isopen4)}
          value={currentBeat}
          setValue={val => setCurrentBeat(val)}
          placeholder="Select beat"
          placeholderStyle={{color: 'gray'}}
        />
      </View>
      <View className=" bg-slate-200,flex flex-1 px-5 py-3 my-5 z-10">
         <TextInput
          className='p-4 text-lg text-black border bottom-2 rounded-md mt-5'
        placeholder="Enter Loction"
        keyboardType="numeric"
      />
      </View>
      

    </View>
  );
}
export default Office;
