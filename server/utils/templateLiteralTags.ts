const oneLine = (strs: TemplateStringsArray, ...values: Array<string>) =>
  strs.reduce((acc, cur, index) => acc.concat(cur, values[index] || ''))
      .replace(/\s+/g, ' ');

const mongoUrlScheme = (strs: TemplateStringsArray, ...values: Array<string>) =>
  `mongodb://${values[0]}:${values[1]}@${values[2]}`;

export {
  oneLine,
  mongoUrlScheme,
};
