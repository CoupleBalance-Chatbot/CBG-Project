import MongoDb from 'mongodb'
import express from 'express'
import { config } from '../config.js'
import { getQuestions } from '../db/database.js'


const ObjectID = MongoDb.ObjectId


// 모든 문의 내역
export async function getAll() {
    return getQuestions()
        .find()
        .sort()
        .toArray()
        .then(mapQuestions);
}



// _id 값 가져오는 함수
function mapOptionalQuestion(question){
    return question? {...question, id: question._id.toString()} : question;
}

function mapQuestions(questions){
    return questions.map(mapOptionalQuestion)
}