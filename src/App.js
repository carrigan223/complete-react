import React, { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list'

class App extends Component {
    constructor() {
        super()

        this.state = {
            users: [],
            searchInput: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ users: users }))
    }

    render() {
        return (
            <div className="App">
                <input
                    onChange={(e) =>
                        this.setState({ searchInput: e.target.value })
                    }
                    type="search"
                    placeholder="Search Monsters"
                />
                <CardList users={this.state.users}></CardList>
            </div>
        )
    }
}

export default App
