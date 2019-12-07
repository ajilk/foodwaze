import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class PostComponent extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '30rem', borderRadius: '20px' }}>
          <Card.Body>
            <Card.Title>
              {this.props.title}
              {/* <strong>{this.props.post.foodtype}@</strong> */}
            </Card.Title>
            <Card.Text>
              {this.props.description} - {this.props.location}
              {/* <Card.Img variant="top" src={this.props.post.image} /> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}