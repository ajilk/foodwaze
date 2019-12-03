import React, { Component } from 'react';
import {Card} from 'react-bootstrap';


export default class Post extends Component {
  
  render() {
    return (
        <div style={{ margin: "8px"}}>
    <Card style={{ width: '15rem', height: '100%', borderRadius: '20px'}}>
    <Card.Body>
    <Card.Title> <strong>{this.props.post.foodtype} @ </strong>
{this.props.post.location}
    </Card.Title>
    <Card.Text>{this.props.post.description}
        <Card.Img variant="top" style={{marginTop: "10px", borderRadius: '10px'}} src={this.props.post.image} />
    </Card.Text>
    </Card.Body>
    </Card>
    </div>
    )
  }
}

