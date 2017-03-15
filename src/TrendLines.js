import React from 'react'
import TrendLine from './TrendLine.js'

class TrendLines extends React.Component {
    render() {
        return (
            <div onClick={() => this.forceUpdate()}>
                <TrendLine
                    data={[0, Math.random(), Math.random(), Math.random(), 0]}
                    easing='ease-in'
                />
                <TrendLine
                    data={[0, Math.random(), Math.random(), Math.random(), 0]}
                    easing='ease-out'
                />
            </div>
        );
    }
}

export default TrendLines
