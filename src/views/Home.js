import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import LeftNav from '../components/LeftNav'
import AppBar from '../components/AppBar'
import Map from './Map'
import Pragnents from './Pragnents'
import Dashboard from './Dashboard'
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
        this.componentDidMount = this.componentDidMount.bind(this)

    }
    
    //this is name of state
    static stateName = 'Home'

    //function to change current menu
    setCurrentMenu(menu) {
        this.setState({
            currentMenu : menu
        })
    }

    // I'am not sure with this code if it can ran clearly ? 
    //function to load data user from server dan save to temporary data storage on web stote 
    async loadData() {
        let admin
        let klinik
        let users = []
        await this.db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                users.push(doc.data())
            });
        });

        await this.db.collection("admin").doc(`${localStorage.userid}`).get().then((doc) => {
            if (doc.exists) {
                admin = doc.data();
            } else {
                console.log("Admin such document!");
            }
        });
        
        console.log(admin.klinik)

        await this.db.collection("klinik").doc(`${admin.klinik.trim()}`).get().then((doc) => {
            if (doc.exists) {
                klinik = doc.data()
            } else {
                console.log("klinik not found")
            }
        })

        return { admin : admin, users : users, klinik : klinik }
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
            case Dashboard.subStateName:
                menu = <Dashboard />
                break;
            default:
                return <Map />;
        }
        return menu
    }

    
    async componentDidMount() {
        console.log(localStorage.userid)
        let data = await this.loadData()
        console.log(data)
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

