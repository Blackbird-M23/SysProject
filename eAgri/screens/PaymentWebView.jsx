// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';
// import Header from '../components/Header';

// const PaymentWebView = ({ route, navigation }) => {
//   const { url } = route.params;

//   const handleNavigation = (navState) => {
//     // Handle success_url and fail_url redirects
//     if (navState.url.includes('payment/success')) {
//       navigation.replace('PaymentSuccess');
//     } else if (navState.url.includes('payment/fail')) {
//       navigation.replace('PaymentFailed');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header title="Payment" />
//       <WebView 
//         source={{ uri: url }}
//         onNavigationStateChange={handleNavigation}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   }
// });

// export default PaymentWebView;
import { View, Text } from 'react-native'
import React from 'react'

const PaymentWebView = () => {
  return (
    <View>
      <Text>PaymentWebView</Text>
    </View>
  )
}

export default PaymentWebView