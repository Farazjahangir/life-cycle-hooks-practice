import React from 'react';
const furtherSteps = ['step3', 'step4', 'step5']

export default class Teacher extends React.Component {
    constructor(props){
        super(props)
        
    }
    render() {
        const { steps } = this.props
        return (
            <button onClick={()=>{steps(furtherSteps , true)}} className="btn btn-primary">Get Help From Teacher</button>
        );
    }
}