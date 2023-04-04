import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'


const NewsChitiet = () => {
    
  return (
    <ScrollView>
        <View>
        <Text style={{fontSize:20, fontWeight:'bold'}}>1. Jordan 1 High</Text>
      <Image source={require('../imgs/shoes1.jpg')} style={{width: 420,
                   marginTop:10,
                   borderRadius:20,
                    height: 300,
                    }}></Image>
     <Text style={{fontSize:15, padding:10}}>- Với phiên bản cổ cao sẽ giúp bảo vệ cổ chân & đây là xu hướng phối đồ khá dễ dàng nhờ thiết kế đơn giản, form ôm sát bàn chân giúp bạn vận động, di chuyển dễ dàng hơn.
Về màu sắc thì phiên bản Jordan High này sẽ không làm bạn thất vọng khi liên tục ra mắt đủ loại màu & chất liệu phù hợp khác nhau.</Text>
<Text style={{fontSize:20, fontWeight:'bold'}}>2. Jordan 4 </Text>
<Image source={require('../imgs/shoes4.jpg')} style={{width: 420,
                   marginTop:10,
                   borderRadius:20,
                    height: 300,
                    }}></Image>
                    <Text style={{fontSize:15, padding:10}}>- Jordan 4 là một trong những phối màu Air Jordan hot nhất mọi thời đại và đôi giày huyền thoại này sẽ được phát hành trùng với Black Friday, chính sự đặc biệt này làm cho người hâm mộ Jordan Brand trên toàn thế giới đang thực sự phấn khích.</Text>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>3. Giày Nike Air Force 1 07 Triple White CW2288-111 </Text>
<Image source={require('../imgs/nikeAf.webp')} style={{width: '100%',
                   marginTop:10,
                   borderRadius:20,
                    height: 300,
                    }}></Image>
                    <Text style={{fontSize:15, padding:10}}>- vượt qua các mặt bên và giữa của chiếc Air Force 1 Low này, các biểu tượng Swoosh mang tính biểu tượng của Nike cũng có cùng tông màu trắng sạch sẽ, sau đó là các điểm nhấn thương hiệu bổ sung trên gót chân, lồng ren màu bạc kim loại, lưỡi gà và đế giữa đế dưới bao bọc Công nghệ đệm khí đặc trưng của hãng đồ thể thao mang lại cảm giác thoải mái tuyệt vời.

Bên cạnh tất cả các sự hợp tác nổi tiếng, Nike AF1 đã đóng vai trò như một tấm vải trống cho, đáng chú ý là dòng Off-White x Nike của Virgil Abloh và bộ sưu tập Travis Scott Cactus Jack, Air Force 1 Triple White là sản phẩm cần phải có.</Text>
    </View>
    </ScrollView>

  )
}

export default NewsChitiet

const styles = StyleSheet.create({})