import React from 'react'
import Jumbotron from './Jumbotron.js'
import NavBar from './NavBar.js'
import Footer from './Footer.js'
import styled from 'styled-components'
import './App.css'

const StickyFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const App = (props) => (
    <StickyFooterWrapper>
        <Jumbotron />
        <NavBar />
        <Footer className='animated fadeIn'>
            Not a template.
            <br />
            Made with 💪 in 🇺🇸.
            <br />
            Fork me on Github.
        </Footer>
    </StickyFooterWrapper>
)

export default App
