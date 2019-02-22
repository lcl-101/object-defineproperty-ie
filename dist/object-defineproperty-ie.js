/**
 * Object.defineProperty Sham For IE
 * @version 1.1.2
 * @author Ambit Tsai <ambit_tsai@qq.com>
 * @license Apache-2.0
 * @see {@link https://github.com/ambit-tsai/object-defineproperty-ie}
 */
!function(p,s,i){if(!s.defineProperties){p.VB_cache={};var n=s.defineProperty;s.defineProperties=function(e,r){if(n&&e instanceof Element){for(var t in r)f(r,t)&&n(e,t,r[t]);return e}return function l(e,r){var t=s.getOwnPropertyDescriptors(e);for(var n in r)if(f(r,n)){var i=r[n];P(i),f(t,n)?v(t[n],i):t[n]=i,y(t[n])}var o=p.setTimeout(function(){}),a=function c(e,r){var t=["Class VB_Class_"+r];for(var n in e){var i=e[n];if("value"in i||"writable"in i)if(i.writable)t.push("  Public ["+n+"]");else{var o="    ";!i.value||"object"!=typeof i.value&&"function"!=typeof i.value||(o+="Set "),o+="["+n+"] = Window.VB_cache.["+r+"].desc.["+n+"].value",t.push("  Public Property Get ["+n+"]",o,"  End Property","  Public Property Let ["+n+"](val)","  End Property","  Public Property Set ["+n+"](val)","  End Property")}else"get"in i||"set"in i?(i.get?t.push("  Public Property Get ["+n+"]","    On Error Resume Next","    Set ["+n+"] = Window.VB_cache.["+r+"].desc.["+n+"].get.call(ME)","    If Err.Number <> 0 Then","      ["+n+"] = Window.VB_cache.["+r+"].desc.["+n+"].get.call(ME)","    End If","    On Error Goto 0","  End Property"):t.push("  Public Property Get ["+n+"]","  End Property"),i.set?t.push("  Public Property Let ["+n+"](val)","    Call Window.VB_cache.["+r+"].desc.["+n+"].set.call(ME, val)","  End Property","  Public Property Set ["+n+"](val)","    Call Window.VB_cache.["+r+"].desc.["+n+"].set.call(ME, val)","  End Property"):t.push("  Public Property Let ["+n+"](val)","  End Property","  Public Property Set ["+n+"](val)","  End Property")):t.push("  Public ["+n+"]")}return t.push("End Class","Function VB_factory_"+r+"()","  Set VB_factory_"+r+" = New VB_Class_"+r,"End Function"),t.join("\r\n")}(t,o);return p.execScript(a,"VBS"),function u(e,r){for(var t in r)r[t].writable&&(e[t]=r[t].value)}(e=p["VB_factory_"+o](),t),p.VB_cache[o]={obj:e,desc:t},e}(e,r)},s.defineProperty=function(e,r,t){var n={};return n[r]=t,s.defineProperties(e,n)};var o=s.getOwnPropertyDescriptor;s.getOwnPropertyDescriptor=function(e,r){if(o&&e instanceof Element)return o(e,r);for(var t in p.VB_cache)if(p.VB_cache[t].obj===e){var n=p.VB_cache[t].desc[r];return n&&v({},n)}return f(e,r)?{configurable:!0,enumerable:!0,value:e[r],writable:!0}:i}}function f(e,r){return s.prototype.hasOwnProperty.call(e,r)}function P(e){if(!(e instanceof s))throw new TypeError("Property description must be an object");if(("value"in e||"writable"in e)&&("get"in e||"set"in e))throw new TypeError("Invalid property descriptor");if("get"in e&&"function"!=typeof e.get&&e.get!==i)throw new TypeError("Getter must be a function");if("set"in e&&"function"!=typeof e.set&&e.set!==i)throw new TypeError("Setter must be a function")}function y(e){"value"in e||"writable"in e?("value"in e||(e.value=i),e.writable=!!e.writable):"get"in e||"set"in e?(e.get=e.get||i,e.set=e.set||i):(e.value=i,e.writable=!1),e.configurable=!!e.configurable,e.enumerable=!!e.enumerable}function v(e,r){for(var t in r)f(r,t)&&(e[t]=r[t]);return e}s.getOwnPropertyDescriptors||(s.getOwnPropertyDescriptors=function(e){var r={};for(var t in e){var n=s.getOwnPropertyDescriptor(e,t);n&&(r[t]=n)}return r})}(window,Object);