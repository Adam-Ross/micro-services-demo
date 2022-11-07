const express = require('express')
const {randomBytes} = require('crypto')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3003

const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
    const id = req.params.id
    res.send(commentsByPostId[id])
})

app.post('/posts/:id/comments', (req, res) => {  
    // destruc ID of params
    const id = req.params.id
    // get optional body data
    const {body} = req.body
    // create new ID
    const commentId = randomBytes(4).toString('hex')

    // Create new comments array if not there
    const comments = commentsByPostId[id] || [] 
    comments.push({body, commentId})
    commentsByPostId[id] = comments
    res.send(commentsByPostId)
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
