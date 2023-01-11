import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import settings from '../settings'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const onLoad = marker => {
  console.log('marker: ', marker)
}


class SimpleMap extends Component {
  render() {
    this.props.mapData.map((p, i) => (
      console.log(p)
    ))

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
              lat: Number(p.latitude),
              lng: Number(p.longitude)
            }

            return (<Marker
              onLoad={onLoad}
              position={position }
              label={p.name}
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
