
function check(){
    var user_input = document.getElementById("user-input").value;
    var pass_input = document.getElementById("pass-input").value;
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");

    if(user_input == "" || pass_input ==""){
        user.style.background = "#FFD3D3"
        pass.style.background = "#FFD3D3"
        document.getElementById("alert").innerHTML = "Please enter your username or password !";
    }
    else if(user_input == "admin" && pass_input =="25112001"){
        window.open("https://www.youtube.com/");
    }
    else{
        user.style.background = "#FFD3D3"
        pass.style.background = "#FFD3D3"
        document.getElementById("alert").innerHTML = "Wrong username or password !";    
    }

}
function reset(){
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    user.style.background = "#F2F2F2"
    pass.style.background = "#F2F2F2"
    document.getElementById("alert").innerHTML = "";
}

function show(){
    var pass_input = document.getElementById("pass-input");
    if(pass_input.type === "password"){
        pass_input.type = "text"
    }
    else{
        pass_input.type = "password"
    }
}