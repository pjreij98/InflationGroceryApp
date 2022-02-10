import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';

interface ListItemProps {
    onClick: () => void,
    itemName: string,
    price: number,
    city: string, 
    date: Date,
    imageURI: string
}

const GroceryListItem = (props: ListItemProps) => {
    const { onClick, itemName, price, city, date, imageURI } = props;
    return (
        <View style={{marginBottom: 25}}>
            <Text style={styles.title}>{itemName}</Text>
            <Text style={styles.text}>Current Price: $<Text>{price}</Text></Text>
            <Text style={styles.text}>City: {city}</Text>
            <Text style={styles.text}>Date: {date}</Text>
            <Pressable style={{ borderColor: 'white' }} onPress={onClick}>
                <Image style={{ justifyContent: 'center', width: 407.33, height: 271.33, resizeMode: "contain" }} source={{ uri: imageURI }} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    text: {
        color: 'white'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default GroceryListItem;
