export const copyToClipboard = () => {
  navigator.clipboard.writeText("juleahlam@gmail.com");
  //show the popup
  return true;
};

export const clearPopup = () => {
  const interval = setInterval(() => {
    return false;
  }, 2000);

  return () => clearInterval(interval);
};

/* indicates if we are in mobile view */
export const isMobile = () => {
  if (window.innerWidth <= 1151) {
    return true;
  }
  return false;
};

/*indicates if we are in a small view laptop */

export const isSmallPc = () => {
  if (window.innerWidth <= 1366 && window.innerWidth > 1151) {
    return true;
  }
  return false;
};