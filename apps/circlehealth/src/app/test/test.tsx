import { Component } from 'react';

import styles from './test.module.css';

/* eslint-disable-next-line */
export interface TestProps {
  date?: Date;
}
export interface TestState {
  date: Date;
}

export class Test extends Component<TestProps, TestState> {
  constructor(props:TestProps) {
    super(props);
    this.state = {date : new Date()};
  }
  override render() {
    return (
      <div>
        <h1>Hello this is class based component example with type script </h1>
        <h2>It is {this.state.date?.toLocaleDateString()}</h2>
      </div>
    );
  }
}

export default Test;
