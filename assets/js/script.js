let screen_resolution_el = document.getElementById("screen__resolution");
let browser_window_size_el = document.getElementById("browser__window__size");
let browser__available__window__size = document.getElementById(
  "browser__available__window__size"
);
let screen_type_el = document.getElementById("screen__type");
let screen_orientation_el = document.getElementById("screen__orientation");

const MAX_MOBILE_WITH = 481;
const MAX_TAB_WITH = 961;

function getScreenResolution() {
  let ratio = window.devicePixelRatio || 1;
  let width = screen.width * ratio;
  let height = screen.height * ratio;
  return {
    width: width,
    height: height,
    string: `${Math.round(width)} * ${Math.round(height)}`,
  };
}

function setScreenResolution() {
  screen_resolution_el.textContent = getScreenResolution().string;
}

function getWindowSize() {
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  return {
    width: width,
    height: height,
    string: `${Math.round(width)} * ${Math.round(height)}`,
  };
}

function setWindowSize() {
  window.screen.availHeight;
  window.screen.availWidth;

  browser_window_size_el.textContent = getWindowSize().string;
}

function getAvailableWindowSize() {
  let width = window.screen.availWidth;
  let height = window.screen.availHeight;
  return {
    width: width,
    height: height,
    string: `${Math.round(width)} * ${Math.round(height)}`,
  };
}

function setAvailableWindowSize() {
  browser__available__window__size.textContent =
    getAvailableWindowSize().string;
}

function getOrientation() {
  if (screen.availHeight > screen.availWidth) {
    return "portrait";
  } else {
    return "landscape";
  }
}

function setOrientation() {
  screen_orientation_el.innerText = getOrientation();
}

function isMobile() {
  let width = getAvailableWindowSize().width;
  if (width > 1 && width <= MAX_MOBILE_WITH) return true;
  else return false;
}

function isTablet() {
  let width = getAvailableWindowSize().width;

  if (width > MAX_MOBILE_WITH && width <= MAX_TAB_WITH) return true;
  else return false;
}

function isDesktop() {
  let width = getAvailableWindowSize().width;

  if (width > MAX_TAB_WITH) return true;
  else return false;
}

function setScreenType() {
  let type = "";

  if (isMobile()) type += "mobile ";
  if (isTablet()) type += "tablet ";
  if (isDesktop()) type += "desktop";

  screen_type_el.textContent = type;
}

function onResizeTracker() {
  setWindowSize();
  setScreenResolution();
  setAvailableWindowSize();
  setOrientation();
  setScreenType();
}

(function () {
  setWindowSize();
  setScreenResolution();
  setAvailableWindowSize();
  setOrientation();
  setScreenType();
  window.onresize = onResizeTracker;
})();
