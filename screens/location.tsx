import React, {useState, useEffect} from 'react';


import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Office from './office';

const officeData = {
  reigions: [
    {
      name: 'North',
      zone: [
        {
          name: 'N5',
          sector: [{name: 'North3', beats: ['Beat-1', 'Beat-2', 'beat-3']}],
        },
      ],
    },
    {
      name: 'Central',
      zone: [
        {
          name: 'MC-1',
          sector: [{name: 'Lsm', beats: ['Beat-1', 'Beat-2', 'beat-3']}],
        },
      ],
    },
    {
      name: 'South',
      zone: [
        {
          name: 'South-2',
          sector: [{name: 'Lsm', beats: ['Beat-1', 'Beat-2', 'beat-3']}],
        },
      ],
    },
    {
      name: 'Other',
      zone: [
        {
          name: 'other2',
          sector: [{name: 'Lsm', beats: ['Beat-1', 'Beat-2', 'beat-3']}],
        },
      ],
    },
  ],
};

function Location() {
  //----------------------------------------setting drowpdown region
  const [rgOpen, setRgOpen] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('');

  const regions = officeData.reigions.map(region => {
    return {label: region.name, value: region.name};
  });
  //-----------------------------------------------------setting drowpdown zone
  const [zoneOpen, setZoneOpen] = useState(false);
  const [currentZone, setCurrentZone] = useState(null);

  const zones = officeData.reigions
    .find(region => region.name === currentRegion)
    ?.zone.map(zone => {
      return {label: zone.name, value: zone.name};
    });

  //-----------------------------------------------------------------------------setting dropdown sector
  const [secOpen, setSecOpen] = useState(false);
  const [currentSector, setCurrentSector] = useState(null);

  const sectors = officeData.reigions
    .find(region => region.name === currentRegion)
    ?.zone.find(z => z.name === currentZone)
    ?.sector.map(sec => {
      return {label: sec.name, value: sec.name};
    });

  //-----------------------------------------------------------------------------setting dropdown sector
  const [beatOpen, setBeatOpen] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(null);

  const beats = officeData.reigions
    .find(region => region.name === currentRegion)
    ?.zone.find(z => z.name === currentZone)
    ?.sector.find(sec => sec.name === currentSector)
    ?.beats.map(beat => {
      return {label: beat, value: beat};
    });
  //----------------------------------------------------------------------------------------------------store office
  const [focusReg, setFocusReg] = useState(false);

  const officeSaver = () => {
    let region;
    let zone;
    let sector;
    let beat;

    if (currentRegion === '') {
      console.log('please Select Region');
    } else {
      region = currentRegion;
    }
    if (currentZone === null) {
      console.log('please Select Zone');
    } else {
      zone = currentZone;
    }
    if (currentSector === null) {
      console.log('please Select Sector');
    } else {
      sector = currentSector;
    }
    if (currentBeat === null) {
      console.log('please Select Beat');
    } else {
      beat = currentBeat;
    }

    const myOffice = {
      myRegion: region,
      myZone: zone,
      mySector: sector,
      myBeat: beat,
    };
    console.log(myOffice);
    officeReset();
  };
  //--------------------------------------------------------------------------------------------office reset
  const officeReset = () => {
    setCurrentRegion('');
    setCurrentZone(null);
    setCurrentSector(null);
    setCurrentBeat(null);
  };
  ///////-----------------------------------------------------///////

  //--------------------------------------useEffect
  const [mydata, setMydata] = useState();
  const [maxId, setMaxid] = useState(0);
  const getdata = async () => {
    await fetch('http://192.168.10.40:5000/')
      .then(response => response.json())
      .then(data => {
        const allOffices = data.recordset;
        const maxId = allOffices.length
        setMydata(allOffices);
        setMaxid(maxId+1)
      });
  };

  //---------------------------------------------------saving data to offices

  const office = {
    ofcid: maxId,
    region: currentRegion,
    zone: currentZone,
    sector: currentSector,
    beat: currentBeat,
  };
  const saveData = async () => {
    await fetch('http://192.168.10.64:5000/savedata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(office),
    })
      .then(response => {
        if (response.ok) {
          console.log('Data inserted successfully');
          setMaxid(maxId+1)
        } else {
          console.log('Failed to insert data');
        }
      })
      .catch(error => {
        console.log(error);
      });
      
      officeReset();

  };
//===============================================================================================

  useEffect(() => {
    getdata();
  }, []);

  return (
    <View className="">
      <SafeAreaView className="  bg-yellow-200 flex justify-center items-center h-4/12 p-2">
        <View className=" flex justify-center items-center ">
          <Text className="font-extrabold text-lg">Offices</Text>
        </View>
      </SafeAreaView>
      <View className="h-screen pt-20   bg-slate-100 rounded-md ju">
        <View className=" bg-white shadow-2xl shadow-yellow-900 m-4 rounded-md ">
          {/* //----------------------region */}
          <View className=" bg-slate-200,flex flex-1 px-5 py-3 my-5 z-40">
            <DropDownPicker
              items={regions}
              open={rgOpen}
              setOpen={() => setRgOpen(!rgOpen)}
              value={currentRegion}
              setValue={val => setCurrentRegion(val)}
              placeholder="Select Region"
              placeholderStyle={{color: 'gray'}}
              style={{
                backgroundColor: 'white',
                borderColor: 'blue',
                borderWidth: 2,
              }}
            />
          </View>
          {/* //----------------------zone */}
          <View className=" bg-slate-200,flex flex-1 px-5 py-3 my-5 z-30">
            <DropDownPicker
              items={zones ? zones : []}
              open={zoneOpen}
              setOpen={() => setZoneOpen(!zoneOpen)}
              value={currentZone}
              setValue={val => setCurrentZone(val)}
              placeholder="Select Zone"
              placeholderStyle={{color: 'darkgray'}}
              style={{
                backgroundColor: 'white',
                borderColor: 'blue',
                borderWidth: 2,
              }}
            />
          </View>
          {/* //----------------------sector */}
          <View className=" bg-slate-200,flex flex-1 px-5 py-3 my-5 z-20">
            <DropDownPicker
              items={sectors ? sectors : []}
              open={secOpen}
              setOpen={() => setSecOpen(!secOpen)}
              value={currentSector}
              setValue={val => setCurrentSector(val)}
              placeholder="Select sector"
              placeholderStyle={{color: 'darkgray'}}
              style={{
                backgroundColor: 'white',
                borderColor: 'blue',
                borderWidth: 2,
              }}
            />
          </View>
          {/* //----------------------beat */}
          <View className=" bg-slate-200,flex flex-1 px-5 py-3 my-5 z-10">
            <DropDownPicker
              items={beats ? beats : []}
              open={beatOpen}
              setOpen={() => setBeatOpen(!beatOpen)}
              value={currentBeat}
              setValue={val => setCurrentBeat(val)}
              placeholder="Select Beat"
              placeholderStyle={{color: 'darkgray'}}
              style={{
                backgroundColor: 'white',
                borderColor: 'blue',
                borderWidth: 2,
              }}
            />
          </View>
          {/* ------------buttons */}
          <View className="flex flex-row mt-10 mx-4 w-full ">
            <View className="bg-red-700  p-3 rounded-md m-4 w-4/12 ">
              <TouchableOpacity onPress={() => officeReset()}>
                <Text className="text-yellow-500 text-center font-bold">
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
            <View className="bg-blue-600  rounded-md m-4 p-3 w-4/12">
              <TouchableOpacity onPress={() => saveData()}>
                <Text className="text-yellow-500 text-center font-bold">
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Location;
