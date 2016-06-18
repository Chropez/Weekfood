import Ember from 'ember';

const { Helper: { helper } } = Ember;

const {
  isEmpty,
  String: { htmlSafe }
} = Ember;

export function ingredientViewer(params) {
  if (!params || isEmpty(params[0])) {
    return;
  }

  let ingredientLines = params[0].split(/(?:\r\n|\r|\n)/g);
  ingredientLines = ingredientLines.map((line) => {
    return formatNumber(line);
  });
  return htmlSafe(ingredientLines.join('<br>'));
}

function formatNumber(text) {
  if (isEmpty(text)) {
    return text;
  }

  let alteredText = text.replace(',', '.');
  let matchingNumbers = alteredText.match(/\d+\.\d+|\d+\b|\d+(?=\w)/);
  if (!matchingNumbers || matchingNumbers.length < 1) {
    return text;
  }

  try {
    if (!alteredText.startsWith(matchingNumbers[0])) {
      return text;
    }
    let number = text.substr(0, matchingNumbers[0].length);
    let rest   = text.substr(matchingNumbers[0].length);
    return `<strong>${number}</strong>${rest}`;
  } catch(e) {
    return text;
  }
}

export default helper(ingredientViewer);
