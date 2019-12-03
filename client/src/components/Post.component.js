import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class PostComponent extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '30rem', borderRadius: '20px' }}>
          <Card.Body>
            <Card.Title>
              <strong>{this.props.post.foodtype}@</strong>
              {this.props.post.location}
            </Card.Title>
            <Card.Text>
              {this.props.post.description}
              <Card.Img variant="top" src={this.props.post.image} />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}