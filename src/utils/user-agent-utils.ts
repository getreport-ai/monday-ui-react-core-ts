export function isFirefox() {
  return false;
  //return !!/Firefox\/([0-9.]+)(?:\s|$)/.exec(window.navigator.userAgent);
}

export function isIE11() {
  return false;
  //return !!window.MSInputMethodContext && !!document.documentMode;
}
