const express = require('express')
const {randomBytes} = require('crypto')

const app = express()
app.use(express.json())

const PORT = 3002

const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req, res) => {
    randomBytes(4, (err, buf) => {
        if(err) {
            console.error(err.message)
        }

        const {postTitle, postBody} = req.body
        const newPost = {
            postTitle,
            postBody,
        }

        const id = buf.toString('hex')
        posts[id] = newPost
        res.send(posts)
    })
    
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
