import React from 'react';
import store from './stores';
import setTechnology from './actions/index';

const ButtonGroup = ({ technologies }) => {
  return (
    <div>
      {technologies.map((tech, i) => (
        <button
          data-tech={tech}
          key={`btn-${i}`}
          className="hello-btn"
          onClick={dispatchBtnAction}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

const dispatchBtnAction = e => {
  const tech = e.target.dataset.tech; //Get button Text
  store.dispatch(setTechnology(tech)); //Invoke the action Creator
};

export default ButtonGroup;
