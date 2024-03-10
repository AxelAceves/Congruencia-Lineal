# Congruencia-Lineal
Este método es un algoritmo que produce una secuencia de números aparentemente aleatorios calculados mediante una función lineal.

## Como funciona ?
se utiliza la : Función generarNumeros():

Esta función se activa cuando se llama. Es probable que sea llamada por un evento, como un botón en una interfaz web.
Obtiene los valores de entrada x0, a, c, m, y n desde elementos HTML de entrada en el documento.
Limpia una tabla HTML y un registro de números repetidos.
Inicializa algunas variables, como xn que es el valor actual en la secuencia de números pseudoaleatorios.
Itera n veces para generar números pseudoaleatorios usando la fórmula del método de congruencia lineal. Para cada iteración:
Calcula el número pseudoaleatorio rn utilizando la fórmula y lo muestra en la tabla junto con el valor de x correspondiente.
Almacena el valor de rn en un array llamado valoresR.
Verifica si el número generado ya existe en la secuencia, para detectar repeticiones.
Marca en la tabla si el número es entero.
Imprime en la consola la cantidad de números repetidos.
Crea un gráfico de líneas utilizando la biblioteca Chart.js, que muestra los valores de valoresR en función de las iteraciones.
Función agregarFilaTabla(iteracion, x, r):

Esta función toma tres argumentos: iteracion, x, y r.
Agrega una fila a una tabla HTML (tablaResultados) con tres celdas: la iteración, el valor de x, y el valor de r.

## En resumen del codigo completo :

este código genera números pseudoaleatorios utilizando el método de congruencia lineal y los muestra en una tabla HTML junto con su valor de iteración. También detecta repeticiones y resalta los números repetidos en la tabla. Además, muestra un gráfico de los valores generados.

![image](https://github.com/AxelAceves/Congruencia-Lineal/assets/149019864/28fcb8b3-9bab-4490-9277-e677d52557bb)
euipo echo con :
quiroga hoy ,max ,luis
link del manual : https://www.file.io/OUXP/download/BaYT8bafAO7v 
