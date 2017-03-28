import React from 'react'
import styled from 'styled-components'
import A from './A.js'

const NavItem = styled.div`
    font: italic 300 1em/1.5 Roboto;
    color: #16BFFD;
    @media (max-width: 650px) {
        margin-bottom: 1.5em;
    }
`

const Nav = styled.nav`
    margin: 0 auto 30px auto;
    display: flex;
    text-align: center;
    justify-content: space-around;
    width: 80vw;
    @media (max-width: 650px) {
        flex-direction: column;
    }
    @media (min-width: 775px) {
        width: 70vw;
    }
    @media (min-aspect-ratio: 1/1) {
        flex-direction: row;
    }
`

const NavBar = (props) => (
    <Nav className='animated fadeIn'>
        <NavItem><A href='https://github.com/johncmunson'>github</A></NavItem>
        <NavItem><A href='https://twitter.com/curtismunson'>twitter</A></NavItem>
        <NavItem>about</NavItem>
        <NavItem><A href='https://registry.jsonresume.org/johnmunson'>resume</A></NavItem>
        <NavItem><A href='#'>portfolio</A></NavItem>
        <NavItem><A href='https://www.linkedin.com/in/john-munson/'>linkedin</A></NavItem>
        <NavItem><A href='https://unsplash.com/@johnmunson'>photography</A></NavItem>
    </Nav>
)

export default NavBar
