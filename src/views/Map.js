import React, { Component } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import MarkerPragnent from '../components/MarkerPragnent'


export class Map extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            currentPosition: [-7.2398865011054125, 109.9688044599387],
        }

    }

    static subStateName = 'Geografis'


    
    render() {
        const position = [this.props.center.latitude, this.props.center.longitude]
        console.log(`klinik: ${position}`)
        let markers = this.props.users.map((d, i) => <MarkerPragnent key={i} position={[d.positionLat, d.positionLong]} data={d} />)
        return (
            <MapContainer style={{ width: '100%', height: '91.5vh'}} center={this.state.currentPosition} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {this.props.users.length !== 0 ?  markers : null}
            </MapContainer>
        )
    }
}

export default Map
