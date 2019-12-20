import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer style={headerStyle}>
            <h1>CENIMA ONE</h1>
            <p>copyrights for CENIMA ONE 2019</p>
            {/* <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/login">Login</Link> */}
        </footer>
    )
}

const headerStyle={
    background: '#333',
    color: '#fff',
    textAlign: 'center'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

