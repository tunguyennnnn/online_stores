import { Message } from 'semantic-ui-react'
import React from 'react'

export function handleMessage (error, message) {
  if (message) {
    return (
      <Message
        style={{paddingLeft: '1.5%', paddingRight: '1.5%', paddingBottom: '1%'}}
        positive
        header='Success!'
        content={message}
      />
    )
  }
  if (error) {
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

export function handleMessageUpdate (error, message, updateMessage) {
  if (message || error) {
    setTimeout(() => updateMessage(), 5000)
  }
}
