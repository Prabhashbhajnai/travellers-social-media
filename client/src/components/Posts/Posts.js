import React from 'react'
import { useSelector } from 'react-redux'

// components
import Post from './Post/Post'

// styles
import useStyles from './styles'

const Posts = () => {
    const classes = useStyles()

    const posts = useSelector((state) => state.posts)
    console.log(posts);

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts