module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((subitem)=>{
          return goodUsers.some((gooditem)=>{
            return gooditem.id == subitem.id
          })
        })
    };
}
