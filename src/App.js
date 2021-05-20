import React, { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list'

class App extends Component {
    constructor() {
        super()

        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ users: users }))
    }

    render() {
        console.log(this.state.users)
        return (
            <div className="App">
                <div>
                    {this.state.users.map(({ id, name, username }) => (
                        <div key={id}>
                            <CardList id={id} />
                            <h1>{name}</h1>
                            <h2>{username}</h2>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default App
