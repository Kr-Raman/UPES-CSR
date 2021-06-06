import React, { Component } from "react";



class SearchStore extends Component {
  render() {
    return (
      <div className={this.props.style.search_box}>
        <p className={this.props.style.heading}>
          UPES
          <br />
          <span className={this.props.style.nine_eye}> Corporate Social Responsibility CSR</span>
        </p>
        <div className={this.props.style.search_form}>
          <div className={this.props.style.search_items}>
            

            <div
              className={this.props.style.search_buttons}
            >
              
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default SearchStore;


