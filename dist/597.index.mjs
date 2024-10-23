export const id = 597;
export const ids = [597];
export const modules = {

/***/ 597:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ G)
/* harmony export */ });
const C=/-(\w)/g,E=t=>t.replace(C,(e,r)=>r.toUpperCase()),P=/\B([A-Z])/g,O=t=>t.replace(P,"-$1").toLowerCase(),{stringify:d}=JSON,{hasOwnProperty:x}=Object.prototype,y=(t,e)=>x.call(t,e),j=/^--?/,D=/[.:=]/,I=t=>{let e=t.replace(j,""),r;const s=e.match(D);if(s!=null&&s.index){const n=s.index;r=e.slice(n+1),e=e.slice(0,n)}return{flagName:e,flagValue:r}},T=/[\s.:=]/,U=(t,e)=>{const r=`Invalid flag name ${d(e)}:`;if(e.length===0)throw new Error(`${r} flag name cannot be empty}`);if(e.length===1)throw new Error(`${r} single characters are reserved for aliases`);const s=e.match(T);if(s)throw new Error(`${r} flag name cannot contain the character ${d(s==null?void 0:s[0])}`);let n;if(C.test(e)?n=E(e):P.test(e)&&(n=O(e)),n&&y(t,n))throw new Error(`${r} collides with flag ${d(n)}`)};function L(t){const e=new Map;for(const r in t){if(!y(t,r))continue;U(t,r);const s=t[r];if(s&&typeof s=="object"){const{alias:n}=s;if(typeof n=="string"){if(n.length===0)throw new Error(`Invalid flag alias ${d(r)}: flag alias cannot be empty`);if(n.length>1)throw new Error(`Invalid flag alias ${d(r)}: flag aliases can only be a single-character`);if(e.has(n))throw new Error(`Flag collision: Alias "${n}" is already used`);e.set(n,{name:r,schema:s})}}}return e}const M=t=>!t||typeof t=="function"?!1:Array.isArray(t)||Array.isArray(t.type),z=t=>{const e={};for(const r in t)y(t,r)&&(e[r]=M(t[r])?[]:void 0);return e},A=(t,e)=>t===Number&&e===""?Number.NaN:t===Boolean?e!=="false":e,B=(t,e)=>{for(const r in t){if(!y(t,r))continue;const s=t[r];if(!s)continue;const n=e[r];if(!(n!==void 0&&!(Array.isArray(n)&&n.length===0))&&"default"in s){let o=s.default;typeof o=="function"&&(o=o()),e[r]=o}}},_=(t,e)=>{if(!e)throw new Error(`Missing type on flag "${t}"`);return typeof e=="function"?e:Array.isArray(e)?e[0]:_(t,e.type)},K=/^-[\da-z]+/i,q=/^--[\w-]{2,}/,F="--";function G(t,e=process.argv.slice(2),r={}){const s=L(t),n={flags:z(t),unknownFlags:{},_:Object.assign([],{[F]:[]})};let o;const v=(i,a,l)=>{const c=_(i,a);l=A(c,l),l!==void 0&&!Number.isNaN(l)?Array.isArray(n.flags[i])?n.flags[i].push(c(l)):n.flags[i]=c(l):o=f=>{Array.isArray(n.flags[i])?n.flags[i].push(c(A(c,f||""))):n.flags[i]=c(A(c,f||"")),o=void 0}},b=(i,a)=>{i in n.unknownFlags||(n.unknownFlags[i]=[]),a!==void 0?n.unknownFlags[i].push(a):o=(l=!0)=>{n.unknownFlags[i].push(l),o=void 0}};for(let i=0;i<e.length;i+=1){const a=e[i];if(a===F){const f=e.slice(i+1);n._[F]=f,n._.push(...f);break}const l=K.test(a);if(q.test(a)||l){o&&o();const f=I(a),{flagValue:w}=f;let{flagName:u}=f;if(l){for(let g=0;g<u.length;g+=1){const $=u[g],h=s.get($),k=g===u.length-1;h?v(h.name,h.schema,k?w:!0):r!=null&&r.ignoreUnknown?n._.push(a):b($,k?w:!0)}continue}let p=t[u];if(!p){const g=E(u);p=t[g],p&&(u=g)}if(!p){r!=null&&r.ignoreUnknown?n._.push(a):b(u,w);continue}v(u,p,w)}else o?o(a):n._.push(a)}return o&&o(),B(t,n.flags),n}


/***/ })

};
