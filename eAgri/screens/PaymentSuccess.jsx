// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const PaymentSuccess = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Icon name="checkmark-circle" size={80} color="green" />
//       <Text style={styles.title}>Payment Successful!</Text>
//       <Text style={styles.message}>Your order has been placed successfully</Text>
//       <TouchableOpacity 
//         style={styles.button}
//         onPress={() => navigation.navigate('Home')}
//       >
//         <Text style={styles.buttonText}>Back to Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   button: {
//     backgroundColor: '#00b1ff',
//     padding: 15,
//     borderRadius: 8,
//     width: '80%',
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });

// export default PaymentSuccess;


import { View, Text } from 'react-native'
import React from 'react'

const PaymentSuccess = () => {
  return (
    <View>
      <Text>PaymentSuccess</Text>
    </View>
  )
}

export default PaymentSuccess