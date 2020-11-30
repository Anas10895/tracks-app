import * as Location from 'expo-location'

const tenMetersWithDgree = 0.0001;

const getLocation = increment  => {
    return {
        timeStamp:100000,
        coords:{
            speed: 1,
            heading: 5,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 39.227759 + increment * tenMetersWithDgree,
            latitude: 515231 + increment * tenMetersWithDgree,

        }
    };
}

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
