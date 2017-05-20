import React from 'react';
import {Route, IndexRoute} from 'react-router';
import  App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import QuestionCreatePage from './components/questions/QuestionCreatePage';
import ManageCoursePage from './components/course/ManageCoursePage';
import QuizPlay from './components/quiz/Quiz';
import QuizPlay1 from './components/quiz/QuizPlay';
import QuizPage from './components/quiz/QuizPage';
import Description from './components/course/DescriptionCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/> {/*Prikaz podataka sa selektovane strane + id kao ime */}
    <Route path="description/:id" component={Description}/> {/*Prikaz podataka sa selektovane strane + id kao ime */}
    <Route path="about" component={AboutPage}/>
    <Route path="quizzes" component={QuizPage}/>
    <Route path="quizplay/:id" component={QuizPlay}/> {/*Prikaz podataka sa selektovane strane + id kao ime */}
    <Route path="questions" component={QuestionCreatePage}/>
  </Route>
);

/*
 <Route path="kviz" component={kviz}/>

 <Route path="quizplay/:id" component={QuizPlay}/> {/*Prikaz podataka sa selektovane strane + id kao ime */


