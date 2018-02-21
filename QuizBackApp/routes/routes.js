var express = require("express");
var router = express.Router();
var request = require("request");
var store = require("../stores/QuizStore");

router.get('/api/quiz/', (req, res) => {
	res.status(200).send(store.getQuizList())
});

/**
 * Get the result of the quiz id.
 *
 * @param {id} number - The quiz's id.
 */
router.get('/api/quiz/result/:id', (req, res) => {
	res.status(200).send(store.getPreviousResult(req.params.id))
});

router.post('/api/quiz/result/:id', (req, res) => {
	res.status(200).send(store.saveLastResult(req.params.id, req.body.result))
});

module.exports = router;