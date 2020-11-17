import React from 'react'
import {View, Text, StyleSheet,Button} from 'react-native'

const TrackDetailScreen = ({navigation}) => {
    return (
    <>
        <Text style={{fontSize:48}}>TrackDetailScreen</Text>
        <Button onPress={() =>navigation.navigate('TrackList') } title="go to Track List"/>

    </>

    )
}

const styles = StyleSheet.create({

})

export default TrackDetailScreen;