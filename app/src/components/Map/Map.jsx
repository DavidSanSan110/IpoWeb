import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

export default function Map(props) {

    const [latlong, setLatLong] = useState({lat: 0, lng: 0});
    const [loading, setLoading] = useState(true);

    const containerStyle = {
        width: '600px',
        height: '300px'
      };

      function onLoad () {
        
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: props.direction }, (results, status) => {
          if (status === "OK") {
            setLatLong({lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()});
            console.log(results[0].geometry.location.lat());
            console.log(results[0].geometry.location.lng());
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
          setLoading(false);
        });
      }

      return (
            <> 
            <LoadScript googleMapsApiKey="AIzaSyDo6m_3efbI6Kj2rlu_7NNUVySNEUBXuZA" onLoad={onLoad}>
              
              {!loading && <GoogleMap
                mapContainerStyle={containerStyle}
                center={latlong}
                zoom={15}
              >
                <Marker
                  position={latlong}
                />
              </GoogleMap>}

            </LoadScript> 
        </>
    );
}