import React, { Component } from 'react'
import './Login.css'
import InputPassword from '../components/InputPassword'
import Logo from '../assets/icons/logo_berwarna.svg'
import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            protected: true,
            size : window.innerWidth
        }

        this.inputUsename = React.createRef()
        this.inputPassword = React.createRef()
        this.size = React.createRef()

        this.docResize = this.docResize.bind(this)
        this.authentication = this.authentication.bind(this)

        this.db = firebase.firestore()
    }


    docResize() {
        this.setState({
            size : window.innerWidth
        })
    }

    authentication() {
        const username = this.inputUsename.current.value
        const password = this.inputPassword.current.value
        // console.log(username)
        // console.log(password)

        this.db.collection("admin").where("username", "==", username).limit(1).get().then((qs) => {
            console.log(qs.docs.length);
            qs.forEach((doc) => {
                console.log(doc.id)
                if (password === doc.data().password) {
                    localStorage.userid = doc.id
                    window.location = "/"
                    
                }
            });
        });
       
        //fiture of auth
        //window.location = "/"
    }



    componentWillMount() {
        window.onresize = () => {
            this.docResize()
            this.state.size <= 500 ?  this.size.current.style.minWidth = "85%" : this.size.current.style.minWidth = "400px"
        }
    }
    
    render() {
        return (
            <div className="root-login-form">
                <div ref={this.size} className="paper-form-login" >
                    <div className="cell-form"> <img src={Logo} alt="logo"/></div>
                    <div className="cell-form"><span className="title">Masuk</span></div>
                    <div className="cell-form"><span className="sub-instruction">Masuk pada akun yang sudah terdaftar</span></div>
                    <div className="cell-form"><input className="input-field" ref={this.inputUsename} placeholder="username" /></div>
                    <div className="cell-form"><InputPassword ref={this.inputPassword} /></div>
                    <div className="cell-form"><span className="forget-link">Lupa kata sandi ?</span></div>
                    <div className="cell-form"><button className="masuk" onClick={this.authentication}>Masuk</button></div>
                    <div className="cell-form"><span className="regis-link">Daftar untuk memiliki akun, Daftar</span></div>
                    </div>
            </div>
        )
    }
}

export default Login
