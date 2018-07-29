/*!
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * Copyright (c) 2013 DeNA Co., Ltd.
 * Copyright (c) 2010, Linden Research, Inc
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var m={pack:function(g,c,a,e,d){var b=(1<<e-1)-1;Math.abs(a)>Math.pow(2,b+1)-2*(e+d)&&(a=0>a?-Infinity:Infinity);var f=0>((a=+a)||1/a)?1:0>a?1:0;a=Math.abs(a);var k=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),h=l(a/Math.pow(2,k)*Math.pow(2,d));a!==a?(h=Math.pow(2,d-1),k=(1<<e)-1):0!==a&&(a>=Math.pow(2,1-b)?(2<=h/Math.pow(2,d)&&(k+=1,h=1),k>b?(k=(1<<e)-1,h=0):(k+=b,h=l(h)-Math.pow(2,d))):(h=l(a/Math.pow(2,1-b-d)),k=0));b=k;a=[];a.push(f);for(f=e;0<f;--f)a[f]=b%2?1:0,b=Math.floor(b/2);f=a.length;
for(b=d;0<b;--b)a[f+b]=h%2?1:0,h=Math.floor(h/2);f=a.join("");e=Math.floor((e+d+1)/8)+c-1;for(d=c;e>=c;)g[e]=parseInt(f.substring(0,8),2),f=f.substring(8),e--,d++;return d},unpack:function(g,c,a,e){var d=Math.ceil((a+e)/8);e=Math.pow(2,-(8*d-1-a));var b="";for(--d;0<=d;d--){var f=g[d+c].toString(2);b+="00000000".substring(f.length)+f}g="1"==b.charAt(0)?-1:1;b=b.substring(1);c=parseInt(b.substring(0,a),2);b=b.substring(a);if(c==(1<<a)-1)return 0!==parseInt(b,2)?NaN:Infinity*g;0==c?(c+=1,b=parseInt(b,
2)):b=parseInt("1"+b,2);return g*b*e*Math.pow(2,c-((1<<a-1)-1))}},exports=m||{};Object.defineProperty(m,"__esModule",{value:!0});function l(g){var c=Math.floor(g);g-=c;return.5>g?c:.5<g?c+1:c%2?c+1:c};var ieee754Buffer=exports;typeof module!=='undefined'?module.exports=exports :typeof define==='function'&&define.amd?define(['exports'],exports) :typeof global!=='undefined'?global.ieee754Buffer=exports:null;
