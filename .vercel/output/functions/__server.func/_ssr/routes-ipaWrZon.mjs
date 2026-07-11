import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { a as Shuffle, c as Menu, d as ArrowUp, f as ArrowRight, i as Sparkles, l as Clock, n as X, o as RefreshCw, p as Activity, r as TrendingUp, s as Plus, t as Zap, u as Check } from "../_libs/lucide-react.mjs";
import { t as r } from "../_libs/tsparticles__react.mjs";
import { _ as siZapier, a as siHubspot, c as siJira, d as siNotion, f as siReddit, g as siWordpress, h as siWhatsapp, i as siGoogleads, l as siLinear, m as siStripe, n as siFigma, o as siInstagram, p as siShopify, r as siGithub, s as siIntercom, t as siDiscord, u as siMailchimp } from "../_libs/simple-icons.mjs";
import { t as Lottie } from "../_libs/lottie-react+lottie-web.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ipaWrZon.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var linkedinSvg = "<path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/>";
var slackSvg = "<path d=\"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z\"/>";
var pipedriveSvg = "<path d=\"M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.18l6 3v9.64l-6 3-6-3V7.18l6-3zm0 3.64L8.5 13.5 12 16l3.5-2.5L12 10.82zm-4 2.36v6.5l3.5-2.5 3.5 2.5v-6.5l-3.5 2.5-3.5-2.5z\"/>";
var apiSvg = "<path d=\"M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19 7.5v7L12 18.5 5 14.5v-7l7-3.32zM12 8a2 2 0 100 4 2 2 0 000-4zm-4 6l8-3v2l-8 3v-2zm8 1l-8 3v-2l8-3v2z\"/>";
var webhookSvg = "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"/>";
var teamsSvg = "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm2 3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z\"/>";
var gmailSvg = "<path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"/>";
var driveSvg = "<path d=\"M12 2L4 8.5l8 5 8-5L12 2zm0 8.5L6.5 7 12 3.5 17.5 7 12 10.5zM6 17.5l6-3.5 6 3.5 6-3.5L12 21l-6-3.5z\"/>";
var iconMap = {
	intercom: {
		svg: siIntercom.svg,
		hex: siIntercom.hex
	},
	notion: {
		svg: siNotion.svg,
		hex: siNotion.hex
	},
	hubspot: {
		svg: siHubspot.svg,
		hex: siHubspot.hex
	},
	figma: {
		svg: siFigma.svg,
		hex: siFigma.hex
	},
	linear: {
		svg: siLinear.svg,
		hex: siLinear.hex
	},
	zapier: {
		svg: siZapier.svg,
		hex: siZapier.hex
	},
	pipedrive: {
		svg: pipedriveSvg,
		hex: "FF6600"
	},
	googleads: {
		svg: siGoogleads.svg,
		hex: siGoogleads.hex
	},
	shopify: {
		svg: siShopify.svg,
		hex: siShopify.hex
	},
	instagram: {
		svg: siInstagram.svg,
		hex: siInstagram.hex
	},
	reddit: {
		svg: siReddit.svg,
		hex: siReddit.hex
	},
	whatsapp: {
		svg: siWhatsapp.svg,
		hex: siWhatsapp.hex
	},
	linkedin: {
		svg: linkedinSvg,
		hex: "0A66C2"
	},
	slack: {
		svg: slackSvg,
		hex: "4A154B"
	},
	discord: {
		svg: siDiscord.svg,
		hex: siDiscord.hex
	},
	mailchimp: {
		svg: siMailchimp.svg,
		hex: siMailchimp.hex
	},
	wordpress: {
		svg: siWordpress.svg,
		hex: siWordpress.hex
	},
	github: {
		svg: siGithub.svg,
		hex: siGithub.hex
	},
	jira: {
		svg: siJira.svg,
		hex: siJira.hex
	},
	stripe: {
		svg: siStripe.svg,
		hex: siStripe.hex
	},
	teams: {
		svg: teamsSvg,
		hex: "6264A7"
	},
	gmail: {
		svg: gmailSvg,
		hex: "EA4335"
	},
	googledrive: {
		svg: driveSvg,
		hex: "1FA463"
	},
	googleworkspace: {
		svg: driveSvg,
		hex: "4285F4"
	},
	airtable: {
		svg: "<path d=\"M17.5 2H6.5c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5V3.5c0-.8-.7-1.5-1.5-1.5zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5-3.5c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v7z\"/>",
		hex: "18BFFF"
	},
	calendly: {
		svg: "<path d=\"M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5l-4 4h8l-4-4z\"/>",
		hex: "006BFF"
	},
	meta: {
		svg: "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.9 14.3c-.4.9-1 .9-1.8.9h-2.2c-.8 0-1.4 0-1.8-.9-.3-.6-.4-1.3-.4-2.3V10.5h2.2v3.5c0 .3 0 .5.1.7.2.9.8.9 1.7.9h2.2c.9 0 1.5 0 1.7-.9.1-.2.1-.4.1-.7V10.5h2.2v3.5c0 1-.1 1.7-.4 2.3z\"/>",
		hex: "0668E1"
	},
	x: {
		svg: "<path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/>",
		hex: "000000"
	},
	make: {
		svg: "<path d=\"M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L18.36 7 12 9.82 5.64 7 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z\"/>",
		hex: "231F20"
	},
	n8n: {
		svg: "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z\"/>",
		hex: "EA4E2B"
	},
	webflow: {
		svg: "<path d=\"M1.5 2.5C.7 2.5 0 3.2 0 4s.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5S11.3 2.5 10.5 2.5H1.5zM0 8.5C0 7.7.7 7 1.5 7h21c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-21C.7 10 0 9.3 0 8.5zM1.5 12.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-21zM0 15c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-21C.7 16.5 0 15.8 0 15z\"/>",
		hex: "4353FF"
	},
	klaviyo: {
		svg: "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1-10c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z\"/>",
		hex: "5465FF"
	},
	api: {
		svg: apiSvg,
		hex: "6366F1"
	},
	webhook: {
		svg: webhookSvg,
		hex: "10B981"
	}
};
function IntegrationIcon({ slug, size = 24 }) {
	const icon = iconMap[slug];
	if (!icon) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: size,
		height: size,
		fill: `#${icon.hex}`,
		dangerouslySetInnerHTML: { __html: icon.svg.replace(/<\/?svg[^>]*>/g, "") }
	});
}
Object.fromEntries(Object.entries(iconMap).map(([slug, { hex }]) => [slug, `#${hex}`]));
function CustomCursor() {
	const cursorRef = (0, import_react.useRef)(null);
	const posRef = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const currentRef = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const rafRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const cursor = cursorRef.current;
		if (!cursor) return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		document.body.classList.add("cursor-active");
		const onMove = (e) => {
			posRef.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		const animate = () => {
			currentRef.current.x += (posRef.current.x - currentRef.current.x) * .15;
			currentRef.current.y += (posRef.current.y - currentRef.current.y) * .15;
			if (cursor) {
				cursor.style.left = `${currentRef.current.x}px`;
				cursor.style.top = `${currentRef.current.y}px`;
			}
			rafRef.current = requestAnimationFrame(animate);
		};
		const onEnterInteractive = () => cursor?.classList.add("expanded");
		const onLeaveInteractive = () => cursor?.classList.remove("expanded");
		const interactives = ".btn-lift, .tilt-card, a, button";
		document.addEventListener("mousemove", onMove);
		document.querySelectorAll(interactives).forEach((el) => {
			el.addEventListener("mouseenter", onEnterInteractive);
			el.addEventListener("mouseleave", onLeaveInteractive);
		});
		rafRef.current = requestAnimationFrame(animate);
		return () => {
			document.removeEventListener("mousemove", onMove);
			document.querySelectorAll(interactives).forEach((el) => {
				el.removeEventListener("mouseenter", onEnterInteractive);
				el.removeEventListener("mouseleave", onLeaveInteractive);
			});
			cancelAnimationFrame(rafRef.current);
			document.body.classList.remove("cursor-active");
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: cursorRef,
		className: "custom-cursor",
		"aria-hidden": "true"
	});
}
var animationStyles = {
	ecommerce: {
		background: "linear-gradient(135deg, oklch(0.7 0.15 290) 0%, oklch(0.6 0.2 300) 100%)",
		borderRadius: "20px",
		position: "relative",
		overflow: "hidden"
	},
	marketing: {
		background: "linear-gradient(135deg, oklch(0.65 0.18 310) 0%, oklch(0.55 0.2 330) 100%)",
		borderRadius: "20px",
		position: "relative",
		overflow: "hidden"
	},
	security: {
		background: "linear-gradient(135deg, oklch(0.65 0.15 250) 0%, oklch(0.6 0.2 270) 100%)",
		borderRadius: "20px",
		position: "relative",
		overflow: "hidden"
	},
	dashboard: {
		background: "linear-gradient(135deg, oklch(0.6 0.18 280) 0%, oklch(0.55 0.22 295) 100%)",
		borderRadius: "20px",
		position: "relative",
		overflow: "hidden"
	},
	automation: {
		background: "linear-gradient(135deg, oklch(0.65 0.15 160) 0%, oklch(0.6 0.2 180) 100%)",
		borderRadius: "20px",
		position: "relative",
		overflow: "hidden"
	},
	analytics: {
		background: "linear-gradient(135deg, oklch(0.7 0.15 85) 0%, oklch(0.6 0.2 70) 100%)",
		borderRadius: "20px",
		position: "relative",
		overflow: "hidden"
	}
};
function AnimationIcon({ type, size = 120 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: {
		ecommerce: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 120 120",
			fill: "none",
			className: "ecommerce-icon",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(20, 40)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M5 5h4l8 25h25l8-20H18",
							stroke: "white",
							strokeWidth: "3",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							fill: "none",
							opacity: "0.9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "stroke-dasharray",
								values: "0,200;150,200;150,200",
								dur: "2s",
								repeatCount: "indefinite"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "30",
							cy: "38",
							r: "5",
							fill: "white",
							opacity: "0.9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "cy",
								values: "38;36;38",
								dur: "1s",
								repeatCount: "indefinite"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "55",
							cy: "38",
							r: "5",
							fill: "white",
							opacity: "0.9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "cy",
								values: "36;38;36",
								dur: "1s",
								repeatCount: "indefinite"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("rect", {
							x: "35",
							y: "-15",
							width: "25",
							height: "20",
							rx: "3",
							fill: "white",
							opacity: "0.7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "y",
								values: "-15;-25;-15",
								dur: "2s",
								repeatCount: "indefinite"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "opacity",
								values: "0.7;0.9;0.7",
								dur: "2s",
								repeatCount: "indefinite"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M35 -5 L47.5 -15 L60 -5",
							stroke: "white",
							strokeWidth: "2",
							fill: "none",
							opacity: "0.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "d",
								values: "M35 -5 L47.5 -15 L60 -5;M35 -15 L47.5 -25 L60 -15;M35 -5 L47.5 -15 L60 -5",
								dur: "2s",
								repeatCount: "indefinite"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "95",
					cy: "25",
					r: "15",
					stroke: "white",
					strokeWidth: "2",
					fill: "none",
					opacity: "0.2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "r",
						values: "15;20;15",
						dur: "3s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "20",
					cy: "95",
					r: "10",
					stroke: "white",
					strokeWidth: "2",
					fill: "none",
					opacity: "0.15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "opacity",
						values: "0.15;0.3;0.15",
						dur: "2.5s",
						repeatCount: "indefinite"
					})
				})
			]
		}),
		marketing: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 120 120",
			fill: "none",
			className: "marketing-icon",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(15, 35)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M5 20 L5 10 L40 5 L40 35 L5 30 Z",
							fill: "white",
							opacity: "0.8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "opacity",
								values: "0.8;1;0.8",
								dur: "1.5s",
								repeatCount: "indefinite"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "40",
							y: "8",
							width: "30",
							height: "24",
							rx: "2",
							fill: "white",
							opacity: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M75 15 Q85 20 75 25",
							stroke: "white",
							strokeWidth: "2",
							fill: "none",
							opacity: "0.4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "opacity",
								values: "0.4;0.8;0.4",
								dur: "0.8s",
								repeatCount: "indefinite"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M82 10 Q95 20 82 30",
							stroke: "white",
							strokeWidth: "2",
							fill: "none",
							opacity: "0.3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "opacity",
								values: "0.3;0.6;0.3",
								dur: "0.8s",
								repeatCount: "indefinite",
								begin: "0.2s"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M89 5 Q105 20 89 35",
							stroke: "white",
							strokeWidth: "2",
							fill: "none",
							opacity: "0.2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "opacity",
								values: "0.2;0.5;0.2",
								dur: "0.8s",
								repeatCount: "indefinite",
								begin: "0.4s"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 85 L50 55 L70 70 L95 40",
					stroke: "white",
					strokeWidth: "3",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none",
					opacity: "0.6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "stroke-dasharray",
						values: "0,100;100,100",
						dur: "1.5s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "95",
					cy: "40",
					r: "5",
					fill: "white",
					opacity: "0.8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "r",
						values: "5;7;5",
						dur: "1s",
						repeatCount: "indefinite"
					})
				})
			]
		}),
		security: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 120 120",
			fill: "none",
			className: "security-icon",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 10 L100 25 V55 C100 80 80 100 60 110 C40 100 20 80 20 55 V25 L60 10Z",
					fill: "white",
					opacity: "0.15"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 20 L90 32 V55 C90 75 75 90 60 98 C45 90 30 75 30 55 V32 L60 20Z",
					stroke: "white",
					strokeWidth: "3",
					fill: "none",
					opacity: "0.6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "opacity",
						values: "0.6;0.9;0.6",
						dur: "2s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M45 55 L55 65 L75 45",
					stroke: "white",
					strokeWidth: "4",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "stroke-dasharray",
						values: "0,50;50,0",
						dur: "0.8s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "52",
					y: "62",
					width: "16",
					height: "14",
					rx: "2",
					fill: "white",
					opacity: "0.7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M55 62 V55 C55 50 58 48 60 48 C62 48 65 50 65 55 V62",
					stroke: "white",
					strokeWidth: "2",
					fill: "none",
					opacity: "0.9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "d",
						values: "M55 62 V55 C55 50 58 48 60 48 C62 48 65 50 65 55 V62;M55 62 V55 C55 52 57 50 60 50 C63 50 65 52 65 55 V62;M55 62 V55 C55 50 58 48 60 48 C62 48 65 50 65 55 V62",
						dur: "2s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "10",
					r: "4",
					fill: "white",
					opacity: "0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateTransform", {
						attributeName: "transform",
						type: "rotate",
						from: "0 60 60",
						to: "360 60 60",
						dur: "4s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "60",
					r: "3",
					fill: "white",
					opacity: "0.4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateTransform", {
						attributeName: "transform",
						type: "rotate",
						from: "90 60 60",
						to: "450 60 60",
						dur: "5s",
						repeatCount: "indefinite"
					})
				})
			]
		}),
		dashboard: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 120 120",
			fill: "none",
			className: "dashboard-icon",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "10",
					y: "15",
					width: "100",
					height: "70",
					rx: "5",
					stroke: "white",
					strokeWidth: "2",
					fill: "none",
					opacity: "0.3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "15",
					y: "20",
					width: "90",
					height: "55",
					rx: "3",
					fill: "white",
					opacity: "0.1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "20",
					y: "25",
					width: "35",
					height: "20",
					rx: "2",
					fill: "white",
					opacity: "0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "opacity",
						values: "0.5;0.8;0.5",
						dur: "2s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "60",
					y: "25",
					width: "40",
					height: "20",
					rx: "2",
					fill: "white",
					opacity: "0.3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 65 L40 55 L60 60 L80 45 L100 50",
					stroke: "white",
					strokeWidth: "2",
					fill: "none",
					opacity: "0.8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "stroke-dasharray",
						values: "0,200;200,0",
						dur: "1.5s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "40",
					cy: "55",
					r: "3",
					fill: "white",
					opacity: "0.9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "cy",
						values: "55;52;55",
						dur: "1.5s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "45",
					r: "3",
					fill: "white",
					opacity: "0.9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "cy",
						values: "45;42;45",
						dur: "1.5s",
						repeatCount: "indefinite",
						begin: "0.5s"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "45",
					y: "85",
					width: "30",
					height: "5",
					rx: "2",
					fill: "white",
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "35",
					y: "90",
					width: "50",
					height: "8",
					rx: "3",
					fill: "white",
					opacity: "0.3"
				})
			]
		}),
		automation: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 120 120",
			fill: "none",
			className: "automation-icon",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(25, 25)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M25 5 L28 12 L35 8 L33 15 L40 15 L35 20 L42 25 L35 27 L40 35 L32 33 L30 40 L25 35 L18 38 L22 30 L15 27 L22 23 L18 15 L25 18 Z",
						fill: "white",
						opacity: "0.8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateTransform", {
							attributeName: "transform",
							type: "rotate",
							from: "0 25 22",
							to: "360 25 22",
							dur: "8s",
							repeatCount: "indefinite"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "25",
						cy: "22",
						r: "8",
						stroke: "white",
						strokeWidth: "2",
						fill: "none",
						opacity: "0.5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(55, 45)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M20 4 L22 10 L28 7 L26 12 L32 12 L28 16 L34 20 L28 21 L32 27 L25 26 L23 32 L20 27 L14 29 L18 23 L12 21 L18 18 L14 12 L20 14 Z",
						fill: "white",
						opacity: "0.6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateTransform", {
							attributeName: "transform",
							type: "rotate",
							from: "360 20 18",
							to: "0 20 18",
							dur: "6s",
							repeatCount: "indefinite"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "20",
						cy: "18",
						r: "6",
						stroke: "white",
						strokeWidth: "2",
						fill: "none",
						opacity: "0.4"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M55 45 Q70 50 55 60",
					stroke: "white",
					strokeWidth: "2",
					fill: "none",
					opacity: "0.4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "stroke-dasharray",
						values: "0,20;20,0",
						dur: "1s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M75 35 L65 55 L72 55 L62 75 L80 50 L73 50 L85 35 Z",
					fill: "white",
					opacity: "0.9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "opacity",
						values: "0.9;0.5;0.9",
						dur: "1.5s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "3",
					fill: "white",
					opacity: "0.7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
						dur: "2s",
						repeatCount: "indefinite",
						path: "M0 60 L60 60"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "3",
					fill: "white",
					opacity: "0.7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
						dur: "2s",
						repeatCount: "indefinite",
						path: "M0 60 L60 60",
						begin: "0.5s"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "3",
					fill: "white",
					opacity: "0.7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
						dur: "2s",
						repeatCount: "indefinite",
						path: "M0 60 L60 60",
						begin: "1s"
					})
				})
			]
		}),
		analytics: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 120 120",
			fill: "none",
			className: "analytics-icon",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("rect", {
					x: "15",
					y: "65",
					width: "18",
					height: "35",
					rx: "3",
					fill: "white",
					opacity: "0.6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "height",
						values: "35;45;35",
						dur: "1.5s",
						repeatCount: "indefinite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "y",
						values: "65;55;65",
						dur: "1.5s",
						repeatCount: "indefinite"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("rect", {
					x: "40",
					y: "45",
					width: "18",
					height: "55",
					rx: "3",
					fill: "white",
					opacity: "0.7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "height",
						values: "55;40;55",
						dur: "1.8s",
						repeatCount: "indefinite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "y",
						values: "45;60;45",
						dur: "1.8s",
						repeatCount: "indefinite"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("rect", {
					x: "65",
					y: "35",
					width: "18",
					height: "65",
					rx: "3",
					fill: "white",
					opacity: "0.8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "height",
						values: "65;50;65",
						dur: "2s",
						repeatCount: "indefinite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "y",
						values: "35;50;35",
						dur: "2s",
						repeatCount: "indefinite"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("rect", {
					x: "90",
					y: "20",
					width: "18",
					height: "80",
					rx: "3",
					fill: "white",
					opacity: "0.9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "height",
						values: "80;60;80",
						dur: "2.2s",
						repeatCount: "indefinite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "y",
						values: "20;40;20",
						dur: "2.2s",
						repeatCount: "indefinite"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 50 L49 35 L74 40 L99 20",
					stroke: "white",
					strokeWidth: "2",
					strokeLinecap: "round",
					fill: "none",
					opacity: "0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "stroke-dasharray",
						values: "0,100;100,0",
						dur: "2s",
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 15 L105 25 L102 25 L102 35 L98 35 L98 25 L95 25 Z",
					fill: "white",
					opacity: "0.8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "opacity",
						values: "0.8;1;0.8",
						dur: "1s",
						repeatCount: "indefinite"
					})
				})
			]
		})
	}[type] });
}
function LottieFromUrl({ url, size }) {
	const lottieRef = (0, import_react.useRef)(null);
	const [animationData, setAnimationData] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		fetch(url).then((res) => res.json()).then((data) => setAnimationData(data)).catch(() => setError(true));
	}, [url]);
	if (error || !animationData) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lottie, {
		lottieRef,
		animationData,
		style: {
			width: size,
			height: size
		},
		loop: true,
		autoplay: true
	});
}
function LottieAnimation({ type, className = "", size = 120, url }) {
	const reduced = useReducedMotion$1();
	const style = animationStyles[type];
	if (url && !reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `lottie-container ${className}`,
		style: {
			width: size,
			height: size
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimationIcon, {
				type,
				size
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieFromUrl, {
				url,
				size
			})
		})
	});
	if (reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center justify-center ${className}`,
		style: {
			width: size,
			height: size,
			...style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimationIcon, {
			type,
			size: size * .8
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `lottie-wrapper ${className}`,
		style: {
			width: size,
			height: size,
			...style
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .lottie-wrapper {
          animation: float 6s ease-in-out infinite;
        }
        .lottie-wrapper svg {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-12px) rotate(0deg); }
          75% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lottie-wrapper, .lottie-wrapper svg {
            animation: none;
          }
        }
      ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimationIcon, {
			type,
			size: size * .8
		})]
	});
}
function useReducedMotion$1() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const cb = (e) => setReduced(e.matches);
		mq.addEventListener("change", cb);
		return () => mq.removeEventListener("change", cb);
	}, []);
	return reduced;
}
function IntegrationNode({ slug, label, position, ring, isActive, isHighlighted, isDimmed, onHover, onLeave, onClick, lastSync = "2m ago", connectionStatus = "connected" }) {
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const [floatingOffset, setFloatingOffset] = (0, import_react.useState)(0);
	const [rotationOffset, setRotationOffset] = (0, import_react.useState)(0);
	const [scalePulse, setScalePulse] = (0, import_react.useState)(1);
	const animationRef = (0, import_react.useRef)();
	(0, import_react.useEffect)(() => {
		const startTime = performance.now();
		const floatDuration = 4e3 + ring * 500;
		const rotateDuration = 6e3 + ring * 1e3;
		const scaleDuration = 3e3 + ring * 500;
		const animate = (time) => {
			const elapsed = time - startTime;
			const floatProgress = elapsed % floatDuration / floatDuration;
			const floatY = Math.sin(floatProgress * Math.PI * 2) * 6;
			setFloatingOffset(floatY);
			const rotateProgress = elapsed % rotateDuration / rotateDuration;
			const rot = Math.sin(rotateProgress * Math.PI * 2) * 3;
			setRotationOffset(rot);
			const scaleProgress = elapsed % scaleDuration / scaleDuration;
			const scale = .98 + (Math.sin(scaleProgress * Math.PI * 2) + 1) * .02;
			setScalePulse(scale);
			animationRef.current = requestAnimationFrame(animate);
		};
		animationRef.current = requestAnimationFrame(animate);
		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, [ring]);
	const statusColors = {
		connected: "bg-lime",
		syncing: "bg-brand animate-pulse",
		error: "bg-red-500"
	};
	const statusIcons = {
		connected: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-2.5 h-2.5" }),
		syncing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-2.5 h-2.5 animate-spin" }),
		error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-2.5 h-2.5",
			children: "!"
		})
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute cursor-pointer transition-all duration-300",
		style: {
			left: `calc(50% + ${position.x}px)`,
			top: `calc(50% + ${position.y}px)`,
			transform: `
          translate(-50%, -50%) 
          translateY(${floatingOffset}px) 
          rotate(${rotationOffset}deg) 
          scale(${isHovered ? 1.08 : scalePulse})
        `,
			opacity: isDimmed ? .25 : 1,
			zIndex: isHighlighted ? 30 : isHovered ? 20 : 10,
			willChange: "transform, opacity"
		},
		onMouseEnter: () => {
			setIsHovered(true);
			onHover();
		},
		onMouseLeave: () => {
			setIsHovered(false);
			onLeave();
		},
		onClick,
		children: [
			(isActive || isHighlighted || isHovered) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 rounded-full",
				style: {
					background: isActive || isHighlighted ? "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)" : "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
					transform: "scale(2)",
					filter: "blur(12px)",
					animation: "glow-pulse 2s ease-in-out infinite"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `
          relative flex items-center justify-center rounded-full
          bg-[oklch(0.2_0.02_285)] border border-white/10
          shadow-lg transition-all duration-300
          ${isHovered ? "shadow-xl border-white/20" : ""}
        `,
				style: {
					width: 52,
					height: 52
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationIcon, {
					slug,
					size: 26
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `
            absolute -top-1 -right-1 w-4 h-4 rounded-full 
            flex items-center justify-center text-white
            ${statusColors[connectionStatus]}
          `,
					children: statusIcons[connectionStatus]
				})]
			}),
			isHovered && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 p-3 rounded-xl bg-[oklch(0.2_0.02_285)]/95 backdrop-blur-xl border border-white/10 shadow-xl animate-fade-in",
				style: { backdropFilter: "blur(12px)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationIcon, {
						slug,
						size: 20
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-white text-sm",
						children: label
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/50",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 text-lime",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-lime animate-pulse" }), connectionStatus === "connected" ? "Connected" : connectionStatus === "syncing" ? "Syncing" : "Error"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/50",
								children: "Last sync"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 text-white/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }), lastSync]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/50",
								children: "Workflows"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand-soft",
								children: "3 active"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translate(-50%, -50%) translateY(8px); }
          to { opacity: 1; transform: translate(-50%, -50%) translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      ` })
		]
	});
}
function ConnectionLine({ from, to, isActive, isHighlighted, progress = 0 }) {
	const [dashOffset, setDashOffset] = (0, import_react.useState)(0);
	const [packetPosition, setPacketPosition] = (0, import_react.useState)(0);
	const animationRef = (0, import_react.useRef)();
	const dx = to.x - from.x;
	const dy = to.y - from.y;
	const length = Math.sqrt(dx * dx + dy * dy);
	const angle = Math.atan2(dy, dx) * (180 / Math.PI);
	(0, import_react.useEffect)(() => {
		if (!isActive) {
			setDashOffset(0);
			setPacketPosition(0);
			return;
		}
		const animate = (time) => {
			const dashCycle = time % 2e3 / 2e3;
			setDashOffset(dashCycle * 20);
			const packetCycle = time % 3e3 / 3e3;
			setPacketPosition(packetCycle);
			animationRef.current = requestAnimationFrame(animate);
		};
		animationRef.current = requestAnimationFrame(animate);
		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, [isActive]);
	if (!isActive && !isHighlighted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute pointer-events-none transition-opacity duration-500",
		style: {
			left: from.x,
			top: from.y,
			width: length,
			height: 2,
			transform: `rotate(${angle}deg)`,
			transformOrigin: "0 50%",
			opacity: isHighlighted ? .8 : isActive ? 1 : 0,
			willChange: "opacity"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: isHighlighted ? "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)" : "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)" }
			}),
			isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: {
					background: `repeating-linear-gradient(
              90deg,
              rgba(168,85,247,0.6) 0px,
              rgba(168,85,247,0.6) 8px,
              transparent 8px,
              transparent 20px
            )`,
					backgroundPositionX: -dashOffset,
					backgroundSize: "20px 2px"
				}
			}),
			isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute w-2.5 h-2.5 rounded-full",
				style: {
					left: `${packetPosition * 100}%`,
					top: "50%",
					transform: "translate(-50%, -50%)",
					background: "radial-gradient(circle, rgba(168,85,247,1) 0%, rgba(168,85,247,0.5) 50%, transparent 100%)",
					boxShadow: "0 0 8px rgba(168,85,247,0.8), 0 0 16px rgba(168,85,247,0.4)",
					willChange: "transform, left"
				}
			}),
			isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute w-2 h-2 rounded-full",
				style: {
					left: `${(packetPosition - .3 + 1) % 1 * 100}%`,
					top: "50%",
					transform: "translate(-50%, -50%)",
					background: "radial-gradient(circle, rgba(45,212,191,0.8) 0%, rgba(45,212,191,0.3) 50%, transparent 100%)",
					boxShadow: "0 0 6px rgba(45,212,191,0.6)",
					willChange: "transform, left"
				}
			})
		]
	});
}
function WorkflowPreview({ isOpen, onClose, workflow }) {
	const [activeStep, setActiveStep] = (0, import_react.useState)(0);
	const [executions, setExecutions] = (0, import_react.useState)(0);
	const [successRate, setSuccessRate] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!isOpen || !workflow) return;
		setExecutions(workflow.analytics.executions);
		setSuccessRate(workflow.analytics.successRate);
		setActiveStep(0);
		const stepInterval = setInterval(() => {
			setActiveStep((prev) => {
				if (prev >= workflow.steps.length - 1) {
					setExecutions((e) => e + 1);
					if (Math.random() > .1) setSuccessRate((s) => Math.min(99.9, s + .1));
					return 0;
				}
				return prev + 1;
			});
		}, 800);
		return () => clearInterval(stepInterval);
	}, [isOpen, workflow]);
	const stepColors = {
		trigger: "bg-brand/20 border-brand text-brand-soft",
		action: "bg-teal/20 border-teal text-teal",
		ai: "bg-lime/20 border-lime text-lime",
		condition: "bg-yellow-500/20 border-yellow-500 text-yellow-400",
		complete: "bg-lime/20 border-lime text-lime",
		pending: "bg-white/5 border-white/20 text-white/40",
		running: "bg-brand/20 border-brand text-brand-soft",
		error: "bg-red-500/20 border-red-500 text-red-400"
	};
	const stepIcons = {
		trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" }),
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5" }),
		ai: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-3.5 h-3.5" }),
		condition: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-3.5 h-3.5" }),
		complete: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" })
	};
	if (!workflow) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			scale: .95,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .95,
			y: 20
		},
		transition: {
			duration: .3,
			ease: "easeOut"
		},
		className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-[oklch(0.15_0.02_285)]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-4 border-b border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-5 h-5 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-white",
							children: workflow.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-white/50",
							children: "Active workflow"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationIcon, {
									slug: workflow.from.slug,
									size: 18
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-white/80",
									children: workflow.from.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 text-brand-soft" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/20 border border-brand/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3 h-3 text-brand-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-brand-soft",
									children: "Enrich"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 text-brand-soft" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationIcon, {
									slug: workflow.to.slug,
									size: 18
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-white/80",
									children: workflow.to.label
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: workflow.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `
                      flex items-center gap-3 p-3 rounded-xl border transition-all duration-300
                      ${stepColors[step.status || (index < activeStep ? "complete" : index === activeStep ? "running" : "pending")]}
                      ${index === activeStep ? "border-current shadow-lg" : ""}
                    `,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center",
									children: stepIcons[step.type]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: step.label
										}), index === activeStep && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-brand animate-pulse" })]
									}), step.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/50 mt-0.5",
										children: step.description
									})]
								}),
								step.duration && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-white/40",
									children: [step.duration, "ms"]
								})
							]
						}, step.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-px bg-white/5 border-t border-white/10",
					children: [
						{
							label: "Executions",
							value: executions.toLocaleString(),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-3.5 h-3.5" })
						},
						{
							label: "Success",
							value: `${successRate.toFixed(1)}%`,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" })
						},
						{
							label: "Avg Time",
							value: workflow.analytics.avgDuration,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" })
						},
						{
							label: "Last Run",
							value: workflow.analytics.lastRun,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-3.5 h-3.5" })
						}
					].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-1 p-3 bg-[oklch(0.15_0.02_285)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-brand-soft",
								children: stat.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-white",
								children: stat.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] text-white/40",
								children: stat.label
							})
						]
					}, i))
				})
			]
		})
	}) });
}
var ALL_INTEGRATIONS = [
	{
		slug: "slack",
		label: "Slack",
		ring: 1
	},
	{
		slug: "gmail",
		label: "Gmail",
		ring: 1
	},
	{
		slug: "notion",
		label: "Notion",
		ring: 1
	},
	{
		slug: "hubspot",
		label: "HubSpot",
		ring: 1
	},
	{
		slug: "shopify",
		label: "Shopify",
		ring: 1
	},
	{
		slug: "googleworkspace",
		label: "Google Workspace",
		ring: 1
	},
	{
		slug: "salesforce",
		label: "Salesforce",
		ring: 1
	},
	{
		slug: "linkedin",
		label: "LinkedIn",
		ring: 1
	},
	{
		slug: "meta",
		label: "Meta",
		ring: 2
	},
	{
		slug: "instagram",
		label: "Instagram",
		ring: 2
	},
	{
		slug: "x",
		label: "X",
		ring: 2
	},
	{
		slug: "mailchimp",
		label: "Mailchimp",
		ring: 2
	},
	{
		slug: "klaviyo",
		label: "Klaviyo",
		ring: 2
	},
	{
		slug: "airtable",
		label: "Airtable",
		ring: 2
	},
	{
		slug: "calendly",
		label: "Calendly",
		ring: 2
	},
	{
		slug: "webflow",
		label: "Webflow",
		ring: 2
	},
	{
		slug: "zapier",
		label: "Zapier",
		ring: 3
	},
	{
		slug: "make",
		label: "Make",
		ring: 3
	},
	{
		slug: "n8n",
		label: "n8n",
		ring: 3
	},
	{
		slug: "github",
		label: "GitHub",
		ring: 3
	},
	{
		slug: "discord",
		label: "Discord",
		ring: 3
	},
	{
		slug: "intercom",
		label: "Intercom",
		ring: 3
	},
	{
		slug: "wordpress",
		label: "WordPress",
		ring: 3
	},
	{
		slug: "api",
		label: "Custom API",
		ring: 3
	}
];
var WORKFLOWS = [
	{
		name: "Email to CRM Sync",
		from: {
			slug: "gmail",
			label: "Gmail"
		},
		to: {
			slug: "hubspot",
			label: "HubSpot"
		},
		steps: [
			{
				id: "1",
				type: "trigger",
				label: "New email received",
				description: "Gmail webhook triggered"
			},
			{
				id: "2",
				type: "ai",
				label: "AI extracts lead data",
				description: "NLP processing email content"
			},
			{
				id: "3",
				type: "action",
				label: "Create/update CRM record",
				description: "Sync to HubSpot"
			},
			{
				id: "4",
				type: "complete",
				label: "Notification sent",
				description: "Slack confirmation"
			}
		],
		analytics: {
			executions: 1247,
			successRate: 98.2,
			avgDuration: "1.2s",
			lastRun: "Just now"
		}
	},
	{
		name: "Social to Analytics",
		from: {
			slug: "linkedin",
			label: "LinkedIn"
		},
		to: {
			slug: "googledrive",
			label: "Google Sheets"
		},
		steps: [
			{
				id: "1",
				type: "trigger",
				label: "Post engagement detected",
				description: "Likes, comments, shares"
			},
			{
				id: "2",
				type: "ai",
				label: "Sentiment analysis",
				description: "Analyze engagement quality"
			},
			{
				id: "3",
				type: "action",
				label: "Log to spreadsheet",
				description: "Update analytics dashboard"
			},
			{
				id: "4",
				type: "condition",
				label: "High engagement?",
				description: "Sentiment > 80%"
			},
			{
				id: "5",
				type: "complete",
				label: "Alert team",
				description: "Slack notification"
			}
		],
		analytics: {
			executions: 3891,
			successRate: 97.8,
			avgDuration: "2.4s",
			lastRun: "5m ago"
		}
	},
	{
		name: "E-commerce Automation",
		from: {
			slug: "shopify",
			label: "Shopify"
		},
		to: {
			slug: "klaviyo",
			label: "Klaviyo"
		},
		steps: [
			{
				id: "1",
				type: "trigger",
				label: "New order created",
				description: "Purchase event"
			},
			{
				id: "2",
				type: "ai",
				label: "Customer segmentation",
				description: "RFM analysis"
			},
			{
				id: "3",
				type: "action",
				label: "Trigger email sequence",
				description: "Welcome series"
			},
			{
				id: "4",
				type: "condition",
				label: "High-value order?",
				description: "Order > $100"
			},
			{
				id: "5",
				type: "complete",
				label: "Upsell campaign",
				description: "Premium sequence"
			}
		],
		analytics: {
			executions: 2156,
			successRate: 99.1,
			avgDuration: "0.8s",
			lastRun: "2m ago"
		}
	},
	{
		name: "Content Pipeline",
		from: {
			slug: "notion",
			label: "Notion"
		},
		to: {
			slug: "wordpress",
			label: "WordPress"
		},
		steps: [
			{
				id: "1",
				type: "trigger",
				label: "Content approved",
				description: "Editorial workflow"
			},
			{
				id: "2",
				type: "ai",
				label: "Format for web",
				description: "SEO optimization"
			},
			{
				id: "3",
				type: "action",
				label: "Publish to WordPress",
				description: "API integration"
			},
			{
				id: "4",
				type: "complete",
				label: "Social broadcast",
				description: "LinkedIn + X"
			}
		],
		analytics: {
			executions: 842,
			successRate: 96.5,
			avgDuration: "3.1s",
			lastRun: "12m ago"
		}
	},
	{
		name: "Support Automation",
		from: {
			slug: "intercom",
			label: "Intercom"
		},
		to: {
			slug: "salesforce",
			label: "Salesforce"
		},
		steps: [
			{
				id: "1",
				type: "trigger",
				label: "New conversation",
				description: "Customer support ticket"
			},
			{
				id: "2",
				type: "ai",
				label: "Classify intent",
				description: "Route to team"
			},
			{
				id: "3",
				type: "action",
				label: "Create Salesforce case",
				description: "Sync ticket"
			},
			{
				id: "4",
				type: "complete",
				label: "Auto-response",
				description: "Customer notified"
			}
		],
		analytics: {
			executions: 5623,
			successRate: 99.4,
			avgDuration: "0.5s",
			lastRun: "Just now"
		}
	}
];
var STATUS_MESSAGES = [
	"Processing",
	"Routing",
	"Executing",
	"Syncing",
	"Analyzing"
];
function IntegrationOrbit({ mouseOffset = {
	x: 0,
	y: 0
} }) {
	const [rotation, setRotation] = (0, import_react.useState)({
		ring1: 0,
		ring2: 0,
		ring3: 0
	});
	const [activeWorkflow, setActiveWorkflow] = (0, import_react.useState)(null);
	const [highlightedNodes, setHighlightedNodes] = (0, import_react.useState)([]);
	const [hoveredNode, setHoveredNode] = (0, import_react.useState)(null);
	const [statusMessage, setStatusMessage] = (0, import_react.useState)(0);
	const [isWorkflowPanelOpen, setIsWorkflowPanelOpen] = (0, import_react.useState)(false);
	const [particles, setParticles] = (0, import_react.useState)([]);
	const containerRef = (0, import_react.useRef)(null);
	const animationRef = (0, import_react.useRef)();
	const workflowTimerRef = (0, import_react.useRef)();
	const lastWorkflowIndex = (0, import_react.useRef)(-1);
	(0, import_react.useEffect)(() => {
		const initialParticles = Array.from({ length: 20 }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 2 + 1,
			speed: Math.random() * .5 + .2,
			opacity: Math.random() * .1 + .02
		}));
		setParticles(initialParticles);
	}, []);
	(0, import_react.useEffect)(() => {
		const startTime = performance.now();
		const animate = (time) => {
			const elapsed = (time - startTime) / 1e3;
			setRotation({
				ring1: elapsed * (360 / 25),
				ring2: elapsed * (360 / 40) * -1,
				ring3: elapsed * (360 / 60)
			});
			animationRef.current = requestAnimationFrame(animate);
		};
		animationRef.current = requestAnimationFrame(animate);
		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setStatusMessage((prev) => (prev + 1) % STATUS_MESSAGES.length);
		}, 2e3);
		return () => clearInterval(interval);
	}, []);
	(0, import_react.useEffect)(() => {
		const runWorkflow = () => {
			let nextIndex;
			do
				nextIndex = Math.floor(Math.random() * WORKFLOWS.length);
			while (nextIndex === lastWorkflowIndex.current && WORKFLOWS.length > 1);
			lastWorkflowIndex.current = nextIndex;
			const workflow = WORKFLOWS[nextIndex];
			setHighlightedNodes([
				workflow.from.slug,
				"enrich",
				workflow.to.slug
			]);
			setActiveWorkflow(workflow);
			setTimeout(() => {
				setHighlightedNodes([]);
				setActiveWorkflow(null);
			}, 4e3);
		};
		const initialTimeout = setTimeout(runWorkflow, 2e3);
		workflowTimerRef.current = setInterval(() => {
			runWorkflow();
		}, 5e3 + Math.random() * 2e3);
		return () => {
			clearTimeout(initialTimeout);
			if (workflowTimerRef.current) clearInterval(workflowTimerRef.current);
		};
	}, []);
	const nodePositions = (0, import_react.useMemo)(() => {
		const positions = {};
		const ringRadii = {
			1: 120,
			2: 200,
			3: 280
		};
		ALL_INTEGRATIONS.forEach((integration, index) => {
			const ringIntegrations = ALL_INTEGRATIONS.filter((i) => i.ring === integration.ring);
			const ringIndex = ringIntegrations.findIndex((i) => i.slug === integration.slug);
			const count = ringIntegrations.length;
			const angle = ringIndex * (Math.PI * 2 / count) + rotation[`ring${integration.ring}`] * (Math.PI / 180);
			const radius = ringRadii[integration.ring];
			positions[integration.slug] = {
				x: Math.cos(angle) * radius,
				y: Math.sin(angle) * radius
			};
		});
		return positions;
	}, [rotation]);
	const connectionLines = (0, import_react.useMemo)(() => {
		if (!activeWorkflow) return [];
		const fromPos = nodePositions[activeWorkflow.from.slug];
		const toPos = nodePositions[activeWorkflow.to.slug];
		const hubPos = {
			x: 0,
			y: 0
		};
		return [{
			from: fromPos,
			to: hubPos,
			id: "from-hub"
		}, {
			from: hubPos,
			to: toPos,
			id: "hub-to"
		}];
	}, [activeWorkflow, nodePositions]);
	const handleNodeClick = (0, import_react.useCallback)((slug) => {
		const workflow = WORKFLOWS.find((w) => w.from.slug === slug || w.to.slug === slug);
		if (workflow) {
			setHighlightedNodes([
				workflow.from.slug,
				"enrich",
				workflow.to.slug
			]);
			setActiveWorkflow(workflow);
			setIsWorkflowPanelOpen(true);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "relative w-full h-full overflow-hidden",
		style: { willChange: "transform" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-[0.03]",
						style: { background: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.5) 0%, transparent 50%)" }
					}),
					particles.map((particle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute rounded-full bg-brand-soft",
						style: {
							left: `${particle.x}%`,
							top: `${particle.y}%`,
							width: particle.size,
							height: particle.size,
							opacity: particle.opacity,
							animation: `float-particle ${20 / particle.speed}s ease-in-out infinite`,
							animationDelay: `${particle.id * .5}s`
						}
					}, particle.id)),
					[
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-1/2 rounded-full border border-brand/10",
						style: {
							width: 80 + i * 60,
							height: 80 + i * 60,
							transform: "translate(-50%, -50%)",
							animation: `expand-ring ${8 + i * 2}s ease-out infinite`,
							animationDelay: `${i * 2}s`
						}
					}, i))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20",
				style: { willChange: "transform" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 rounded-full",
					style: {
						width: 100,
						height: 100,
						background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
						transform: "translate(-50%, -50%)",
						animation: "hub-pulse 3s ease-in-out infinite"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 rounded-2xl bg-gradient-brand shadow-[0_0_40px_rgba(168,85,247,0.5)] flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-8 h-8 text-white" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium text-brand-soft",
							children: STATUS_MESSAGES[statusMessage]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center gap-1 mt-1",
							children: [
								0,
								1,
								2
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-1.5 h-1.5 rounded-full bg-lime",
								style: {
									animation: `dot-pulse 1.5s ease-in-out infinite`,
									animationDelay: `${i * .2}s`
								}
							}, i))
						})]
					})]
				})]
			}),
			connectionLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectionLine, {
				from: line.from,
				to: line.to,
				isActive: true,
				isHighlighted: true
			}, line.id)),
			ALL_INTEGRATIONS.map((integration) => {
				const position = nodePositions[integration.slug];
				const isHighlighted = highlightedNodes.includes(integration.slug);
				const isDimmed = highlightedNodes.length > 0 && !isHighlighted;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationNode, {
					slug: integration.slug,
					label: integration.label,
					position,
					ring: integration.ring,
					angle: 0,
					isActive: isHighlighted,
					isHighlighted,
					isDimmed,
					onHover: () => setHoveredNode(integration.slug),
					onLeave: () => setHoveredNode(null),
					onClick: () => handleNodeClick(integration.slug),
					lastSync: `${Math.floor(Math.random() * 5) + 1}m ago`,
					connectionStatus: Math.random() > .1 ? "connected" : "syncing"
				}, integration.slug);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowPreview, {
				isOpen: isWorkflowPanelOpen,
				onClose: () => setIsWorkflowPanelOpen(false),
				workflow: activeWorkflow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30",
				children: [
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-3.5 h-3.5" }),
						label: "Workflows",
						value: "24 Active",
						color: "brand"
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" }),
						label: "API",
						value: "Connected",
						color: "lime"
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-3.5 h-3.5" }),
						label: "Queue",
						value: "3 items",
						color: "teal"
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }),
						label: "Response",
						value: "0.3s",
						color: "white/60"
					}
				].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: i * .1 },
					className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-[oklch(0.15_0.02_285)]/80 backdrop-blur-sm border border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-${stat.color}`,
						children: stat.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/40",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `font-medium ${stat.color === "lime" ? "text-lime" : stat.color === "brand" ? "text-brand-soft" : stat.color === "teal" ? "text-teal" : "text-white"}`,
							children: stat.value
						})]
					})]
				}, stat.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.1; }
          25% { transform: translate(10px, -20px); opacity: 0.2; }
          50% { transform: translate(-5px, 10px); opacity: 0.15; }
          75% { transform: translate(15px, 5px); opacity: 0.1; }
        }
        @keyframes hub-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
        }
        @keyframes expand-ring {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        @keyframes dot-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      ` })
		]
	});
}
var CAMPAIGN_STATES = [
	"Draft",
	"Planning",
	"AI Research",
	"Generating Assets",
	"Awaiting Approval",
	"Scheduled",
	"Launching",
	"Live",
	"Optimizing",
	"Completed"
];
var SPECIALIST_ACTIVITIES = {
	helena: [
		"Writing blog post on AI automation",
		"Updating editorial calendar",
		"Creating social media briefs",
		"Drafting email sequences",
		"Publishing content to CMS",
		"Generating product descriptions"
	],
	sam: [
		"Scanning 847 keywords",
		"Updating SEO scores",
		"Monitoring SERP changes",
		"Detecting competitor moves",
		"Optimizing meta tags",
		"Improving authority score"
	],
	kai: [
		"Monitoring social conversations",
		"Detecting trending topics",
		"Flagging brand mentions",
		"Analyzing sentiment",
		"Responding to engagement",
		"Tracking viral posts"
	],
	angela: [
		"Launching email campaign",
		"Optimizing subject lines",
		"Monitoring open rates",
		"A/B testing variants",
		"Adjusting send times",
		"Reporting conversions"
	]
};
var CAMPAIGN_NAMES = [
	"Q4 SaaS Launch",
	"Product Update Announcement",
	"Holiday Sale Prep",
	"Lead Nurture Flow",
	"Brand Awareness Push",
	"Competitor Analysis",
	"Social Media Blitz",
	"Email Re-engagement",
	"Webinar Promotion"
];
function DashboardCursor({ position, visible }) {
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute pointer-events-none z-50 transition-all duration-300",
		style: {
			left: position.x,
			top: position.y,
			transform: "translate(-2px, -2px)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-white/80 shadow-lg" })
	});
}
function DashboardWidget({ mouseOffset, promptTriggered }) {
	const [campaigns, setCampaigns] = (0, import_react.useState)([]);
	const [activities, setActivities] = (0, import_react.useState)([]);
	const [kpis, setKpis] = (0, import_react.useState)({
		leads: 2847 + Math.floor(Math.random() * 100),
		revenue: 45600 + Math.floor(Math.random() * 5e3),
		impressions: 1245e3,
		ctr: 2.4 + (Math.random() - .5) * .3,
		conversions: 342,
		roas: 3.2 + (Math.random() - .5) * .4
	});
	const [chartData, setChartData] = (0, import_react.useState)([
		65,
		72,
		68,
		78,
		82,
		75,
		88,
		92,
		87,
		95
	]);
	const [cursorPos, setCursorPos] = (0, import_react.useState)({
		x: 100,
		y: 100
	});
	const [cursorVisible, setCursorVisible] = (0, import_react.useState)(false);
	const [selectedTab, setSelectedTab] = (0, import_react.useState)("campaigns");
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const initial = CAMPAIGN_NAMES.slice(0, 4).map((name, i) => ({
			id: i + 1,
			name,
			state: CAMPAIGN_STATES[i * 2],
			stateIndex: i * 2,
			progress: i * 2 * 10,
			priority: [
				"high",
				"medium",
				"low",
				"medium"
			][i],
			assigned: Object.keys(SPECIALIST_ACTIVITIES).slice(0, i + 1)
		}));
		setCampaigns(initial);
		setActivities([
			{
				agent: "Kai",
				message: "Identified 12 keyword opportunities",
				time: "Just now"
			},
			{
				agent: "Sam",
				message: "Improved SEO score by 18%",
				time: "2m ago"
			},
			{
				agent: "Helena",
				message: "Drafting Q4 content calendar",
				time: "5m ago"
			}
		]);
	}, []);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setCampaigns((prev) => prev.map((campaign) => {
				if (campaign.stateIndex >= CAMPAIGN_STATES.length - 1) return campaign;
				if (Math.random() > .3) return campaign;
				const newIndex = campaign.stateIndex + 1;
				return {
					...campaign,
					state: CAMPAIGN_STATES[newIndex],
					stateIndex: newIndex,
					progress: Math.min(100, campaign.progress + 12)
				};
			}));
		}, 8e3 + Math.random() * 7e3);
		return () => clearInterval(interval);
	}, []);
	(0, import_react.useEffect)(() => {
		const agents = Object.keys(SPECIALIST_ACTIVITIES);
		const interval = setInterval(() => {
			const agent = agents[Math.floor(Math.random() * agents.length)];
			const messages = SPECIALIST_ACTIVITIES[agent];
			const message = messages[Math.floor(Math.random() * messages.length)];
			setActivities((prev) => [{
				agent: agent.charAt(0).toUpperCase() + agent.slice(1),
				message,
				time: "Just now"
			}, ...prev.slice(0, 4).map((a) => ({
				...a,
				time: updateTime(a.time)
			}))]);
		}, 6e3 + Math.random() * 6e3);
		return () => clearInterval(interval);
	}, []);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setKpis((prev) => ({
				...prev,
				leads: prev.leads + Math.floor(Math.random() * 5),
				revenue: prev.revenue + Math.floor(Math.random() * 200),
				ctr: Math.max(.5, Math.min(5, prev.ctr + (Math.random() - .5) * .2)),
				roas: Math.max(1, Math.min(8, prev.roas + (Math.random() - .5) * .3))
			}));
		}, 4e3 + Math.random() * 4e3);
		return () => clearInterval(interval);
	}, []);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setChartData((prev) => {
				const newData = [...prev.slice(1)];
				const lastValue = newData[newData.length - 1];
				const change = (Math.random() - .3) * 8;
				newData.push(Math.max(50, Math.min(100, lastValue + change)));
				return newData;
			});
		}, 5e3 + Math.random() * 5e3);
		return () => clearInterval(interval);
	}, []);
	(0, import_react.useEffect)(() => {
		const moveCursor = () => {
			if (!containerRef.current) return;
			setCursorVisible(true);
			containerRef.current.getBoundingClientRect();
			const targetX = 50 + Math.random() * 400;
			const targetY = 80 + Math.random() * 280;
			let currentX = cursorPos.x;
			let currentY = cursorPos.y;
			const animate = () => {
				currentX += (targetX - currentX) * .1;
				currentY += (targetY - currentY) * .1;
				setCursorPos({
					x: currentX,
					y: currentY
				});
				if (Math.abs(targetX - currentX) > 2 || Math.abs(targetY - currentY) > 2) requestAnimationFrame(animate);
				else setTimeout(() => setCursorVisible(false), 2e3);
			};
			requestAnimationFrame(animate);
		};
		const interval = setInterval(moveCursor, 15e3 + Math.random() * 15e3);
		return () => clearInterval(interval);
	}, [cursorPos]);
	(0, import_react.useEffect)(() => {
		if (promptTriggered) {
			setCampaigns((prev) => prev.map((c, i) => i === 0 ? {
				...c,
				state: "Generating Assets",
				stateIndex: 3,
				progress: 40
			} : c));
			setActivities((prev) => [{
				agent: "Helena",
				message: "Creating LinkedIn campaign assets",
				time: "Just now"
			}, ...prev.slice(0, 4)]);
		}
	}, [promptTriggered]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "relative w-full h-full rounded-2xl bg-[oklch(0.12_0.02_285)]/90 backdrop-blur-xl border border-white/10 overflow-hidden",
		style: {
			transform: `translate(${mouseOffset.x * 5}px, ${mouseOffset.y * 5}px)`,
			transition: "transform 0.5s ease-out"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-5 py-3 border-b border-white/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-7 h-7 rounded-lg bg-gradient-to-br from-brand to-brand-deep flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 text-white" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-white/90",
						children: "Enrich Dashboard"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-white/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-lime animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Autonomous" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 px-4 py-2 border-b border-white/5",
				children: [
					"campaigns",
					"analytics",
					"workflows"
				].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSelectedTab(tab),
					className: `px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${selectedTab === tab ? "bg-brand/30 text-brand-soft" : "text-white/50 hover:text-white/70 hover:bg-white/5"}`,
					children: tab.charAt(0).toUpperCase() + tab.slice(1)
				}, tab))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-3",
						children: [
							{
								label: "Leads",
								value: kpis.leads.toLocaleString(),
								trend: "+12%"
							},
							{
								label: "Revenue",
								value: `$${(kpis.revenue / 1e3).toFixed(1)}K`,
								trend: "+8%"
							},
							{
								label: "CTR",
								value: `${kpis.ctr.toFixed(1)}%`,
								trend: kpis.ctr > 2.4 ? "+0.3%" : "-0.1%"
							},
							{
								label: "ROAS",
								value: `${kpis.roas.toFixed(1)}x`,
								trend: kpis.roas > 3.2 ? "+0.2" : "-0.1"
							}
						].map((kpi, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white/5 rounded-lg p-2.5 border border-white/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-white/40 uppercase tracking-wide",
									children: kpi.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-bold text-white mt-0.5",
									children: kpi.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `text-[10px] mt-1 ${kpi.trend.startsWith("+") ? "text-lime" : "text-red-400"}`,
									children: kpi.trend
								})
							]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium text-white/60",
								children: "Active Campaigns"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-[10px] text-brand-soft hover:underline",
								children: "View All"
							})]
						}), campaigns.slice(0, 3).map((campaign) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white/5 rounded-lg p-3 border border-white/5 hover:border-white/10 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-white truncate",
										children: campaign.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[10px] px-1.5 py-0.5 rounded-full ${campaign.state === "Live" ? "bg-lime/20 text-lime" : campaign.state === "Optimizing" ? "bg-brand/20 text-brand-soft" : "bg-white/10 text-white/60"}`,
										children: campaign.state
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-1 h-1 bg-white/10 rounded-full overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-gradient-to-r from-brand to-lime rounded-full transition-all duration-1000",
											style: { width: `${campaign.progress}%` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-white/40",
										children: [campaign.progress, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1 mt-2",
									children: campaign.assigned.map((agent) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40",
										children: agent.charAt(0).toUpperCase() + agent.slice(1)
									}, agent))
								})
							]
						}, campaign.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white/5 rounded-lg p-3 border border-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-3 h-3 text-brand-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium text-white/60",
								children: "AI Activity"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: activities.map((activity, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-start gap-2 text-[11px] ${i === 0 ? "text-white" : "text-white/70"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium text-brand-soft shrink-0",
										children: [activity.agent, ":"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1",
										children: activity.message
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white/30 shrink-0",
										children: activity.time
									})
								]
							}, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white/5 rounded-lg p-3 border border-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-white/60",
								children: "Performance Trend"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-3 h-3 text-lime" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-end gap-1 h-12",
							children: chartData.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 bg-gradient-to-t from-brand/50 to-brand-soft/50 rounded-t transition-all duration-500",
								style: { height: `${value}%` }
							}, i))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardCursor, {
				position: cursorPos,
				visible: cursorVisible
			})
		]
	});
}
function MobileDashboardWidget({ mouseOffset }) {
	const [optimizationScore, setOptimizationScore] = (0, import_react.useState)(78);
	const [openRate, setOpenRate] = (0, import_react.useState)(24.5);
	const [engagement, setEngagement] = (0, import_react.useState)(4.2);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setOptimizationScore((prev) => Math.min(100, Math.max(50, prev + (Math.random() - .5) * 3)));
			setOpenRate((prev) => Math.max(15, Math.min(40, prev + (Math.random() - .5) * 1)));
			setEngagement((prev) => Math.max(1, Math.min(10, prev + (Math.random() - .5) * .5)));
		}, 7e3 + Math.random() * 5e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative rounded-2xl bg-[oklch(0.12_0.02_285)]/90 backdrop-blur-xl border border-white/10 overflow-hidden",
		style: {
			transform: `translate(${mouseOffset.x * 3}px, ${mouseOffset.y * 3}px)`,
			transition: "transform 0.5s ease-out"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[oklch(0.15_0.02_285)] rounded-xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-white",
							children: "Quick Stats"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: "w-3 h-3 text-white/40 animate-spin",
							style: { animationDuration: "3s" }
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white/5 rounded-lg p-3 border border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-white/40 uppercase",
									children: "Optimization"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-lg font-bold text-white",
										children: [optimizationScore.toFixed(0), "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-16 h-2 bg-white/10 rounded-full overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-lime rounded-full transition-all duration-1000",
											style: { width: `${optimizationScore}%` }
										})
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white/5 rounded-lg p-3 border border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-white/40 uppercase",
									children: "Email Open Rate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-lg font-bold text-white",
										children: [openRate.toFixed(1), "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-4 h-4 text-lime" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white/5 rounded-lg p-3 border border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-white/40 uppercase",
									children: "Engagement"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-lg font-bold text-white",
										children: [engagement.toFixed(1), "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-lime",
										children: "+0.8%"
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 bg-brand/20 rounded-lg p-2 border border-brand/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-brand-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-brand-soft",
								children: "AI optimizing campaign..."
							})]
						})
					})
				]
			})
		})
	});
}
function HeroWorkspace({ mouseOffset }) {
	const [promptTriggered, setPromptTriggered] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setPromptTriggered(true);
			setTimeout(() => setPromptTriggered(false), 500);
		}, 25e3 + Math.random() * 15e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[oklch(0.1_0.02_285)] via-[oklch(0.12_0.02_290)] to-[oklch(0.1_0.02_280)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-[5%] top-[15%] w-[55%] h-[70%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardWidget, {
					mouseOffset,
					promptTriggered
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-[8%] top-[25%] w-[25%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDashboardWidget, { mouseOffset })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none opacity-[0.02]",
				style: {
					background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
					transform: `translate(${mouseOffset.x * 2}px, ${mouseOffset.y * 2}px)`,
					transition: "transform 1s ease-out"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-[5%] top-[15%] w-[55%] h-[70%]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute w-1 h-1 rounded-full bg-brand-soft/20",
							style: {
								left: "20%",
								top: "30%",
								animation: "particle-drift 15s ease-in-out infinite"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute w-0.5 h-0.5 rounded-full bg-brand-soft/15",
							style: {
								left: "60%",
								top: "50%",
								animation: "particle-drift 20s ease-in-out infinite 2s"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute w-1 h-1 rounded-full bg-brand-soft/10",
							style: {
								left: "40%",
								top: "70%",
								animation: "particle-drift 18s ease-in-out infinite 4s"
							}
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes particle-drift {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(10px, -10px); opacity: 0.5; }
          50% { transform: translate(-5px, 5px); opacity: 0.3; }
          75% { transform: translate(8px, 8px); opacity: 0.4; }
        }
      ` })
		]
	});
}
function updateTime(time) {
	if (time === "Just now") return "1m ago";
	const match = time.match(/(\d+)m ago/);
	if (match) {
		const mins = parseInt(match[1]) + 1;
		return mins >= 60 ? "1h ago" : `${mins}m ago`;
	}
	return time;
}
var prompts = [
	"Launch a LinkedIn campaign for SaaS founders",
	"Generate 30-day SEO roadmap",
	"Analyze competitor content strategy",
	"Create Google Ads campaign",
	"Optimize landing page conversions",
	"Prepare weekly marketing report",
	"Build email nurture sequence",
	"Monitor brand mentions"
];
function SimulatedPromptBar() {
	const [displayText, setDisplayText] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(true);
	const [isThinking, setIsThinking] = (0, import_react.useState)(false);
	const [currentPromptIndex, setCurrentPromptIndex] = (0, import_react.useState)(0);
	const [thinkingDots, setThinkingDots] = (0, import_react.useState)(0);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const currentPrompt = prompts[currentPromptIndex];
		let charIndex = 0;
		setIsTyping(true);
		setDisplayText("");
		const typeInterval = setInterval(() => {
			if (charIndex <= currentPrompt.length) {
				setDisplayText(currentPrompt.slice(0, charIndex));
				charIndex++;
			} else {
				clearInterval(typeInterval);
				setIsTyping(false);
				setTimeout(() => {
					setIsThinking(true);
					const dotsInterval = setInterval(() => {
						setThinkingDots((prev) => (prev + 1) % 4);
					}, 300);
					setTimeout(() => {
						clearInterval(dotsInterval);
						setIsThinking(false);
						setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
					}, 2500);
				}, 1500);
			}
		}, 40);
		return () => clearInterval(typeInterval);
	}, [currentPromptIndex]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-white p-4 shadow-glow text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "text",
						value: displayText,
						readOnly: true,
						className: "flex-1 bg-transparent text-[oklch(0.3_0.05_285)] placeholder:text-[oklch(0.6_0.03_285)] outline-none text-base py-2"
					}),
					isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-0.5 h-4 bg-brand/60" }),
					isThinking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 text-brand-soft/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs",
							children: ".".repeat(thinkingDots)
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "grid place-items-center w-8 h-8 rounded-full bg-[oklch(0.95_0.02_285)] text-[oklch(0.4_0.05_285)] hover:bg-[oklch(0.9_0.03_285)] transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-[oklch(0.4_0.1_290)] hover:bg-[oklch(0.95_0.05_290)] transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Briefs"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white btn-lift neon-border",
					children: ["Launch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "w-4 h-4" })]
				})]
			})]
		})
	});
}
var agent_helena_default = "/assets/agent-helena-mGmgJeUc.jpg";
var agent_sam_default = "/assets/agent-sam-CQICa1KL.jpg";
var agent_kai_default = "/assets/agent-kai-BYQ390eb.jpg";
var agent_angela_default = "/assets/agent-angela-B7kN4N6m.jpg";
var hero_dashboard_default = "/assets/hero-dashboard-BsHFDWRN.jpg";
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
function useReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const cb = () => setReduced(mq.matches);
		mq.addEventListener("change", cb);
		return () => mq.removeEventListener("change", cb);
	}, []);
	return reduced;
}
var sharedRevealObserver = null;
function getSharedRevealObserver() {
	if (typeof window === "undefined") return null;
	if (!sharedRevealObserver) sharedRevealObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				sharedRevealObserver?.unobserve(entry.target);
			}
		});
	}, {
		threshold: .15,
		rootMargin: "0px 0px -40px 0px"
	});
	return sharedRevealObserver;
}
function Reveal({ children, delay = 0, className = "", from = "up", splitChars = false }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = getSharedRevealObserver();
		if (!observer) return;
		observer.observe(el);
		return () => observer.unobserve(el);
	}, []);
	const base = from === "left" ? "reveal-from-left" : "reveal-on-scroll";
	if (splitChars && typeof children === "string" && !reduced) {
		const chars = children.split("");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: `${base} ${className}`,
			children: chars.map((char, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "reveal-on-scroll inline-block",
				style: { transitionDelay: `${delay + i * 20}ms` },
				children: char === " " ? "\xA0" : char
			}, i))
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `${base} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function useTilt(max = 7) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width - .5;
			const y = (e.clientY - r.top) / r.height - .5;
			if (raf) cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(0)`;
			});
		};
		const onLeave = () => {
			if (raf) cancelAnimationFrame(raf);
			el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
		};
		el.addEventListener("mousemove", onMove);
		el.addEventListener("mouseleave", onLeave);
		return () => {
			el.removeEventListener("mousemove", onMove);
			el.removeEventListener("mouseleave", onLeave);
			if (raf) cancelAnimationFrame(raf);
		};
	}, [max]);
	return ref;
}
function AtmosphericBackground({ gridRef, gradientRef, particlesRef }) {
	const reduced = useReducedMotion();
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	const particlesId = (0, import_react.useRef)(`particles-${Math.random().toString(36).substr(2, 9)}`);
	const scrollTriggersRef = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(max-width: 767px)");
		setIsMobile(mq.matches);
		const cb = () => setIsMobile(mq.matches);
		mq.addEventListener("change", cb);
		return () => mq.removeEventListener("change", cb);
	}, []);
	const particlesOptions = { particles: {
		number: {
			value: isMobile ? 15 : 40,
			density: {
				enable: true,
				area: 900
			}
		},
		color: { value: ["#a855f7", "#2DD4BF"] },
		size: { value: {
			min: 1,
			max: 2.5
		} },
		opacity: { value: .4 },
		move: {
			enable: true,
			speed: .3,
			direction: "none",
			random: true
		},
		links: {
			enable: !isMobile,
			distance: 120,
			color: "#a855f7",
			opacity: .15
		}
	} };
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		scrollTriggersRef.current = [];
		if (gridRef?.current) {
			const trigger = ScrollTrigger.create({
				trigger: gridRef.current.parentElement,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
				onUpdate: (self) => {
					gsapWithCSS.set(gridRef.current, { yPercent: self.progress * 15 });
				}
			});
			scrollTriggersRef.current.push(trigger);
		}
		if (gradientRef?.current) {
			const trigger = ScrollTrigger.create({
				trigger: gradientRef.current.parentElement,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
				onUpdate: (self) => {
					gsapWithCSS.set(gradientRef.current, { yPercent: self.progress * 30 });
				}
			});
			scrollTriggersRef.current.push(trigger);
		}
		return () => {
			scrollTriggersRef.current.forEach((t) => t.kill());
			scrollTriggersRef.current = [];
		};
	}, [
		reduced,
		gridRef,
		gradientRef
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: gridRef,
			className: "absolute inset-0 parallax-grid pointer-events-none",
			style: {
				backgroundImage: `
            linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)
          `,
				backgroundSize: "48px 48px",
				maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
				WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: gradientRef,
			className: "absolute inset-0 parallax-gradient pointer-events-none",
			style: { background: `
            radial-gradient(circle at 30% 20%, rgba(168,85,247,0.25), transparent 50%), 
            radial-gradient(circle at 80% 70%, rgba(45,212,191,0.12), transparent 50%)
          ` }
		}),
		!reduced && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: particlesRef,
			className: "absolute inset-0 parallax-particles pointer-events-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {
				id: particlesId.current,
				options: particlesOptions,
				className: "w-full h-full"
			})
		})
	] });
}
function AnimatedHeadline({ text, delay = 0, isHero = false, glow = false }) {
	if (useReducedMotion() || !isHero) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: glow ? "text-glow" : "",
		children: text
	});
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "word-split-container",
		children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: `word ${glow ? "text-glow" : ""}`,
			style: { animationDelay: `${delay + i * 80}ms` },
			children: [word, i < words.length - 1 ? "\xA0" : ""]
		}, i))
	});
}
function CountUp({ target, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [display, setDisplay] = (0, import_react.useState)(() => target.replace(/[0-9,]/g, (m) => m === "," ? "" : "0"));
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (reduced) {
			setDisplay(target);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			io.unobserve(el);
			const match = target.match(/^([\d,]+)(.*)$/) || target.match(/^(\d+)(\/\d+)$/);
			if (!match) {
				setDisplay(target);
				return;
			}
			const numStr = match[1].replace(/,/g, "");
			const end = parseInt(numStr, 10);
			const suffix = target.slice(match[1].length);
			const duration = 1400;
			const start = performance.now();
			const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
			let rafId;
			let mounted = true;
			const tick = (now) => {
				if (!mounted) return;
				const t = Math.min(1, (now - start) / duration);
				const withCommas = Math.round(end * easeOutExpo(t)).toLocaleString();
				setDisplay(`${withCommas}${suffix}`);
				if (t < 1) rafId = requestAnimationFrame(tick);
			};
			rafId = requestAnimationFrame(tick);
			return () => {
				mounted = false;
				cancelAnimationFrame(rafId);
			};
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [target, reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		children: display
	});
}
var agentThumbs = [
	{
		title: "Helena — Digital Marketer",
		tone: "bg-[oklch(0.85_0.08_80)] text-[oklch(0.2_0.1_60)]"
	},
	{
		title: "Sam — SEO / GEO Manager",
		tone: "bg-[oklch(0.25_0.1_260)] text-white"
	},
	{
		title: "Kai — Social Listening",
		tone: "bg-[oklch(0.3_0.15_20)] text-[oklch(0.9_0.1_80)]"
	},
	{
		title: "Angela — Email Marketer",
		tone: "bg-[oklch(0.55_0.2_25)] text-white"
	},
	{
		title: "Content & SEO",
		tone: "bg-[oklch(0.9_0.05_320)] text-[oklch(0.3_0.1_320)]"
	},
	{
		title: "Ad Management",
		tone: "bg-[oklch(0.35_0.15_290)] text-[oklch(0.9_0.1_320)]"
	},
	{
		title: "Automated Research",
		tone: "bg-[oklch(0.25_0.05_260)] text-[oklch(0.85_0.1_80)]"
	},
	{
		title: "Email Campaigns",
		tone: "bg-[oklch(0.5_0.2_15)] text-white"
	},
	{
		title: "Social Listening",
		tone: "bg-[oklch(0.4_0.15_340)] text-[oklch(0.95_0.05_60)]"
	},
	{
		title: "Analytics & Reporting",
		tone: "bg-[oklch(0.75_0.15_80)] text-[oklch(0.25_0.1_260)]"
	},
	{
		title: "Brand & Knowledge",
		tone: "bg-[oklch(0.65_0.2_25)] text-white"
	},
	{
		title: "Automation Builder",
		tone: "bg-[oklch(0.9_0.03_260)] text-[oklch(0.3_0.1_260)]"
	}
];
var features = [
	{
		title: "Ship campaigns end to end",
		body: "Your team is buried in briefs and dashboards. Enrich agents research, write, publish, and optimize across every channel — so campaigns actually ship, on time, on brand.",
		animation: "ecommerce"
	},
	{
		title: "Grow like a pro",
		body: "Enrich agents plan keywords, generate content, launch ads, and send emails on autopilot. Personalize at scale, run experiments in bulk, and know exactly what's working.",
		animation: "marketing"
	},
	{
		title: "Protect your brand",
		body: "Every agent learns your voice, guidelines, and offers from a central knowledge base. Stay consistent across blogs, ads, email, and social — without micromanaging every asset.",
		animation: "security"
	},
	{
		title: "Stay in control",
		body: "One workspace for every campaign, agent, and metric. Approve work, edit outputs, and track ROI in real time — with humans in the loop wherever it matters.",
		animation: "dashboard"
	}
];
var steps = [
	{
		n: "01",
		title: "Gather",
		tagline: "Continuous research",
		body: "Kai listens across social, search, and communities. Sam tracks keywords and competitors. Your agents surface opportunities before your team even opens a dashboard.",
		animation: "marketing"
	},
	{
		n: "02",
		title: "Execute",
		tagline: "Autonomous execution",
		body: "Helena writes blogs, ads, and landing pages. Angela drafts and sends email campaigns. Everything ships to your CMS, ad accounts, and ESP — with your review when you want it.",
		animation: "automation"
	},
	{
		n: "03",
		title: "Analyze",
		tagline: "Insights that loop back",
		body: "Live dashboards track ROI, traffic, and revenue across channels. Results feed straight back into the next brief, so every campaign compounds on the last.",
		animation: "analytics"
	}
];
var agents = [
	{
		name: "Helena",
		role: "AI Digital Marketer",
		status: "Writing a blog post…",
		img: agent_helena_default
	},
	{
		name: "Sam",
		role: "AI SEO / GEO Manager",
		status: "Optimizing campaign…",
		img: agent_sam_default
	},
	{
		name: "Kai",
		role: "AI Social Listening",
		status: "Responding on Reddit…",
		img: agent_kai_default
	},
	{
		name: "Angela",
		role: "AI Email Marketer",
		status: "Crafting email campaign…",
		img: agent_angela_default
	}
];
var testimonials = [
	{
		quote: "Enrich has doubled our content output without expanding the team. It's like hiring a full marketing pod overnight.",
		name: "Jane Doe",
		role: "Marketing Director"
	},
	{
		quote: "Our campaigns run themselves. Enrich feels like our entire marketing department — at a fraction of the cost.",
		name: "John Smith",
		role: "CEO"
	},
	{
		quote: "Helena writes better first drafts than most agencies we've hired. We just review, tweak, and ship.",
		name: "Priya Natarajan",
		role: "Head of Growth"
	},
	{
		quote: "The moment we plugged in our brand voice, every output started sounding like us. That was the unlock.",
		name: "Marco Álvarez",
		role: "VP Marketing"
	},
	{
		quote: "This is what an AI marketing team should feel like.",
		name: "Sara Chen",
		role: "Founder"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const items = [
		"Agents",
		"Solutions",
		"Resources",
		"Pricing",
		"Blog"
	];
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 100);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${scrolled ? "bg-background/80 border-border shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]" : "bg-background/40 border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto max-w-7xl px-6 flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "flex items-center gap-2 font-black text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid place-items-center w-7 h-7 rounded-md bg-gradient-brand shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-white icon-hover" })
					}), "Enrich Labs"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-1 text-sm",
					children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "px-3 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/5 transition",
						children: i
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 px-4 py-2 text-sm font-medium transition btn-lift",
							children: ["Login ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "inline-flex items-center rounded-full bg-lime px-4 py-2 text-sm font-semibold text-[oklch(0.2_0.05_285)] hover:brightness-95 transition btn-lift",
							children: "Get Started"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "md:hidden p-2 icon-hover",
							onClick: () => setOpen(!open),
							"aria-label": "Menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border px-6 py-4 flex flex-col gap-2",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#",
				className: "py-2 text-sm",
				children: i
			}, i))
		})]
	});
}
function AnnouncementBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-brand-soft text-[oklch(0.2_0.05_285)] text-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-center gap-2 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "Introducing Helena 2.0:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "A smarter AI marketer that writes, publishes, and optimizes autonomously."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "inline-flex items-center gap-1 font-semibold underline underline-offset-2",
					children: ["See what's new ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
				})
			]
		})
	});
}
function MeshBackdrop({ intensity = 1 }) {
	const orb1Ref = (0, import_react.useRef)(null);
	const orb2Ref = (0, import_react.useRef)(null);
	const orb3Ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		const onScroll = () => {
			const y = window.scrollY;
			if (orb1Ref.current) orb1Ref.current.style.transform = `translateY(${y * .15}px)`;
			if (orb2Ref.current) orb2Ref.current.style.transform = `translateY(${y * .1}px)`;
			if (orb3Ref.current) orb3Ref.current.style.transform = `translateY(${y * .2}px)`;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "absolute inset-0 overflow-hidden pointer-events-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: orb1Ref,
				className: "absolute -top-24 -left-24 w-[55%] h-[70%] rounded-full blur-3xl animate-mesh",
				style: {
					background: "radial-gradient(circle, oklch(0.65 0.22 295 / 0.55) 0%, transparent 70%)",
					opacity: .9 * intensity
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: orb2Ref,
				className: "absolute top-1/3 -right-32 w-[55%] h-[70%] rounded-full blur-3xl animate-mesh-2",
				style: {
					background: "radial-gradient(circle, oklch(0.72 0.2 320 / 0.5) 0%, transparent 70%)",
					opacity: .85 * intensity,
					animationDelay: "-6s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: orb3Ref,
				className: "absolute bottom-0 left-1/3 w-[45%] h-[55%] rounded-full blur-3xl animate-mesh",
				style: {
					background: "radial-gradient(circle, oklch(0.55 0.25 285 / 0.45) 0%, transparent 70%)",
					opacity: .8 * intensity,
					animationDelay: "-10s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-noise mix-blend-overlay opacity-30" })
		]
	});
}
function MobileHeroCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-glow bg-[oklch(0.14_0.05_285)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_dashboard_default,
				alt: "",
				loading: "lazy",
				className: "absolute inset-0 w-full h-full object-cover opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full blur-3xl animate-orb",
				style: { background: "radial-gradient(circle, oklch(0.7 0.25 295 / 0.7) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-[-15%] right-[-10%] w-[70%] h-[70%] rounded-full blur-3xl animate-orb",
				style: {
					background: "radial-gradient(circle, oklch(0.72 0.2 320 / 0.6) 0%, transparent 70%)",
					animationDelay: "-5s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full blur-3xl animate-orb",
				style: {
					background: "radial-gradient(circle, oklch(0.65 0.22 260 / 0.55) 0%, transparent 70%)",
					animationDelay: "-9s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1.5 text-xs font-semibold border border-white/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-lime animate-pulse" }), "Agents working"]
			})
		]
	});
}
function Hero() {
	const [isMobile, setIsMobile] = (0, import_react.useState)(null);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [mouseOffset, setMouseOffset] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const reduced = useReducedMotion();
	const heroRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const mq = window.matchMedia("(max-width: 767px)");
		setIsMobile(mq.matches);
		const cb = () => setIsMobile(mq.matches);
		mq.addEventListener("change", cb);
		const handleMouseMove = (e) => {
			if (!heroRef.current) return;
			const rect = heroRef.current.getBoundingClientRect();
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			const mouseX = e.clientX - rect.left - centerX;
			const mouseY = e.clientY - rect.top - centerY;
			setMouseOffset({
				x: mouseX / centerX * 20,
				y: mouseY / centerY * 20
			});
		};
		heroRef.current?.addEventListener("mousemove", handleMouseMove);
		return () => {
			mq.removeEventListener("change", cb);
			heroRef.current?.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: heroRef,
		className: "relative overflow-hidden bg-gradient-hero min-h-[120vh]",
		children: [
			!reduced && mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroWorkspace, { mouseOffset })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-[1] pointer-events-none",
				style: { background: `
            linear-gradient(
              to bottom,
              oklch(0.11 0.02 285 / 0.75) 0%,
              oklch(0.11 0.02 285 / 0.65) 35%,
              oklch(0.11 0.02 285 / 0.5) 70%,
              oklch(0.11 0.02 285 / 0.75) 100%
            )
          ` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-40 pb-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-black tracking-tight text-balance text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedHeadline, {
								text: "AI marketers",
								isHero: true
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedHeadline, {
								text: "that ship.",
								isHero: true,
								delay: 80,
								glow: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 mx-auto max-w-2xl animate-reveal",
						style: { animationDelay: "150ms" },
						children: [mounted && !reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimulatedPromptBar, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white p-4 shadow-glow text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								defaultValue: "Launch a full-funnel campaign for our new product line",
								className: "w-full bg-transparent text-[oklch(0.3_0.05_285)] placeholder:text-[oklch(0.6_0.03_285)] outline-none text-base py-2"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "grid place-items-center w-8 h-8 rounded-full bg-[oklch(0.95_0.02_285)] text-[oklch(0.3_0.05_285)] hover:bg-[oklch(0.9_0.03_285)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-[oklch(0.4_0.1_290)] hover:bg-[oklch(0.95_0.05_290)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "w-4 h-4" }), " Briefs"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white btn-lift neon-border",
									children: ["Launch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "w-4 h-4" })]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg text-white/90",
							children: "From brief to launch, Enrich agents run your marketing 24/7 — autonomously."
						})]
					}),
					isMobile === true && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						className: "mt-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-5xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileHeroCanvas, {})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 border-t border-white/10 overflow-hidden py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center justify-center gap-6 md:gap-10",
						children: [
							{
								slug: "shopify",
								label: "Shopify"
							},
							{
								slug: "instagram",
								label: "Instagram"
							},
							{
								slug: "reddit",
								label: "Reddit"
							},
							{
								slug: "whatsapp",
								label: "WhatsApp"
							},
							{
								slug: "linkedin",
								label: "LinkedIn"
							},
							{
								slug: "slack",
								label: "Slack"
							},
							{
								slug: "googleads",
								label: "Google Ads"
							}
						].map((icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm transition-opacity hover:opacity-100 opacity-70 cursor-pointer",
								"aria-label": icon.label,
								style: {
									animation: "gentle-breathe 4s ease-in-out infinite",
									animationDelay: `${i * .3}s`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationIcon, {
									slug: icon.slug,
									size: 28
								})
							})
						}, icon.slug))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes gentle-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
      ` })
		]
	});
}
function AgentsMarquee() {
	const reduced = useReducedMotion();
	const row1 = agentThumbs.slice(0, 6);
	const row2 = agentThumbs.slice(6, 12);
	const Card = ({ t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `shrink-0 w-[280px] sm:w-[340px] aspect-video rounded-2xl ${t.tone} p-6 flex flex-col justify-between shadow-lg snap-start`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-bold tracking-widest opacity-70",
			children: "AGENT"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-2xl font-black tracking-tight",
			children: t.title
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-28 md:py-32 bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 mb-14 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs sm:text-sm font-bold tracking-[0.28em] text-brand-soft",
					children: "WHY ENRICH"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.02] text-balance",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "inline",
						children: "A complete marketing operating system"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed",
					children: "Everything your team needs to plan, execute, and analyze campaigns — powered by AI specialists that actually do the work."
				})
			]
		}) }), reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
			children: agentThumbs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { t }, t.title))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden overflow-x-auto snap-x snap-mandatory px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-4 pb-2 w-max pr-[20%]",
				children: agentThumbs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { t }, t.title))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden md:block space-y-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max gap-6 animate-marquee-left marquee-track",
				children: [...row1, ...row1].map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { t }, `r1-${idx}`))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max gap-6 animate-marquee-right marquee-track",
				children: [...row2, ...row2].map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { t }, `r2-${idx}`))
			})]
		})] })]
	});
}
function FeatureCard({ f, i }) {
	const tiltRef = useTilt(6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: i % 2 * 80,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: tiltRef,
			className: "tilt-card group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10 hover:border-brand/50 transition-colors h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid place-items-center w-8 h-8 rounded-lg bg-brand/20 text-brand-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", i + 1] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-6 text-3xl md:text-4xl font-black tracking-tight",
					children: f.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground leading-relaxed",
					children: f.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 aspect-[16/10] rounded-2xl overflow-hidden border border-border flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieAnimation, {
						type: f.animation,
						size: 180
					})
				})
			]
		})
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-12 gap-6",
			children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
					f,
					i
				})
			}, f.title))
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-24 bg-gradient-stats divider-top-angled",
		style: { boxShadow: "var(--border-glow-stats)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshBackdrop, { intensity: .7 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold tracking-[0.2em] text-brand-soft",
				children: "THE PAYOFF"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance max-w-4xl",
				children: "Marketing is more than a cost center. With Enrich, it's your compounding growth engine."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid sm:grid-cols-3 gap-8",
				children: [
					{
						value: "24/7",
						label: "Autonomous execution across content, ads, email, and social."
					},
					{
						value: "10H+",
						label: "On average, marketing teams save over 10 hours every week."
					},
					{
						value: "∞",
						label: "Scales with your team — from startup to enterprise."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-white/20 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							target: s.value,
							className: "text-6xl md:text-7xl font-black tracking-tight text-accent-amber text-glow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground max-w-xs",
							children: s.label
						})]
					})
				}, s.value))
			})]
		})]
	});
}
function HowTo() {
	const itemRefs = (0, import_react.useRef)([]);
	const [active, setActive] = (0, import_react.useState)(0);
	const reduced = useReducedMotion();
	const gridRef = (0, import_react.useRef)(null);
	const gradientRef = (0, import_react.useRef)(null);
	const particlesRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (reduced) {
			setActive(0);
			return;
		}
		const els = itemRefs.current.filter(Boolean);
		if (!els.length) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = itemRefs.current.indexOf(entry.target);
					if (index !== -1) setActive(index);
				}
			});
		}, {
			root: null,
			rootMargin: "-40% 0px -40% 0px",
			threshold: 0
		});
		els.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-28 md:py-32 bg-background overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtmosphericBackground, {
			gridRef,
			gradientRef,
			particlesRef
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.28em] text-brand-soft",
						children: "HOW IT WORKS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-balance",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "inline",
							children: "Your autonomous marketing workflow"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed",
						children: "Enrich specialists work together in real time — research feeds content, content fuels campaigns, and insights inform the next brief."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 md:mt-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-16 md:space-y-[50vh] md:pt-[25vh] md:pb-[25vh]",
					children: steps.map((s, i) => {
						const isActive = i === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: (el) => {
								itemRefs.current[i] = el;
							},
							className: "group relative transition-all duration-500 ease-out",
							style: {
								opacity: isActive ? 1 : .35,
								transform: isActive ? "translateX(0)" : "translateX(-8px)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -left-4 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ease-out",
									style: {
										background: isActive ? "linear-gradient(180deg, var(--brand) 0%, var(--brand-soft) 100%)" : "transparent",
										boxShadow: isActive ? "0 0 20px oklch(0.65 0.22 295 / 0.6)" : "none"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:hidden mb-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-brand/40 via-brand-deep to-background shadow-glow flex items-center justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieAnimation, {
										type: s.animation,
										size: 160
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-3 left-3 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold border border-white/20",
										children: [
											"Step ",
											s.n,
											" · ",
											s.title
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4 md:gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mt-3 md:mt-4 shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block rounded-full transition-all duration-500",
											style: {
												width: isActive ? 14 : 10,
												height: isActive ? 14 : 10,
												background: isActive ? "var(--brand)" : "var(--muted-foreground)",
												boxShadow: isActive ? "0 0 0 4px oklch(0.65 0.22 295 / 0.2), 0 0 24px oklch(0.65 0.22 295 / 0.5)" : "none"
											}
										}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute inset-0 rounded-full animate-ping opacity-30",
											style: {
												background: "var(--brand)",
												animationDuration: "2s"
											}
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-muted-foreground font-mono tracking-widest",
												children: [
													"(",
													s.n,
													")"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-black tracking-tight leading-[0.95] transition-all duration-500",
												style: {
													fontSize: "clamp(2rem, 5vw, 3.5rem)",
													color: isActive ? "var(--brand-soft)" : "var(--foreground)",
													textShadow: isActive ? "0 0 30px oklch(0.65 0.22 295 / 0.4)" : "none"
												},
												children: s.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 font-semibold text-base md:text-lg transition-all duration-500",
												style: {
													color: isActive ? "var(--brand-soft)" : "var(--muted-foreground)",
													opacity: isActive ? 1 : .7
												},
												children: s.tagline
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 leading-relaxed max-w-md text-[0.95rem] md:text-base transition-all duration-500",
												style: {
													color: isActive ? "var(--muted-foreground)" : "var(--muted-foreground)",
													opacity: isActive ? 1 : .5
												},
												children: s.body
											})
										]
									})]
								})
							]
						}, s.n);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-3xl overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-1 rounded-[1.4rem] transition-opacity duration-700",
								style: {
									background: "linear-gradient(135deg, oklch(0.72 0.2 300 / 0.4), oklch(0.65 0.22 295 / 0.2), oklch(0.75 0.14 190 / 0.3))",
									opacity: .6,
									filter: "blur(1px)"
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/5] max-h-[75vh] rounded-[1.2rem] bg-gradient-to-br from-brand/30 via-brand-deep/80 to-background border border-border/50 overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,0,0,0.6)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 transition-all duration-1000 ease-out",
										style: { background: active === 0 ? "radial-gradient(ellipse at 30% 40%, oklch(0.65 0.22 295 / 0.3) 0%, transparent 60%)" : active === 1 ? "radial-gradient(ellipse at 70% 30%, oklch(0.72 0.2 300 / 0.3) 0%, transparent 60%)" : "radial-gradient(ellipse at 50% 60%, oklch(0.75 0.14 190 / 0.3) 0%, transparent 60%)" }
									}),
									steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 transition-all duration-700 ease-out",
										style: {
											opacity: i === active ? 1 : 0,
											transform: i === active ? "translateY(0) scale(1)" : i > active ? "translateY(20px) scale(1.02)" : "translateY(-20px) scale(1.02)",
											pointerEvents: i === active ? "auto" : "none"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieAnimation, {
												type: s.animation,
												size: 280
											})
										})
									}, s.n)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-4 left-4 right-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 rounded-full bg-black/30 backdrop-blur-md px-3 py-1.5 text-xs font-semibold border border-white/10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-lime animate-pulse" }),
												"Step ",
												steps[active].n
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold text-white/80 backdrop-blur-md px-3 py-1.5 rounded-full bg-black/20 border border-white/10",
											children: steps[active].title
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-0 left-0 right-0 p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "backdrop-blur-md bg-black/30 rounded-2xl p-4 border border-white/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-bold text-lg text-white",
												children: steps[active].title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-white/70 mt-1",
												children: steps[active].tagline
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2",
										children: steps.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-1.5 rounded-full transition-all duration-500 ease-out",
											style: {
												width: i === active ? 32 : 8,
												background: i === active ? "linear-gradient(90deg, var(--brand), var(--brand-soft))" : "rgba(255,255,255,0.3)",
												boxShadow: i === active ? "0 0 12px oklch(0.65 0.22 295 / 0.6)" : "none"
											}
										}, i))
									})
								]
							})]
						})
					})
				})]
			})]
		})]
	});
}
function AgentCard({ a, i }) {
	const tiltRef = useTilt(7);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: i * 80,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: tiltRef,
			className: "agent-card tilt-card group rounded-3xl overflow-hidden border border-border bg-card hover:border-brand/50 transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-square overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: a.img,
					alt: `${a.name} — ${a.role}`,
					loading: "lazy",
					className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xl font-black",
						children: a.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: a.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-2 text-xs text-brand-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-1.5 h-1.5 rounded-full bg-lime animate-pulse" }), a.status]
					})
				]
			})]
		})
	});
}
function MeetTeam() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-background border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold tracking-[0.28em] text-brand-soft",
				children: "MEET YOUR TEAM"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-balance max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "inline",
					children: "Four specialists. One relentless team."
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-12 gap-6",
				children: agents.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentCard, {
						a,
						i
					})
				}, a.name))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-background border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "inline",
					children: "Loved by marketing teams that mean growth."
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * 80,
					from: "left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "relative rounded-3xl border border-border bg-card p-8 pl-10 flex flex-col justify-between min-h-[280px] h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-brand-soft via-brand to-brand-deep"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "text-lg italic leading-relaxed font-medium text-foreground/95",
								style: { fontFamily: "Georgia, 'Times New Roman', serif" },
								children: t.quote
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-8 not-italic",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: t.role
								})]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
function Integrations() {
	const wrapRef = (0, import_react.useRef)(null);
	const [mouseOffset, setMouseOffset] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: .3 });
		if (wrapRef.current) observer.observe(wrapRef.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: wrapRef,
		className: "relative overflow-hidden py-28 md:py-36 divider-top-angled divider-bottom-angled",
		style: { background: "radial-gradient(120% 80% at 50% 40%, oklch(0.12_0.02_285) 0%, oklch(0.15_0.02_285) 50%, oklch(0.18_0.02_285) 100%)" },
		onMouseMove: useCallback((e) => {
			if (!wrapRef.current) return;
			const rect = wrapRef.current.getBoundingClientRect();
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			const mouseX = e.clientX - rect.left - centerX;
			const mouseY = e.clientY - rect.top - centerY;
			setMouseOffset({
				x: mouseX / centerX * 10,
				y: mouseY / centerY * 10
			});
		}, []),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex items-center gap-3 rounded-md px-4 py-2 text-sm text-[oklch(0.8_0.02_285)]",
					style: {
						background: "transparent",
						boxShadow: "inset 0 0 0 1px oklch(0.55 0.22 295 / 0.35)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "inline-flex items-center gap-1 font-bold text-[oklch(0.75_0.15_295)] hover:gap-2 transition-all",
						children: ["Register your interest ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-10 font-black tracking-tight leading-[1.02] text-balance text-4xl sm:text-5xl md:text-6xl",
						children: [
							"Weave Enrich into your",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							" existing workflow"
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-6xl mt-16 md:mt-20 h-[500px] md:h-[650px] px-6",
				children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationOrbit, { mouseOffset })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative text-center mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "inline-flex items-center gap-1.5 font-bold text-[oklch(0.8_0.02_285)]",
					children: ["Explore integrations ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
				})
			})
		]
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-32 bg-gradient-cta divider-top-angled",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshBackdrop, { intensity: .6 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-4xl px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-balance",
					children: "Meet your new marketing team."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground",
					children: "Join thousands of teams growing faster with autonomous AI marketers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "inline-flex items-center gap-2 rounded-full bg-accent-warm px-6 py-3 font-semibold text-[oklch(0.2_0.05_285)] btn-lift neon-border",
						children: ["Get Started — It's Free ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-6 py-3 font-semibold transition btn-lift neon-border-teal",
						children: "Book a Demo"
					})]
				})
			] })
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-background border-t border-border pt-20 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-5 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-black text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid place-items-center w-8 h-8 rounded-md bg-gradient-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-white" })
						}), "Enrich Labs"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "The AI marketing operating system for modern teams."
					})]
				}), Object.entries({
					Agents: [
						"Helena — Digital Marketer",
						"Sam — SEO / GEO Manager",
						"Kai — Social Listening",
						"Angela — Email Marketer",
						"All agents"
					],
					Solutions: [
						"Startups & SMBs",
						"Digital Agencies",
						"E-commerce Brands",
						"Global Enterprises",
						"Marketing Teams"
					],
					Resources: [
						"Blog",
						"Case Studies",
						"Help Center",
						"Docs",
						"Changelog"
					],
					Company: [
						"About",
						"Careers",
						"Press",
						"Legal",
						"Contact"
					]
				}).map(([title, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold mb-4",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "text-sm text-muted-foreground hover:text-foreground transition",
						children: i
					}) }, i))
				})] }, title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Enrich Labs, Inc."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-foreground",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-foreground",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-foreground",
							children: "Security"
						})
					]
				})]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentsMarquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowTo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeetTeam, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Integrations, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	})] });
}
//#endregion
export { Index as component };
