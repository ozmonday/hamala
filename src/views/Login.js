import React, { Component } from 'react'
//import { Grid } from '@material-ui/core'
import './Login.css'
import InputPassword from '../components/InputPassword'
import Logo from '../assets/icons/logo_berwarna.svg'

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
    }


    docResize() {
        this.setState({
            size : window.innerWidth
        })
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
                    <div className="cell-form"><button className="masuk">Masuk</button></div>
                    <div className="cell-form"><span className="regis-link">Daftar untuk memiliki akun, Daftar</span></div>
                    </div>
            </div>
        )
    }
}

export default Login
