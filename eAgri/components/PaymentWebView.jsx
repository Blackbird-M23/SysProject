import React from 'react';
// import { WebView } from 'react-native-webview';
import { useRoute, useNavigation } from '@react-navigation/native';

const PaymentWebView = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { paymentUrl } = route.params;

  const handleNavigationStateChange = (navState) => {
    // Handle success/fail URLs here
    if (navState.url.includes('payment/success')) {
      navigation.navigate('PaymentSuccess');
    } else if (navState.url.includes('payment/fail')) {
      navigation.navigate('PaymentFailed');
    }
  };

  return (
    <WebView
      source={{ uri: paymentUrl }}
      onNavigationStateChange={handleNavigationStateChange}
      startInLoadingState={true}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
};

export default PaymentWebView; 