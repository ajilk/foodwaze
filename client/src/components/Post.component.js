import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { Card } from 'react-bootstrap';


export default class PostComponent extends Component {
  render() {
    const { post } = this.props;
    console.log(post.images[0]);
    return (
      <div>
        <Card style={{ width: '30rem', borderRadius: '20px' }}>
          <Card.Body>
            <Card.Title>
              {post.title}
              {/* <strong>{this.props.post.foodtype}@</strong> */}
            </Card.Title>
            <Card.Text>
              {post.description} - {post.location}
              {/* <Card.Img variant="top" src={this.props.post.image} /> */}
            </Card.Text>
            <Card.Text>
              by {post.owner.firstName} {post.owner.lastName} at {post.createdAt}
            </Card.Text>
            {post.images[0]
              ? <Image cloud_name="hsr6kguq8" publicId={post.images[0]} width="200" height="150" crop="scale" secure="true"></Image>
              : null
            }
          </Card.Body>
        </Card>
      </div >
    )
  }
}