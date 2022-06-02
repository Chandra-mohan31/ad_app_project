
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./screens/HomePage";
import FindDonarsList from "./screens/FindDonorsList";
import FindDonorFullList from "./screens/FindDonorFullList";
import ChatBot from "./screens/ChatBot";
const Stack = createNativeStackNavigator();
const App =()=>{
    
    // const [bgcolor,setBgcolor] = useState("#FF2156");
  let bgcolor = "#FF2156"

    return(
        <>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            
            <Stack.Screen options={{headerShown: false}} name="Home" component={HomePage} />
            <Stack.Screen options={{headerShown: false}} name="FindDonar" component={FindDonarsList} />
            <Stack.Screen options={{headerShown: false}} name="FindDonarsList" component={FindDonorFullList} />
            <Stack.Screen options={{headerShown: false}} name="ChatBot" component={ChatBot} />





          </Stack.Navigator>
        </NavigationContainer>
          
        </>
    )
}



export default App


const styles = StyleSheet.create({
  container:{
    
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
    
  },

})