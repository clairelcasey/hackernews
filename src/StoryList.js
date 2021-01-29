import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Story from "./Story";

const BASE_URL = 'https://hn.algolia.com/api/v1/search';

/** StoryList renders search form and list of story titles as links
 * 
 * props: None
 * 
 * state: 
 * - stories: array of story objects
 * 
 * App -> StoryList -> { SearchForm, Story }
 */

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  state = {
    stories: [],
  }


  async getStories(term="react") {
    let response = await axios.get(
      `${BASE_URL}?query=${term}`);
    this.setState({ stories: response.data.hits });
  }

  async componentDidMount() {
    await this.getStories();
  }

  // TODO: update function name
  async updateSearchTerm(newTerm) {
    await this.getStories(newTerm);
  }

  render() {
    return (
      <div className="StoryList">
        <SearchForm updateSearchTerm={this.updateSearchTerm}/>
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
