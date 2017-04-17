import React, {PropType} from 'react'; //

class App extends React.Component {
  render(){
    return(
    <div className="container-fluid">
      <p>Header here</p>
      {this.props.children}
    </div>
    );
  }
}

App.propTypes = {
  children: PropType.object.isRequired
};

export default App;
