import express from 'express'
import * as questionController from '../controller/question.js'

const router = express.Router()

// 전체 질문 데이터 불러오기
router.get('/getAll', questionController.questionAll)

// 랜덤 질문 가져오기
router.get('/random', questionController.randomQuestion)


export default router