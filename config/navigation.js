import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//----------screens
import Home from '../screens/home';
import Location from '../screens/location';
import Drivers from '../screens/drivers';
import Companies from '../screens/company';
import Htv from '../screens/htv';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 15,
          margin: 0,
          padding: 10,
          border:1,
          borderColor: 'blue'
         
        },
      }}>
      <Tab.Screen name="🏠" component={Home} />
      <Tab.Screen name="🌎" component={Location} />
      <Tab.Screen name="Driver" component={Drivers} />
      <Tab.Screen name="Company" component={Companies} />
     
      <Tab.Screen name="v3" component={Htv} />
    </Tab.Navigator>
  );
};

export default Tabs;
