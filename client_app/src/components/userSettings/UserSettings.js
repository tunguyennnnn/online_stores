import React from 'react'
import { Dropdown, Menu} from 'semantic-ui-react'

export default class UserSettings extends React.Component {
  render () {
    const { navigateToPersonalPage, logout, email, userId } = this.props
    console.log('userSettings userId', userId)
    return (
      <Menu.Item position='right' fitted>
        <Dropdown item text={email}>
          <Dropdown.Menu>
            <Dropdown.Item onClick={navigateToPersonalPage.bind(null, userId)} icon='setting' text='Account Settings' />
            <Dropdown.Item onClick={logout} icon='log out' text='Logout' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    )
  }
}
