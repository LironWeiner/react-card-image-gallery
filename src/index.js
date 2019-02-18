import React, { Component } from "react";
import classes from "./CardGallery.css";

class CardGallery extends Component {
  state = {
    isVisible: false,
    imageId: null,
    children: React.Children.toArray(this.props.children)
  };

  showImageHandler = id => {
    this.setState({ isVisible: true, imageId: id });
  };

  toggleVisible = () => {
    this.setState({ isVisible: false });
  };

  render() {
    let modalclss = [classes.modal];
    if (this.state.isVisible) {
      modalclss = [classes.modalVisible];
    }
    return (
      <React.Fragment>
        <div className={classes.gardens}>
          {this.state.children.map(item => {
            const image = item.props.children.props;
            return item.props.children.type === "img" ? (
              <img
                alt={image.alt}
                key={item.key}
                onClick={() => this.showImageHandler(image.src)}
                src={image.src}
              />
            ) : (
              item
            );
          })}
        </div>
        <div className={modalclss}>
          <span onClick={() => this.toggleVisible()} className={classes.close}>
            &times;
          </span>
          <div className={classes.modalContent}>
            {this.state.imageId != null ? (
              <img alt="garden" src={this.state.imageId} />
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CardGallery;
