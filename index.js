// code your solution here
function superbowlWin(array) {
   function win(element){
        return element.result === "W"
        }
const winYes = array.find(win)
if(winYes){
    return winYes.year
}
return undefined
}
    

