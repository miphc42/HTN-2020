// var name = global_var.name;
var user = localStorage.getItem('user').split(",")
console.log(user[1]);
console.log("AAAA");


document.getElementById('name').textContent = user[0];
document.getElementById('email').textContent = user[1];
document.getElementById('pfp').src = user[2];