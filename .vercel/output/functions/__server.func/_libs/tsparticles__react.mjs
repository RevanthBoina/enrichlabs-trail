import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./react+tanstack__react-query.mjs";
import { t as tsParticles } from "./tsparticles__engine.mjs";
//#region node_modules/@tsparticles/react/ParticlesProvider.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var u = (0, import_react.createContext)({ loaded: !1 });
function f() {
	return (0, import_react.useContext)(u);
}
//#endregion
//#region node_modules/@tsparticles/react/Particles.js
var a = (a) => {
	let { className: o, id: s, options: c, particlesLoaded: l, style: u, url: d } = a, { loaded: f$1 } = f(), p = (0, import_react.useRef)(void 0);
	return (0, import_react.useEffect)(() => {
		if (!f$1) return;
		let e = s ?? "tsparticles";
		return tsParticles.load({
			id: e,
			url: d,
			options: c
		}).then((t) => {
			if (!t?.destroyed) {
				if (!document.getElementById(e)) {
					t?.destroy();
					return;
				}
				p.current = t, l?.(t);
			}
		}), () => {
			p.current?.destroy(), p.current = void 0;
		};
	}, [
		s,
		f$1,
		c,
		l,
		d
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: s ?? "tsparticles",
		className: o,
		style: u
	});
};
//#endregion
//#region node_modules/@tsparticles/react/index.js
var r = a;
//#endregion
export { r as t };
