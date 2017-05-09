'use strict';

import React from 'react'
import {render} from 'react-dom'
import {styles} from '../styles/website.sass'

import MenuButton from '../img/menu_button.svg'
import FaceFrame from '../img/face_frame.svg'

const venom_green = '#00a651';

function Layers() {
    return(
        <div id="layers">
            <div id="green_layer_top"/>
            <div id="gray_layer"/>
            <div id="green_layer_bot"/>
        </div>
    )
}
function TextHeader(props) {
    return(
        <div className="text_header" style={{'color': props.color}}>{props.text}</div>
    )
}
function TopMenu() {
    return(
        <div id="top_menu">
            <TextHeader text="Egor Ignatyev" color={venom_green}/>
            <MenuButton id="top_menu_button" width={40} height={40}/>
        </div>
    )
}
function BlockHeader() {
    return(
        <div id="block_header">About Me
        </div>
    )
}
function MainPhoto() {
    return(
        <div id="main_photo">
            <FaceFrame id="face_frame" width={300} height={300}/>
            <img id="face" src="http://i60.tinypic.com/4rdhnc.png"/>
        </div>
    )
}
function Bio() {
    return(
        <div id="bio">
            <TextHeader text="Software Tester" color={venom_green}/>
            <div id="bio_text">
                <span>Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be.</span><br/><br/>
                <span>Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be.</span><br/><br/>
                <span>Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end.</span>
            </div>
        </div>
    )
}
function SkillsList() {
    return(
        <ul id="skills_list">
            <li>XML tag has empty body</li>
            <li>XML tag has empty body</li>
            <li>XML tag has empty body</li>
            <li>XML tag has empty body</li>
        </ul>
    )
}
function Skills() {
    return(
        <div id="skills">
            <TextHeader text="My Skills" color="white"/>
            <SkillsList/>
            <SkillsList/>
        </div>
    )
}
function ToolsList() {
    return(
        <div>

        </div>
    )
}
function Tools() {
    return(
        <div id="tools">
            <TextHeader text="Tools Used By Me" color="white"/>
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
            <Layers/>
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
