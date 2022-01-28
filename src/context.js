import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD_BLOG":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;

      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

      default:
        break;
    }
  };

  state = {
    handler: this.handler,
    projects: [
      {
        url: "https://github.com/ShameekDutta/CodingNinjas",
        title: "Fusion Restaurant",
        excerpt: "Static Restaurant Website using HTML5 and CSS3",
        body: "Body 1",
      },
      {
        url: "https://github.com/ShameekDutta/Snake-game",
        title: "Snake Game",
        excerpt: "Command Line Snake Game using Python",
        body: "Body 2",
      },
    ],
    skills: [
      {
        id: 1,
        name: "HTML5",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "Javascript",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 5,
        name: "React",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 6,
        name: "MongoDB",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 7,
        name: "Python",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 8,
        name: "NodeJs",
        starsTotal: 3,
        starsActive: 2,
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
