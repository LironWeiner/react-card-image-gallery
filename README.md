# React Card Image Gallery
A responsive image gallery.
When clicking on image a modal will open.

### Features
* Responsive  
* Very easy to use
* Can use images from your assets folder or http address
* Modal for showing the pictures
    
### Installing as a package
`npm i react-card-image-gallery --save`

### Usage
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';   
import CardGallery from 'react-card-image-gallery';
class DemoCarousel extends Component {
  render() {        
    return (
      <div className="container">
        <CardGallery>
            <div>
                <img src="assets/someimage1.jpg" />               
            </div>
            <div>
                <img src="http://someimage2.jpg" />                
            </div>              
        </CardGallery>
      </div>
    );
  }
}
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
```
### Demo
https://codesandbox.io/s/m731718mkp
