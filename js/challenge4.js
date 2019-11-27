/*ch4form.onsubmit = function() {
    var validInput = true;
    var name = document.querySelector("#fullname")
    var address = document.querySelector("#streetaddr")

    if (name.value.length == 0){
        document.querySelector("#nameerrormsg").style.display = "block";
        validInput = false;
    }
    else {
        document.querySelector("#nameerrormsg").style.display = "none";
    }

    if (address.value.length == 0){
        document.querySelector("#addrerrormsg").style.display = "block";
        validInput = false;
    }
    else {
        document.querySelector("#addrerrormsg").style.display = "none";
    }

    return validInput;
}*/

$("form").submit(function() {
    var validInput = true;
    var name = $("#fullname").val()
    var address = $("#streetaddr").val()

    if (name == ""){
        $("#nameerrormsg").css("display","block");
        validInput = false;
    }
    else {
        $("#nameerrormsg").css("display","none")
        validInput = true;
    }

    if (address == ""){
        $("#addrerrormsg").css("display","block")
        validInput = false;
    }
    else {
        $("#addrerrormsg").css("display","none")
    }

    return validInput;
})
