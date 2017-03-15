import React from 'react'
import Trend from 'react-trend'
import styled from 'styled-components'

const StyledTrend = styled(Trend)`
    position: absolute;
    top: 5vw;
    @media (min-width: 651px) {
        top: 10vw;
    }
`

const TrendLine = (props) => (
    <StyledTrend
        data={props.data}
        autoDraw
        autoDrawDuration={2000}
        autoDrawEasing={props.easing}
        gradient={['#16BFFD', '#CB3066']}
        smooth
        radius={15}
        strokeWidth={0.3}
    />
)

export default TrendLine
