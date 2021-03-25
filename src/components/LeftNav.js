import React from 'react'
import './LeftNav.css'

import ButtonNav from './ButtonNav'
import Map from '../views/Map'
import Pragnents from '../views/Pragnents'

import Logo from '../assets/icons/logo_putih.svg'
import IconHome from '../assets/icons/home.svg'
import IconHomeAct from '../assets/icons/home_act.svg'
import PragnentWomanAct from '../assets/icons/pregnant_woman_act.svg'
import PragnentWoman from '../assets/icons/pregnant_woman.svg'


export default function LeftNav(props) {
    const { setfuc, current } = props;
    return (
        <div className="side-nav-root">
            <div id="logo"><img src={Logo} alt="logo"/></div>
            <div className="menu">
                <ButtonNav status={current} onclick={setfuc} nama={Map.subStateName} icon={IconHome} acticon={IconHomeAct}/>
                <ButtonNav status={current} onclick={setfuc} nama={Pragnents.subStateName} icon={PragnentWoman} acticon={PragnentWomanAct}/>
            </div>
        </div>
    )
}
