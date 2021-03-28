import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

export default function Pragnent(props) {
    const { data } = props;
    
    return (
        <TableRow>
            <TableCell component="th" scope="row">{data.name}</TableCell>
            <TableCell>{data.address}</TableCell>
            <TableCell>{data.noTelephone}</TableCell>
            <TableCell>{data.dateOfBirth}</TableCell>
            <TableCell>{data.umur}</TableCell>
            <TableCell><Coloring status={data.status}/></TableCell>
        </TableRow>
    )
}


function Coloring(props) {
    const { status } = props;
    let sty
    switch (status) {
        case 'normal':
            sty = {backgroundColor : '#6FB644'}
            break;
        case 'berpotensi':
            sty = {backgroundColor : '#B6A444'}
            break;
        case 'bahaya':
            sty = {backgroundColor : '#FF5A5A'}
            break;
        default:
            sty = {backgroundColor : '#6FB644'}
    }

    return (
        <div style={sty} className="status-color">
            {status}
        </div>
    )
}