import React, { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

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

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value })
    }

    render() {
        const { users, searchInput } = this.state
        const filteredUsers = users.filter((monster) =>
            monster.name.toLowerCase().includes(searchInput.toLowerCase())
        )

        return (
            <div className="App">
                <SearchBox
                    placeholder="Search Monsters"
                    handleChange={this.handleChange}
                />
                <CardList users={filteredUsers}></CardList>
            </div>
        )
    }
}

export default App
