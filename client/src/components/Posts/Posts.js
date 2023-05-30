import React from 'react'

// components
import Post from './Post/Post'

// styles
import useStyles from './styles' 

const Posts = () => {
    const classes = useStyles()

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts