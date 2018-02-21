var mockedQuiz = require("./MockQuiz");

const previousResult = {
	id: 0,
	result: 0
};

var store = {
	saveLastResult: (quizId, result) => {
		previousResult.id = quizId;
		previousResult.result = result;
		return {
      		successed: true
      	};
	},
	getPreviousResult: function getPreviousResult (quizId) {
		return previousResult.id === quizId ? previousResult : {id: 0, result: 0};
	},
	getQuizList: function getQuizList() {
		return mockedQuiz;
	}
}

module.exports = store;