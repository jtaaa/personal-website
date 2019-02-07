import React from 'react';
import './SubSection.css';

const SubSection = ({ title, type, contents }) => {
  function renderContent() {
    switch (type) {
      case 'paragraph':
        return contents.map((content, index) => (
          <p key={index} className="SubSection-paragraph">{ content }</p>
        ));
      default:
        return null;
    }
  }

  return (
    <div className="SubSection">
      { title &&
      <div className="SubSection-title">{ title }</div> }
      { renderContent() }
    </div>
  );
};

export default SubSection;
