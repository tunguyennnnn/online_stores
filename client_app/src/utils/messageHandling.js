import { Message } from 'semantic-ui-react'

export default function handleMessage (error, message) {
  if (message || error) {
    setTimeout(() => this.updateMessage, 5000)
  } else if (message) {
    return (
      <Message
        style={{paddingLeft: '1.5%', paddingRight: '1.5%', paddingBottom: '1%'}}
        positive
        header='Success!'
        content={message}
      />
    )
  } else if (error) {
    return (
      <Message
        style={{paddingLeft: '1.5%', paddingRight: '1.5%', paddingBottom: '1%'}}
        negative
        header='Error!'
        content={error}
      />
    )
  }
}
