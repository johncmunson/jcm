import React from 'react'
import TrendLine from './TrendLine.js'

const TrendLines = (props) => (
    <div>
        <TrendLine data={[0, Math.random(), Math.random(), Math.random(), 0]} easing='ease-in' />
        <TrendLine data={[0, Math.random(), Math.random(), Math.random(), 0]} easing='ease-out' />
    </div>
)

export default TrendLines
