# QEntaTest

La aplicacion esta desarrollada en Angular 8, consulme los servicios expuestos por la rest Api publica 
[balldontlie][https://www.balldontlie.io/#introduction], esta api no recibe peticiones POST PUT o DELETE 
por lo cual estas acciones se reflejan en la apliacion en un archivo json que se descarga automaticamente 
con la informacion de la accion.

dentro del codigo se encuentra la estructura para el consumo de los metodos no soportados por la api, estan comentados para evitar errores en la consola del navegador.

la apliacion utiliza un modulo de angular llamado eter-ui para facilitar los mensajes informativos, dicho modulo es de autoria mia por lo cual decidi usarlo. [https://www.npmjs.com/package/eter-ui]

espero lo disfruten 

## Instalar las dependencias del proyecto 
para instalar las dependencias basta con ejecutar el comando 
```
npm install
```
Nota: para que el proyecto se ejecute correctamente en modo desarrollo se debe tener instalado el angular-cli 
lo puede realizar ejecutando
```
npm install -g @angular/cli
```
## Arranque de la aplicacion 

### Hay dos formas de correr la aplicacion

#### la primera es correr el servidor de desarrollo de angular
para correr el servidor de angular basta con ejecutar el comando 
```
npm start 
```
ó
```
ng serve
```
la apliacion correra por defecto en el puerto 4200
#### la segunda es correr el servidor de distribucion creado con exprees 
para correr el servidor de distribucion se debe ejecutar el script        
```
node server.js
```
por defecto correra en el puerto 3250, pero si desea que se ejecute en otro puerto puede ejecutar el script con el argumento port 
```
node server.js --port <port>
Ejemplo: node server.js --port 3500
```






