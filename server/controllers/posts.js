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

        console.log(postMessage)

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
    const { id: _id } = req.params
    const post = req.body

    if (mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No post with this id is present")

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })

    res.json(updatePost)
}