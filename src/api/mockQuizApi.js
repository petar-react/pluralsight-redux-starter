import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const quizzes = [
  {
    id:"_w0xnz6cop",
    title:"vrgbgfnfg",
    q:[
      {
        id:"_2fsumh00a",
        value:"gfhfghfg",
        a:[
          {
            questionId:"_2fsumh00a",
            id:"_xdiwaxwq3",
            value:"hfghfgh",
            isTrue:true
          },
          {
            questionId:"_2fsumh00a",
            id:"_bxe0bz5il",
            value:"hgfhfghgf",
            isTrue:false
          }
        ]
      }
    ]
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (quiz) => {
  return replaceAll(quiz.title, ' ', '-');
};

class QuizzApi {
  static getAllQuizzes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], quizzes));
      }, delay);
    });
  }

  static saveQuiz(quiz) {
    quiz = Object.assign({}, quiz); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minQuizTitleLength = 1;
        if (quiz.title.length < minQuizTitleLength) {
          reject(`Title must be at least ${minQuizTitleLength} characters.`);
        }
        //Mozda moze da se iskoristi
        // if (quiz.id) {
        //   const existingCourseIndex = quizzes.findIndex(a => a.id == quiz.id);
        //   quiz.splice(existingCourseIndex, 1, quiz);
        // } else {
          quizzes.push(quiz);
       // }
       debugger;
        resolve(quiz);
      }, delay);
    });
  }

  static deleteQuiz(quizId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfQuizToDelete = quizzes.findIndex(quiz => {
          quiz.id == quizId;
        });
        quizzes.splice(indexOfQuizToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default QuizzApi;
