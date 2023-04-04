import React from 'react'
import {
  ChatBubbleLeftRightIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid/index.js'

const CustomHeader = ({ chat }) => {
  return (
    <div className="chat-header">
      <div className="flexBetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h2 className="header-text">{chat.title}</h2>
      </div>
      <div className="flexBetween">
        <PhoneIcon
          classNaame="icon-phone"
          style={{ width: '22px', height: '22px' }}
        />
        {chat.description !== '⬅️ ⬅️ ⬅️' ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">no chat selected</p>
        )}
      </div>
    </div>
  )
}

export default CustomHeader
