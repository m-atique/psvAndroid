import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
const provices = [
  {label: 'NHMP', value: 'NHMP'},
  {label: 'Punjab', value: 'punjab'},
  {label: 'Sindh', value: 'sindh'},
  {label: 'KPK', value: 'kpk'},
  {label: 'Blochistan', value: 'Blochistan'},
  {label: 'Islamabad', value: 'islamabad'},
  {label: 'AJK', value: 'AJK'},
];

const licienceType = [
  {label: 'HTV', value: 'HTV'},
  {label: 'LTV', value: 'LTV'},
  {label: 'PSV', value: 'PSV'},
  {label: 'Other', value: 'Others'},
];

const Companies = () => {
  return (
    <View className="bg-slate-100  flex flex-col h-screen">
      <View className="bg-slate-100 flex flex-row justify-center items-center rounded-lg shadow-lg shadow-black p-2 m-2">
        <Text className="w-4/12 font-extrabold p-2">Driver Name </Text>
        <Text
          className="w-8/12 py-1 border border-1 border-violet-400 rounded-md m-1 font-bold px-3"
        >Driver name here</Text>
      </View>
      {/* -----------------Main Content  */}
      <View className="bg-slate-100 flex flex-col justify-center items-center rounded-lg shadow-lg shadow-black p-2 m-2">
        <TextInput
          placeholder="Contract Carriage Name"
          className={styles.inputViolet}
        />
        <TextInput
          placeholder="Oil Carrige Name (PSO, Shell, etc)"
          className={styles.inputViolet}
        />
        <TextInput
          placeholder="Enter Owner's Name"
          className={styles.inputViolet}
        />
        <TextInput
          placeholder="Owner's Cell Number"
          className={styles.inputViolet}
        />
        <TextInput placeholder="Address" className={styles.inputViolet} />
        <TextInput
          placeholder="Enter Manager Name (if any)"
          className={styles.inputViolet}
        />

        <TextInput
          placeholder="Enter Driver Name"
          className={styles.inputViolet}
        />

        <View className="flex flex-row mt-3">
          <TouchableOpacity className="bg-violet-500 px-5 py-2 rounded-md m-2">
            <Text className="text-white font-extrabold">RESET</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-red-500 px-5 py-2 rounded-md m-2">
            <Text className="text-white font-extrabold">SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Companies;

const styles = {
  inputViolet:
    'w-full  border border-1 border-violet-400 rounded-md m-1 font-bold px-3 py-1',
  inputVioletSmall:
    'w-6/12  border border-1 border-violet-400 rounded-md mx-1 font-bold px-3 py-1',
};
