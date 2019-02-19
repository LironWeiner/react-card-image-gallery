import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./CardGallery.css";

class CardGallery extends Component {
  state = {
    isVisible: false,
    imageId: null,
    imagesPerPage:
      this.props.imagesPerPage != null ? this.props.imagesPerPage : null,
    currentPage: 1,
    pageChanged: false,
    children: React.Children.toArray(this.props.children)
  };

  openImageHandler = id => {
    this.setState({ isVisible: true, imageId: id });
  };

  toggleVisible = () => {
    this.setState({ isVisible: false });
  };

  changePageHandler = page => {
    this.setState({ currentPage: page, pageChanged: true });
  };

  pageChangedToggler = () => {
    this.setState({ pageChanged: !this.state.pageChanged });
  };

  imagePageHandler = () => {
    const size = this.state.children.length;
    const { imagesPerPage } = this.state;
    if (size > 0 && size > imagesPerPage) {
      const numberOfPages = Math.ceil(size / imagesPerPage);
      const orderedList = [];
      for (let i = 1; i <= numberOfPages; i++) {
        this.state.currentPage === i
          ? orderedList.push(
              <li className={classes.activeListItem} key={i}>
                {i}
              </li>
            )
          : orderedList.push(
              <li
                className={classes.listItem}
                onClick={() => this.changePageHandler(i)}
                key={i}
              >
                {i}
              </li>
            );
      }
      return <ol className={classes.pagesList}>{orderedList}</ol>;
    }
  };

  generateGallery() {
    if (this.state.imagesPerPage == null) {
      return this.state.children.map(item => {
        const image = item.props.children.props;
        return (
          <img
            className={classes.image}
            alt={image.alt}
            key={item.key}
            onClick={() => this.openImageHandler(image.src)}
            src={image.src}
          />
        );
      });
    } else {
      const startIndex =
        (this.state.currentPage - 1) * this.state.imagesPerPage;
      const endIndex = this.state.currentPage * this.state.imagesPerPage;

      return this.state.children.slice(startIndex, endIndex).map(item => {
        const image = item.props.children.props;
        return item.props.children.type === "img" ? (
          <img
            className={classes.image}
            alt={image.alt}
            key={item.key}
            onClick={() => this.openImageHandler(image.src)}
            src={image.src}
          />
        ) : (
          item
        );
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={classes.gardens}>{this.generateGallery()}</div>
        {this.state.imagesPerPage == null ? null : this.imagePageHandler()}
        <CSSTransition
          in={this.state.isVisible}
          timeout={{ enter: 0, exit: 300 }}
          unmountOnExit
          classNames={{
            enterActive: classes.modal,
            enterDone: classes.modalVisible,
            exit: classes.modalExit
          }}
        >
          <div>
            <span onClick={() => this.toggleVisible()} className={classes.close}>
              &times;
            </span>
            <div className={classes.modalContent}>
              {this.state.imageId != null ? <img alt="garden" src={this.state.imageId} /> : null}
            </div>
          </div>
        </CSSTransition>        
      </React.Fragment>
    );
  }
}
export default CardGallery;
