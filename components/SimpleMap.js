import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import settings from '../settings'

const containerStyle = {
  width: '100%',
  height: '100%',
  position: 'fixed'
};

const onLoad = marker => {
 // console.log('marker: ', marker)
}


function SimpleMap({mapData}) {
  const center = {
    lat: mapData[0].lat,
    lng: mapData[0].lng
  };

  const markerClicked = e => {
    this.setState({isActive: e.domEvent.srcElement.title});
  }

    return (
      <LoadScript
        googleMapsApiKey={settings.googleMaps.apiKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          
          {mapData.map((p, i) => {
      
            // find div whose aria-label matches the marker title, and add the html data attribute for the marker slug.


              const position = {
                lat: p.lat,
                lng: p.lng
              }

              return (
                <Marker
                  onLoad={onLoad}
                  onClick={markerClicked}
                  position={position}
                  clickable={true}
                  title={p.name}
                  key={i}
                >

                </Marker>
              )
            })
          }


          <></>
        </GoogleMap>
      </LoadScript>
    )
}

export default SimpleMap;
