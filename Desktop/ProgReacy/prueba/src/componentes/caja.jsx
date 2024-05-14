import React from 'react'
import ReactDOM from 'react'
import '../estilos/caja.css'


function Caja(){
    return(
    <div className='contenedortexto'>
            <img className='contendorImagen'
            
             src={require('../imagenes/camaro.jpg')} alt='autito'/>
             
             <h4 className='contenedorTitulo'>
            Chevrolet Camaro
        </h4>
        <p>
            El Chevrolet Camaro es uno de los autos mas famosos de la automotora Chevrolet con su primera presentacion el 12 de septiembre de 1966.
        </p>
             <img className='contendorImagen'
             src={require('../imagenes/descarga.jpg')} alt='autito'/>
             
        <h4 className='contenedorTitulo'>
            Auto Gris bastante futurista
        </h4>
        <p>
            Exclusivo para lideres mundiales.
        </p>

        <img className='contendorImagen'
            
             src={require('../imagenes/images.jpg')} alt='autito'/>
             
             <h4 className='contenedorTitulo'>
            Auto Rojo Fuerte
        </h4>
        <p>
            Auto Rojo Marca generica conducido por el mismo Dominic Toretto
        </p>
        
        <button className='botonMasInfo'>
            
            Cambiar carpeta
        </button>
    </div>
    

    )
    
    
    
}

export default Caja;
