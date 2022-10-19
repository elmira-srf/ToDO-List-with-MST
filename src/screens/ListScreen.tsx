// import React, { FunctionComponent }  from 'react'
// import { observer } from 'mobx-react-lite';
import React from 'react'
// import { StackScreenProps } from '@react-navigation/stack';
import {
  ScrollView,
  View,
  Box,
  HStack,
  Stack,
  Text,
  Pressable,
  Checkbox,
  FlatList,
} from 'native-base';
import Svg, { Path } from 'react-native-svg';


// function ListScreen(props) {
//    const { navigation } = props
//     return (
//         <View flex={1} >
//         <ScrollView py={10}>
//           <FlatList>
            
//           </FlatList>
//           <HStack bg="white" px={21} py={20} space={20} alignItems="center">
//             <Checkbox p={7} borderRadius={7} value="test" accessibilityLabel="completed checkbox" />
//             <Text>The title of the todo item</Text>
//             <Pressable onPress={() => navigation.navigate('detail')}>
//               <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <Path d="M8.5 5L15.5 12L8.5 19" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//               </Svg>
//             </Pressable>
//           </HStack>
//           <Box mt={59} safeAreaBottom />
//         </ScrollView>
//       </View>
//     )
// }


const ListScreen = ({navigation, route}) => {
  return (
    <View flex={1} justifyContent="center" alignItem="center" backgroundColor="#ebebeb">
      <Text color= "#101010" fontSize={24} fontWeight= "bold">List Screen</Text>
      <Pressable onPress={() => navigation.navigate("DetailScreen")}>
        <Text>Who is this?</Text>
      </Pressable>
    </View>
  )
}

export default ListScreen;
