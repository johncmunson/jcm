import React from 'react'
import styled from 'styled-components'

const Title = styled.p`
    margin: 85px auto 0 auto;
    text-align: center;
    color: #16BFFD;
    font: italic 500 1.5em/1.5 Roboto, sans-serif;
    letter-spacing: 0.5em;
    @media (min-width: 651px) {
        margin-top: 240px;
    }
    @media (max-height: 400px) and (min-width: 651px) {
        margin-top: 90px;
    }
`

const SubTitle = styled.p`
    margin: 0 auto 45px auto;
    font: italic 300 1.5em/1.5 Roboto, sans-serif;
    text-align: center;
    color: #16BFFD;
    letter-spacing: 0.45em;
    @media (min-width: 651px) {
        margin-bottom: 70px;
    }
`

const S = styled.span`
    text-shadow: #CB3066 0.5px 0.5px 0px;
`

const Heading = (props) => (
    <div>
        <Title
            className='animated fadeIn'
        >
            <S>j</S>
            <S>o</S>
            <S>h</S>
            <S>n</S>
            <S> </S>
            <S>m</S>
            <S>u</S>
            <S>n</S>
            <S>s</S>
            <S>o</S>
            <S>n</S>
        </Title>
        <SubTitle
            className='animated fadeIn'
        >
            <S>w</S>
            <S>e</S>
            <S>b</S>
            <S> </S>
            <S>d</S>
            <S>e</S>
            <S>v</S>
            <S>e</S>
            <S>l</S>
            <S>o</S>
            <S>p</S>
            <S>e</S>
            <S>r</S>
        </SubTitle>
    </div>
)

export default Heading
