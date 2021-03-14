function validation() {
    var form = document.getElementById("form")
    var input = document.getElementById("input").value
    var text = document.getElementById("text")
    //regular expression to validate email address structure.
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var errorMsg = document.getElementById("error-msg")
    var errorIcon = document.getElementById("error-icon")

    if (input.match(pattern))
    {
        form.classList.add("valid")
        form.classList.remove("invalid")
        errorMsg.style.display = "none"
        errorIcon.style.display = "none"
   
    } else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
        errorMsg.style.display = "block"
        errorIcon.style.display = "block"   
    }
    if (input == "")
    {
        form.classList.remove("valid")
        form.classList.remove("invalid")
        errorMsg.style.display = "none"
        errorIcon.style.display = "none"
   
    } 
}