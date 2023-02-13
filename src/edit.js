import { Component } from "react";

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            isShow: false,
            list: [
                {
                    name: 'a',
                    age: 19
                },
                {
                    name: 'b',
                    age: 20
                },
                {
                    name: 'c',
                    age: 21
                }
            ],
            inputName: '',
            inputAge: '',
        }
    }

    render() {
        return (
            <>
                Name: <input type="text" name = {'inputName'} value = {this.props.name} onChange={this.change}/><br/>
                Age: <input type="text" name = {'inputAge'} value = {this.props.age} onChange={this.change}/><br/>
                    <button onClick={() => {
                        this.setState(state =>{
                            let oldList = [...state.list];
                            oldList.splice(this.props.ind, 1, {name: state.inputName, age: state.inputAge});
                            return {
                                list: oldList,
                                inputName: '',
                                inputAge: '',
                                isShow: !state.isShow
                            }
                        })
                    }}>Save</button>
            </>
        )
    }
}