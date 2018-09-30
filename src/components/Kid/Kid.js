import React from 'react'
export default class Kid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emotion: 'nervous', 
            danceSteps: [], 
            currentStepIndex: 0,
            startedPerforming: false,
            volume : 0
        };
    }
    qualified() {
        this.setState({ startedPerforming: false })
    }
    componentDidMount(){
        this.setState({danceSteps : ['Step1' , 'Step2']} , ()=>{
        })
    }
    componentWillUnmount(){
        this.props.func()
    }
    static getDerivedStateFromProps(nextProps , state){
        console.log("getderivedState" , state);
        console.log("getderivedProps" , nextProps);

        if(nextProps.flag && state.danceSteps.length === 2){
            let danceSteps = state.danceSteps
            let newSteps = danceSteps.concat(nextProps.furtherSteps)
            return {
                danceSteps : newSteps,
                startedPerforming : true,
                volume : 5
            }                
        }
        if(nextProps.applaud === true){
            return {
                emotion : "happy"
            }
            
        }
        if(state.currentStepIndex === 4){
            return{
                startedPerforming : false
            }
        }

        
    }
    render() {
        console.log(this.state);
        
        const { dressColor } = this.props;
        const { danceSteps, emotion, startedPerforming , volume } = this.state;
        let { currentStepIndex } = this.state;
        console.log(danceSteps);
        
        return (
            <div className="my-4">
                <div >dressColor: {dressColor})</div>
                <div>Volume: {volume})</div>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50 , display : "inline-block" , margin: "0 auto" }}></div>
                <div>Emotion: {emotion})</div>
                {
                    startedPerforming &&
                    <div>
                        Current Step: {danceSteps[currentStepIndex]}
                        <button onClick={() => this.setState({ currentStepIndex: ++currentStepIndex })} className="btn btn-primary mx-2">Perform Next Step</button>
                    </div>
                }
            </div>

        );
    }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] ,  flag : false };