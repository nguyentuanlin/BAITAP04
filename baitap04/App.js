import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon từ thư viện

const App = () => {
  // State cho background color của component cha, mặc định là màu trắng
  const [bgColor, setBgColor] = useState('white');

  // Hàm thay đổi màu nền
  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  // Hàm xác nhận khi nhấn nút RESET
  const handleReset = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc muốn đổi về màu ban đầu không?",
      [
        {
          text: "Hủy",
          style: "cancel"
        },
        { 
          text: "Đồng ý", 
          onPress: () => changeBackgroundColor('white') 
        }
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => changeBackgroundColor('green')}>
        <Text style={styles.text}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => changeBackgroundColor('blue')}>
        <Text style={styles.text}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'brown' }]} onPress={() => changeBackgroundColor('brown')}>
        <Text style={styles.text}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]} onPress={() => changeBackgroundColor('yellow')}>
        <Text style={[styles.text, { color: 'black' }]}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => changeBackgroundColor('red')}>
        <Text style={styles.text}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={() => changeBackgroundColor('black')}>
        <Text style={styles.text}>BLACK</Text>
      </TouchableOpacity>

      {/* Nút RESET với biểu tượng replay và hiệu ứng bóng */}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Icon name="replay" size={30} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

// StyleSheet cho các thành phần
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 20,
    marginVertical: 20, // Đã tăng giá trị marginVertical để tạo khoảng cách rộng hơn
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5, // Thêm hiệu ứng bóng cho nút
    shadowColor: '#000', // Màu bóng
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  resetButton: {
    marginTop: 20, // Thêm khoảng cách cho icon reset
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 50, // Tạo nút tròn cho đẹp hơn
    backgroundColor: 'white', // Nền cho nút reset
    padding: 10, // Thêm padding cho nút reset
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;
