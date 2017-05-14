import React from 'react'
import styled from 'styled-components'

import Jumbotron from './Jumbotron.js'
import NavBar from './NavBar.js'
import Footer from './Footer.js'
import A from './A.js'

import './Home.css'

// import office from './media/office.png'
// import thuglife from './media/thuglife.png'

// const Img1 = styled.img`
//     position: fixed;
//     bottom: 0;
//     left: 30px;
//     height: 115px;
//     width: 100px;
// `
//
// const Img2 = styled.img`
//     position: fixed;
//     bottom: 0;
//     right: 0;
//     height: 150px;
// `

const StickyFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Home = (props) => (
    <StickyFooterWrapper>
        <Jumbotron />
        <NavBar />
        <Footer className='animated fadeIn'>
            Not a template.
            <br />
            Made with 💪 in 🇺🇸.
            <br />
            Fork me on <A href='https://github.com/johncmunson/jcm'><u>Github.</u></A>
        </Footer>
        {/* <Img1 className='animated fadeIn' src={thuglife} /> */}
        {/* <Img2 className='animated fadeIn' src={office} /> */}
    </StickyFooterWrapper>
)

export default Home
