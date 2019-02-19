# React Card Image Gallery
A responsive image gallery.
When clicking on image a modal will open.

### Features
* Responsive  
* Very easy to use
* Can use images from your assets folder or http address
* Can limit how many images are presented per page
* Modal for showing the pictures
    
### Installing as a package
`npm i react-card-image-gallery --save`

### Usage
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';   
import CardGallery from 'react-card-image-gallery';
class DemoImageGallery extends Component {
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
ReactDOM.render(<DemoImageGallery />, document.querySelector('.demo-imageGallery'));
```

# API

### CardGallery
```javascript
import CardGallery from 'react-card-image-gallery'
```

Name | Type | Default | Description
---- | ---- | ------- | -----------
imagesPerPage | number | null | The number of images that will be shown in each seperate page

### Demo
https://codesandbox.io/s/m731718mkp
