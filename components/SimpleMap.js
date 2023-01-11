import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import settings from '../settings'

const containerStyle = {
  width: '100%',
  height: '100%',
  position: 'fixed'
};




const onLoad = marker => {
  console.log('marker: ', marker)
}


class SimpleMap extends Component {
  render() {
    const center = {
      lat: this.props.mapData[0].lat,
      lng: this.props.mapData[0].lng
    };

    return (
      <LoadScript
        googleMapsApiKey={settings.googleMaps.apiKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          
          {this.props.mapData.map((p, i) => {
            const position = {
              lat: p.lat,
              lng: p.lng
            }

            return (<Marker
              onLoad={onLoad}
              position={position }
              label={p.name}
              key={i}
            />)
        })
            }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default SimpleMap;
