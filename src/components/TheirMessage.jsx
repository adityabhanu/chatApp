import React from 'react';

const TheirMessage = ({ message, lastMessage }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    var bgImg = message?.sender?.avatar
    return(
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                    className="message-avatar"
                    style={{backgroundImage: `url(${bgImg})`}}
                />
            )}
            {
                message.attachments.length > 0 ? 
                     (
                        <img 
                           src={message.attachments[0].file}
                           alt="message-attachement"
                           className="message-image"
                           style={{marginLeft : isFirstMessageByUser ? '4px' : '48px'}}
                        />
                    ) : (
                        <div className="message" style={{float:"left", backgroundColor:'#CABCDC', marginLeft : isFirstMessageByUser ? '4px' : '48px'}}>
                                {message.text}
                        </div>
                    )
                
            }
        </div>
    )
}

export default TheirMessage;