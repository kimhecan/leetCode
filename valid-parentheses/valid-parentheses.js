/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const 여는괄호 = ['(', '{', '['];
  const 닫는괄호 = [')', '}', ']'];
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const 괄호 = s[i];
    if (여는괄호.includes(괄호)) {
      stack.push(괄호);
    } else {
      const pop된괄호 = stack.pop();
      if (여는괄호.indexOf(pop된괄호) !== 닫는괄호.indexOf(괄호)) {
        return false;
      }
    }
  }
  if(stack.length === 0) {
      return true;
  } else {
      return false;
  }
};