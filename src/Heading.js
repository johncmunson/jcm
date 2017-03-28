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
    margin: 0 auto 20px auto;
    font: italic 300 1.5em/1.5 Roboto, sans-serif;
    text-align: center;
    color: #16BFFD;
    letter-spacing: 0.5em;
    @media (min-width: 651px) {
        margin-bottom: 70px;
    }
`

const Heading = (props) => (
    <div>
        <Title
            className='animated fadeIn'
        >
            john munson
        </Title>
        <SubTitle
            className='animated fadeIn'
        >
            web developer
        </SubTitle>
    </div>
)

export default Heading
