import app from './app.js'

app.listen(app.get('port'))

console.log('Servidor en http://localhost:' + app.get('port'))
