import React from 'react'
import {Text, StyleSheet} from 'react-native'
import MapView, {Polyline} from 'react-native-maps'
const Map = () => {

    let Points = []

    for(let i =0; i < 20; i++  ){
        if(i % 2 === 0){
            Points.push({
                latitude: 21.515231 + i * 0.001,
                longitude: 39.227759 + i * 0.001
            })
        }else{
            Points.push({
                latitude: 21.515231 - i * 0.001,
                longitude: 39.227759 + i * 0.001
            })
        }

    }
    return (
        <MapView style={styles.map} 
            initialRegion={{
                latitude: 21.515231,
                longitude: 39.227759,
                latitudeDelta: 0.01 ,
                longitudeDelta:0.01
            }}>
                <Polyline coordinates={Points}/>
        </MapView>

    )
}
const styles = StyleSheet.create({
    map:{
        height:300,
    }
})
export default Map;