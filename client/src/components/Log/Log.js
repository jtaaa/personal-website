import React from 'react';
import './Log.css';

import { date, time } from './../../utils/templateLiteralTags';

const DateEntry = timestamp => (
  <div className="DateEntry">{ date`${timestamp}` }</div>
);

const differentDay = (timestamp1, timestamp2) =>
  date`${timestamp1}` !== date`${timestamp2}`;

const Logitem = logitem => (
  <div key={logitem._id} className="Log-item">
    <div className="Log-item-timestamp">{ time`${logitem.timestamp}` }->&nbsp;</div>
    <div className="Log-item-input">{ logitem.input }</div>
  </div>
);

const Log = ({ log }) => (
  <div className="Log">
    { log.reduce((acc, logitem) => differentDay(logitem.timestamp, acc.lastTimestamp) ?
        {
          lastTimestamp: logitem.timestamp,
          logitems: [ ...acc.logitems, DateEntry(logitem.timestamp), Logitem(logitem) ],
        }
      : {
          lastTimestamp: logitem.timestamp,
          logitems: [ ...acc.logitems, Logitem(logitem) ],
        }, { lastTimestamp: Date.now(), logitems: [] }).logitems }
  </div>
);

export default Log;
