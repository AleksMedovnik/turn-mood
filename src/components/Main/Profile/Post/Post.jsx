import classes from '../Profile.module.scss'

const Post = props => {
    return (
        <div className={classes.post}>
            <p className={classes.post__message}>{props.post}</p>
            <button type='button' className='btn'>Delete</button>
        </div>
    )
}
export default Post;