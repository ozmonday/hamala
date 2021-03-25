import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'
import './MarkerPragnent.css'
import Hijau from '../assets/icons/person_pin_hijau.svg'
import Kuning from '../assets/icons/person_pin_kuning.svg'
import Merah from '../assets/icons/person_pin_merah.svg'
export default function MarkerPragnent(props) {
    const { position, data } = props;
    let icon

    switch (data.status) {
        case "normal":
            icon = Hijau
            break;
        case "warning":
            icon = Kuning
            break;
        case "danger":
            icon = Merah
            break;
        default:
            icon = Hijau;
    }

    const markericon = Leaflet.icon({
        iconUrl: icon,
        iconSize: [50, 110],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    })

    return (
        <Marker icon={markericon} position={position} >
            <Popup>
                <div className="keterangan">
                    <table>
                        <tbody>
                        <tr>
                            <td><div className="col-t">Nama</div></td>
                            <td><div className="col-t">:</div></td>
                            <td>Santika Devi</td>
                        </tr>
                        <tr>
                            <td><div className="col-t">Umur</div></td>
                            <td><div className="col-t">:</div></td>
                            <td>15 tahun</td>
                        </tr>
                        <tr>
                            <td><div className="col-t">Alamat</div></td>
                            <td><div className="col-t">:</div></td>
                            <td> Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</td>
                        </tr>
                        <tr>
                            <td><div className="col-t">Kondisi</div></td>
                            <td><div className="col-t">:</div></td>
                            <td>Sehat</td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            </Popup>
        </Marker>
    )
}
