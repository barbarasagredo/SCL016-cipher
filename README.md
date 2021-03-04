# Cifrado César

## 1. Prototipo y diseño del proyecto.

El diseño del prototipo fue generado en papel.
![img](src\IMAGENES\PROTOTYPE_PAPER.jpg)

Luego el prototipo digital fue realizado en Figma. 
![img](src\IMAGENES\PROTOTYPE_FIGMA.jpg)

En la primera parte de la página, enfocada a un usuario infantil, el diseño es simple y tiene referencias a la escolarización temprana, tiene tipografía manuscrita y dibujos de un trazo. Las imágenes fueron sacadas del libro original de El Principito. Así mismo, los colores son neutrales: amarillo, naranja, azul claro. Esto tiene relación con intentar alejarse de los conceptos del binarismo, que creo firmemente es uno de los responsables de la división de las capacidades que se creen separan a hombres de mujeres.
En el usuario adulto, la imagen es también simple, pero tiene un texto a modo de reseña para que los padres comprendan como usar la página.
ttps://www.figma.com/proto/0BVISu3ciEyNnM866gUorU/Untitled?node-id=0%3A1

## 1. Usuaria.

Para el primero proyecto como estudiante de Laboratoria, he elegido Cifrado César. Esto consiste, básicamente en cifrar un mensaje para que, al ingresar un texto en la página, se entregue un código secreto al usuario. La fórmula matemática del Cifrado César, fue inventada por el emperado Julio César y consiste en hacer un deplazamiento de una cantidad determinada de carácteres por cada una de las letras que contiene el mensaje. 

La página que creé se llama Mensaje Secreto. Se trata de una web donde los padres pueden entregar un mensaje encriptado a sus hijos, el niñe ingresa a la página, escribe el código encriptado con el número de desplazamiento y al dar click para descifrarlo, descubre el mensaje afectuoso que le dejó su padre/madre.

Los usuarios de la página son, por lo tanto dos: les niñes que descubren el mensaje y los padres/madres. El usuario de niño va desde la edad de 6 años hasta los 12, sin ser restrictivo respecto a la edad máxima. Sin embargo, está específicamente enfocado en niños que aprenden a leer y se están relacionando hace poco con la tecnología. El usuario padre/madre es un adulto de entre 20 a 50 años. No es restrictivo para padres/madres, pues puede ser incluso algún familiar del niño que le quiera dejar un mensaje encriptado. El rango etario tiene relación con la vinculación que tienen los adultos de esta edad con las tecnologías. 

La estética de la página tiene como inspiración la novela El Principito de Antoine de Saint-Exupéry. Fue pensada de esta forma, ya que es uno de los primeros libros que los niños leen en su etapa escolar, entregando un mensaje basado en el cariño, el respeto, la amistad y la comunicación. 

Creo que es una forma amorosa de que los niños comiencen a desarrollar un interés por las funcionalidades que entrega internet, más allá de las redes sociales y los video juegos. Además, refuerza el víncula parental con los niños a través de pequeños gestos como es dejar un mensaje de amor. Creo que, en el mundo actual es importante reforzar estos afectos y darle un sentido más humano a las relaciones con nuestros seres queridos. 


#### 3.5.3 Sobre tus Scripts / Archivos
* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que se tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.
