import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as STATIONS, a as useI18n, b as useJourney, c as REPORT_REASONS, f as useTrust, n as playAlertTone, r as useSettings, u as clearTrustStorage, v as TRAIN } from "./router-Dwfe-FwJ.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { A as Eye, C as Hospital, M as Contrast, P as Check, S as Languages, _ as Phone, b as LogOut, g as RotateCcw, k as FileExclamationPoint, m as ShieldAlert, n as Waves, r as Volume2, s as TrainFront, t as X, v as Palette } from "../_libs/lucide-react.mjs";
import { n as LanguageSwitcher, r as hero_train_default, t as BrandMark } from "./logo-C6-1l70k.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-DgW5l6yk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RailMap() {
	const j = useJourney();
	const alert = j.phase === "emergency";
	const liveIndex = j.stationIndex;
	const alertIndex = j.emergency ? STATIONS.indexOf(j.emergency.station) : -1;
	const pct = j.elapsed / 6e4 * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-border bg-card p-6 shadow-elevate sm:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground",
						children: "Current location"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 truncate font-display text-3xl font-semibold tracking-tight sm:text-4xl",
						children: j.currentStation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: alert && alertIndex >= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 font-medium text-critical",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2 w-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-critical/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-critical" })]
								}),
								"Train halted at ",
								STATIONS[alertIndex],
								" · medical response underway"
							]
						}) : j.nextStation ? `Next station: ${j.nextStation}` : "Arriving at destination"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `shrink-0 rounded-full border px-3 py-1 text-[11px] font-medium ${alert ? "border-critical/40 text-critical" : "border-accent/40 text-accent"}`,
				children: alert ? "HALTED · EMERGENCY" : "RUNNING"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-12 pb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-muted" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: `absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full ${alert ? "bg-critical" : "bg-accent"}`,
					animate: { width: `${pct}%` },
					transition: {
						ease: "linear",
						duration: .12
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute top-1/2 z-10 -translate-x-1/2 -translate-y-[130%]",
					animate: { left: `${pct}%` },
					transition: {
						ease: "linear",
						duration: .12
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-9 w-9 place-items-center rounded-full border shadow-elevate ${alert ? "border-critical/50 bg-critical text-on-priority" : "border-border bg-card text-navy"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainFront, { className: "h-4 w-4" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex justify-between",
					children: STATIONS.map((s, i) => {
						const passed = i < liveIndex;
						const active = i === liveIndex;
						const blinking = i === alertIndex;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `relative z-[1] h-3.5 w-3.5 rounded-full border-2 transition-colors ${blinking ? "border-critical bg-critical" : active ? "border-accent bg-accent" : passed ? "border-accent bg-accent/60" : "border-border bg-card"}`,
								children: blinking || active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-0 animate-ping rounded-full ${blinking ? "bg-critical/60" : "bg-accent/50"}` }) : null
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-3 max-w-[8ch] text-center text-[11px] leading-tight sm:max-w-none sm:text-xs ${blinking ? "animate-pulse font-semibold text-critical" : active ? "font-semibold text-foreground" : "text-muted-foreground"}`,
								children: s
							})]
						}, s);
					})
				})
			]
		})]
	});
}
function TimelineCard() {
	const j = useJourney();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground",
			children: "Emergency timeline"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-5 pl-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-2 left-[6px] top-2 w-px bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: j.timeline.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -10
					},
					animate: {
						opacity: 1,
						x: 0
					},
					className: "relative pb-5 last:pb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-6 top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-card" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-muted-foreground",
							children: e.time
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-medium",
							children: ["✓ ", e.label]
						})
					]
				}, `${e.label}-${i}`))
			})]
		})]
	});
}
function Panel({ title, action, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `rounded-xl border border-border bg-card ${className}`,
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between gap-4 border-b border-border px-6 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
				children: title
			}), action]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-6",
			children
		})]
	});
}
function Stat({ value, label, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `font-display text-3xl font-semibold tabular-nums tracking-tight ${tone === "accent" ? "text-accent" : tone === "critical" ? "text-critical" : "text-foreground"}`,
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: label
		})]
	});
}
function Tag({ children, tone = "muted" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] ${{
			muted: "border-border text-muted-foreground",
			accent: "border-accent/40 text-accent",
			critical: "border-critical/40 text-critical",
			warning: "border-high/50 text-high"
		}[tone]}`,
		children
	});
}
function SectionHeading({ title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-semibold tracking-tight",
			children: title
		}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 max-w-2xl text-sm text-muted-foreground",
			children: description
		}) : null]
	});
}
function DashboardShell({ nav, active, onNavigate, workspace, status, children }) {
	const j = useJourney();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-14 items-center gap-4 px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { className: "h-8 w-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm font-semibold tracking-tight",
								children: "Rail Chikitsak"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden truncate border-l border-border pl-2.5 text-xs text-muted-foreground sm:inline",
								children: workspace
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-3",
						children: [status, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								j.signOut();
								j.reset();
								navigate({
									to: "/auth",
									replace: true
								});
							},
							className: "grid h-8 w-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
							"aria-label": "Sign out",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 border-r border-border px-3 py-6 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "space-y-0.5",
						children: nav.map((item) => {
							const on = item.id === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onNavigate(item.id),
								className: `flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${on ? "bg-muted font-medium text-foreground" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4 shrink-0" }), item.label]
							}, item.id);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-8 sm:pt-8 lg:pb-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-5xl",
						children
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex overflow-x-auto",
					children: nav.map((item) => {
						const on = item.id === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onNavigate(item.id),
							className: `flex min-w-[4.5rem] flex-1 flex-col items-center gap-1 px-2 py-2.5 text-[10px] transition-colors ${on ? "text-foreground" : "text-muted-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), item.label]
						}, item.id);
					})
				})
			})
		]
	});
}
function TriageResult() {
	const em = useJourney().emergency;
	const critical = em.priority === "CRITICAL" || em.priority === "HIGH";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "AI-assisted triage",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: em.type ?? "—" }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `font-display text-3xl font-semibold tracking-tight ${critical ? "text-critical" : "text-medium"}`,
				children: em.priority
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: em.triageReason
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: "AI-assisted triage. This is not a medical diagnosis."
			})
		]
	});
}
function HospitalPanel({ hospital }) {
	const em = useJourney().emergency;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Hospital response",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
			tone: "critical",
			children: "Alerted"
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "flex items-center gap-2 font-display text-xl font-semibold tracking-tight",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hospital, { className: "h-4 w-4 shrink-0 text-chart-1" }),
					" ",
					hospital.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: ["Nearest facility to ", em.station]
			}),
			em.escalationReason ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-lg border border-critical/25 bg-critical/6 px-4 py-3 text-sm",
				children: em.escalationReason
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4",
				children: [
					["Status", "Alerted"],
					["Ambulance", em.ambulanceStatus === "READY" ? "Ready" : "Preparing"],
					["Unit", hospital.ambulance],
					["Contact", hospital.contact]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-0.5 truncate text-sm font-medium",
					children: v
				})] }, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				className: "mt-5 gap-2",
				onClick: () => toast.info("Connecting to the hospital emergency line…"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " Call hospital"]
			})
		]
	});
}
/** Premium journey card with an image, route overlay and animated progress. */
function JourneyCard({ coach, seat, label = "Current journey" }) {
	const j = useJourney();
	const alert = j.phase === "emergency";
	const alertIndex = j.emergency ? STATIONS.indexOf(j.emergency.station) : -1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-xl border border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-40 sm:h-48",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_train_default,
					alt: "Express train travelling between Pune and Mumbai",
					className: "h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/72" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col justify-between p-6 text-navy-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.18em] opacity-70",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl font-semibold tracking-tight",
							children: TRAIN
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] ${alert ? "border-critical/60 text-critical" : "border-accent/50 text-accent"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 animate-pulse rounded-full ${alert ? "bg-critical" : "bg-accent"}` }), alert ? "Halted · emergency" : "Journey active"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm opacity-80",
								children: "Pune Central → Mumbai Central"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-display text-2xl font-semibold tracking-tight",
								children: alert && alertIndex >= 0 ? STATIONS[alertIndex] : j.currentStation
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "shrink-0 font-mono text-xs opacity-80",
							children: [
								"Coach ",
								coach,
								" · Seat ",
								seat
							]
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-6 py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1 w-full overflow-hidden rounded-full bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: `h-full rounded-full ${alert ? "bg-critical" : "bg-accent"}`,
					animate: { width: `${j.progress}%` },
					transition: {
						ease: "linear",
						duration: .15
					}
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: alert ? `Train halted at ${j.currentStation}` : `Next station · ${j.nextStation ?? "Arriving"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono tabular-nums",
					children: [j.progress, "% complete"]
				})]
			})]
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var REVIEW_STEPS = [
	"Report received",
	"Emergency record checked",
	"Response timeline checked",
	"Case reviewed"
];
var STATUS_STEPS = [
	"Submitted",
	"Under review",
	"Verification",
	"Resolution"
];
function stepIndex(status) {
	if (status === "SUBMITTED") return 0;
	if (status === "UNDER_REVIEW") return 1;
	return 3;
}
function ReportStatusTimeline({ report }) {
	const idx = stepIndex(report.status);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-2.5",
		children: STATUS_STEPS.map((s, i) => {
			const on = i <= idx;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2.5 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${on ? "bg-accent" : "bg-border"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: on ? "" : "text-muted-foreground",
					children: s
				})]
			}, s);
		})
	});
}
/** Simulated Rail Chikitsak Trust review — a report never penalises anyone on its own. */
function TrustReviewCard({ report }) {
	const { verifyReport } = useTrust();
	const [step, setStep] = (0, import_react.useState)(0);
	const running = report.status === "SUBMITTED" || report.status === "UNDER_REVIEW";
	(0, import_react.useEffect)(() => {
		if (!running) return;
		const id = setInterval(() => setStep((s) => Math.min(s + 1, REVIEW_STEPS.length)), 900);
		return () => clearInterval(id);
	}, [running]);
	(0, import_react.useEffect)(() => {
		if (running && step >= REVIEW_STEPS.length) verifyReport(report.id);
	}, [
		step,
		running,
		report.id,
		verifyReport
	]);
	const verified = report.status === "VERIFIED";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Rail Chikitsak Trust review",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Simulated review result" }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2.5",
			children: REVIEW_STEPS.map((s, i) => {
				const done = verified || i < step;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2.5 text-sm",
					children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 shrink-0 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3.5 w-3.5 shrink-0 animate-pulse rounded-full border border-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: done ? "" : "text-muted-foreground",
						children: s
					})]
				}, s);
			})
		}), verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 6
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "mt-5 border-t border-border pt-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg font-semibold text-critical",
				children: "Verified misuse"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [
					"Resolution · ",
					report.resolution,
					". A trust deduction and warning were applied after verification."
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-5 border-t border-border pt-4 text-xs text-muted-foreground",
			children: "Reports are reviewed before any account action is taken."
		})]
	});
}
function ReportDialog({ emergencyId, reportedUserId, reporterRole = "doctor", open, onOpenChange, onSubmitted }) {
	const { submitReport } = useTrust();
	const [reason, setReason] = (0, import_react.useState)(REPORT_REASONS[0]);
	const [description, setDescription] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Report emergency misuse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Report a case if you believe the emergency request was intentionally false, abusive, or used to unnecessarily consume emergency-response resources." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: REPORT_REASONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setReason(r),
							className: `flex w-full items-center gap-3 rounded-md border px-3.5 py-2.5 text-left text-sm transition-colors ${reason === r ? "border-foreground/30 bg-muted" : "border-border hover:bg-muted/50"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${reason === r ? "bg-accent" : "bg-border"}` }), r]
						}, r))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs text-muted-foreground",
						htmlFor: "report-detail",
						children: "Additional details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "report-detail",
						value: description,
						onChange: (e) => setDescription(e.target.value),
						rows: 3,
						className: "mt-1.5",
						placeholder: "Anything the review team should know"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "h-11 w-full",
						onClick: () => {
							const r = submitReport({
								emergencyId,
								reason,
								description,
								reporterRole,
								reportedUserId
							});
							onOpenChange(false);
							setDescription("");
							onSubmitted?.(r);
						},
						children: "Submit report"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Submitting a report does not penalise anyone. Every report is reviewed before any account action."
					})
				]
			})]
		})
	});
}
var TABS = [
	{
		id: "ALL",
		label: "Submitted"
	},
	{
		id: "UNDER_REVIEW",
		label: "Under review"
	},
	{
		id: "RESOLVED",
		label: "Resolved"
	}
];
function ReportsSection() {
	const { reports } = useTrust();
	const [tab, setTab] = (0, import_react.useState)("ALL");
	const list = reports.filter((r) => tab === "ALL" ? true : tab === "UNDER_REVIEW" ? r.status === "UNDER_REVIEW" || r.status === "SUBMITTED" : r.status === "VERIFIED" || r.status === "DISMISSED");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Reports",
				description: "Every report follows the same path: report, review, verification, resolution. Nothing is actioned automatically."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 rounded-lg border border-border p-1",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t.id),
					className: `flex-1 rounded-md px-3 py-1.5 text-sm transition-colors ${tab === t.id ? "bg-muted font-medium" : "text-muted-foreground hover:text-foreground"}`,
					children: t.label
				}, t.id))
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, { className: "mx-auto h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "No reports in this view."
				})]
			}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4 text-muted-foreground" }), " Emergency misuse report"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-mono text-xs text-muted-foreground",
								children: [
									"Case ",
									r.emergencyId,
									" · report ",
									r.id,
									" ·",
									" ",
									new Date(r.createdAt).toLocaleDateString("en-GB", {
										day: "2-digit",
										month: "short",
										year: "numeric"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: r.reason
							}),
							r.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: r.description
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						tone: r.status === "VERIFIED" ? "critical" : r.status === "DISMISSED" ? "muted" : "warning",
						children: r.status === "VERIFIED" ? "Verified" : r.status === "DISMISSED" ? "Dismissed" : r.status === "UNDER_REVIEW" ? "Under review" : "Submitted"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-6 border-t border-border pt-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportStatusTimeline, { report: r }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-muted-foreground",
								children: "Resolution"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5",
								children: r.resolution ?? "Pending review"
							}),
							r.reviewResult ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-muted-foreground",
								children: ["Review result · ", r.reviewResult]
							}) : null
						]
					})]
				})] }, r.id))
			})
		]
	});
}
function Row({ icon: Icon, title, desc, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center justify-between gap-4 border-b border-border py-4 first:pt-0 last:border-0 last:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: title
				}), desc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-sm text-muted-foreground",
					children: desc
				}) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0",
			children
		})]
	});
}
function Toggle({ checked, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		role: "switch",
		"aria-checked": checked,
		"aria-label": label,
		onClick: () => onChange(!checked),
		className: `relative h-6 w-11 shrink-0 rounded-full border transition-colors ${checked ? "border-accent bg-accent" : "border-border bg-muted"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 h-4.5 h-[1.1rem] w-[1.1rem] rounded-full bg-background transition-all ${checked ? "left-[1.4rem]" : "left-0.5"}` })
	});
}
function Segmented({ value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex rounded-lg border border-border bg-muted p-1",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-pressed": value === o.value,
			onClick: () => onChange(o.value),
			className: `rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${value === o.value ? "bg-card shadow-elevate" : "text-muted-foreground hover:text-foreground"}`,
			children: o.label
		}, o.value))
	});
}
function SettingsSection() {
	const { t } = useI18n();
	const { settings, update, resetSettings } = useSettings();
	const { resetTrustLayer } = useTrust();
	const j = useJourney();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: t("settings.title"),
				description: t("settings.desc")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: t("lang.label"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: Languages,
					title: t("lang.title"),
					desc: t("settings.language.desc"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: t("settings.appearance"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: Palette,
					title: t("settings.theme"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
						value: settings.theme,
						onChange: (v) => {
							update("theme", v);
							toast.success(t("settings.saved"));
						},
						options: [
							{
								value: "light",
								label: t("settings.light")
							},
							{
								value: "dark",
								label: t("settings.dark")
							},
							{
								value: "system",
								label: t("settings.system")
							}
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: t("settings.accessibility"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: Eye,
						title: t("settings.textSize"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
							value: settings.textSize,
							onChange: (v) => update("textSize", v),
							options: [
								{
									value: "sm",
									label: t("common.small")
								},
								{
									value: "md",
									label: t("common.default")
								},
								{
									value: "lg",
									label: t("common.large")
								}
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: Contrast,
						title: t("settings.contrast"),
						desc: t("settings.contrast.desc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: settings.highContrast,
							onChange: (v) => update("highContrast", v),
							label: t("settings.contrast")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: Waves,
						title: t("settings.motion"),
						desc: t("settings.motion.desc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: settings.reduceMotion,
							onChange: (v) => update("reduceMotion", v),
							label: t("settings.motion")
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: t("settings.notifications"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: Volume2,
					title: t("settings.sound"),
					desc: t("settings.sound.desc"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						checked: settings.alertSound,
						onChange: (v) => {
							update("alertSound", v);
							if (v) playAlertTone();
						},
						label: t("settings.sound")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: Eye,
					title: t("settings.toasts"),
					desc: t("settings.toasts.desc"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						checked: settings.toastAlerts,
						onChange: (v) => update("toastAlerts", v),
						label: t("settings.toasts")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: t("settings.data"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: RotateCcw,
					title: t("settings.reset"),
					desc: t("settings.reset.desc"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => {
							clearTrustStorage();
							resetTrustLayer();
							resetSettings();
							j.reset();
							toast.success(t("settings.saved"));
							navigate({
								to: j.account?.role === "doctor" ? "/doctor" : "/journey",
								replace: true
							});
						},
						children: t("settings.reset")
					})
				})
			})
		]
	});
}
//#endregion
export { Tag as _, DialogHeader as a, TriageResult as b, JourneyCard as c, ReportDialog as d, ReportStatusTimeline as f, Stat as g, SettingsSection as h, DialogDescription as i, Panel as l, SectionHeading as m, Dialog as n, DialogTitle as o, ReportsSection as p, DialogContent as r, HospitalPanel as s, DashboardShell as t, RailMap as u, Textarea as v, TrustReviewCard as x, TimelineCard as y };
