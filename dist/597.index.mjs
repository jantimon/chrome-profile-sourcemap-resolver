export const id = 597;
export const ids = [597];
export const modules = {

/***/ 597:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ L)
/* harmony export */ });
var P=/-(\w)/g,m=t=>t.replace(P,(e,s)=>s.toUpperCase()),$=/\B([A-Z])/g,I=t=>t.replace($,"-$1").toLowerCase(),{stringify:u}=JSON,{hasOwnProperty:j}=Object.prototype,F=(t,e)=>j.call(t,e),K=/^--?/,_=/[.:=]/,C=t=>{let e=t.replace(K,""),s,n=e.match(_);if(n==null?void 0:n.index){let r=n.index;s=e.slice(r+1),e=e.slice(0,r)}return{flagName:e,flagValue:s}},D=/[\s.:=]/,M=(t,e)=>{let s=`Invalid flag name ${u(e)}:`;if(e.length===0)throw new Error(`${s} flag name cannot be empty}`);if(e.length===1)throw new Error(`${s} single characters are reserved for aliases`);let n=e.match(D);if(n)throw new Error(`${s} flag name cannot contain the character ${u(n==null?void 0:n[0])}`);let r;if(P.test(e)?r=m(e):$.test(e)&&(r=I(e)),r&&F(t,r))throw new Error(`${s} collides with flag ${u(r)}`)};function O(t){let e=new Map;for(let s in t){if(!F(t,s))continue;M(t,s);let n=t[s];if(n&&typeof n=="object"){let{alias:r}=n;if(typeof r=="string"){if(r.length===0)throw new Error(`Invalid flag alias ${u(s)}: flag alias cannot be empty`);if(r.length>1)throw new Error(`Invalid flag alias ${u(s)}: flag aliases can only be a single-character`);if(e.has(r))throw new Error(`Flag collision: Alias "${r}" is already used`);e.set(r,{name:s,schema:n})}}}return e}var R=t=>!t||typeof t=="function"?!1:Array.isArray(t)||Array.isArray(t.type),E=t=>{let e={};for(let s in t)F(t,s)&&(e[s]=R(t[s])?[]:void 0);return e},h=(t,e)=>t===Number&&e===""?Number.NaN:t===Boolean?e!=="false":e,v=(t,e)=>{for(let s in t){if(!F(t,s))continue;let n=t[s];if(!n)continue;let r=e[s];if(!(r!==void 0&&!(Array.isArray(r)&&r.length===0))&&"default"in n){let f=n.default;typeof f=="function"&&(f=f()),e[s]=f}}},A=(t,e)=>{if(!e)throw new Error(`Missing type on flag "${t}"`);return typeof e=="function"?e:Array.isArray(e)?e[0]:A(t,e.type)};var z=/^-[\da-z]+/i,B=/^--[\w-]{2,}/;function L(t,e=process.argv.slice(2)){let s=O(t),n={flags:E(t),unknownFlags:{},_:[]},r,f=(a,o,i)=>{let l=A(a,o);i=h(l,i),i!==void 0&&!Number.isNaN(i)?Array.isArray(n.flags[a])?n.flags[a].push(l(i)):n.flags[a]=l(i):r=g=>{Array.isArray(n.flags[a])?n.flags[a].push(l(h(l,g||""))):n.flags[a]=l(h(l,g||"")),r=void 0}},x=(a,o)=>{a in n.unknownFlags||(n.unknownFlags[a]=[]),o!==void 0?n.unknownFlags[a].push(o):r=(i=!0)=>{n.unknownFlags[a].push(i),r=void 0}};for(let a=0;a<e.length;a+=1){let o=e[a];if(o==="--"){n._.push(...e.slice(a+1));break}let i=z.test(o);if(B.test(o)||i){r&&r();let g=C(o),{flagValue:d}=g,{flagName:c}=g;if(i){for(let y=0;y<c.length;y+=1){let S=c[y],w=s.get(S),T=y===c.length-1;w?f(w.name,w.schema,T?d:!0):x(S,T?d:!0)}continue}let p=t[c];if(!p){let y=m(c);p=t[y],p&&(c=y)}if(!p){x(c,d);continue}f(c,p,d)}else r?r(o):n._.push(o)}return r&&r(),v(t,n.flags),n}


/***/ })

};
