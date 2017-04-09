import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const questions = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (question) => {
  return replaceAll(question.value, ' ', '-');
};

class QuestionApi {
  static getAllQuestions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], questions));
      }, delay);
    });
  }

  static saveQuestion(question) {
    question = Object.assign({}, question); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        console.log(question);
        if (question.value.length < minCourseTitleLength) {
          reject(`Question must be at least ${minCourseTitleLength} characters.`);
        }

        if (question.id) {
          const existingQuestionIndex = questions.findIndex(a => a.id == question.id);
          questions.splice(existingQuestionIndex, 1, question);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          question.id = generateId(question);
         // question.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          questions.push(question);
        }

        resolve(question);
      }, delay);
    });
  }

  static deleteQuestion(questionId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = questions.findIndex(question => {
          question.id == questionId;
        });
        questions.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default QuestionApi;
