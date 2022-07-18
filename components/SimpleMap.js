import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import settings from '../settings'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  

  render() {
    this.props.mapData.map((p, i) => (
      console.log(p)
    ))

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '50vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: settings.googleMaps.apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          {this.props.mapData.map((p, i) => (
                <AnyReactComponent
                key={i}
                lat={p.latitude}
                lng={p.longitude}
                text={p.name}
              />
              ))
            }
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;