import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import GamesList from './gamesList'
import ConsolesList from './consolesList'
import NewConsole from './NewConsole'
import NewGame from './NewGame'
import Genre from './genre'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'


class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render() {
    const { alerts, user } = this.state
    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">

          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <Route path="/new_Console" render={() => (
            <NewConsole />
          )} />
                    <Route path="/new_game" render={() => (
            <NewGame />
          )} />


          <Route path="/games_list" render={() => (
            <GamesList />
          )} />
          <Route path="/consoles_list" render={() => (
            <ConsolesList />
          )} />
          <Route
            path="/" exact
            render={(routeProps) => (
              <Genre />
            )}
          />
        </main>

      </React.Fragment>
    )
  }
}

export default App
