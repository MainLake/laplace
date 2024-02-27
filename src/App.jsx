import { useState } from 'react';

const calcularPosicion = (t) => {
    return (-1 / 24 * Math.exp(-25 * t)) - (23 / 24 * Math.exp(-t));
}

const calcularVelocidad = (t) => {
    return (25 / 24 * Math.exp(-25 * t)) - (23 / 24 * Math.exp(-t));
}

const App = () => {

    const [datos, setDatos] = useState({
        masa: 2,
        k: 50,
        c: 52,
        x0: -1,
        v0: 2,
        t: 0,
        v: 0,
        x: 0,
    });

    const onCalcular = (evt) => {

        setDatos({
            ...datos,
            x: calcularPosicion(datos.t),
            v: calcularVelocidad(datos.t),
        });

    }

    return (
        <div class="p-6 bg-gray-100 rounded-md shadow-md md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
            <h1 class="text-3xl font-bold mb-6">Amortiguamiento supercrítico</h1>

            <div class="mb-8">
                <h2 class="text-xl font-semibold mb-4">Valores iniciales</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="mb-4 md:mb-0">
                        <p class="mb-2"><span class="font-semibold">Masa del sistema:</span> {datos.masa}</p>
                        <p class="mb-2"><span class="font-semibold">Constante del amortiguamiento:</span> {datos.c}</p>
                        <p class="mb-2"><span class="font-semibold">Constante elástica del resorte:</span> {datos.k}</p>
                    </div>
                    <div>
                        <p class="mb-2"><span class="font-semibold">Posición inicial:</span> {datos.x0}</p>
                        <p class="mb-2"><span class="font-semibold">Velocidad inicial:</span> {datos.v0}</p>
                        <p class="mb-2"><span class="font-semibold">Tiempo:</span> {datos.t}</p>
                    </div>
                </div>
            </div>

            <div class="mb-8">
                <h2 class="text-xl font-semibold mb-4">Entrada de datos</h2>
                <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <label class="text-lg mb-2 md:mb-0">Tiempo:</label>
                    <input type="number" class="border rounded-md p-2" value={datos.t} onChange={(e) => setDatos({ ...datos, t: e.target.value })} />
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onCalcular}>Calcular</button>
                </div>
            </div>

            <div>
                <h2 class="text-xl font-semibold mb-4">Resultados</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p class="mb-2"><span class="font-semibold">Posición:</span> {datos.x}</p>
                </div>
            </div>
        </div>
    );
}

export default App;