import React from 'react'
import {View, Text, StyleSheet,Button} from 'react-native'

const TrackListScreen = ({navigation}) => {
    return (
    <>
        <Text style={{fontSize:48}}>TrackListScreen</Text>
        <Button onPress={() =>navigation.navigate('TrackDetail') } title="go to Track Detail"/>

    </>

    )
}

const styles = StyleSheet.create({

})

export default TrackListScreen;