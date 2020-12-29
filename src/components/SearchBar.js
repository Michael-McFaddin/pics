import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  // The function below is bound to the class because of the arrow syntax
  // If you use a constructor you can also bind the function in the constructor
  onFormSubmit = event => {
    event.preventDefault();
    // this.setState({ term: event.target.value });

    this.props.onSubmit(this.state.term);
  };

  render() {
    // console.log(this.state.term);
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text"
              value={this.state.term} 
              // onChange={this.onInputChange}
              onChange={(e) => this.setState({ term: e.target.value })}
              // Below, short alternative to a callback function
              // onChange={(e) => console.log(e.target.value)}
            />
          </div>
          
        </form>
      </div>
    );
  }
}

export default SearchBar;