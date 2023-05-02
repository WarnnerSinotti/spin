import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EmailInput from './src/components/input';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Warnner</Text>
      <StatusBar style="auto" />
      <EmailInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
