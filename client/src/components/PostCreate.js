import {useState} from 'react'
import axios from 'axios'

const PostCreate = () => {
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await axios.post('http://localhost:4000/posts', {title})
        // blank out title
        setTitle('')
    }

    return(
        <form onSubmit={handleSubmit} >
            <input type="text" value={title} onChange={handleChange}/>
            <input type="submit"/>
        </form>
    )
}

export default PostCreate