import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const quizzes = [
  {
    "id": "_8j5exvrot",
    "title": "Vezba",
    "questions": [
      {
        "id": "_uosfpm4cn",
        "question": "Koliko je 2+2?",
        "answers": [
          {
            "questionId": "_uosfpm4cn",
            "id": "_go2o9zllu",
            "label": "4",
            "isTrue": true
          },
          {
            "questionId": "_uosfpm4cn",
            "id": "_5fok3c5qu",
            "label": "5",
            "isTrue": false
          },
          {
            "questionId": "_uosfpm4cn",
            "id": "_xgipqeuom",
            "label": "3",
            "isTrue": false
          }
        ]
      },
      {
        "id": "_w42zns8r3",
        "question": "Koliko je 1+1?",
        "answers": [
          {
            "questionId": "_w42zns8r3",
            "id": "_cvkcit0xl",
            "label": "1",
            "isTrue": false
          },
          {
            "questionId": "_w42zns8r3",
            "id": "_jri4o0dyh",
            "label": "2",
            "isTrue": true
          },
          {
            "questionId": "_w42zns8r3",
            "id": "_jri4o0dyh",
            "label": "3",
            "isTrue": false
          }
        ]
      },
      {
        "id": "_5zcjdxk15",
        "question": "Koliko je 1x1?",
        "answers": [
          {
            "questionId": "_5zcjdxk15",
            "id": "_x0jxcrk7k",
            "label": "1",
            "isTrue": true
          },
          {
            "questionId": "_5zcjdxk15",
            "id": "_apqsifxh2",
            "label": "2",
            "isTrue": false
          },
          {
            "questionId": "_5zcjdxk15",
            "id": "_apqsifxh2",
            "label": "4",
            "isTrue": false
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
