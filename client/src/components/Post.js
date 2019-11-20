import React, { Component } from 'react';
import {Card} from 'react-bootstrap';


export default class Posts extends Component {
    constructor() {
        super();
        this.state = {
            location = this.props.location,
            description: this.props.description,
            college: this.props.college,
            foodtype: this.props.foodtype,
            image: this.props.image,
        }
      }
  render() {
    return (
        <div>
    <Card style={{ width: '18rem', borderRadius: '20px'}}>
    <Card.Body>
    <Card.Title> <strong>{foodtype} @ </strong>
    {decription}, {college}
    </Card.Title>
    <Card.Text>
        {description}
        <Card.Img variant="top" src={image} />
    </Card.Text>
    </Card.Body>
    </Card>
    </div>
    )
  }
}
