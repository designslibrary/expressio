import React, { Component } from 'react';
export default class PageBuilder extends Component {
    constructor(props) {
        super(props)
    }
  render() {
      const page=this.props.pageConfig;
    return (
      <div clasName={page.classes} style={page.styles }>{page.title}</div>
    );
  }
}
