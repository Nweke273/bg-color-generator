import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#F0E3CA');
  const [randomButtonColor, setRandomButtonColor] = useState('#C08261');
  const [randomResetButtonColor, setRandomResetButtonColor] =
    useState('#646464');

  const generateColor = () => {
    let combination = 'ABCDEF0123456789';
    let color1 = '#';
    let color2 = '#';
    let color3 = '#';
    for (let i = 1; i <= 6; i++) {
      color1 += combination[Math.floor(Math.random() * 16)];
      color2 += combination[Math.floor(Math.random() * 16)];
      color3 += combination[Math.floor(Math.random() * 16)];
    }
    setRandomBackgroundColor(color1);
    setRandomButtonColor(color2);
    setRandomResetButtonColor(color3);
  };

  const resetBackgroundColor = () => {
    setRandomBackgroundColor('#F0E3CA');
    setRandomButtonColor('#C08261');
    setRandomResetButtonColor('#646464');
  };

  return (
    <View style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
      <View style={styles.textHeader}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>BG COLOR GALLERY</Text>
      </View>
      <View style={styles.actionBtn}>
        <View>
          <TouchableOpacity
            onPress={generateColor}
            style={[{backgroundColor: randomButtonColor}, styles.colorButton]}>
            <Text>Click To Change</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={resetBackgroundColor}
            style={[
              {backgroundColor: randomResetButtonColor},
              styles.colorButton,
            ]}>
            <Text>Reset Background</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  textHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  actionBtn: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  colorButton: {
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
