import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'combo', label: 'Combo 🍗' },
  { key: 'special', label: 'Special👌' },
  { key: 'drinks', label: 'Drinks ☕' },
  { key: 'ala', label: 'Ala Carte' }
];

const MENU_ITEMS = [
  {
    title: 'Combo',
    description: '2 Chicken Wings',
    price: '$12.00',
    image: require('../../assets/menu_1.png'),
  },
  {
    title: 'Chicken Super',
    description: '1 Chicken Large, tomato',
    price: '$18.00',
    image: require('../../assets/menu_2.png'),
  },
  {
    title: 'Beef Steak Large',
    description: '1 Beef Steak',
    price: '$20.00',
    image: require('../../assets/menu_3.png'),
  },
  {
    title: 'Special Orange Juice',
    description: '1 Orange Juice',
    price: '$3.00',
    image: require('../../assets/menu_4.png'),
  },
];


const MerchantDetails = () => {

  const [activeTab, setActiveTab] = useState('all');
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);


  const Item = ({ title, description, price, image }) => (
    <>
      <View style={styles.item}>
        <Image source={image} style={styles.imagetab} />
        <View style={styles.textContainer}>
          <Text style={styles.titletab}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.buttontab}>
            <Text style={{ color: "#fff", textAlign: 'center', marginTop: -4 }}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{1}</Text>
          <TouchableOpacity style={styles.buttontab}>
            <Text style={{ color: "#fff", textAlign: 'center', marginTop: -2 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );


  const renderItem = ({ item }) => <Item {...item} />;


  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}><Image
        source={require('../../assets/left-arrow.png')}
        style={styles.image1}
      ></Image><Text style={styles.title1}>Merchant Details</Text></View>
      <View style={styles.header}>
        <Image
          source={require('../../assets/menu_1.png')}
          style={styles.image2}
        />
        <View style={styles.header1}>
          <Text style={styles.title}>Chicken Lalapan Gresik</Text>
          <View style={styles.address}>
            <Image
              source={require('../../assets/location.png')}
              style={styles.image3}
            />
            <Text style={styles.addressText}>No. 36, Kildeer beach, florida-60303</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.reviewItem}>
            <Image
              source={require('../../assets/star-svg.png')}
              style={styles.image4}
            />
            <Text style={styles.primaryText}> 4.8</Text>
          </View>
          <Text style={styles.secondaryText}>Check reviews</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.reviewItem}>
              <Image
                source={require('../../assets/location-pin.png')}
                style={styles.image4}
              />
              <Text style={styles.primaryText}>2.69 km</Text>
            </View>
            <Text style={styles.secondaryText}>Distance</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.reviewItem}>
              <Image
                source={require('../../assets/profile.png')}
                style={styles.image4}
              />
              <Text style={styles.primaryText}>1k+ ratings</Text>
            </View>
            <Text style={styles.secondaryText}>Good taste</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerTab}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tabButton, activeTab === tab.key && styles.activeTabButton]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text style={[styles.tabButtonText, activeTab === tab.key && styles.activeTabButtonText]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>


      <Text style={{ marginLeft: 12, color: "#000", fontWeight: 'bold' }}>Combo 🍗</Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
      <View style={styles.footer}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={styles.totalPrice}>$65.00</Text>
          <Text style={styles.foodSelected}>
            4 Food Selected
          </Text>
        </View>
        <View style={styles.arrow}>
          <Image style={styles.arrow1} source={(require('../../assets/arrow-right-1.png'))}></Image>
          <Image style={styles.arrow2} source={(require('../../assets/arrow-right-2.png'))}></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  headerStyle: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviewItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 10,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center'
  },
  header1: {
    marginLeft: 10
  },
  addressText: {
    marginLeft: 4
  },
  address: {
    display: "flex",
    flexDirection: 'row',
    marginTop: 8
  },
  image: {
    borderRadius: 50,
    marginBottom: 10,
  },
  imagetab: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  image2: {
    width: 60,
    height: 60,
    borderRadius: 12
  },
  image3: {
    height: 20,
    width: 20
  },
  image4: {
    height: 20,
    width: 20,
    marginTop: 6
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#000',
  },
  title1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#000",
    marginLeft: 10
  },
  details: {
    fontSize: 14,
    color: 'gray',
  },
  tab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  activeTab: {
    color: '#c4321b',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#c4321b',
    borderRadius: 8
  },
  totalPrice: {
    fontSize: 18,
    color: '#fff',
  },
  foodSelected: {
    fontSize: 16,
    color: '#aa3382',
    marginLeft: 20,
    backgroundColor: "#ecb2a9",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 16,

  },
  image1: {
    height: 10,
    width: 20,
    color: '#c3cad5'
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  primaryText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 4,
    color: "#000"
  },
  secondaryText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'left'
  },
  containerTab: {
    paddingTop: 20,
    paddingBottom: 20
    // height:50
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    height: 40
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    marginRight: 10,
    height: 40

  },
  activeTabButton: {
    backgroundColor: '#eb4d4b',
    height: 40

  },
  tabButtonText: {
    fontSize: 16,
    color: '#333',
    height: 40

  },
  activeTabButtonText: {
    color: '#fff',
    height: 40

  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  titletab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#000"
  },
  description: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontab: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: '#cb341b',
    borderRadius: 30,
    height: 20,
    width: 20,
    color: '#fff',
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center'

  },
  quantityText: {
    marginHorizontal: 10,
  },
  arrow1: {
    height: 10,
    width: 10
  },
  arrow2: {
    height: 10,
    width: 10
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default MerchantDetails;
