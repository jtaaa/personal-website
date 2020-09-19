import React from "react";
import "./GeneralInfo.css";

const GeneralInfo = ({ description, infoPoints }) => (
  <div className="GeneralInfo">
    <div className="GeneralInfo-description">{description}</div>
    <div className="GeneralInfo-info">
      {infoPoints.map(({ label, value }) => (
        <div key={label} className="GeneralInfo-info-item">
          <div className="GeneralInfo-info-label">{label}</div>
          <div className="GeneralInfo-info-value">{value}</div>
        </div>
      ))}
    </div>
  </div>
);

export default GeneralInfo;
