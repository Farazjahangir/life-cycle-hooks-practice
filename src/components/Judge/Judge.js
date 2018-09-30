import React from 'react';
export default class Judge extends React.Component {
    constructor(props) {
        super()
        this.state = { stars: 0, available: false }
        this.applaud = this.applaud.bind(this)
        this.provideStars = this.provideStars.bind(this)
    }
    applaud() {
        console.log("judge" , this.props);
        this.props.applaudFunc(true)
        //Send this applaud status to Kid.js
    }
    provideStars() {
        let { stars } = this.state;
        if(stars === 4){
            this.setState({qualified :" Kid qualified"} , ()=>{
                console.log(this.state);
                
            })
        }
        this.setState({ stars: ++stars })
    }
    shouldComponentUpdate(){
        if(this.state.stars >= 5){
            return false
        }
        return true
    }
    render() {
        const { stars, available , qualified } = this.state;
        return (
            <div className="my-4">
                <div>Qualified : {qualified}</div>
                <button type="button" onClick={this.applaud} className="btn btn-success">Appreciate performance</button>
                <button type="button" onClick={this.provideStars} className="btn btn-danger mx-2">Provide stars</button>
                Kid is available: {available}
                Stars gained: {stars}
            </div>
        );
    }
}