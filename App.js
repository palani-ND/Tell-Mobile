import React,{useEffect} from 'react';
import { StyleSheet, View,SafeAreaView,Platform ,Alert} from 'react-native';
import { WebView } from 'react-native-webview';
import { Audio } from 'expo-av';


export default function App() {
  useEffect(() => {
    const getPermissions = async () => {
        const { status: microphoneStatus } = await Audio.requestPermissionsAsync();
        const { status: speakerStatus } = await Audio.requestPermissionsAsync();
      if (microphoneStatus !== 'granted') {
        Alert.alert(
          'Microphone Access Required',
          'This app requires access to your microphone.',
          [{ text: 'OK', onPress: () => console.log('OK pressed') }]
        );
      }

      if (speakerStatus !== 'granted') {
        Alert.alert(
          'Speaker Access Required',
          'This app requires access to your speaker.',
          [{ text: 'OK', onPress: () => console.log('OK pressed') }]
        );
      }
    };

    getPermissions();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    
      <WebView
        source={{ uri: 'https://a5e0-103-156-100-11.ngrok-free.app' }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
