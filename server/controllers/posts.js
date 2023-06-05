import express from 'express';
import mongoose from 'mongoose';

// models
import PostMessage from "../models/postMessage.js"

/*
Route     /
Des       Get all posts
Params    none
BODY      none
Access    Private
Method    GET  
*/

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()

        // console.log(postMessage)

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

/*
Route     /
Des       Create Post
Params    none
BODY      post
Access    Private
Method    POST  
*/
export const createPosts = async (req, res) => {
    const post = req.body

    const newPost = new PostMessage(post)

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

/*
Route     /
Des       Update post
Params    _id
BODY      none
Access    Private
Method    PATCH  
*/
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

/*
Route     /
Des       Delete post
Params    _id
BODY      none
Access    Private
Method    DELETE  
*/

export const deletPost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that id')

    await PostMessage.findByIdAndRemove(id)

    res.json({ message: 'Post Deleted Successfully' })
}