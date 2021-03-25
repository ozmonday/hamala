import React, { Component } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import MarkerPragnent from '../components/MarkerPragnent'


export class Map extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             currentPosition : [51.505, -0.09] 
        }

    }

    static subStateName = 'Map'

    componentDidMount() {
        //this.locaation.locate()
    }
    
    render() {
        return (
            <MapContainer style={{ width: '100%', height: '91.5vh'}} center={this.state.currentPosition} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <MarkerPragnent position={this.state.currentPosition} data={{status: "danger"}}/>
            </MapContainer>
        )
    }
}

export default Map
