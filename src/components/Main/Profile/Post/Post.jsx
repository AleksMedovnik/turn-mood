import classes from '../Profile.module.scss'

const Post = props => {
    return (
        <div className={classes.post}>
            <p className={classes.post__message}>{props.post}</p>
            <button onClick={() => props.deletePost(props.id)} type='button' className='btn btn-del'>Delete</button>
        </div>
    )
}
export default Post;