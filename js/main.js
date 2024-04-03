let nombre=document.getElementById
let form=document.getElementById("form")


let send_weyUp=async()=>{
let peticion= await fetch("https://contol-de-mensajes-y-visitas.onrender.com/dashboard")
}

const send= async(e)=>{
    e.preventDefault()
    let form=e.target
    let name=form.name.value
    let correo=form.correo.value
    let message=form.message.value
    let data={
        name:name,
        correo:correo,
        message:message
    }
    fetch(
        "https://contol-de-mensajes-y-visitas.onrender.com/api/message",
        {
        method:"POST",
        headers: {
            'Content-Type': 'application/json' 
          },
        body:JSON.stringify(data)
    })
    .then(response=>{
        if (response.ok) {
            form.name.value = "";
            form.correo.value = "";
            form.message.value = "";
        }
    })
    
}


send_weyUp()