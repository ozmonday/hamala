import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
//import './home.css'
import LeftNav from '../components/LeftNav'
import AppBar from '../components/AppBar'
import Map from './Map'
import Pragnents from './Pragnents'
import firebase from 'firebase/app'
import 'firebase/firebase-firestore'




class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            currentMenu : Map.subStateName
        }

        this.setCurrentMenu = this.setCurrentMenu.bind(this)
        this.db = firebase.firestore()

    }
    
    //this is name of state
    static stateName = 'Home'

    //function to change current menu
    setCurrentMenu(menu) {
        this.setState({
            currentMenu : menu
        })
    }

    //function to load data user from server dan save to temporary data storage on web stote 
    loadData() {
        this.db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                console.log(doc.data());
            });
        });
    }

    setMenu(title) {
        let menu
        switch (title) {
            case Map.subStateName:
                menu = <Map />;
                break;
            case Pragnents.subStateName:
                menu = <Pragnents />;
                break;
            default:
                return <Map />;
        }
        return menu
    }

    
    componentWillMount() {
        this.loadData()
    }

    render() {
        return (
            <div>
                <Grid container >
                    <Grid item  xs={3}>
                        <LeftNav setfuc={this.setCurrentMenu} current={this.state.currentMenu}/>
                    </Grid>
                    <Grid item xs={9} >
                        <AppBar title={this.state.currentMenu}></AppBar>
                        {this.setMenu(this.state.currentMenu)}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home

