import React from 'react'
import TrendLine from './TrendLine.js'

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class TrendLines extends React.Component {
    render() {
        return (
            <div onClick={() => this.forceUpdate()}>
                <TrendLine
                    data={[0, Math.random() + 0.5, getRand(0.4, 0.8), Math.random() + 0.5, 0]}
                    easing='ease-in'
                />
                <TrendLine
                    data={[0, Math.random() + 0.5, getRand(0.4, 0.8), Math.random() + 0.5, 0]}
                    easing='ease-out'
                />
            </div>
        );
    }
}

export default TrendLines
