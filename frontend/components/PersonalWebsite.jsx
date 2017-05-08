'use strict';

import React from 'react';
import {render} from 'react-dom';
import {styles} from '../styles/website.sass';


function TopMenu() {
    return(
        <div id="top_menu">
        </div>
    )
}
function BlockHeader() {
    return(
        <div id="block_header">
        </div>
    )
}
function MainPhoto() {
    return(
        <div id="main_photo">
            <img src="http://i60.tinypic.com/4rdhnc.png"/>
        </div>
    )
}
function Bio() {
    return(
        <div id="bio">bio
        </div>
    )
}
function Skills() {
    return(
        <div id="skills">skills
        </div>
    )
}
function Tools() {
    return(
        <div id="tools">tools
        </div>
    )
}
function Education() {
    return(
        <div id="education">education
        </div>
    )
}
function Courses() {
    return(
        <div id="courses">courses
        </div>
    )
}
function Buttons() {
    return(
        <div id="buttons">buttons
        </div>
    )
}


function PersonalWebsite() {
    return(
        <div style={styles}>
            <TopMenu/>
            <BlockHeader/>
            <MainPhoto/>
            <Bio/>
            <Skills/>
            <Tools/>
            <Education/>
            <Courses/>
            <Buttons/>
        </div>
    )
}

const initRender = () => {
    render(
        <PersonalWebsite/>,
        document.getElementById('root')
    )
};

export default initRender
