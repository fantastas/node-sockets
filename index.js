const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
	cors: { origin: "*"}
})

app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
	res.render('home')
})

server.listen('8080', () => {
	console.log('server running')
})

io.on('connection', (socket) => {
	// logic for socket in backend
	console.log("User connected: " + socket.id)

	socket.on("message", (data) => {
		// console.log(data)
		socket.broadcast.emit("message", data) // broadcast to everyone
	})  // receive event

})
