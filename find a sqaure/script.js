function square (){
    event.preventDefault()
var number=document.getElementById("number")
var msg=document.getElementById("msg")
if (number.value=="")
    {
        alert("Enter Number First")
        msg.innerHTML=""
        number.focus()
        return
    }
let n= parseFloat(number.value)
let r =n*n
msg.innerHTML="Sqaure is " + r.toFixed(2)


}