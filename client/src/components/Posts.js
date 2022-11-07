import PostItem from './PostItem'

const Posts = ({posts, createComment, comments}) => {
    const renderedPosts = Object.values(posts).map((post) => {
        // return <h1 key={post.id}>{post.title}</h1>
        return <PostItem key={post.id} post={post} createComment={createComment} comments={comments}/>
    })


    return <div className="flexContainer">
        {renderedPosts}
    </div>
}

export default Posts