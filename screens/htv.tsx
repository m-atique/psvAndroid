import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';

//-------------------screens----------=-=-=-=-=-==-
import Htv1 from './htvscreens/htv1';
import Htv2 from './htvscreens/htv2';
import Htv3 from './htvscreens/htv3';
//-=-=-=-=-=======================================
const defaultScrollViewProps = {
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

const onNextStep = () => {
  console.log('called next step');
};

const onPaymentStepComplete = () => {
  console.log('Payment step completed!');
};

const onPrevStep = () => {
  console.log('called previous step');
};

const onSubmitSteps = () => {
  console.log('called on submit step.');
};

//-==-=-=-=-=-=-=-===========================--------------=

const progressStepsStyle = {
  // activeStepIconBorderColor: '#0a0d64',
  // activeLabelColor: '#0a0d64',
  // completedStepIconColor: '#0a0d64',
  activeStepNumColor: 'white',
  activeStepIconColor: '#0a0d64',
  completedProgressBarColor: '#0a0d6',
  completedCheckColor: 'white',
  disabledStepIconColor: 'gray',
  disabledStepNumColor: 'white',
  offset: 20,
  marginBottom: 40,
  backgroundColor: 'red',
};

function Htv() {
  //-------------------------------------tracker options

  const trackerOptions = [
    {label: 'Active', value: 'active'},
    {label: 'Not-Active', value: 'inactive'},
    {label: 'Not-Available', value: 'not avaiable'},
  ];
  const [trackerStatus, setTrackerStatus] = useState('');
  const [trackerOpen, setTrackerOpen] = useState(false);

  //-------------------------------------------licence issue
  const [issue, setIssue] = useState(new Date());
  const [openIssue, setOpenIssue] = useState(false);
  //------------------------------------------- licience expiry
  const [expiry, setExpiry] = useState(new Date());
  const [openExpiry, setOpenExpiry] = useState(false);
  //-------------------------------------------------------

  return (
    <View className="flex  flex-1 bg-gray-300">
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep
          icon="🚚"
          label="Vehicle"
          //  onNext={() => setName(ref.current.log())}
          // onNext={}
          onPrevious={onPrevStep}
          nextBtnStyle={styles.nextBtn}
          nextBtnTextStyle={styles.BtnText}
          scrollViewProps={defaultScrollViewProps}>
          <View>
            {/*============================================Vehicle INFO  */}
            {/* -----------------------registration */}

            <View className="flex justify-center items-center bg-violet-400 m-2 p-2 mb-5 rounded-lg shadow-md shadow-black">
              <Text className="font-extrabold text-lg text-white">
                Vehicle Detail
              </Text>
            </View>
            {/* ---------------------------------------================================= */}
            <View className="flex justify-center items-center mx-3 p-3 py-10 border border-violet-500 rounded-xl bg-gray-100 shadow-2xl">
              <View className="flex flex-row gap-2 items-center w-full p-3 justify-center">
                <TextInput
                  placeholder="XYZA"
                  className="w-4/12 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
                <TextInput
                  placeholder="Year"
                  className="w-4/12 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
                <TextInput
                  placeholder="Number"
                  className="w-4/12 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
              </View>
              {/*================================================  */}
              <View className="flex flex-row gap-1 items-center w-full p-2 justify-center">
                <TextInput
                  placeholder="Chasis No."
                  className="w-2/4 m-0 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
                <TextInput
                  placeholder="Engine No."
                  className="w-2/4 m-0 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
              </View>
              {/* ============================================================================= */}
              <View className="flex flex-row gap-1 items-center w-full p-2 justify-center">
                <TextInput
                  placeholder="Made by (Hino,isuzu etc)"
                  className="w-4/12 border-2 border-violet-500 rounded-md"
                />
                <TextInput
                  placeholder="Modal"
                  className="w-2/12 border-2 border-violet-500 rounded-md"
                />

                <View className="flex w-6/12 items-center  justify-center">
                  <DropDownPicker
                    items={trackerOptions}
                    open={trackerOpen}
                    setOpen={() => setTrackerOpen(!trackerOpen)}
                    value={trackerStatus}
                    setValue={val => setTrackerStatus(val)}
                    placeholder="Tracker Status"
                    placeholderStyle={{color: 'darkgray'}}
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'blue',
                      borderWidth: 2,
                    }}
                  />
                </View>
              </View>
              {/* =============================================================drop down tracker */}
            </View>
          </View>
        </ProgressStep>

        <ProgressStep
          icon="🧾"
          label="Documents"
          onNext={onPaymentStepComplete}
          onPrevious={onPrevStep}
          nextBtnStyle={styles.nextBtn}
          previousBtnStyle={styles.previousBtn}
          previousBtnTextStyle={styles.BtnText}
          nextBtnTextStyle={styles.BtnText}
          scrollViewProps={defaultScrollViewProps}>
          <View>
            {/* =================================================== Vehicle safety */}
            <View className="flex justify-center items-center bg-violet-400 m-2 p-2 mb-3 rounded-lg shadow-md shadow-black">
              <Text className="font-extrabold text-lg text-white">
                Vehicle Documents
              </Text>
            </View>
            {/* ---------------------------------------================================= */}
            <View className="flex justify-center items-center mx-3 p-3 py-2 border border-violet-500 rounded-xl bg-gray-100 shadow-2xl">
              {/* =================================================================route */}
              <View className="flex flex-row gap-1 items-center w-full p-2 justify-center">
                <TextInput
                  placeholder="Route Permit No."
                  className="w-2/4 m-0 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
                <TextInput
                  placeholder="Issuing Autherity"
                  className="w-2/4 m-0 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
              </View>
              {/* ================================================================viia */}
              <View className="flex flex-row  items-center w-full p-1 justify-center">
                <TextInput
                  placeholder="Pathway (via Punjab,Sindh etc)."
                  className="w-full m-0 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
              </View>
              {/* =======================================================================dates */}
              <View className="flex  gap-1 items-center w-full p-2 justify-center">
                <View className="flex flex-row m-0 ">
                  <Text className="p-2 font-extrabold">Issue Date</Text>
                  <DatePicker
                    modal
                    mode="date"
                    open={openIssue}
                    date={issue}
                    onConfirm={value => {
                      setOpenIssue(false);
                      setIssue(value);
                    }}
                    onCancel={() => {
                      setOpenIssue(false);
                    }}
                  />

                  <Text className="rounded-md border w-8/12 border-violet-400  text-center font-bold p-2">
                    {issue.toLocaleDateString()}
                  </Text>
                  <TouchableOpacity onPress={() => setOpenIssue(true)}>
                    <Text className="p-2 text-md bg-violet-400 rounded-md ml-1">
                      📅
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex flex-row m-0">
                  <Text className="p-2 font-extrabold">Exp. Date</Text>
                  <DatePicker
                    modal
                    mode="date"
                    open={openExpiry}
                    date={expiry}
                    onConfirm={value => {
                      setOpenExpiry(false);
                      setExpiry(value);
                    }}
                    onCancel={() => {
                      setOpenExpiry(false);
                    }}
                  />

                  <Text className="rounded-md border w-8/12 border-violet-400  text-center font-bold p-2">
                    {expiry.toLocaleDateString()}
                  </Text>
                  <TouchableOpacity onPress={() => setOpenIssue(true)}>
                    <Text className="p-2 text-md bg-violet-400 rounded-md ml-1">
                      📅
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* ==============================================Fitness */}
              {/* =================================================================no and authrity */}
              <View className="flex flex-row gap-1 items-center w-full p-2 justify-center">
                <TextInput
                  placeholder="Fitness No."
                  className="w-2/4 m-0 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
                <TextInput
                  placeholder="Issuing Autherity"
                  className="w-2/4 m-0 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
              </View>

              {/* =======================================================================dates */}
              <View className="flex  gap-1 items-center w-full p-2 justify-center">
                <View className="flex flex-row m-0 ">
                  <Text className="p-2 font-extrabold">Issue Date</Text>
                  <DatePicker
                    modal
                    mode="date"
                    open={openIssue}
                    date={issue}
                    onConfirm={value => {
                      setOpenIssue(false);
                      setIssue(value);
                    }}
                    onCancel={() => {
                      setOpenIssue(false);
                    }}
                  />

                  <Text className="rounded-md border w-8/12 border-violet-400  text-center font-bold p-2">
                    {issue.toLocaleDateString()}
                  </Text>
                  <TouchableOpacity onPress={() => setOpenIssue(true)}>
                    <Text className="p-2 text-md bg-violet-400 rounded-md ml-1">
                      📅
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex flex-row m-0">
                  <Text className="p-2 font-extrabold">Exp. Date</Text>
                  <DatePicker
                    modal
                    mode="date"
                    open={openExpiry}
                    date={expiry}
                    onConfirm={value => {
                      setOpenExpiry(false);
                      setExpiry(value);
                    }}
                    onCancel={() => {
                      setOpenExpiry(false);
                    }}
                  />

                  <Text className="rounded-md border w-8/12 border-violet-400  text-center font-bold p-2">
                    {expiry.toLocaleDateString()}
                  </Text>
                  <TouchableOpacity onPress={() => setOpenIssue(true)}>
                    <Text className="p-2 text-md bg-violet-400 rounded-md ml-1">
                      📅
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* ==============================================Fitness */}
            </View>
          </View>
        </ProgressStep>

        <ProgressStep
          icon="🏠"
          label="Third Step"
          previousBtnStyle={styles.previousBtn}
          previousBtnTextStyle={styles.BtnText}
          nextBtnStyle={styles.nextBtn}
          nextBtnTextStyle={styles.BtnText}
          onNext={onPaymentStepComplete}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}>
          <View>
            {/*====================================Safety (tyres, light firstaid fire extinguisher)  */}
            {/* -----------------------registration */}

            <View className="flex justify-center items-center bg-violet-400 m-2 p-2 mb-5 rounded-lg shadow-md shadow-black">
              <Text className="font-extrabold text-lg text-white">
                Vehicle Safety Check
              </Text>
            </View>
            {/* ---------------------------------------================================= */}
            {/* <View className="flex justify-center items-center mx-3 p-3 py-10 border border-violet-500 rounded-xl bg-gray-100 shadow-2xl "> */}
            <View className="flex justify-center items-center mx-3  py-1  ">
              <View className="flex justify-center items-center  p-5 py-3 w-full border border-violet-500 rounded-xl bg-gray-100 shadow-2xl">
                <View className="flex flex-row m-0">
                  <Text className="p-2 font-extrabold ">Tyre Checking Date</Text>
                  <DatePicker
                    modal
                    mode="date"
                    open={openExpiry}
                    date={expiry}
                    onConfirm={value => {
                      setOpenExpiry(false);
                      setExpiry(value);
                    }}
                    onCancel={() => {
                      setOpenExpiry(false);
                    }}
                  />

                  <Text className="rounded-md border w-5/12 border-violet-400  text-center font-bold p-2">
                    {expiry.toLocaleDateString()}
                  </Text>
                  <TouchableOpacity onPress={() => setOpenIssue(true)}>
                    <Text className="p-2 text-md bg-violet-400 rounded-md ml-1">
                      📅
                    </Text>
                  </TouchableOpacity>
                </View>

                <TextInput
                  placeholder="Tyre Condition"
                  className="m-1 py-1 w-full rounded-md pl-2 max-h-fit border-2 border-violet-500"
                />
              </View>
              <View className="flex justify-center items-center my-1  p-5 py-3 w-full border border-violet-500 rounded-xl bg-gray-100 shadow-2xl">
             {/* //--------------------------------------------- Head,back and hazard light  */}
              <View className='flex flex-row gap-1'>
              <View className="flex w-4/12 items-center  justify-center">
                  <DropDownPicker
                    items={trackerOptions}
                    open={trackerOpen}
                    setOpen={() => setTrackerOpen(!trackerOpen)}
                    value={trackerStatus}
                    setValue={val => setTrackerStatus(val)}
                    placeholder="Head Light"
                    placeholderStyle={{color: 'darkgray'}}
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'blue',
                      borderWidth: 1.5,
                    }}
                  />
                </View>
                <View className="flex w-4/12 items-center  justify-center">
                  <DropDownPicker
                    items={trackerOptions}
                    open={trackerOpen}
                    setOpen={() => setTrackerOpen(!trackerOpen)}
                    value={trackerStatus}
                    setValue={val => setTrackerStatus(val)}
                    placeholder="Back Light"
                    placeholderStyle={{color: 'darkgray'}}
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'blue',
                      borderWidth: 1.5,
                    }}
                  />
                </View>
                <View className="flex w-4/12 items-center  justify-center">
                  <DropDownPicker
                    items={trackerOptions}
                    open={trackerOpen}
                    setOpen={() => setTrackerOpen(!trackerOpen)}
                    value={trackerStatus}
                    setValue={val => setTrackerStatus(val)}
                    placeholder="Hzrd. Light"
                    placeholderStyle={{color: 'darkgray'}}
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'blue',
                      borderWidth: 1.5,
                    }}
                    />
                    </View>
                </View>
              {/* ============================================Fire extinguisher First aid bx */}
              <View className='flelx flex-row  gap-2 my-1'>
                <TextInput className='w-2/4 m-0 py-1.5 rounded-md pl-2 max-h-fit border-2 border-violet-500' placeholder='Fire Extng. Size'/>
                <TextInput className='w-2/4 m-0 py-1.5 rounded-md pl-2 max-h-fit border-2 border-violet-500' placeholder='First Aid Box'/>
              </View>
              <View className='flelx flex-row  gap-2 my-1'>
                <TextInput className='w-2/4 m-0 py-1.5 rounded-md pl-2 max-h-fit border-2 border-violet-500' placeholder='Large Cones'/>
                <TextInput className='w-2/4 m-0 py-1.5 rounded-md pl-2 max-h-fit border-2 border-violet-500' placeholder='Small Cones'/>
              </View>
              
                <TextInput className='w-full py-1.5 rounded-md pl-2 max-h-fit border-2 border-violet-500' placeholder='Availability of Dry Powder and others'/>

              </View>
            </View>
          </View>
        </ProgressStep>
        <ProgressStep
          icon="🏠"
          label="OGRA "
          previousBtnStyle={styles.previousBtn}
          previousBtnTextStyle={styles.BtnText}
          nextBtnStyle={styles.nextBtn}
          nextBtnTextStyle={styles.BtnText}
          onNext={onPaymentStepComplete}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}>
         <View>
            {/*====================================Safety (tyres, light firstaid fire extinguisher)  */}
            {/* -----------------------registration */}

            <View className="flex justify-center items-center bg-violet-400 m-2 p-2 mb-5 rounded-lg shadow-md shadow-black">
              <Text className="font-extrabold text-lg text-white">
                OGRA Requirements
              </Text>
            </View>
            {/* ---------------------------------------================================= */}
            {/* <View className="flex justify-center items-center mx-3 p-3 py-10 border border-violet-500 rounded-xl bg-gray-100 shadow-2xl "> */}
            <View className="flex justify-center items-center mx-3  py-1  ">
              <View className="flex justify-center items-center  p-5 py-3 w-full border border-violet-500 rounded-xl bg-gray-100 shadow-2xl">
               
                  <View className="flex flex-row  gap-1 m-1 w-full justify-center items-center">

                <TextInput
                  placeholder="Gas/Oil Capicity"
                  className="m-1 py-1 w-6/12 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                  />
                  <TextInput
                  placeholder="Reg. ladden Weight"
                  className="m-1 py-1 w-6/12 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                  />
                  </View>

                  {/* ========================== guaard rail ogra certified */}
                  <View className="flex flex-row  gap-1 m-1 w-full justify-center items-center">

                <TextInput
                  placeholder="Under ride Guard "
                  className="m-1 py-1 w-6/12 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                  />
                  <TextInput
                  placeholder="OGRA certificate (yes/No)"
                  className="m-1 py-1 w-6/12 rounded-md pl-2 max-h-fit border-2 border-violet-500"
                  />
                  </View>


