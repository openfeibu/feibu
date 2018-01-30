(function (doc, win,fs) {
  var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth)
    {
      return;
    } 
    else if(clientWidth>520){
      docEl.style.fontSize = 65 + 'px';
    }
    else if(clientWidth<=750)
    {
      docEl.style.fontSize = (clientWidth / 7.5) + 'px';
    }
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
