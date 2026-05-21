import { Component } from "react";

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props
        return (
            <>
                <div>
                    <p>good: {good}</p>
                    <p>neutral: {neutral}</p>
                    <p>bad: {bad}</p>
                    <p>total: {total}</p>
                    <p>positive feedback: {positivePercentage? positivePercentage:0}%</p>
                </div>
            </>
        )
    }
}

export default Statistics