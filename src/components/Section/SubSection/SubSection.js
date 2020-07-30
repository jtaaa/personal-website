import React from "react";
import "./SubSection.css";

const SubSection = ({ title, type, contents, backgroundColor, color }) => {
  function renderContent() {
    if (contents) {
      switch (type) {
        case "paragraph":
          return contents.map((content, index) => (
            <p key={index} className="SubSection-paragraph">
              {content}
            </p>
          ));
        case "breakdown":
        case "rundown":
        case "summary":
        case "breakdown of de rundown":
        case "summary of de breakdown of the rundown":
          return (
            <div
              className="SubSection-breakdown"
              style={{ backgroundColor, color }}
            >
              {contents.map((content, index) => (
                <div key={index} className="SubSection-breakdown-point">
                  {content}
                </div>
              ))}
            </div>
          );
        default:
          return null;
      }
    }
    return null;
  }

  return (
    <div className="SubSection">
      {title && <div className="SubSection-title">{title}</div>}
      {renderContent()}
    </div>
  );
};

export default SubSection;
