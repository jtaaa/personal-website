/**
 * Parser class for parsing my custom format
 */
class Parser {
  /**
   * Parse and return tags in input with format #<tag>[@type.id, ...]
   * @param input input to be parsed
   */
  static getTags(input: string): { tag: string, references: { type: string, ref: string }[] }[] {
    return input.split('#').slice(1).map(part => {
      const [ tag, rawReferences ] = part.split(' ', 1)[0].split('@');
      const references = rawReferences ? 
          rawReferences.split(',').map(reference => {
            const [ type, ref ] = reference.split('.');
            return ({ type: type.toLowerCase(), ref });
            })
        : [];
      return ({ tag: tag.replace('_', ' '), references });
    });
  }
};

export { Parser };
