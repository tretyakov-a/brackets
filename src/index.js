module.exports = function check(str, bracketsConfig) {
  const brackets = new Map(bracketsConfig);
  const closeBrackets = new Set(brackets.values());

  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    const ch = str[i];
    if (brackets.get(ch) === ch) {
      if (stack[stack.length - 1] !== ch) {
        stack.push(ch);
      } else {
        stack.pop(ch);
      }
    } else if (brackets.has(ch)) {
      stack.push(ch);
    } else if (closeBrackets.has(ch)) {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (brackets.get(top) !== ch) {
        return false;
      }
    }
  }
  return stack.length === 0;
}