import * as questionRepository from '../data/question.js'

// 질문 전체 가져오기
export async function questionAll(req, res) {
    try {
        const questions = await questionRepository.getAll();
        res.status(200).json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
 }

// 랜덤 질문 가져오기
export async function randomQuestion(req, res){
    try {
        const questions = await questionRepository.getAll();
        const count = questions.length
        const randomIndex = Math.floor(Math.random() * count);
        const random = questions[randomIndex]
        res.status(200).json(random);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}