document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == "admin" && password == "123"){
        window.location.href = "profile.html";
    } else{
        alert("Salah Username atau Passwrod");
    }
})