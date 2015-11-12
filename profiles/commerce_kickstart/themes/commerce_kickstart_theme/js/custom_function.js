
function a(e) {
  return alert(e);
}

function aw(e) {
  return alert('[' + e + ']')
}

function bt(e) {
  $(e).css('background', 'transparent');
}

function cl(e) {
  return console.log(e);
}

function dw(e) {
  return document.write(e);
}

function isLH(e) {
  if (typeof(e) == 'undefined') e = true;
  if (document.location.hostname != "localhost") e = false;
  return e;
}

function la(e) {
  if (isLH() == true) alert(e);
  return false;
}

function r2c(e) {
  window.location = $(e).children().attr('href');
}

function wh() {
  return $(window).height();
}

function ww() {
  return $(window).width();
}

function z(e) {
  console.log($(e).css('z-index'));
}

function pathExist(e) {
  var pathname = window.location.pathname;
  e = pathname.indexOf(e);
  e > 0 ? e = true : e = false;
  return e;
}

function getURL(name) {
  return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]);
}

function fileName(e) {
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/') + 1);
  if (e == undefined) {
    return filename;
  } else {
    return url;
  }
}

function isIE(e) {
  var myNav = navigator.userAgent.toLowerCase();
  var isIE = '';
  var ans = '';
  myNav.indexOf('msie') != -1 ? isIE = true : isIE = false;
  if (e == undefined || e == '') {
    if (isIE) {
      return parseInt(myNav.split('msie')[1]);
    } else {
      return false;
    }
  } else {
    isIE == true ? ans = e : ans = '';
    return ans;
  }
}

function isRoot() {
  var pathName = window.location.pathname + window.location.search;
  if (pathName.length <= 1 || pathName == '/f/' || pathName == '/f/zh' || pathName == '/f/zh/' || pathName == '/zh' || pathName == '/zh/') {
    return true;
  } else {
    return false;
  }
}
