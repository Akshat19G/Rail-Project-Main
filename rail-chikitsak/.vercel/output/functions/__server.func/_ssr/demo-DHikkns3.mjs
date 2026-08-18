import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as useJourney, f as useTrust, m as DEMO_PASSENGER, p as DEMO_DOCTOR, u as clearTrustStorage, v as TRAIN } from "./router-Dwfe-FwJ.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { L as ArrowRight, R as ArrowLeft, i as User, l as Stethoscope } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as coach_interior_default } from "./coach-interior-OEo0hNxf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-DHikkns3.js
var import_jsx_runtime = require_jsx_runtime();
var doctor_onboard_default = "/assets/doctor-onboard-DZWZj-a5.jpg";
function DemoChooser() {
	const j = useJourney();
	const navigate = useNavigate();
	const { resetTrustLayer } = useTrust();
	function enter(account) {
		clearTrustStorage();
		resetTrustLayer();
		j.signIn(account);
		j.reset();
		navigate({
			to: account.role === "doctor" ? "/doctor" : "/journey",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/auth",
				className: "text-sm text-muted-foreground hover:text-foreground",
				children: "Use a real account"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto w-full max-w-6xl px-5 pb-24 pt-8 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), " “Every second matters.”"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Choose your role"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-xl text-muted-foreground",
					children: [
						"Both consoles run on the same live ",
						TRAIN,
						" journey from Pune Central to Mumbai Central."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						icon: User,
						image: coach_interior_default,
						alt: "Interior of a modern passenger train coach",
						eyebrow: "Passenger experience",
						title: "Amit Sharma",
						body: "Experience Rail Chikitsak from the passenger's perspective — live journey tracking, one-tap medical SOS and AI-assisted triage.",
						facts: [
							`Age 54`,
							`Coach ${DEMO_PASSENGER.coach}`,
							`Seat ${DEMO_PASSENGER.seat}`
						],
						cta: "CONTINUE AS PASSENGER",
						onClick: () => enter(DEMO_PASSENGER),
						delay: 0
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						icon: Stethoscope,
						image: doctor_onboard_default,
						alt: "Doctor attending to a passenger onboard a train",
						eyebrow: "Doctor experience",
						title: DEMO_DOCTOR.name,
						body: "Experience how onboard medical responders receive an emergency, work a 2-minute response window and decide the next step.",
						facts: [
							DEMO_DOCTOR.specialization ?? "",
							`Coach ${DEMO_DOCTOR.coach}`,
							`Seat ${DEMO_DOCTOR.seat}`
						],
						cta: "CONTINUE AS DOCTOR",
						onClick: () => enter(DEMO_DOCTOR),
						delay: .08
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground",
					children: "All passengers, doctors, hospitals and ambulances are fictional. Nothing here is connected to IRCTC, Indian Railways, railway GPS, government hospital systems or any SMS provider."
				})
			]
		})]
	});
}
function DemoCard({ icon: Icon, image, alt, eyebrow, title, body, facts, cta, onClick, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 22
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .5,
			delay
		},
		className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-elevate",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-52 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt,
					loading: "lazy",
					width: 1600,
					height: 1e3,
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-lg bg-navy text-navy-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1.5 font-display text-2xl font-semibold tracking-tight",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: facts.filter(Boolean).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground",
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick,
					className: "mt-7 h-12 w-full gap-2 text-sm font-semibold",
					children: [
						cta,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
					]
				})
			]
		})]
	});
}
//#endregion
export { DemoChooser as component };
