import {useEffect} from 'react'

const Comments = ({comments}) => {
    useEffect(() => {
        console.log(typeof comments)
    }, [])

    return null
}

export default Comments