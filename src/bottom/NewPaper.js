import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { ImageBackground } from "react-native";
import { useNavigation,useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native";


const NewPaper = () => {
    const navigation = useNavigation()
    const News = ()=>{
        navigation.navigate('NewsChitiet');
     }
    const data = [
        {
            name: 'Giày Nam Siêu Đẹp',
            price: '300.000đ',
            gender: 'male',
            img: require('../imgs/shoes1.jpg'),
            sale:  require('../Screen/image/coupon.png')
        },
        {
            name: 'Quần Nam',
            price: '350.000đ',
            gender: 'male',
            img: require('../imgs/pants1.jpg'),
            sale:  require('../Screen/image/coupon.png')
        },
        
    ]
    return (
            <ScrollView style={{width:"100%",display:"flex"}}> 
                <View style={{width:'100%',justifyContent:"space-between",flexDirection: "row"}}>
                <FlatList
                style={{flexDirection: "row"}}
           data={data}
           renderItem={({item}) =>
            // <View style={{
            //     width: '100%',
            //     height: 130,
            //     borderRadius: 10,
            //     elevation: 5,
            //     backgroundColor: '#97FFFF',
            //     marginTop:30,
            //     flexDirection: "row"
            // }}>
                <TouchableOpacity style={{width: '100%', alignContent:"flex-start", 
                height: 130,
                borderRadius: 10,
                elevation: 5,
                backgroundColor: '#FFFF',
                marginTop:20,
                flexDirection: "row"}} onPress={()=>{News()}}>
                <View style={{width:'23%', alignContent:"center", alignItems:'center', marginTop:10}}>
                <Image source={item.img} style={{width: 90,
                    height: '90%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,}}></Image>
                </View>
                
                    <View style={{padding: 12, width:'60%'}}>
                    <Text style={{ fontWeight: "bold", fontSize:25}}>{item.name}</Text>
                {/* <Text style={{color: 'red', }}>{item.price}</Text>
                <Text>{item.gender}</Text> */}
                    </View>
                    <View style={{width:'17%'}}>
                    <Image source={item.sale} style={{width: 50,
                    height: 50,
                    marginRight:20,
                    marginTop:20
                    }}></Image>
                    </View>
                </TouchableOpacity>
                
            }>
                
           </FlatList>
                </View>
           
            </ScrollView>
          

    )
}
export default NewPaper;