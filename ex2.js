function repeat(operation, num) {
   if (num <= 0) return
   operation()
   return repeat(operation, --num)
 }

function donkey(){
  console.log("operation!!!")
}

repeat(donkey,10)

module.exports = repeat
