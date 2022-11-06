import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Body from '../components/Body';
import { getList } from '../services/Games';
import { NavigationContainer } from '@react-navigation/native';

const Home = ({ navigation }) => {

const Item = ({ title, thumbnailUrl, descricao }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.descricao}>{descricao}</Text>
    <Image
      source={{
        uri: thumbnailUrl + '.png',
      }}
      style={styles.itemPhoto}
      resizeMode="cover"
    />
    
  </View>
);


const ListItem = ({ item }) => {
  return (
    <View style={styles.ite}>
<TouchableOpacity onPress={() => navigation.navigate('Login')} >

      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      </TouchableOpacity>

      <LinearGradient
        style={{
          height: 25,
          width: 80,
          marginTop: 15,
          borderRadius: 5,
        }
        }

        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[.5, 0.7]}
        colors={['rgba(255, 13, 211, 0.542483)', 'rgba(rgba(123, 0, 179, 0)']}

      >
        <Text style={styles.itemText}>{item.text}</Text>
      </LinearGradient>
    </View>
  );
};

const renderItem = ({ item }) => (
  
  <Item title={item.nome} thumbnailUrl={item.url_imagem} descricao={item.descricao}/>

);

  const [list, setList] = useState([]);
useEffect(() => {
  let mounted = true;
  getList()
    .then(items => {
      if(mounted) {
        setList(items)
      }
    })
  return () => mounted = false;
}, [])
  return (
  
    <Body>
      <View style={styles.container}>
      
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1 }}>
        
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
              
                <Text style={styles.sectionHeader}>{section.title}</Text>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({ item, section }) => {
              if (section.horizontal) {
                return null;
              }
              return <ListItem item={item} />;
            }}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.containi}>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          
          
        </SafeAreaView>
      </View>
      </Body>
  );
};

const SECTIONS = [
  {
    title: 'Novos Jogos',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    title: 'Destaques',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },

];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211B23',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  ite: {
    flex: 1,
    backgroundColor: '#211B23',
    margin: 10,
    alignItems: 'center',
  },
  itemPhoto: {
    width: 80,
    height: 80,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
  containi: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderColor: '#92a8d1',
  },
  item: {
    backgroundColor: '#2E2F37',
    borderRadius: 20,

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
    
  },
  descricao: {
    textAlign: 'center',
    fontSize: 10,
    color: '#FFFFFF',
    top: 20,

  }
});

export default Home;