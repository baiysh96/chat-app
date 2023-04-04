import React from 'react'
import Header from '@/components/Header/customHeader.jsx'
import StandardMessageForm from '@/components/customMessageForm/StandardMessageForm.jsx'
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from 'react-chat-engine-advanced'
const projectID = import.meta.env.VITE_PROJECT_ID

const Chat = () => {
  const chatProps = useMultiChatLogic(projectID, 'testuser', '1234')
  return (
    <div style={{ flexBasis: '100%' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: '100vh' }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          )
        }}
      />
    </div>
  )
}

export default Chat
