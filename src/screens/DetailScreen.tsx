// import React, { FunctionComponent } from 'react';
import React from 'react'
import { observer } from 'mobx-react-lite';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    ScrollView,
    View,
    Box,
    HStack,
    Stack,
    Text,
    Checkbox,
  } from 'native-base';
//   import { NavigatorParamList } from '../AppNavigator';


// function DetailScreen: FunctionComponent<BottomTabScreenProps<NavigatorParamList, 'detail'>> = observer(
//     ({ navigation }) => {
//         return (
//             <View flex={1} >
//                 <ScrollView py={10}>
//                     <HStack>
//                     <Checkbox p={7} borderRadius={7} value="test"/>
//                         <Stack bg="white" px={21} py={20} space={20} alignItems="center">
//                             <Text>Task title</Text>
//                             <Text>if the task is completed or not</Text>
//                         </Stack>
//                         <Stack bg="white" px={21} py={20} space={20} alignItems="center">
//                             <Text>user id: 1</Text>
//                             <Text>task id: 23</Text>
//                         </Stack>
//                     </HStack>
//                 <Box mt={59} safeAreaBottom />
//                 </ScrollView>
//             </View>
//         );
//     },
// );

// export default DetailScreen;

function DetailScreen = ({route}) => {
        return (
            <View flex={1} >
                <ScrollView py={10}>
                    <HStack>
                        <Checkbox p={7} borderRadius={7} value="test"/>
                        <Stack bg="white" px={21} py={20} space={20} alignItems="center">
                            <Text>Task title</Text>
                            <Text>if the task is completed or not</Text>
                        </Stack>
                        <Stack bg="white" px={21} py={20} space={20} alignItems="center">
                            <Text>user id: 1</Text>
                            <Text>task id: 23</Text>
                        </Stack>
                    </HStack>
                    <Box mt={59} safeAreaBottom />
                </ScrollView>
            </View>
        );
    }

export default DetailScreen;