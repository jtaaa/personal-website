/**
 * Parser class for parsing my custom format
 */
class Parser {
  static tagColors = [
    '#ffe5e5',
    '#ffece5',
    '#fff2e5',
    '#fff9e5',
    '#ffffe5',
    '#f9ffe5',
    '#f2ffe5',
    '#ecffe5',
    '#e6ffe6',
    '#e5ffec',
    '#e5fff2',
    '#e5fff9',
    '#e5ffff',
    '#e5f9ff',
    '#e5f2ff',
    '#e5ecff',
    '#e5e5ff',
    '#ece5ff',
    '#f2e5ff',
    '#f9e5ff',
    '#ffe5ff',
    '#ffe5f9',
    '#ffe5f2',
    '#ffe5ec',
    '#ffe5e5',
  ];

  /**
   * Returns a random tagColor from the default list of tag colors
   */
  static getRandomTagColor() {
    const randIndex = Math.floor(Math.random() * this.tagColors.length);
    return this.tagColors[randIndex];
  }

  /**
   * Parse and return tags in input with format #<tag>[@type.id, ...]
   * @param input input to be parsed
   */
  static getTags(input: string, randomColors?: boolean): { tag: string, references: { type: string, ref: string }[] }[] {
    return input.split('#').slice(1).map(part => {
      const [ tag, rawReferences ] = part.split(' ', 1)[0].split('@');
      const references = rawReferences ? 
          rawReferences.split(',').map(reference => {
            const [ type, ref ] = reference.split('.');
            return ({ type: type.toLowerCase(), ref });
            })
        : [];
      return ({
        tag: tag.replace(/\.|@|\?|!|/g, ''), references,
        color: randomColors ? this.getRandomTagColor() : undefined
      });
    });
  }
};

export { Parser };
