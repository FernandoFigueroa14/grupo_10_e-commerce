window.addEventListener('load', function(){
    // console.log('se cargo la pagina');
    let form = document.querySelector('form');
    let name = document.querySelector('#name');
    let nameError = document.querySelector('#nameError');
    let price = document.querySelector('#price');
    let priceError = document.querySelector('#priceError');
    let description = document.querySelector('#description');
    let descriptionError = document.querySelector('#descriptionError');
    let img = document.querySelector('#img');
    let imgError = document.querySelector('#imgError');

    let errores = {};
    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log('se previene el envio');

        if(name.value.length<1){
            errores.nameError = 'El campo de nombre no puede estar vacio';
            nameError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de nombre no puede estar vacio';
        }else if(name.value.length<5){
            errores.nameError = 'El campo de nombre debe tener al menos 5 caracteres';
            nameError.innerHTML = '<i class="fas fa-exclamation-circle"></i> El campo de nombre debe tener al menos 5 caracteres';
        }else{
            if(errores.nameError){
                delete errores.nameError;
                nameError.innerHTML = '';
            }
        }
        if(price.value.length<1){
            errores.priceError = 'El campo de precio no puede estar vacio';
            priceError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de precio no puede estar vacio';
        }else if(!Number(price.value)){
            errores.priceError = 'El campo de precio debe tener un valor numérico';
            priceError.innerHTML = '<i class="fas fa-exclamation-circle"></i> El campo de precio debe tener un valor numérico';
        }else{
            if(errores.priceError){
                delete errores.priceError;
                priceError.innerHTML = '';
            }
        }
        if(description.value.length<1){
            errores.descriptionError = 'El campo de nombre no puede estar vacio';
            descriptionError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de nombre no puede estar vacio';
        }else if(description.value.length<20){
            errores.descriptionError = 'El campo de descripción debe tener al menos 20 caracteres';
            descriptionError.innerHTML = '<i class="fas fa-exclamation-circle"></i> El campo de descripcion debe tener al menos 20 caracteres';
        }else{
            if(errores.descriptionError){
                delete errores.descriptionError;
                descriptionError.innerHTML = '';
            }
        }
        if(img.value.length == 0){
            errores.imgError = 'Debes de subir una foto del producto';
            imgError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  Debes de subir una foto del producto';
        }else{
            if(errores.imgError){
                delete errores.imgError;
                imgError.innerHTML = '';
            }
        }
        console.log(Object.keys(errores).length);
        if(Object.keys(errores).length<1){
            form.submit();
        }
    })
})