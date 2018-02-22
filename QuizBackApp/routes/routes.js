var express = require("express");
var router = express.Router();
var request = require("request");
var store = require("../stores/QuizStore");

/**
 * Get all quizzes.
 * @returns json List of quiz
 */
router.get('/api/quiz/', (req, res) => {
	res.status(200).send(store.getQuizList())
});

/**
 * Get the result of the quiz id.
 *
 * @param {id} number - The quiz's id.
 * @returns json object with structure {id:string, result: number}
 */
router.get('/api/quiz/result/:id', (req, res) => {
	res.status(200).send(store.getPreviousResult(req.params.id))
});

/**
 * Post the result of a quiz.
 *
 * @param {id} number - The quiz's id.
 * @param {result} string - The quiz's result.
 * @returns json status of post with structure {successed: boolean} 
 */
router.post('/api/quiz/result/:id', (req, res) => {
	res.status(200).send(store.saveLastResult(req.params.id, req.body.result))
});

module.exports = router;