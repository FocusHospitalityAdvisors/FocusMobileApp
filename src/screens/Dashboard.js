import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';

const data = [
  {id: '1', title: 'Total Revenue', content: '$45,678.90', subheader: '+20% month over month'},
  {id: '2', title: 'Total Profit', content: '$72,490', subheader: '+33% month over month'},
  {id: '3', title: 'Average Order Value', content: '$42.50', subheader: '+5.2% from last month'},
  {id: '4', title: 'Locations', content: '1', subheader: 'Active restaurants'},
];

const Card = ({title, content, subheader}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
      <Text style={styles.cardSubheader}>{subheader}</Text>
    </View>
  );
};

const Dashboard = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="menu" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Ionicons name="chatbox-outline" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardContainer}
            renderItem={({item}) => 
              <Card title={item.title} content={item.content} subheader={item.subheader} />}
          />
          <View style={styles.modeSelection}>
            <TouchableOpacity>
              <Text style={styles.mode}>Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.mode}>Hourly Analysis</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.mode}>Categories</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 7
  },

  headerTitle: { 
    fontSize: 25, 
    fontWeight: 'bold',
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 9,
  },

  card: {
    borderRadius: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    justifyContent: 'space-between',
    padding: 17,
    margin: 7,
    width: 250,
    height: 130,
  },

  cardHeader: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  cardContent: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },

  cardSubheader: {
    fontSize: 14,
    color:'#828282',
    marginTop: 10,
  },

  modeSelection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 7,
    marginTop: 0,
    marginLeft: 16,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  
  mode: {
    fontSize: 16,
    color: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    borderColor: '#000000',
    textAlign: 'center',
  },
})

export default Dashboard;
