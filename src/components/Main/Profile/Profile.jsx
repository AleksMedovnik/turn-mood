import classes from './Profile.module.scss'
import ava from '../../../images/ava.png'
import Post from './Post/Post';
import axios from 'axios';
import { useEffect } from 'react';

const Profile = props => {

    useEffect(() => {
        if (props.posts.length === 0) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => props.getPosts(response.data));
        }
    }, []);

    const newPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    const addPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify({
                title: props.newPostText,
                body: props.newPostText,
                userId: 1,
                id: props.posts[props.posts.length - 1].id + 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => JSON.parse(response.data.body))
            .then((post) => props.addPost(post));
    };

    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => props.deletePost(id));
    }

    const posts = props.posts.map(post => <Post deletePost={deletePost} post={post.body} key={post.id} id={post.id} />).reverse();

    return (
        <div>
            <div className={classes.profile}>
                <div>
                    <img src={ava} alt={props.userName} className={classes.profile__image} />
                </div>
                <div>
                    <span className={classes.profile__name}>{props.userName}</span>
                    <br />
                    <span className={classes.profile__status}>{props.status}</span>
                </div>
            </div>
            <div className={classes.profile__newPost}>
                <textarea value={props.newPostText} onChange={newPostChange} name="post" className={`post__input ${classes.postInput}`} cols='50' rows='1' />
                <button onClick={addPost}>Submit</button>
            </div>
            <div className={classes.profile__wall}>
                {posts}
            </div>
        </div>
    )
}
export default Profile;