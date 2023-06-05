import express from 'express'

import { getPosts, createPosts, updatePost, deletPost } from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPosts)
router.patch('/:id', updatePost)
router.delete('/:id', deletPost)

export default router