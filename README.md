# QEntaTest

La aplicacion esta desarrollada en Angular 8, consulme los servicios expuestos por la rest Api publica 
[balldontlie][https://www.balldontlie.io/#introduction], esta api no recibe peticiones POST PUT o DELETE 
por lo cual estas acciones se reflejan en la apliacion en un archivo json que se descarga automaticamente 
con la informacion de la accion. 

## Instalar las dependencias del proyecto 
```
npm install
```

## Arranque de la aplicacion 

### Hay dos formas de correr la aplicacion

    * la primera es correr el servidor de desarrollo de angular
        para correr el servidor de angular basta con ejecutar el comando 
        npm start o ng serve
        la apliacion correra por defecto en el puerto 4200
    * la segunda es correr el servidor de distribucion creado con exprees 
        para correr el servidor de distribucion se debe ejecutar el script
        node server.js
        por defecto correra en el puerto 3250, pero si desea que se ejecute en otro puerto puede 
        ejecutar el script con el argumento port 
        node server.js --port <port>




