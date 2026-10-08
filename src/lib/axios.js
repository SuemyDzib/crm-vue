import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export default api


// Para utilizar el json-server, primero debemos instalarlo de manera global con el siguiente comando: npm install -g json-server

// Para iniciar el servidor, debemos ejecutar el siguiente comando en la terminal: json-server --watch db.json --port 4000