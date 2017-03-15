import React from 'react'
import styled from 'styled-components'

const NavItem = styled.div`
    font: italic 300 1em/1.5 Roboto;
    color: #16BFFD;
    @media (max-width: 650px) {
        margin-bottom: 2em;
    }
`

const Nav = styled.nav`
    margin: 0 auto;
    display: flex;
    @media (max-width: 650px) {
        flex-direction: column;
    }
    @media (max-width: 775px) {
        width: 80vw;
    }
    text-align: center;
    justify-content: space-around;
    width: 70vw;
`

const A = styled.a`
    color: #16BFFD;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
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
        <NavItem><A href='https://medium.com/@johncmunson91'>blog</A></NavItem>
    </Nav>
)

export default NavBar
