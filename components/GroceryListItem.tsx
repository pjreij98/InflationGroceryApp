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
        <View style={styles.container}>
            <Pressable style={{ borderColor: 'white' }} onPress={onClick}>
                <Text style={styles.title}>{itemName}</Text>
                <Text style={styles.text}>Current Price: $<Text>{price}</Text></Text>
                <Text style={styles.text}>City: {city}</Text>
                <Text style={styles.text}>Date: {date.toDateString()}</Text>

                <Image style={{ justifyContent: 'center', width: 407.33, height: 271.33, resizeMode: "contain" }} source={{ uri: imageURI }} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 25,
        borderRadius: 2,
        borderWidth: 3,
        borderColor: 'white',
        borderStyle: 'solid'
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
