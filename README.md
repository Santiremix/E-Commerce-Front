#  React Ecommerce

## Índice

* Sobre el proyecto
    * Instalación y despliegue
    * Tecnologías usadas
    * Origen
    * Objetivos
    * Concepto e inspiración

* Retos presentados

* Agradecimientos

* Autores

## Sobre el proyecto

En esta ocasión presentamos una ecommercer de ropa moderna y juvenil desarrollada en React con un backend de Sequelize.  En esta tienda puedes buscar productos por categoría, ordenar por precios y añadirlos al carrito. Además podrás consultar tu información de usuario y consultar tu historial de pedidos. 

### 💫 Instalación y despliegue

Para descargarte el repositorio, en Visual Studio, abre una terminal y ejecuta el comando siguiente:


Frontend del Ecommerce
```
$ git clone https://github.com/Santiremix/Proyecto_Frontend
```
Backend del Ecommerce
```
$ git clone https://github.com/franpd8/ecommerce-backend
```

 Seguidamente tendrás que descargar los módulos externos. Para ello, realiza el siguiente comando.

```
$ npm i
```

Después, levanta el frontend de React así como el backend de Sequelize a través de:

```
$ npm start
```
Será necesario si ejecutas la base de datos que hagas uso de la siguiente serie de comandos. 

Modificar la base de datos, dentro de config/config.example.json para que puedas usar el proyecto.
```
"development": {
      "username": "Your user", 
      "password": "Your password",
      "database": "Your database's name",
      "host": "Your host",
      "dialect": "mysql",
      "jwt_secret": "Your jwt password"
```

```
sequelize db:create

sequelize db:migrate

sequelize db:seed:all
```

Ahora podrás navegar a través del frontend cargando todos los productos del backend :) 

### 💻 Tecnologías usadas

* HTML
* CSS
* Sass
* Javascript
* React
* React-GlobalContext
* React-Router
* Sequelize 
* NodeJS 
* Axios 
* Bootstrap
* Ant-Design 

### Origen

Este proyecto está pensado como un ejercicio en The Bridge que nos permita poner en práctica los nuevos conocimientos adquiridos sobre React, concretamente utilizando React Router y Sass. Vienen de la mano el familizarnos con crear diversos componentes en React y poder acceder de forma global al contenido de ciertas funciones que nos han ayudado a desarrollar el proyecto.  De la misma manera aprovechamos un proyecto anterior de Backend con Sequelize, que necesariamente habrá de sufrir modicaciones para adaptarse al nuevo proyecto. 

### ⚔️ Objetivos

Crear una API REST que sea capaz de lo siguiente:
* Un mini-proyecto de React para practicar todos los elementos básicos de React ya vistos.
* Registro de usuarios.
* Login de usuarios.
* Que se puedan ver los productos  y añadir al carrito de compra
* Que se pueda crear pedidos
* Que en tu perfil puedas ver tus datos

#### ⚔️ Componentes mínimos:
* Register
* Login
* Home
* Products
* Product
* Perfil. Vista perfil con los datos del usuario logeado y sus pedidos
* Header
* Footer

Implementa React Router en tu página
* /home. Home de la app
* /login
* /register
* /profile. 
Utilizar Context 

#### ⚔️ Desafío:
* Los componentes no podrán sobrepasar las 400 líneas de código.
* Las funciones no deberán sobrepasar las 75 líneas de código.

### ⚔️ Funciones

En esta ecommerce, el usuario puede acceder a diferentes páginas para ver la distinta variedad de productos. Para este sencillo ejercicio hemos creado cuatro vistas: homer, men, women y all.  En la home encontramos diferentes creatividades que sirven como enlace a las distintas secciones de la aplicación. En men podemos ver la variedad de productos de ropa para hombre, para mujer en women respectivamente. Si accedemos a all podemos ver la totalidad de prouductos. 

—— Buscador de productos: en todas las secciones podemos hacer uso de un buscador por palabras, que devolverá los resultados que coincidan con la búsqueda introducida. Simplemente rellenamos el campo y hacemos click en search. Para motrar los resultados iniciales hacemos click en Show All. 

—— Filtrar por categorías: en todas las secciones contamos además con un filtro que limite los resultados según la categoría de prendas mostradas. Camisetas/T-shirts, Pantalones/Trousers, Sudaderas/Hoodies y Accesorios/Accesories. 

—— Carrito de compra:<br>
 Hemos implementado un carrito que permita introducir productos en él. Si no hay productos en él mostrará el enlace a la vista de productos. Conforme se vayan añadiendo aparecerá una notificación temporal en pantalla para informar al usuario de esta acción. Dentro del carrito se mostrarán los productos añadidos y podrá realizar el pedido. En el caso de no estar logueado, redigirá a la pantalla de login, donde podrá ingresar y retomar el pedido. 

—— Login: <br>
La pantalla de login resulta sencilla y permite acceder al usuario introduciendo sus campos. De no ser un usuario registrado puede acceder a la pantalla de registro desde el login directamente. 

—— Registro: <br>
Similar a la pantalla de login nos permite crear nuevos usuarios e ingresarlos en la base de datos para posteriormente hacer login. 


### ⚔️ React Router

Gracias a React Router podemos crear diferentes rutas dentro de nuestra aplicación de React en una SPA y navegar entre componentes (artículos y formulario).

 * [x] /home. Donde vemos los artículos traídos por la API.
 * [x] /submit. 


### ⚔️ Sass

Implementando Sass, podemos hacer uso de variables para los colores, tipografías y anchos de los diversos elementos durante la maquetación, de cara a poder reutilizarlos y modificarlos más adelante. 


## 🔜 Futuras Implementaciones

* Diseño responsive. 
* Crear una variable para permitir distintas llamadas a la API y variar el contenido de la revista. 
* Borrar imágenes antiguas una vez son actualizadas. 
* Permitir subir varias imágenes a cada post.


##  ♥️ Agradecimientos

A todos los compis([Mike](https://github.com/MrSetOne),[Xavi](https://github.com/xavi-mat),[Vane](https://github.com/vaneebg/) y profes en general: ([Sofía](https://github.com/SofiaPinilla), [Geer](https://github.com/GeerDev) e [Iván](https://github.com/ivanpuebla10)]).



[Ant-Design] (https://ant.design/)
## Autor

### 🐱[Fran](https://github.com/franpd8)🐱
### 🐱[Santi](https://github.com/Santiremix)🐱
