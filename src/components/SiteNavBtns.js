import React, { Component } from 'react'

export default class SiteNavBtns extends Component {
    render() {
        return (
            <div className='SiteNavBtns'>
            <div class="siteButtonsDiv">

            <a href="/macbasics"><h1 class="siteButtons">mac basics</h1></a>
            <a href="/workflow"><h1 class="siteButtons">work flow</h1></a>
            <a href="/online"><h1 class="siteButtons">online</h1></a>
            <a href="/search"><h1 class="siteButtons">search</h1></a>  
            <a href="/codemind"><h1 class="siteButtons">code mind</h1></a>
            <a href="/coding"><h1 class="siteButtons">coding</h1></a>
            <a href="/resources"><h1 class="siteButtons">resources</h1></a>

            </div>
        </div>
        )   
    }
}

