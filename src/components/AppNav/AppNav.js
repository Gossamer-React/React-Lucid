import React from 'react';
import './app_nav.css';

const appNav = (props) => {
  return (
    <div id='window-nav'>
      <img id='logo' src='./hexagonFAT.png' alt='devtool logo' />
      <button
        className={props.tab === 'Graphql' ? 'window-btn active' : 'window-btn'}
        id='graphqlbtn'
        data-btn='Graphql'
        onClick={e => {
          props.handleWindowChange(e.target);
        }}
      >
        GraphQL
      </button>
      <button
        className={props.tab === 'React' ? 'window-btn active' : 'window-btn'}
        id='reactbtn'
        data-btn='React'
        onClick={e => {
          props.handleWindowChange(e.target);
        }}
      >
        React
      </button>
    </div>
  );
};

export default React.memo(appNav);
