import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core'
import './Pragnents.css'
import Search from '../components/Search'
import TablePragnents from '../components/TablePragnents'
import Pragnent from '../components/Pragnent'

class Pragnents extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            users : props.users           
        }
    }

    static subStateName = 'Ibu hamil';

  
    
    render() {
        console.log(this.props.users)
        let data = this.state.users.map((d, i) => <Pragnent key={i} data={d}/>  )

        return (
            <Container>
                <div className='root-pragnents'>
                    <span>tag title</span>
                    <Grid container>
                        <Grid item xs={12} className="list-pragnents">
                            <Grid container>
                                <Grid item xs={8}>
                                    <div className="cell"><span>Ibu Hamil</span></div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="cell">
                                        <Search/>
                                    </div>
                                </Grid>
                                </Grid>                        
                                <Grid container>
                                    <Grid item xs={12}>
                                    <TablePragnents list={data}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
            </Container>
        )
    }
}

export default Pragnents
