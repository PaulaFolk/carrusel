const validEmail = 'asd@gmail.com';
const validPassword = '1234';


function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


if (email === validEmail && validPassword === password){
  //  alert('Logueado con éxito');
    window.location.href = 'inicio.html';
}else{
    //alert('usuario o contraseña incorrecta');
    document.getElementById('error').innerHTML = "<span> Usuario o contraseña inválidos</span>";
}
}