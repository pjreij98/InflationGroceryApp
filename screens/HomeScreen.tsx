import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import GroceryListItem from '../components/GroceryListItem';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const groceryItems = [
    {
      itemName: 'Steak',
      price: 8.49,
      city: 'Houston',
      date: "1-8-2022",
      uri: "https://img.search.brave.com/x0BqOS5mHfy5OMq-muL9frlIsSyEHV_RIfSdyucSOa4/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9jZG4w/LnZveC1jZG4uY29t/L3RodW1ib3IvQ3l1/WmdYVXVWM0UtUWx0/cTJVZkEtUkx4bVJr/PS8weDIwMjozOTA4/eDI0MDAvMTYwMHg5/MDAvY2RuMC52b3gt/Y2RuLmNvbS91cGxv/YWRzL2Nob3J1c19p/bWFnZS9pbWFnZS81/MzQ2MTQzMy9zaHV0/dGVyc3RvY2tfMTE0/ODI1MzEuMC5qcGc"
    },
    {
      itemName: 'Eggs',
      price: 1.89,
      city: 'Houston',
      date: "1-22-2022",
      uri: "https://img.search.brave.com/OFxJPW9XhtqsjAXjdX8xEqeTLuRAvEgOVSpeJ7YI2co/rs:fit:1155:648:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaW1hZ2Vz/LXByb2QuaGVhbHRo/bGluZS5jb20vaGxj/bXNyZXNvdXJjZS9p/bWFnZXMvQU5faW1h/Z2VzL2VnZ3MtY2Fy/dG9uLWZyZXNoLTEy/OTZ4NzI4LWhlYWRl/ci5qcGc_dz0xMTU1/Jmg9MTUyOA"
    },
    {
      itemName: 'Milk',
      price: 2.49,
      city: 'Houston',
      date: "1-31-2022",
      uri: "https://img.search.brave.com/5sTDNSnviUxmxS3mVuG5lPw8_eTF4792gc5YjAjJcEg/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9ndWlk/YXMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA0L2d1/aWRhcy13aG9sZS1t/aWxrLWdhbGxvbi5q/cGc"
    },
    {
      itemName: 'Bread',
      price: 4.09,
      city: 'Houston',
      date: "2-8-2022",
      uri: "https://img.search.brave.com/ZEgDFJDqnrJaNDrPDio1yF-rYmBx8ymQbkg4GdtxOdc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zd2ly/bGVkLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wOS8x/MDBfUnllX0JyZWFk/XzU3NTI2NTcwMDkt/Mi5qcGc"
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
      data={groceryItems} 
      renderItem={
        ({item}) => 
          <GroceryListItem 
            onClick={() => navigation.navigate('Item', { itemName: item.itemName })} 
            itemName={item.itemName} 
            price={item.price} 
            city={item.city} 
            date={item.date} 
            imageURI={item.uri}
          />
      } 
      keyExtractor={(item, index) => index.toString()}
      />
      
      {/* <Text style={styles.title}>Steak</Text>
      <Text style={styles.text}>Current Price: $8.49</Text>
      <Text style={styles.text}>City: Houston</Text>
      <Pressable style={{borderColor: 'white'}} onPress={onClick}>
        <Image style={{ justifyContent: 'center', width: 407.33, height: 271.33 }} source={{ uri: "https://img.search.brave.com/x0BqOS5mHfy5OMq-muL9frlIsSyEHV_RIfSdyucSOa4/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9jZG4w/LnZveC1jZG4uY29t/L3RodW1ib3IvQ3l1/WmdYVXVWM0UtUWx0/cTJVZkEtUkx4bVJr/PS8weDIwMjozOTA4/eDI0MDAvMTYwMHg5/MDAvY2RuMC52b3gt/Y2RuLmNvbS91cGxv/YWRzL2Nob3J1c19p/bWFnZS9pbWFnZS81/MzQ2MTQzMy9zaHV0/dGVyc3RvY2tfMTE0/ODI1MzEuMC5qcGc" }} />
      </Pressable> */}
    </SafeAreaView>
  );
}

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
