import {Component} from "react";

class Test1 extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {name: 'Hieu', age: 23},
                {name: 'Nam', age: 25},
                {name: 'Linh', age: 22}
            ],
            inName: '',
            inAge: '',
            ind: '',
            name: '',
            isShow: false
        }
    }

    add = () => {
        this.setState((state) => {
            return {
                list: [...state.list, {name: this.state.inName, age: this.state.inAge}],
                inName: '',
                inAge: ''
            }
        })
    }
    change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    showValueEdit = (e) => {
        let a = e.target.value
        this.state.list.map((item, ind) => {
            if (ind === +a) {
                this.setState({inName: item.name})
                this.setState({inAge: item.age})
                this.setState({ind: a})
            }
        })
        this.setState(state => {
            return {
                isShow: !state.isShow
            }
        })
    }
    edit = () => {
        this.setState((state) => {
            state.list.map((item, ind) => {
                if (ind === +state.ind) {
                    item.name = state.inName
                    item.age = state.inAge
                }
            })
            return {
                state,
                inName: '',
                inAge: '',
                isShow: !state.isShow
            }
        })
    }

    render() {
        return (
            <>
                {this.state.list.map((item, ind) => (
                    <>
                        <h1 key={ind}>name: {item.name} - age: {item.age}</h1>
                        {!this.state.isShow && <>
                            <button value={ind} key={ind} onClick={(e) => {this.showValueEdit(e)}}>Edit</button>
                            <button key={ind} onClick={(e) => {
                                this.setState( state => {
                                    let oldList = [...state.list];
                                    oldList.splice(ind, 1);
                                    return {
                                        list: oldList
                                    }
                                })
                            }}>Delete</button>
                        </>}
                        <br/>
                    </>
                ))}
                <br/>
                <input type="text" name={"inName"} value={this.state.inName} onChange={this.change}/>
                <input type="text" name={"inAge"} value={this.state.inAge} onChange={this.change}/>
                {!this.state.isShow && <button onClick={this.add}>SAVE</button>}
                {this.state.isShow && <button onClick={this.edit}>Edit</button>}
                <br/>
            </>
        )
    }
}

export default Test1;