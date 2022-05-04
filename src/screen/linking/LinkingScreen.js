import React from 'react';
import {StyleSheet, View, Button, Linking} from 'react-native';

const LinkingScreen = () => {
  return (
    <View style={styles.screen}>
      <Button
        title={'웹페이지 열기'}
        onPress={() => Linking.openURL('https://www.google.com')}
      />
      <Button
        title={'전화 걸기'}
        onPress={() => Linking.openURL('tel:01012341234')}
      />
      <Button
        title={'문자 보내기'}
        onPress={() => Linking.openURL('sms:01012341234')}
      />
      <Button
        title={'이메일 보내기'}
        onPress={() => Linking.openURL('mailto:test@mail.com')}
      />
      <Button
        title={'URL 체크하고 전화걸기'}
        onPress={() => {
          let phoneNumber = 'tel:01012341234';
          Linking.canOpenURL(phoneNumber)
            .then(supported => {
              if (!supported) {
                console.log('지원안됨');
              } else {
                console.log('지원됨');
                return Linking.openURL(phoneNumber);
              }
            })
            .catch(error => {});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default LinkingScreen;
