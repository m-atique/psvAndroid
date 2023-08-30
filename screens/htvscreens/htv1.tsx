import React,{ forwardRef, useImperativeHandle, useRef,useState } from 'react';
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

const  Htv1  =forwardRef((props, ref) :JSX.Element => {


    useImperativeHandle(ref, () => ({
        log() {
        //   console.log("child function");
        return (name)
        }
      }));

const [name,setName]=useState('')

return(
<View>
<TextInput value={name} onChangeText={(e)=>setName(e)}
className ='w-full px-5 bg-green-300 border-violet-500 border-2'/>


</View>
)
})
export default Htv1;