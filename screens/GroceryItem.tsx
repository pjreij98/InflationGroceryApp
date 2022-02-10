import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const GroceryItem = ({ route, navigation }: NativeStackScreenProps<RootStackParamList, "Item">) => {
    const { itemName } = route.params;
    return (
        <View>
            <Text style={{ color: 'white' }}>Item Name: {itemName}</Text>
        </View>
    );
};

export default GroceryItem;
