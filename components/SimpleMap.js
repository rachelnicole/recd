import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import settings from '../settings'

const containerStyle = {
  width: '400px',
  height: '400px'
};




const onLoad = marker => {
  console.log('marker: ', marker)
}


class SimpleMap extends Component {
  render() {
    const center = {
      lat: Number(this.props.mapData[0].lat),
      lng: Number(this.props.mapData[0].lng)
    };

    console.log(this.props.mapData[0])

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
              lat: Number(p.lat),
              lng: Number(p.lng)
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
