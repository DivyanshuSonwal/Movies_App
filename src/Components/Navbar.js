import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display: 'flex' ,background: '#008080'}}>
            <Link to='/' style={{textDecoration:'none'}} ><h1 style={{marginLeft:'1.5rem',fontSize:'3rem',color:'#FFFFF7'}} >Movies App</h1></Link>
            <Link to='/favourites' style={{textDecoration:'none'}}><h2 style={{marginLeft: '2rem' ,marginTop: '1rem',color:'#FFFFF7'}}>Favourites</h2></Link>
            </div>
        )
    }
}
