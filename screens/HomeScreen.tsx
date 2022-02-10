import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import GroceryListItem from '../components/GroceryListItem';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const groceryItems = [
    
    {
      itemName: 'Eggs',
      price: 1.89,
      city: 'Houston',
      date: new Date("2022-01-22"),
      uri: "https://img.search.brave.com/OFxJPW9XhtqsjAXjdX8xEqeTLuRAvEgOVSpeJ7YI2co/rs:fit:1155:648:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaW1hZ2Vz/LXByb2QuaGVhbHRo/bGluZS5jb20vaGxj/bXNyZXNvdXJjZS9p/bWFnZXMvQU5faW1h/Z2VzL2VnZ3MtY2Fy/dG9uLWZyZXNoLTEy/OTZ4NzI4LWhlYWRl/ci5qcGc_dz0xMTU1/Jmg9MTUyOA"
    },
    {
      itemName: 'Milk',
      price: 2.49,
      city: 'Houston',
      date: new Date("2022-01-31"),
      uri: "https://img.search.brave.com/5sTDNSnviUxmxS3mVuG5lPw8_eTF4792gc5YjAjJcEg/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9ndWlk/YXMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA0L2d1/aWRhcy13aG9sZS1t/aWxrLWdhbGxvbi5q/cGc"
    },
    {
      itemName: 'Bread',
      price: 4.09,
      city: 'Houston',
      date: new Date("2022-02-08"),
      uri: "https://img.search.brave.com/ZEgDFJDqnrJaNDrPDio1yF-rYmBx8ymQbkg4GdtxOdc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zd2ly/bGVkLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wOS8x/MDBfUnllX0JyZWFk/XzU3NTI2NTcwMDkt/Mi5qcGc"
    },
    {
      itemName: 'Orange Juice (OJ)',
      price: 4.09,
      city: 'Houston',
      date: new Date("2022-02-08"),
      uri: "https://img.search.brave.com/CEsalnGAMqTIM5mNQFZIpxknw-2RVyriK9bciX_dZP0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5h/bm5hcHVybmF6Lmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzAyL29yYW5nZS1q/dWljZTEuanBn"
    },
    {
      itemName: 'Rice',
      price: 4.09,
      city: 'Houston',
      date: new Date("2022-02-08"),
      uri: "https://img.search.brave.com/f8S2A_S2mt1XVpzOD859sfQNn0576Qio_HEbQjf1z2M/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/c2ltcGx5cmVjaXBl/cy5jb20vdGhtYi9f/NWhKdDBSajZSbDFr/MXM3bmNIT0o5TzBk/anM9LzIwMDB4MTMz/My9maWx0ZXJzOmZp/bGwoYXV0bywxKS9f/X29wdF9fYWJvdXRj/b21fX2NvZXVzX19y/ZXNvdXJjZXNfX2Nv/bnRlbnRfbWlncmF0/aW9uX19zaW1wbHlf/cmVjaXBlc19fdXBs/b2Fkc19fMjAxN19f/MDVfXzIwMTctMDUt/MjItSFQtUmljZS0x/Ny1iZTZkN2I1Nzdi/YmY0NGI0OTA4ZjU2/MTgzN2JiNzhmNi5q/cGc"
    },
    {
      itemName: 'Steak',
      price: 8.49,
      city: 'Houston',
      date: new Date("2022-01-08"),
      uri: "https://img.search.brave.com/x0BqOS5mHfy5OMq-muL9frlIsSyEHV_RIfSdyucSOa4/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9jZG4w/LnZveC1jZG4uY29t/L3RodW1ib3IvQ3l1/WmdYVXVWM0UtUWx0/cTJVZkEtUkx4bVJr/PS8weDIwMjozOTA4/eDI0MDAvMTYwMHg5/MDAvY2RuMC52b3gt/Y2RuLmNvbS91cGxv/YWRzL2Nob3J1c19p/bWFnZS9pbWFnZS81/MzQ2MTQzMy9zaHV0/dGVyc3RvY2tfMTE0/ODI1MzEuMC5qcGc"
    },
    {
      itemName: 'Butter',
      price: 4.09,
      city: 'Houston',
      date: new Date("2022-02-08"),
      uri: "https://img.search.brave.com/SDKltOpNHSFVNtnyoqQ8Ejdkp-XHjwxd7Kvqm4EMfNw/rs:fit:1200:695:1/g:ce/aHR0cHM6Ly9pbWcx/LnNvdXRoZXJubGl2/aW5nLnRpbWVpbmMu/bmV0L3NpdGVzL2Rl/ZmF1bHQvZmlsZXMv/c3R5bGVzL3N0b3J5/X2NhcmRfaGVyby9w/dWJsaWMvaW1hZ2Uv/MjAxNy8wNC9tYWlu/L2Jlc3QtYnV0dGVy/LmpwZz9pdG9rPTlf/Q05iX0ZC"
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
