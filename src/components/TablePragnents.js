import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import './TablePragnents.css'

export default function TablePragnents(props) {
    const { list } = props
    

    return (
        <TableContainer className="table-container">
            <Table stickyHeader>
                <TableHead >
                    <TableRow>
                        <TableCell className="table-head">Nama</TableCell>
                        <TableCell className="table-head">Alamat</TableCell>
                        <TableCell className="table-head">Nomor Hp</TableCell>
                        <TableCell className="table-head">Tanggal Lahir</TableCell>
                        <TableCell className="table-head">Umur</TableCell>
                        <TableCell className="table-head">Kondisi</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
