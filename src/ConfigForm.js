import React from 'react';
//impor
const ec = require('./electron-config');
class ConfigForm extends React.Component{
    constructor(props){
        super(props);

        // Set initial state
        this.state = {
            atomicNo: 10
        }

        this.setAtomicNo = this.setAtomicNo.bind(this);
    }

    // handler
    setAtomicNo(e) {
        // Update data
        //this.state.atomicNo = );
        // Update state
        this.setState({atomicNo: parseInt(this._inputElement.value)});

        e.preventDefault();
    }
//<input type="submit" value="Get Config" />
    render() {
        return (
            <div className="form-input">
                <form onSubmit={this.setAtomicNo}>
                    <label>
                        <input className="input" ref={(a) => this._inputElement = a} type="number" name="atomicno" placeholder="Enter Atomic No" />
                        <button className="btn" type="submit">Get Config</button>
                    </label>
                </form>
                <div className="form-output">
                    Atomic Number: {this.state.atomicNo}
                    <div className="econfig">
                {ec.getConfiguration(this.state.atomicNo).map((x) => {return <li>{x}</li>})}
                </div>
            </div>
            </div>
            
        )
    }
}

export default ConfigForm;