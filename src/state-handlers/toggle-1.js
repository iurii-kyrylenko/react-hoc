import React, { Component } from 'react';
import { compose, withState, withHandlers, setDisplayName } from 'recompose';

const StatusList = () =>
  <div>
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>;

const withToggle = compose(
  withState('toggledOn', 'toggle', false),
)

const Status = withToggle(({ status, toggledOn, toggle }) =>
  <span style={{ cursor: 'pointer' }} onClick={() => toggle(c => !c)}>
    { status }
    { toggledOn && <StatusList /> }
  </span>
);

const Tooltip = withToggle(({ text, children, toggledOn, toggle }) =>
  <span>
    { toggledOn && <div style={{ position: 'absolute', left: 100, top: 20 }}>{ text }</div> }
    <span
      style={{ cursor: 'default' }}
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
    >
      {children}
    </span>
  </span>
);

const User = ({ name, status }) =>
  <div>
    <Tooltip text="Cool Dude!">{ name }</Tooltip>—
    <Status status={ status } />
  </div>;

const App = () =>
  <div>
    <User name="Tim" status="active" />
  </div>;

export default setDisplayName('Toggle')(App);
