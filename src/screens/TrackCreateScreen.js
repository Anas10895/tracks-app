import React from "react";
import { StyleSheet } from "react-native";
import {Text} from 'react-native-elements'
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
      <Spacer>
          <Text h2>Create a Track</Text>
      </Spacer>
      <Spacer>
        <Map />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
