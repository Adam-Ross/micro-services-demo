import CommentInput from './CommentInput'
import Comments from './Comments'

const PostItem = ({post, createComment, comments}) => {
    return (
        <div style={{display: 'block'}}>
            <div className="postTitle">{post.title}</div>
            <CommentInput postId={post.id} createComment={createComment}/>
            <Comments comments={comments} />
        </div>
    )
}

export default PostItem