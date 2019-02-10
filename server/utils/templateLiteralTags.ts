const oneLine = (strs: TemplateStringsArray, ...values: Array<string>) =>
  strs.reduce((acc, cur, index) =>
    acc.concat(cur, values[index] || '')
  )
    .replace(/\s+/g, ' ')

export {
  oneLine,
};
