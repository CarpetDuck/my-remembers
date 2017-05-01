import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: ['My Balls', 'My Gooch'],
      newNote: 'My Dick',
    }
  }

  updateNewNote(event) {
    this.setState({ newNote: event.target.value })
  }

  submitForm(e) {
    e.preventDefault()

    // Put information somewhere and reset new note
    let notes = this.state.notes
    let newNote = this.state.newNote
    this.setState({ notes: notes.concat(newNote), newNote: '' })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>myRemembers</h2>
        </div>
        <p className="App-intro">
          You have no notes
        </p>
        <div>
          <form onSubmit={(e) => this.submitForm(e)}>
            <input type="text"
                   value={this.state.newNote}
                   onChange={(event) => this.updateNewNote(event)}
                   placeholder="What do you want to remember?"/>

            <button>Add</button>
          </form>

          <ul>
            {this.state.notes.map(
              (note, index) => <li key={index}>{note}</li>
            )}
          </ul>
        </div>
      </div>

    )
  }
}

export default App
