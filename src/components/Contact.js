import React from 'react'
import './styles/contact.css'
import { GoogleMap, useLoadScript, useJsApiLoader, Marker } from '@react-google-maps/api';

const Contact = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCaoU_FbC8r9f-d82jcD4FkXb1jQGBGJzg'
    });
    var g = process.env.GOOGLE_MAPS_API_KEY;
    console.log(g)
    if (!isLoaded) return <div>Loading...</div>
    return (
        <section className="contact section" id='contact'>
            <Map />
        </section>
    )
}

export default Contact

function Map() {
    const containerStyle = {
        width: '400px',
        height: '400px'
    };
    return (
        <div className="map">
            <GoogleMap zoom={14} center={{ lat: 44, lng: -80 }} mapContainerClassName={containerStyle}>
            </GoogleMap>
        </div>
    )
}

