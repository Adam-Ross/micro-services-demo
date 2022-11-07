const express = require('express')
const {randomBytes} = require('crypto')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3002

const posts = {
    "a97c99e6": {
        "title": "First post",
        "id": "a97c99e6"
    }
}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body
    const newPost = {
        title,
        id
    }

    posts[id] = newPost
    res.send(posts)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
