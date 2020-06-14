window.onload=function ()
{
   // creamos la variable bandera que referencia a la id especificada en el html
   var bandera = document.getElementById("fotoPrincipal");
    
   //creamos un evento que cuando hagamos clic la bandera modifique el estilo de tamaño al especificado
    bandera.onclick = function()
    {
        bandera.style.width="800px";
        bandera.style.height="600px";
        }

    // creamos el evento doble clic para cambiar el tamaño al mismo que tenemos puesto en el estilo css
    bandera.ondblclick = function()
    {
        bandera.style.width="300px";
        bandera.style.height="200px";
    }
}