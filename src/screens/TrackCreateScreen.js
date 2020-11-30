import React,{useEffect, useState} from "react";
import '../_mockLocation'
import { StyleSheet } from "react-native";
import {Text} from 'react-native-elements'
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'
import { apisAreAvailable } from "expo";
const TrackCreateScreen = () => {
    const [err , setErr] = useState(null)

    const startWatching = async () => {
        try {
          const { granted } = 
          await requestPermissionsAsync();
          await watchPositionAsync({
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000, 
              distanceInterval: 10,
          }, (location) => {
              console.log(location)
          });

          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };

    useEffect(() => {
        startWatching();
    }, [])
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
      <Spacer>
          <Text h2>Create a Track</Text>
      </Spacer>
      <Spacer>
        <Map />
        {err ? <Text>Please Enable Location</Text> : null}
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;


