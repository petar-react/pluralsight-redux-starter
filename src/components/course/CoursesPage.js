import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
/*
    this.state = {
      course: {title: ""}
    };*/
/*
    this.OnTitleChange = this.OnTitleChange.bind(this);
    this.OnClickSave = this.OnClickSave.bind(this);
*/
  }
/*
  OnTitleChange (event) {/*child function*/   /*
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }
  */
/*
  OnClickSave() { /*child function*/ /*
  this.props.actions.createCourse(this.state.course);

  }*/

  courseRow(course, index){ /*child function*/
    return <div key={index}>{course.title}</div>;
  }

 render() { /* child component *//*react*/
       return(
     <div>
       <h1>Course</h1>
       {this.props.courses.map(this.courseRow)}


       /*<h2>Add Course</h2>
       <input type="text" onChange={this.OnTitleChange} value={this.state.course.title} />
       <input type="submit" value="Save" onClick={this.OnClickSave} />
*/
     </div>
   );
 }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) /*redux connect* start*//*react*/
{

  return{
    courses: state.courses
  };
}



function mapDispatchProps(dispatch)
{
  return{
    actions: bindActionCreators(courseAction, dispatch)
  };
}

/*
const connectStateAndProps = connect(mapStateToProps, mapDispatchProps);
export default connectStateAndProps(CoursesPage); //isto kao kod ispod
*/
export default connect(mapStateToProps, mapDispatchProps) (CoursesPage); /*redux connect end */
