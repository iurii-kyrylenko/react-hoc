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
  withHandlers({
    show: ({ toggle }) => () => toggle(true),
    hide: ({ toggle }) => () => toggle(false),
    toggle: ({ toggle }) => () => toggle(c => !c),
  })
);

const Status = withToggle(({ status, toggledOn, toggle }) =>
  <span style={{ cursor: 'pointer' }} onClick={toggle}>
    { status }
    { toggledOn && <StatusList /> }
  </span>
);

const Tooltip = withToggle(({ text, children, toggledOn, show, hide }) =>
  <span>
    { toggledOn && <div style={{ position: 'absolute', left: 100, top: 20 }}>{ text }</div> }
    <span
      style={{ cursor: 'default' }}
      onMouseEnter={show}
      onMouseLeave={hide}
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
