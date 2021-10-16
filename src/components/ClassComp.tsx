/* eslint-disable require-jsdoc */
import { Component } from "react";

type ClassCompProps = {
  name: string;
};

type ClassCompState = {
  count: number;
};

class ClassComp extends Component<ClassCompProps, ClassCompState> {
  constructor(props: ClassCompProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        {`${this.props.name}'s count is ${this.state.count}`}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add 1
        </button>
      </div>
    );
  }
}

export default ClassComp;
