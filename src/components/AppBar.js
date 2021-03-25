import React from 'react'
import './AppBar.css'
import { Grid } from '@material-ui/core'

export default function AppBar(props) {
    const { title } = props;
    return (
        <div id="app-bar">
            <Grid container>
                <Grid item xs={11}>
                    <div className="cell-center">
                        <span id="menu-title">{title}</span>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <div className="cell-center">
                        <div id="profile-pic"></div>
                    </div>    
                </Grid>
                
            </Grid>
            </div>
    )
}
