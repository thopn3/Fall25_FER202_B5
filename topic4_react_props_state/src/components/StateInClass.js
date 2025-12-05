import { Component } from "react";

class StateInClassComp extends Component{
    constructor(){
        super();
        this.state = {
            header: "Starting ...",
            content: "React Application"
        }
        console.log("Giai đoạn 1 - Initialization");

        setTimeout(()=>{
            this.setState({
                header: "Done!",
                content: "Loaded data"
            })
        }, 3000);
    }

    componentDidMount(){
        console.log("Giai đoạn 2 - Mounting");
    }

    componentDidUpdate(){
        console.log("Giai đoạn 3 - Updation");
    }

    componentWillUnmount(){
        console.log("Giai đoạn 4 - WillUnMount");
    }

    render(){
        return <div>
            <p>{this.state.header}</p>
            <p>{this.state.content}</p>
        </div>
    }
}

export default StateInClassComp;