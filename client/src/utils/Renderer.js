import React from 'react';

class Renderer {
  static generateTag(str, backgroundColor) {
    return (<span style={{ backgroundColor, padding: '0 0.25em', borderRadius: '2px' }}>{ str }</span>);
  }
  static render(str, tags) {
    const children = [];
    let inTag = false;
    let txt = '';
    let tag = '';
    let tagCount = 0;
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      switch (c) {
        case '#':
          inTag = true;
          children.push(txt);
          txt = '';
          break;
        case '@':
        case '.':
        case '?':
        case '!':
        case ' ':
          if (inTag && tag) {
            children.push(this.generateTag(tag, tags[tagCount++].color));
            tag = '';
          }
          inTag = false;
          txt += c;
          break;
        default:
          if (inTag) {
            tag += c;
          } else {
            txt += c;
          }
          break;
      }
    }
    if (txt) {
      children.push(txt);
    }
    if (tag) {
      children.push(this.generateTag(tag, tags[tagCount++].color));
    }
    return children;
  }
};

export { Renderer };
