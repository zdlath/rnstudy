import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
//google map
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const GoogleMapScreen = () => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 35.91395373474155,
    longitude: 127.73829440215488,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });

  return (
    <View style={styles.screen}>
      <MapView
        initialRegion={initialRegion}
        style={[styles.map]}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default GoogleMapScreen;
