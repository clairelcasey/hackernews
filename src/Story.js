import React from "react";


class Story extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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