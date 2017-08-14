import React from 'react';
import Contentful from './../../shared/contentful';
import VeterinarianDetail from './detail';

class Veterinarians extends React.Component {

  constructor() {
    super();
    this.state = {
      veterinarians: [],
    };
  }

  componentWillMount() {
    const contentful = new Contentful();
    contentful.getAllVeterinarians().then((data) => {
      this.setState({ veterinarians: data.items });
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Veterinarians</h2>
        <hr />
        {this.state.veterinarians.length && this.state.veterinarians.map((entry) => {
          return (<VeterinarianDetail data={entry.fields} />);
        })}
      </div>
    );
  }
}

export default Veterinarians;
