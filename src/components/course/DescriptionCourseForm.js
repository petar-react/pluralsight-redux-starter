import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {Panel, ListGroup, ListGroupItem, Well} from 'react-bootstrap';

const DescriptionCourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) =>
{
  return (
    <form>
      <h1><Panel header={course.title}>
        <ListGroup fill>
          <h4><ListGroupItem>Course Author: {course.authorId}</ListGroupItem></h4>
          <h4><ListGroupItem>Course Category: {course.category}</ListGroupItem></h4>
          <h4><ListGroupItem>Course Length: {course.length}</ListGroupItem></h4>
          <div>
            <Panel header="Course Description"  bsStyle="primary">
              <h4><Well>{course.Description}</Well></h4>
            </Panel>
          </div>
        </ListGroup>
      </Panel>
      </h1>
    </form>
  );
};


export default DescriptionCourseForm;
