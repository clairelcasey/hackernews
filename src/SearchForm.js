import React from "react";

/** SearchForm calls prop function and passes search term entered
 * 
 * props: 
 * - updateSearchTerm: function
 * 
 * state: 
 * - searchTerm
 * 
 * StoryList -> SearchForm
 */

class SearchForm extends React.Component {
  state = {
    searchTerm: '',
  }

  handleChange = (evt) => {
    this.setState({searchTerm: evt.target.value});
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.searchTerm.trim() === '') return;

    this.props.updateSearchTerm(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SearchForm">
        <input 
            onChange={this.handleChange} 
            id='SearchForm-searchTerm' 
            name='searchTerm' 
            value={this.state.searchTerm} />
        <button> Search </button>
      </form>
    )
  }
}

export default SearchForm;