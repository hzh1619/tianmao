;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M188.852694 347.173001m-58.325383 0a56.997 56.997 0 1 0 116.650767 0 56.997 56.997 0 1 0-116.650767 0Z"  ></path>' +
    '' +
    '<path d="M304.047296 321.590346c-5.628184 0-10.233062 4.604878-10.233062 10.233062l0 30.699186c0 5.628184 4.604878 10.233062 10.233062 10.233062l579.191308 0c5.628184 0 10.233062-4.604878 10.233062-10.233062l0-30.699186c0-5.628184-4.604878-10.233062-10.233062-10.233062L304.047296 321.590346z"  ></path>' +
    '' +
    '<path d="M188.852694 541.206182m-58.325383 0a56.997 56.997 0 1 0 116.650767 0 56.997 56.997 0 1 0-116.650767 0Z"  ></path>' +
    '' +
    '<path d="M293.814234 556.555775c0 5.628184 4.604878 10.233062 10.233062 10.233062l579.191308 0c5.628184 0 10.233062-4.604878 10.233062-10.233062l0-30.699186c0-5.628184-4.604878-10.233062-10.233062-10.233062l-579.191308 0c-5.628184 0-10.233062 4.604878-10.233062 10.233062L293.814234 556.555775z"  ></path>' +
    '' +
    '<path d="M188.852694 735.23834m-58.325383 0a56.997 56.997 0 1 0 116.650767 0 56.997 56.997 0 1 0-116.650767 0Z"  ></path>' +
    '' +
    '<path d="M293.814234 750.58691c0 5.628184 4.604878 10.233062 10.233062 10.233062l579.191308 0c5.628184 0 10.233062-4.604878 10.233062-10.233062l0-30.699186c0-5.628184-4.604878-10.233062-10.233062-10.233062l-579.191308 0c-5.628184 0-10.233062 4.604878-10.233062 10.233062L293.814234 750.58691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)