import React from 'react'
import "./header.css"
import logo from "../../asset/img/cooklogo.png"

const  Header = ({onChange, value,getsearch}) => {
    return (
        <div className="header">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="input">
                <input type="text" value={value} onChange={onChange} />
                <button onClick={getsearch}>Search</button>
                </div>
        </div>
    )
}

export default Header
