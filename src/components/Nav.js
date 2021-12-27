import React, { Component } from 'react'
import globe from "./images/globe.png"
import share from "./images/share.png"

export default class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
            <nav>
                <h1 id="codeCommTitle">code command</h1>
                <h2 id="codeCommTagline">visualize coding, prepare to code, code</h2>

                <img src={globe} alt="Globe Icon" class="socialIcons" id="globe"/>
                <img src={share} alt="Share Icon" class="socialIcons" id="share"/>
            </nav>
        </div>
        )   
    }
}

