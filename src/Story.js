import React from "react";

/** Story renders a li with title as a link to article
 * 
 * props:
 * - title
 * - url
 * 
 * state: None
 * 
 * StoryList -> Story
 */

class Story extends React.Component {
  render() {
    console.log('Render', this.props);

    return (
      <li className="Story">
        <a href={this.props.url}>
          {this.props.title}
        </a>
      </li>
    )
  }
}

export default Story;