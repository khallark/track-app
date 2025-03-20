const dbConnect = require('./config/database')
const cookieParser = require('cookie-parser')
const { createServer } = require('node:http')
const { Server } = require('socket.io')

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cookieParser())
app.use(express.json({ limit: '1mb' }))
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

const Routes = require('./routes/routes')
app.use('/api', Routes)

dbConnect()

const server = new createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    },
})

const account_model = require('./model/account_model')
const chat_model = require('./model/chat_model')

io.on('connection', (socket) => {
/*1*/
    socket.on('register', async (_id) => {
        if(!_id) {
            console.error('didnt receive id (null)')
            return
        }
        const user = await account_model.findById(_id)
        user.socketId = socket.id
        await user.save()
        const chatList = await chat_model.find({_id: { $in: user.chats }})
        io.to(socket.id).emit('receive chatlist', chatList.map(({messages, ...rest}) => rest))
    })

/*2*/
    socket.on('send message', async ({sender_id, receiver_id, chat_id, message}) => {
        const from = await account_model.findById(sender_id)
        const to = await account_model.findById(receiver_id)
        if(to) {

            const chat = await chat_model.findById(chat_id)
            chat.messages.push({
                sender: sender_id,
                text: message,
            })
            await chat.save()

            const from_chatList = await chat_model.find({_id: { $in: from.chats }})
            io.to(from.socketId).emit('receive message', {message, chatList: from_chatList.map(({messages, ...rest}) => rest)})
            
            if(to.socketId) {
                const to_chatList = await chat_model.find({_id: { $in: to.chats }})
                io.to(to.socketId).emit('receive message', {message, chatList: to_chatList.map(({messages, ...rest}) => rest)})
            }

        }
    })
/*3*/
    socket.on('disconnect', async () => {
        await account_model.findOneAndUpdate({ socketId: socket.id }, { socketId: null })
    })
})


app.get('/api', (req, res) => {
    res.json({
        nothing: 'here'
    })
})

server.listen(PORT, () => console.log(`app listening on port ${PORT}`))