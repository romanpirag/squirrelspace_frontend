import React from 'react';
import { Link } from 'react-router-dom' 

class Welcome extends React.Component {
    render() {
        return (
            <>
            <Link id="welcomess" to={"/squirrels"}>🌈WELCOME TO 🐿SQUIRRELSPACE v2</Link>
            <h1></h1> 
                <Link to={"/squirrels"}><img className="welcome-img" alt="SquirrelSpace" src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-305430.jpg" /></Link>
            </>
        )
    }
}






export default Welcome 