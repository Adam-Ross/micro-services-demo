const express = require('express')
const {randomBytes} = require('crypto')

const app = express()
app.use(express.json())

const PORT = 3003

const commentsByPostId = {}

app.post('/posts/:id/comments', (req, res) => {  

    const id = req.params.id

    const {body} = req.body
    const commentId = randomBytes(4).toString('hex')

    const comments = commentsByPostId[id] || [] 

    comments.push({body, commentId})

    commentsByPostId[id] = comments
 
    res.send(commentsByPostId)
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
