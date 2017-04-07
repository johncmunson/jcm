import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import office from './media/office.png'
import thuglife from './media/thuglife.png'
import profile from './media/profile-blue.png'

const ProfileImg = styled.img`
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 5vw;
    margin-bottom: 3vw;
    width: 180px;
`

const P = styled.p`
    margin: 0 10vw 7vw 10vw;
    font: italic 500 1em/1.25 Roboto;
    color: #108FBD;
    white-space: pre-wrap;
`

const StyledLink = styled(Link)`
    color: #108FBD;
    font: italic 500 1em/1.25 Roboto;
`

const Back = styled(Link)`
    display: block;
    color: #108FBD;
    font: italic 500 1em/1.25 Roboto;
    text-align: center;
`

const About = (props) => (
    <div>
        <ProfileImg src={profile} />
        <P>    Hi, my name is John and welcome to my website. I usually like to let my <StyledLink to='/portfolio'>work</StyledLink> speak for itself, but you've found yourself on the About page and clearly want more! Well then...<br/><br/>    I grew up in Bloomington, IL, home to some of the best folks on the planet. Also, State Farm, Beer Nuts, and Steak 'n Shake. I was fortunate to attend University High School, where the technology teacher there helped me discover my passion for engineering and programming.<br/><br/>    From there, I attended Rose-Hulman Institute of Technology, ranked #1 in the nation for undergraduate engineering, to study Civil Engineering (Go Fightin' Engineers!). Other activities included four years playing varsity soccer, president of ASCE, and membership of Triangle Fraternity.<br/><br/>    After college, I wound up in Washington, D.C. working for Clark Construction as a project engineer. This was some of the most challenging and rewarding work I've ever been a part of. One highlight is the year I spent working on the Silverline Metrorail, connecting D.C. to the Dulles Airport and beyond. This multi-billion dollar project taught me what it's like working in large team environments, and that playing your role is equally as important as strong leadership to the success of the project.<br/><br/>    Several years later, I was looking for a change. I loved D.C., but it wasn't home and closer to family is what I wanted. Leaving my job there presented me with a unique opportunity to master another skill I have always been fascinated with--computer programming. After several months of hard work, I had finished DevMountain's web devolpment program in Provo, UT. I'm now working as a full-stack web developer and am loving every minute of it.<br/><br/>    I am available for freelance or consulting work on a limited basis. To contact me, please reach out through <a style={{textDecoration: 'underline', color: '#108FBD'}} href='https://www.linkedin.com/in/john-munson/'>LinkedIn</a>.<br/><br/><Back to='/'>back to home</Back></P>
    </div>
)

export default About
