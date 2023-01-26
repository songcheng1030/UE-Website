import React from "react";
import { withRouter } from "react-router-dom";

class ScrollTop extends React.Component {
  componentDidUpdate(prevProps: any) {
    if ((this.props as any).location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollTop as any);