<View className="flex flex-row m-0 ">
                  <Text className="p-2  w-4/12 font-extrabold ">Issue Date</Text>
                  <DatePicker
                    modal
                    mode="date"
                    open={openExpiry}
                    date={expiry}
                    onConfirm={value => {
                      setOpenExpiry(false);
                      setExpiry(value);
                    }}
                    onCancel={() => {
                      setOpenExpiry(false);
                    }}
                  />

                  <Text className="rounded-md border w-7/12 border-violet-400  text-center font-bold p-2">
                    {expiry.toLocaleDateString()}
                  </Text>
                  <TouchableOpacity onPress={() => setOpenIssue(true)}>
                    <Text className="p-2 text-md bg-violet-400 rounded-md ml-1">
                      📅
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex flex-row m-0 my-2">
                  <Text className="p-2 w-4/12 font-extrabold ">Exp. Date</Text>
                  <DatePicker
                    modal
                    mode="date"
                    open={openExpiry}
                    date={expiry}
                    onConfirm={value => {
                      setOpenExpiry(false);
                      setExpiry(value);
                    }}
                    onCancel={() => {
                      setOpenExpiry(false);
                    }}
                  />

                  <Text className="rounded-md border w-7/12 border-violet-400  text-center font-bold p-2">
                    {expiry.toLocaleDateString()}
                  </Text>
                  <TouchableOpacity onPress={() => setOpenIssue(true)}>
                    <Text className="p-2 text-md bg-violet-400 rounded-md ml-1">
                      📅
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              </View>
              </View>
          </ProgressStep>
      </ProgressSteps>
    </View>
  );
}

export default Htv;

const styles = StyleSheet.create({
  nextBtn: {
    backgroundColor: 'red',
    borderRadius: 7,
    paddingHorizontal: 25,
  },
  BtnText: {
    color: 'white',
    fontWeight: '600',
  },
  previousBtn: {
    backgroundColor: 'blue',
    borderRadius: 7,
    paddingHorizontal: 15,
  },
});
