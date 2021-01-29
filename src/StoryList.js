import React from "react";
import axios from "axios";

// import SearchForm from "./SearchForm";
import Story from "./Story";

const BASE_URL = 'https://hn.algolia.com/api/v1/search';

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  state = {
    stories: [],
    searchTerm: '',
  }


  async getStories(term="react") {
    let query = term || this.state.searchTerm;
    let response = await axios.get(
      `${BASE_URL}?query=${query}`);
    this.setState({ stories: response.data.hits });
  }

  async componentDidMount() {
    await this.getStories();
  }

  async componentDidUpdate() {
    if (this.state.searchTerm !== '') {
      await this.getStories();
    }
  }

  updateSearchTerm(newTerm) {
    this.setState({ searchTerm: newTerm });
  }

  render() {
    return (
      <div className="StoryList">
        {/* <SearchForm updateSearchTerm={this.updateSearchTerm}/> */}
        <ul>
          {this.state.stories.map(s =>
            <Story
              title={s.title}
              url={s.url}
              key={s.objectID}
            />)}
        </ul>
      </div>
    )
  }
}

export default StoryList;
