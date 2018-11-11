import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // State is an object that react uses to set values to save within a class
    this.state = { term: '' };
  }

  // React default method used for rendering a class even with JSX tags
  render() {
    // use this.SetState() to change state not this.state= because this.setState()
    // informs React that the state has changed
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
