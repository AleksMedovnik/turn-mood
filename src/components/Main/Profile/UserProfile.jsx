import { useParams } from "react-router-dom";
import classes from './Profile.module.scss'
import ava from '../../../images/ava.png'
import Post from './Post/Post';
import axios from 'axios';
import { useEffect } from 'react';

const UserProfile = props => {
    let params = useParams()
    // console.log(params.id)
    useEffect(() => {
        if (props.args.posts.length === 0) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => props.args.getPosts(response.data));
        }
        getUserName()
    }, []);

    const getUserName = () => {
        let id = params.id || 1
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => props.args.updateUserName(response.data.name));
    }

    const newPostChange = (e) => {
        let text = e.target.value;
        props.args.updateNewPostText(text);
    }

    const addPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify({
                title: props.args.newPostText,
                body: props.args.newPostText,
                userId: 1,
                id: props.args.posts[props.args.posts.length - 1].id + 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => JSON.parse(response.data.body))
            .then((post) => props.args.addPost(post));
    };

    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(() => props.args.deletePost(id));
    }

    const posts = props.args.posts.map(post => {
        return (
            <Post deletePost={deletePost} post={post.body} key={post.id} id={post.id} />
        )
    })
        .reverse();
    return (
        <div>
            <div className={classes.profile}>
                <div>
                    <img src={ava} alt={props.args.userName} className={classes.profile__image} />
                </div>
                <div>
                    <span className={classes.profile__name}>{props.args.userName}</span>
                </div>
            </div>
            <div className={classes.profile__newPost}>
                <textarea value={props.args.newPostText}
                    onChange={newPostChange}
                    name="post" />
                <button onClick={addPost} className='btn btn-send'>Add Post</button>
            </div>
            <div className={classes.profile__wall}>
                {posts}
            </div>
        </div>
    );
};

export default UserProfile;