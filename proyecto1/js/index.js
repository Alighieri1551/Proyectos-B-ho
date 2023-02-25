// ESTA FUNCIÓN ME PERMITE HABILITAR EL BOTÓN DE ENVIAR CUANDO TODOS LOS CAMPOS ESTÉN LLENOS
function habilitado(){
    nombre = document.getElementById("name_1").value;
    correo = document.getElementById("email_1").value;
    val = 0;

    if(nombre == ""){
        val++;
    }

    if(correo == ""){
        val++;
    }

    if(val == 0){
        document.getElementById("btn-form").disabled = false;
    } else{
        document.getElementById("btn-form").disabled = true;
    }
}
document.getElementById("name_1").addEventListener("keyup", habilitado);
document.getElementById("email_1").addEventListener("keyup", habilitado);
document.getElementById("btn-form").addEventListener("click", () => {});

// ESTA FUNCIÓN ME PERMITE VALIDAR SOLO LETRAS Y NO PERMITE INGRESAR NI COPIAR NÚMEROS
function sololetras(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46-164";
    teclado_especial = false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial = true; break;
        }
    }

    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}

// ESTA FUNCIÓN ME PERMITE GENERAR UN NÚMERO ALEATORIO
const numeroAleatorioRandom = document.getElementById('numeroAleatorio');

window.addEventListener('load', () => {
    getAleatorioRandom();
})

function getAleatorioRandom() {
    let numeroRandom = Math.random().toString().slice(2, 8);
    numeroAleatorioRandom.value = numeroRandom;
}