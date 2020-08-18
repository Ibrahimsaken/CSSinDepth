let rootElement = document.documentElement;
let styles = getComputedStyle(rootElement);
let mainColor = styles.getPropertyValue('--main-bg');
console.log(String(mainColor).trim())
rootElement.style.setProperty('--main-bg', '#cdf')