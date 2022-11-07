import axios from 'axios'
import {useState} from 'react'

const CommentInput = ({postId, createComment}) => {
    const [text, setText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const obj = {
            text,
            postId
        }
        createComment(obj)
        setText('')
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="input" onChange={handleChange} value={text} placeholder="Comment..."/>
            <input type="submit" />
        </form>
    )
}

export default CommentInput