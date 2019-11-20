import React, { Component } from 'react';
import {Card} from 'react-bootstrap';


export default class Post extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         // location: this.props.location,
    //         // description: this.props.description,
    //         // college: this.props.college,
    //         // foodtype: this.props.foodtype,
    //         // image: this.props.image
    //         location: 'CS Department 10th floor',
    //         description: "A TON of plain pizzaaa until 5pm. Kosher! Bring friends!",
    //         college: "Hunter College",
    //         foodtype: "Pizza",
    //         image: "https://www.kingarthurflour.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/20-3-large.jpg?itok=1v5DoLeu"
    //     }
    //   }
  render() {
    return (
        <div>
    <Card style={{ width: '30rem', borderRadius: '20px'}}>
    <Card.Body>
    <Card.Title> <strong>{this.props.post.foodtype} @ </strong>
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

