(function () {
  var scheme = (("https:" == document.location.protocol) ? "https" : "http");
  var adnxs_domain = 'secure.adnxs.com';
  var aol_domain = 'secure.leadback.advertising.com';
  window.adroll_seg_eid = "VKE6O6363JCH3K44ZF5BFC";
  window.adroll_sendrolling_cross_device = true;
  window.adroll_form_fields = JSON.parse("[]");
  if (typeof __adroll._form_attach != 'undefined') {
    __adroll._form_attach();
  }
  window.adroll_rule_type = "l";
  var rule = ["0254bcab", "*/about-us/what-we-do/zakat/*"];
  if (scheme=='http') { adnxs_domain = 'ib.adnxs.com'; aol_domain = 'leadback.advertising.com';}
  var el = document.createElement("div");
  el.style["width"] = "1px";
  el.style["height"] = "1px";
  el.style["display"] = "inline";
  el.style["position"] = "absolute";
  var cm_urls = ["/cm/r/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/b/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/x/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/l/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/o/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/g/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ&google_nid=adroll5"];
  var img_tag = '<img height="1" width="1" style="border-style:none;" alt="" src="{}"/>\n';
  var content = '';
  for(var i = 0; i < cm_urls.length; i++) {
    content += img_tag.replace("{}", __adroll._srv(cm_urls[i]));
  }

  if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','//connect.facebook.net/en_US/fbevents.js');
  }

  try {
      try {
          
(function () {
    var queue = [];
    var start = new Date().getTime();
    var lastMouseSnap = 0;
    var mousemoveDelay = 100;
    var mousePath = "";
    var mlength = 255;

    var focused = document.hasFocus();
    var focusTimeOnPage = 0;
    var outfocusTimeOnPage = 0;

    var focusedFlushInterval = 10000;
    var unfocusedFlushInterval = 60000;
    var flushInterval = focused === true ? focusedFlushInterval : unfocusedFlushInterval;
    var flushTimeout;

    var scrollTimeout;
    var ieVers = 0, maxUrl = 3900;
    var ve = navigator.appVersion;
    if (ve) {
        (ve.indexOf("MSIE 6.") > -1 ?
            (ieVers = 6, maxUrl = 1700) :
            ve.indexOf("MSIE 7.") > -1 ?
                (ieVers = 7, maxUrl = 1900) :
                ve.indexOf("MSIE 8.") > -1 && (ieVer = 8));
    }
    var onp_path = "/onp/" + adroll_adv_id + "/" + adroll_pix_id;

    function trunc(s, at) {
        return isString(s) ? s.slice(0, at) : s
    }

    function isObject(o) {
        return o && "object" == typeof o || false
    }

    function isString(s) {
        return "string" == typeof s || isObject(s) && Object.prototype.toString(s) == "[object String]" || false
    }


    function getTarget(evt) {
        return evt.target || evt.srcElement;
    }
    function getClassName(t) {
        var e = function(t) {
            return 1 === t.nodeType && "http://www.w3.org/2000/svg" === t.namespaceURI
        };
        if (void 0 === t) return void 0
        return (e(t) ? t.className ? t.className.baseVal : t.getAttribute("class") : t.className) || ""
    }
    function getAttr(t, e) {
        return "form" === t.tagName.toLowerCase() ? t.getAttribute(e) || "" : t[e]
    }
    function getPath(t) {
        var e, r, o, u;
        for (r = ""; t && t.tagName && "BODY" !== t.tagName && "HTML" !== t.tagName && (e = "@" + t.tagName.toLowerCase() + ";", u = getAttr(t, "id"), u && (e += "#" + u.replace(/\s/g, "") + ";"), o = getClassName(t), o && (e += "." + o.split(/\s+/).sort().join(";.") + ";"), e += "|", !(r.length + e.length > 1024));) r = e + r, t = t.parentElement;
        return r
    }

    function cleanAndTrim(t) {
        if (t == undefined) return t;
        return t = t.toString(), t.length > 255 && (t = t.slice(0, 255).split(" ").slice(0, -1).join(" ")), t.replace(/[\(\)\!\@\#\$\%\^\&\*]/g, "")
    }


    function queueEvent(evt) {
        var evt = evt || window.event,
            target = getTarget(evt),
            evtName = trunc("mouseup" === evt.type ? "click" : evt.type, 255),
            className = getClassName(target),
            // This is cool but invasive
            // tagValue = trunc(content(target).replace(/^\s+|\s+$/g, ""), 64),
            tagPath = evt.type === "scroll" ? "" : getPath(target);

        var ev = {}

        if (target != undefined && (evtName == "click" || evtName == "change" || evtName == "submit")) {
            ev['i'] = trunc(getAttr(target, "id"), 255);
            ev['c'] = cleanAndTrim(className);
            ev['n'] = trunc(target.tagName.toLowerCase(), 255);
        }
        switch (evtName) {
            case "click":
                ev['t'] = 'cli';
                ev['p'] = tagPath;
                ev['h'] = trunc(findAHRef(target), 1024);
                break;
            case "change":
                ev['t'] = 'cha';
                ev['p'] = tagPath;
                break;
            case "scroll":
                ev['t'] = 'scr';
                ev['x'] = evt.x;
                ev['y'] = evt.y;
                break;
            case "mousemove":
                if (queue.length && queue[queue.length-1].t == 'mmv') {
                    ev = undefined;
                    queue[queue.length-1].m += "x"+Math.floor(evt.clientX/5).toString(16)+"y"+Math.floor(evt.clientY/5).toString(16)+".";
                }
                else {
                    ev['t'] = 'mmv';
                    ev['m'] = "x"+Math.floor(evt.clientX/5).toString(16)+"y"+Math.floor(evt.clientY/5).toString(16)+".";
                }
                break;
            case "submit":
                ev['t'] = 'sub';
                ev['p'] = tagPath;
                break;
            case "top":
                ev['t'] = 'top';
                ev['f'] = evt.time;
                break;
            case "focus": case "focusin": case "pageshow":
                ev['t'] = 'foc'
                break;
            case "blur": case "focusout": case "pagehide":
                ev['t'] = 'blu'
                break;
            case "error":
                ev['t'] = 'err'
                break;
            default:
                return;
        }
        if (ev != undefined) {
            var toQueue = "ev=" + encodeURIComponent(objToString(ev));
            if ((queue.join("&").length + toQueue.length) > maxUrl) {
                flush();
            }
            queue.push(toQueue);
            if (evtName == 'click') {
                flush();
            }
        }
    }

    function clearQueue() {
        queue = [];
    }

    function onClick(evt) {
        var target, btn;
        if (evt = evt || window.event,
            button = evt.which || evt.button,
            target = getTarget(evt),
            (!ieVers || target === evt.currentTarget) && target && target.tagName) {
            if ("click" === evt.type) {
                queueEvent(evt)
            }
        }
    }

    function onSubmit(evt) {
        evt = evt || window.event,
        queueEvent(evt)
    }

    function findAHRef(t) {
        for (var e = null; t && "BODY" !== t.tagName && "HTML" !== t.tagName;) {
            if (e = t.getAttribute("href")) return e;
            t = t.parentElement
        }
        return e
    }

    function onScroll(evt) {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(saveScrollPos, 500)
    }

    function saveScrollPos() {
        queueEvent({"type": "scroll", "x": window.pageXOffset, "y": window.pageYOffset});
    }

    function onMousemove(evt) {
        evt = evt || window.event;
        var now = new Date().getTime();
        if (now - lastMouseSnap > mousemoveDelay) {
            queueEvent(evt);
            lastMouseSnap = now;
        }
    }

    function onFocusIn(evt) {
        if (getTarget(evt) != window) { return; }
        focused = true;
        start = new Date().getTime();
        queueEvent(evt);
        flushInterval = focusedFlushInterval;
        clearTimeout(flushTimeout);
        flush();
    }

    function onFocusOut(evt) {
        if (getTarget(evt) != window) { return; }
        queueEvent(evt);
        focused = false;
        flush();
        // Take this out and it will continue to sync even out of focus, but that's not useful.
        clearTimeout(flushTimeout);
        flushInterval = unfocusedFlushInterval;
    }

    function listen(tag, evt, handler, args) {
        document.addEventListener ? tag.addEventListener(evt, handler, args) : document.attachEvent ? tag.attachEvent("on" + evt, function() {
            var e = window.event;
            e.currentTarget = tag;
            e.target = e.srcElement;
            handler.call(tag, e)
        }) : tag["on" + evt] = handler
    }

    function unlisten(tag, evt, handler, args) {
        return tag.removeEventListener ? (tag.removeEventListener(evt, handler, args), !0) : t.detachEvent ? t.detachEvent("on" + evt, handler) : void(tag["on" + evt] == handler && delete tag["on" + evt])
    }

    function listenAll() {

        function wrapException(func) {
            return function wrapper(evt) {
                try {
                    return func(evt);
                } catch(e) {}
            }
        }
        try {
            //document.addEventListener("change", wrapException(queueEvent), true);
            //document.addEventListener("click", wrapException(onClick), true);
            //document.addEventListener("submit", wrapException(onSubmit), true);
            //document.addEventListener("scroll", wrapException(onScroll), true);
            //document.addEventListener("mousemove", wrapException(onMousemove), true);
            window.addEventListener("beforeunload", wrapException(flush), true);
            window.addEventListener("focus", wrapException(onFocusIn), true);
            window.addEventListener("blur", wrapException(onFocusOut), true);
        } catch(e) {}


        var oldonerror = window.onerror;
        window.onerror = function() {
            queueEvent({"type": "error",
                        "msg": arguments[0],
                        "url": arguments[1],
                        "lineno": arguments[2],
                        "colno": arguments[3],
                        "error": arguments[4]});
            if (oldonerror) oldonerror.apply(this, arguments);
            return false;
        };

    };

    function objToString(obj, i) {
        var str = "";
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) continue
            if (!obj[key]) continue
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str;
    }


    function flush() {
        try {
            if (focused) {
                var now = new Date().getTime();
                focusTimeOnPage = focusTimeOnPage + parseInt((now - start)/1000);
                start = now;
                queue.splice(0, 0, "ev=" + encodeURIComponent("t=top&f="+focusTimeOnPage));
            }
            send(queue);
            clearQueue();
            clearTimeout(flushTimeout);
            flushTimeout = setTimeout(flush, flushInterval);
        } catch(e) {}
    }

    function send(paramsList) {
        var toSend = paramsList.join("&");
        if (toSend.length>0) {
            var fullPath = __adroll._srv(onp_path + "?" + "pv=" + __adroll.pv + "&" + paramsList.join("&"));
            var img = new window.Image();
            img.src = fullPath;
        }
    }


    listenAll();
    flush();

})();

      } catch(e) {}
      try {
          
(function() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (window === window.top && ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1 && ua.indexOf('crios') === -1) {
    
    var b = window.document.createElement('script');
    b.language = 'javascript';
    b.src = '//d.adroll.com/bounce/pre/RSNYDHEQ25ARBALS4Q2IYQ/N3Y66KAANRGDVKUXMVZS5P/?d=' + encodeURIComponent('//s.adroll.com/j/bounce.js');
    window.__adroll._head().appendChild(b);
  }
})();

      } catch(e) {}
      try {
          
(function() {
var rtb = document.createElement("div");
rtb.style["width"] = "1px";
rtb.style["height"] = "1px";
rtb.style["display"] = "inline";
rtb.style["position"] = "absolute";
rtb.innerHTML = ["/cm/b/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/g/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/index/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/n/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/o/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/outbrain/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/pubmatic/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/r/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/taboola/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/triplelift/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ","/cm/x/out?advertisable=RSNYDHEQ25ARBALS4Q2IYQ"].reduce(function (acc, cmURL) {
    return acc + '<img height="1" width="1" style="border-style:none;" alt="" src="' + __adroll._srv(cmURL) + '"/>';
}, '');
__adroll._head().appendChild(rtb);
})();

      } catch(e) {}
      try {
          
(function(){
    var scr = document.createElement("script");
    scr.type = "text/javascript";
    scr.src = "//s.adroll.com/j/sendrolling.js";
    ((document.getElementsByTagName("head") || [null])[0] || document.getElementsByTagName("script")[0].parentNode).appendChild(scr);
}());

      } catch(e) {}
      try {
          if (typeof window.adroll_version !== "undefined" && window.adroll_version == "2.0") {
    function adrollIdentifyUser() {
        if (window.adroll_email) {
            window.adroll.identify({email: window.adroll_email});
        }
    }

    function adrollSetProperties() {
        var payload = {currency: window.adroll_currency || "", language: window.adroll_language || ""};
        window.adroll.setProperties(payload);
    }

    var adrollProductPagePayload = adrollCartPagePayload = adrollCheckoutPagePayload = function() {
        return {products: window.adroll_products || []};
    };

    function adrollSearchPagePayload() {
        return {keywords: window.adroll_keywords || "", product_id: window.adroll_product_id || []};
    }

    function adrollProductsAddedToCartPayload() {
        return {products: window.adroll_products_added_to_cart || []};
    }

    function adrollConversionPagePayload() {
        return {
            products: window.adroll_products || [],
            order_id: window.adroll_order_id || "",
            conversion_value: window.adroll_conversion_value || ""
        };
    }

    function adrollTrackOnPageLoad() {
        switch(window.adroll_current_page){
            case 'home_page':
                window.adroll.track('pageView');
                window.adroll.track('homeView');
                break;
            case 'search_page':
                window.adroll.track('pageView');
                window.adroll.track('search', adrollSearchPagePayload());
                break;
            case 'product_page':
                window.adroll.track('pageView', {segment_name: 'woocommerce_viewed_product'});
                window.adroll.track('productView', adrollProductPagePayload());
                break;
            case 'cart_page':
                window.adroll.track('pageView', {segment_name: 'woocommerce_viewed_cart'});
                window.adroll.track('cartView', adrollCartPagePayload());
                break;
            case 'checkout_page':
                window.adroll.track('pageView', {segment_name: 'woocommerce_checkout'});
                window.adroll.track('checkoutStart', adrollCheckoutPagePayload());
                break;
            case 'conversion_page':
                var purchasePayload = adrollConversionPagePayload();
                window.adroll.track('purchase', purchasePayload);
                var pageViewPayload = JSON.parse(JSON.stringify(purchasePayload));
                pageViewPayload.segment_name = 'woocommerce_order_received';
                window.adroll.track('pageView', pageViewPayload);
                break;
            default:
                window.adroll.track('pageView');
        }

        // When products get added to the cart, the global woocommerce_added_product_to_cart gets set on the next page
        // load, regardless of which page it is. So we must check if it exists on every page load, and fire the event.
        if (window.adroll_products_added_to_cart) {
            window.adroll.track('pageView', {segment_name: 'woocommerce_added_product_to_cart'});
            window.adroll.track('addToCart', adrollProductsAddedToCartPayload());
        }
    }

    function adrollSetupClickListeners() {
        function trackAddToCartSegment() {
            window.adroll.track('pageView', {segment_name: 'woocommerce_added_product_to_cart'});
        }

        var elementLists = [
            document.querySelectorAll("button[class*='add-to-cart']"),
            document.querySelectorAll("button[class*='add_to_cart']"),
            document.querySelectorAll("button[name*='add-to-cart']"),
            document.querySelectorAll("button[name*='add_to_cart']"),
            document.querySelectorAll("a[class*='add-to-cart']"),
            document.querySelectorAll("a[class*='add_to_cart']"),
            document.querySelectorAll("a[href*='add-to-cart']"),
            document.querySelectorAll("a[href*='add_to_cart']"),
            document.querySelectorAll("div[class*='add-to-cart']"),
            document.querySelectorAll("div[class*='add_to_cart']")
        ];

        for (var i = 0; i < elementLists.length; i++) {
            var elementList = elementLists[i];
            for (var j = 0; j < elementList.length; j++) {
                var element = elementList[j];
                element.addEventListener('click', trackAddToCartSegment);
            }
        }
    }

    adrollIdentifyUser();
    adrollSetProperties();
    adrollTrackOnPageLoad();
    try{adrollSetupClickListeners();}catch(e){}
} else {
    if (__adroll.extract_pid.toString().indexOf("window.adroll_dco_woocommerce_loaded") == -1) {
        __adroll.extract_pid = function(opts, service_name, log_pid_fn) {
            var getProduct = function () {
                if (window.hasOwnProperty("adroll_product_id")) {
                    return window.adroll_product_id;
                }
            }.bind(this)

            var logProduct = function (product_id) {
                if (!!product_id && document.getElementsByClassName("single-product").length > 0) {
                    log_pid_fn({"product_id": product_id});
                }
                else if (this.facebook_dummy_product_enabled() && service_name === "facebook") {
                    log_pid_fn({"product_id": "adroll_dummy_product"});
                }
            }.bind(this)

            var setCartListener = function (el, product_id) {
                var cart_clicked = false;
                el.addEventListener("click", function(event) {
                    if (!cart_clicked) {
                        cart_clicked = true;
                        log_pid_fn({
                            "product_id": product_id,
                            "product_action": "AddToCart"
                        });
                    }
                });
            }.bind(this)

            var logCart = function (product_id) {
                var single_page_button = document.getElementsByClassName("single_add_to_cart_button")[0];
                if (!!product_id && single_page_button != undefined) {
                    setCartListener(single_page_button, product_id);
                }

                var ajax_buttons = document.getElementsByClassName("ajax_add_to_cart");
                for (var i = 0; i < ajax_buttons.length; i++){
                    setCartListener(ajax_buttons[i], ajax_buttons[i].getAttribute('data-product_id'));
                }
            }.bind(this)

            var logCheckout = function () {
                if (window.hasOwnProperty("adroll_checkout_ids")) {
                    for (var i = 0; i < window.adroll_checkout_ids.length; i++) {
                        log_pid_fn({
                            'product_id': window.adroll_checkout_ids[i],
                            'product_action': 'Purchase'
                        });
                    }
                }
            }.bind(this)

            if (!window.adroll_dco_woocommerce_loaded) {
                window.adroll_dco_woocommerce_loaded = {};
            }

            if (!window.adroll_dco_woocommerce_loaded[service_name]) {
                window.adroll_dco_woocommerce_loaded[service_name] = true;
                var product_id = getProduct();
                logProduct(product_id);
                logCart(product_id);
                logCheckout();
            }
        }
    }
}

      } catch(e) {}
      try {
          if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
    var fbLimitedDataUse = true;
    if(typeof __adroll.fb === 'undefined'){
    if (fbLimitedDataUse) {
        fbq('dataProcessingOptions', ['LDU'], 0, 0);
    }
    fbq('init', '643544415798652');
    fbq('set', 'autoConfig', 'false', '643544415798652');
    __adroll.fb=true;

    var __fbcd = {segment_eid: "VKE6O6363JCH3K44ZF5BFC"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "PageView", __fbcd);
    } else {
    var __fbcd = {event: "EventSegment", segment_eid: "VKE6O6363JCH3K44ZF5BFC"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "CustomEvent", __fbcd);
    }
}

      } catch(e) {}
  } catch(e) {}

  var r = Math.random()*10000000000000000;
  content = content.replace(/\[ord\]/gi, r);
  content = content.replace(/\[protocol\]/gi, scheme);
  content = content.replace(/\[adnxs_domain\]/gi, adnxs_domain);
  content = content.replace(/\[aol_domain\]/gi, aol_domain);
  var adroll_tpc = __adroll._global('adroll_tpc');
  if (adroll_tpc) {
    var srv_parts = __adroll._srv().split('?');
    var srv_host = srv_parts[0].substr(srv_parts[0].indexOf(':') + 1);
    var srv_re = new RegExp(srv_host + '([^\?\"\'\>\#\S]+)\\?*', 'gi');
    content = content.replace(srv_re, srv_host + '$1?' + srv_parts[1] + '&');
  }
  content = __adroll.replace_external_data(content);
  el.innerHTML = content;
  __adroll._head().appendChild(el);
  if (typeof __adroll.set_pixel_cookie != 'undefined') {__adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id, "VKE6O6363JCH3K44ZF5BFC");}
}());
