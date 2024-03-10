  function generarNumeros() {
        // Obtener los valores de entrada
        const x0 = parseInt(document.getElementById('xInput').value);
        const a = parseInt(document.getElementById('aInput').value);
        const c = parseInt(document.getElementById('cInput').value);
        const m = parseInt(document.getElementById('mInput').value);
        const n = parseInt(document.getElementById('nInput').value);

        // Limpiar la tabla de resultados y el registro de números repetidos
        document.getElementById('tablaResultados').innerHTML = "";
        let numeros = {};
        let numerosRepetidos = 0;
        let valoresR = [];

        // Inicializar variables
        let xn = x0;

        // Generar números pseudoaleatorios y mostrar en la tabla
        for (let i = 1; i <= n; i++) {
            const rn = xn / (m - 1);
            agregarFilaTabla(i, xn, rn.toFixed(4));

            // Almacenar el valor de R
            valoresR.push(rn);

            // Verificar si el número ya existe en el registro
            if (numeros[xn]) {
                numerosRepetidos++;
                document.getElementById('tablaResultados').lastChild.lastChild.previousSibling.classList.add('resaltado');
            } else {
                numeros[xn] = true;
            }
            
            // Verificar si el número es entero y aplicar el color verde si es el caso
            if (Number.isInteger(rn)) {
                document.getElementById('tablaResultados').lastChild.lastChild.classList.add('entero');
            }
            
            xn = (a * xn + c) % m;
        }

        console.log("Números repetidos:", numerosRepetidos);

        // Crear el gráfico
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from(Array(n).keys()), // Etiquetas para el eje X
                datasets: [{
                    label: 'Valores de R',
                    data: valoresR, // Valores de R
                    borderColor: 'blue',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function agregarFilaTabla(iteracion, x, r) {
        const tabla = document.getElementById('tablaResultados');
        const fila = tabla.insertRow();
        const celdaIteracion = fila.insertCell(0);
        const celdaX = fila.insertCell(1);
        const celdaR = fila.insertCell(2);

        celdaIteracion.textContent = iteracion;
        celdaX.textContent = x;
        celdaR.textContent = r;
    }
