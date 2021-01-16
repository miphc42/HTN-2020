// var name = global_var.name;
var user = localStorage.getItem('user').split(",")
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log("AAAA");

console.log(user)
document.getElementById('name').textContent = user[0];
document.getElementById('email').textContent = user[1];
document.getElementById('pfp').src = user[2];