import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

export default function Pragnent(props) {
    const { data } = props;
    
    return (
        <TableRow>
            <TableCell component="th" scope="row">{data.nama}</TableCell>
            <TableCell>{data.alamat}</TableCell>
            <TableCell>{data.phone}</TableCell>
            <TableCell>{data.ttg}</TableCell>
            <TableCell>{data.umur}</TableCell>
            <TableCell>{data.status}</TableCell>
        </TableRow>
    )
}
