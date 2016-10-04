function getShortMessages(messages) {
    return messages.filter((element) => {
        return element.message.length < 50
    }).map((element)=>{
      return element.message
    })
}

module.exports = getShortMessages
