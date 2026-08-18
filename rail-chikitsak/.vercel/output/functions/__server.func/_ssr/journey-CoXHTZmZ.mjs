import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useI18n, b as useJourney, f as useTrust, g as HOSPITALS, h as EMERGENCY_TYPES, v as TRAIN } from "./router-Dwfe-FwJ.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { N as Clock, P as Check, f as Siren, h as Settings, i as User, o as TriangleAlert, p as ShieldCheck, u as Star, w as History, x as LayoutDashboard, y as MessageSquareHeart } from "../_libs/lucide-react.mjs";
import { n as LanguageSwitcher } from "./logo-C6-1l70k.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as Tag, a as DialogHeader, b as TriageResult, c as JourneyCard, d as ReportDialog, f as ReportStatusTimeline, g as Stat, h as SettingsSection, i as DialogDescription, l as Panel, m as SectionHeading, n as Dialog, o as DialogTitle, p as ReportsSection, r as DialogContent, s as HospitalPanel, t as DashboardShell, u as RailMap, v as Textarea, x as TrustReviewCard, y as TimelineCard } from "./settings-DgW5l6yk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journey-CoXHTZmZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MAX_TRUST = 1e3;
function TrustBadge() {
	const { trust } = useTrust();
	const tone = trust.status === "Good Standing" ? "accent" : trust.status === "Warning" ? "warning" : "critical";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		tone,
		children: trust.status
	});
}
function TrustCard({ onOpen }) {
	const { trust } = useTrust();
	const pct = Math.round(trust.score / MAX_TRUST * 100);
	const warning = trust.status !== "Good Standing";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Rail Chikitsak Trust",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadge, {}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 6
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: `font-display text-4xl font-semibold tabular-nums tracking-tight ${warning ? "text-high" : ""}`,
					children: trust.score
				}, trust.score), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "pb-1.5 text-sm text-muted-foreground",
					children: ["/ ", MAX_TRUST]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: `h-full rounded-full ${warning ? "bg-high" : "bg-accent"}`,
					animate: { width: `${pct}%` },
					transition: {
						duration: .7,
						ease: "easeOut"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: "Rail Chikitsak Trust helps maintain a reliable emergency-response network."
			}),
			onOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				className: "mt-5 w-full",
				onClick: onOpen,
				children: "View trust"
			}) : null
		]
	});
}
function TrustSection() {
	const { trust, reports } = useTrust();
	const warning = trust.status !== "Good Standing";
	const verified = reports.filter((r) => r.status === "VERIFIED");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Rail Chikitsak Trust",
				description: "A reliability record for the emergency-response network. Nothing changes here unless a report has been reviewed and verified."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: `font-display text-6xl font-semibold tabular-nums tracking-tight ${warning ? "text-high" : ""}`,
						children: trust.score
					}, trust.score), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "pb-2 text-sm text-muted-foreground",
						children: ["/ ", MAX_TRUST]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 flex items-center gap-2 text-sm",
					children: [warning ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-high" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-accent" }), trust.status]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(trust.emergencyRequests),
							label: "Emergency requests"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(trust.verifiedIncidents),
							label: "Verified misuse",
							tone: trust.verifiedIncidents ? "critical" : "default"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(trust.successfulResponses),
							label: "Successful responses",
							tone: "accent"
						})
					]
				})]
			}) }),
			warning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Account trust",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
					tone: "warning",
					children: "Warning issued"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Emergency misuse record"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm text-muted-foreground",
						children: "A previous emergency request was determined to be invalid in the review. A warning has been issued and 100 trust points were deducted. Your account remains active and SOS stays available."
					}),
					verified[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 border-t border-border pt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportStatusTimeline, { report: verified[0] })
					}) : null
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "How trust changes",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-4 text-sm",
					children: [
						["First verified misuse", "Warning issued and a small trust deduction."],
						["Repeated verified misuse", "Temporary SOS restriction while the account is reviewed."],
						["Severe or repeated abuse", "Full account review by the Rail Chikitsak trust team."]
					].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-border font-mono text-[10px]",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-muted-foreground",
							children: body
						})] })]
					}, title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 border-t border-border pt-4 text-xs text-muted-foreground",
					children: "An unverified report never results in an automatic penalty."
				})]
			})
		]
	});
}
var RATINGS = [
	"Excellent assistance",
	"Helpful",
	"Neutral",
	"Concern"
];
function FeedbackDialog({ emergencyId, open, onOpenChange, onConcern }) {
	const { addFeedback } = useTrust();
	const [rating, setRating] = (0, import_react.useState)("Excellent assistance");
	const [note, setNote] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Provide feedback" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				"How was the response to emergency ",
				emergencyId,
				"?"
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: RATINGS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setRating(r),
							className: `flex w-full items-center gap-2.5 rounded-md border px-3.5 py-2.5 text-left text-sm transition-colors ${rating === r ? "border-foreground/30 bg-muted" : "border-border hover:bg-muted/50"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3.5 w-3.5 ${rating === r ? "text-accent" : "text-muted-foreground"}` }), r]
						}, r))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 3,
						value: note,
						onChange: (e) => setNote(e.target.value),
						placeholder: "Optional note"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "h-11 w-full",
						onClick: () => {
							addFeedback({
								emergencyId,
								rating,
								note
							});
							onOpenChange(false);
							if (rating === "Concern") onConcern?.();
						},
						children: "Submit feedback"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Serious concerns are routed through review before any responder action is taken."
					})
				]
			})]
		})
	});
}
function useNav() {
	const { t } = useI18n();
	return [
		{
			id: "overview",
			label: t("nav.overview"),
			icon: LayoutDashboard
		},
		{
			id: "emergency",
			label: t("nav.emergency"),
			icon: Siren
		},
		{
			id: "trust",
			label: t("nav.trust"),
			icon: ShieldCheck
		},
		{
			id: "history",
			label: t("nav.history"),
			icon: History
		},
		{
			id: "feedback",
			label: "Feedback",
			icon: MessageSquareHeart
		},
		{
			id: "profile",
			label: t("nav.profile"),
			icon: User
		},
		{
			id: "settings",
			label: t("nav.settings"),
			icon: Settings
		}
	];
}
function PassengerDashboard() {
	const j = useJourney();
	const navigate = useNavigate();
	const NAV = useNav();
	const [tab, setTab] = (0, import_react.useState)("overview");
	(0, import_react.useEffect)(() => {
		if (!j.authReady) return;
		if (!j.account) navigate({
			to: "/auth",
			replace: true
		});
		else if (j.account.role !== "passenger") navigate({
			to: "/doctor",
			replace: true
		});
		else if (j.phase === "idle") j.start();
	}, [j.authReady, j.account]);
	(0, import_react.useEffect)(() => {
		if (j.phase === "emergency") setTab("emergency");
	}, [j.phase]);
	if (!j.authReady || j.account?.role !== "passenger") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center text-sm text-muted-foreground",
		children: "Loading…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {
		nav: NAV,
		active: tab,
		onNavigate: setTab,
		workspace: "Passenger console",
		status: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadge, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: { opacity: 0 },
				children: [
					tab === "overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewTab, { onNavigate: setTab }) : null,
					tab === "emergency" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyTab, {}) : null,
					tab === "trust" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustSection, {}) : null,
					tab === "history" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryTab, {}) : null,
					tab === "feedback" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedbackTab, {}) : null,
					tab === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileTab, {}) : null,
					tab === "settings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSection, {}) : null
				]
			}, tab)
		})
	});
}
function OverviewTab({ onNavigate }) {
	const j = useJourney();
	const a = j.account;
	if (j.phase === "completed") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyCompleted, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
					children: ["Good journey, ", a.name.split(" ")[0]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1.5 font-display text-3xl font-semibold tracking-tight",
					children: "You are travelling safely"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 max-w-2xl text-sm text-muted-foreground",
					children: "Rail Chikitsak is watching your route and knows the nearest medical facility at every point of the journey."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyCard, {
				coach: a.coach,
				seat: a.seat
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SosCard, { onOpenEmergency: () => onNavigate("emergency") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailMap, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustCard, { onOpen: () => onNavigate("trust") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: "Nearest medical support",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: HOSPITALS[j.currentStation].name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: ["Linked to ", j.currentStation]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-mono text-xs text-muted-foreground",
								children: HOSPITALS[j.currentStation].contact
							})
						]
					})]
				})]
			})
		]
	});
}
function SosCard({ onOpenEmergency }) {
	const j = useJourney();
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden rounded-xl border border-critical/25 bg-card p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--prio-critical)_10%,transparent),transparent_70%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground",
						children: "One tap. The response starts."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setConfirm(true),
						className: "pulse-critical mx-auto mt-6 flex h-24 w-full max-w-lg items-center justify-center gap-3 rounded-xl bg-critical text-2xl font-semibold tracking-tight text-on-priority shadow-emergency transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "h-7 w-7" }), " MEDICAL SOS"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "Tap if you need immediate medical assistance."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: confirm,
				onOpenChange: setConfirm,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-2xl",
						children: "Medical emergency?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "The train will stop at the current station and Rail Chikitsak will alert onboard doctors and the nearest hospital." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "h-12 w-full bg-critical text-base text-on-priority hover:bg-critical/90",
							onClick: () => {
								setConfirm(false);
								j.triggerSos();
								onOpenEmergency();
								toast.error("SOS activated — train stopping at the current station");
							},
							children: "Yes, I need help"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "h-11 w-full",
							onClick: () => setConfirm(false),
							children: "Cancel"
						})]
					})]
				})
			})
		]
	});
}
function EmergencyTab() {
	if (!useJourney().emergency) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "Emergency",
			description: "No active emergency. Raise a medical SOS and Rail Chikitsak alerts onboard doctors and the nearest hospital."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SosCard, { onOpenEmergency: () => void 0 })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyScreen, {});
}
function EmergencyScreen() {
	const j = useJourney();
	const { trust } = useTrust();
	const em = j.emergency;
	const hospital = HOSPITALS[em.hospitalStation];
	const [feedbackOpen, setFeedbackOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-xl border border-critical/35 bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-critical px-6 py-5 text-on-priority",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium uppercase tracking-[0.2em] opacity-80",
							children: "Medical emergency active"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-3xl font-semibold tracking-tight",
							children: em.hospitalStatus === "ALERTED" ? "Medical help alerted" : "Emergency response in progress"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 text-sm opacity-90",
							children: [
								"The train has stopped at ",
								em.station,
								". Your seat location is shared with responders."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-6",
					children: [
						["Emergency ID", em.id],
						["Train", TRAIN],
						["Halted at", em.station],
						["Coach", em.coach],
						["Seat", em.seat],
						["Passenger", em.passenger],
						...em.forSelf ? [] : [["Reported by", `${em.reportedBy}${em.relation ? ` · ${em.relation}` : ""}`]]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 bg-card px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 truncate font-medium",
							children: v
						})]
					}, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailMap, {}),
			em.stage === "form" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyForm, {}) : null,
			em.stage === "triage" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriageAnimation, {}) : null,
			em.stage === "response" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPanel, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalmAssistant, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RespondersCard, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriageResult, {}),
						em.hospitalStatus === "ALERTED" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HospitalPanel, { hospital }) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineCard, {})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineCard, {}),
			trust.status !== "Good Standing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Account trust",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
					tone: "warning",
					children: "Warning issued"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "A previous request was verified as misuse. Your SOS is still available — please use it only for genuine medical emergencies."
				})
			}) : null,
			em.stage === "response" && (em.hospitalStatus === "ALERTED" || em.doctorStatus === "ACCEPTED") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "h-11 px-6",
					onClick: () => setFeedbackOpen(true),
					children: "Give feedback"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "h-11 px-8",
					onClick: () => {
						j.resumeJourney();
						toast.success("Train cleared to resume — logged in your emergency history");
					},
					children: "Resume journey"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedbackDialog, {
				emergencyId: em.id,
				open: feedbackOpen,
				onOpenChange: setFeedbackOpen
			})
		]
	});
}
function StatusPanel() {
	const em = useJourney().emergency;
	const response = em.hospitalStatus === "ALERTED" ? em.escalationReason ?? "Hospital alerted." : em.doctorStatus === "ACCEPTED" && em.respondingDoctor ? `${em.respondingDoctor.name} · ${em.respondingDoctor.specialization} is on the way from coach ${em.respondingDoctor.coach}.` : `Alerting ${em.notifiedDoctors.length} onboard doctors…`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-border bg-navy p-6 text-navy-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-medium uppercase tracking-[0.2em] text-navy-foreground/60",
				children: "Live status"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-5 grid grid-cols-2 gap-y-5 sm:grid-cols-4",
				children: [
					["Train", "Halted"],
					["Halted at", em.station],
					["AI priority", em.priority ?? "—"],
					["Doctor", em.doctorStatus === "ACCEPTED" ? em.respondingDoctor?.name ?? "Accepted" : em.doctorStatus === "PENDING" ? "Notified…" : em.doctorStatus === "DECLINED" ? "Declined" : "No response"]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[10px] uppercase tracking-[0.16em] text-navy-foreground/55",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-0.5 truncate font-display text-lg font-semibold",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 border-t border-navy-foreground/15 pt-4 text-sm text-navy-foreground/80",
				children: response
			})
		]
	});
}
function EmergencyForm() {
	const j = useJourney();
	const a = j.account;
	const [typeId, setTypeId] = (0, import_react.useState)("chest");
	const [symptoms, setSymptoms] = (0, import_react.useState)("");
	const [forSelf, setForSelf] = (0, import_react.useState)(true);
	const [otherName, setOtherName] = (0, import_react.useState)("");
	const [otherAge, setOtherAge] = (0, import_react.useState)("");
	const [otherCoach, setOtherCoach] = (0, import_react.useState)(a.coach);
	const [otherSeat, setOtherSeat] = (0, import_react.useState)("");
	const [relation, setRelation] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Tell us what is happening",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "A few quick details help Rail Chikitsak prioritise the response."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
				children: "Who needs help?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setForSelf(true),
					className: `rounded-lg border px-4 py-3.5 text-left transition-colors ${forSelf ? "border-critical bg-critical/8" : "border-border hover:bg-muted/50"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-medium",
						children: "Myself"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-xs text-muted-foreground",
						children: [
							a.name,
							" · coach ",
							a.coach,
							", seat ",
							a.seat
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setForSelf(false),
					className: `rounded-lg border px-4 py-3.5 text-left transition-colors ${!forSelf ? "border-critical bg-critical/8" : "border-border hover:bg-muted/50"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-medium",
						children: "Someone else"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted-foreground",
						children: "Raise this SOS for another passenger who cannot use the app"
					})]
				})]
			}),
			!forSelf ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 rounded-lg border border-border bg-muted/40 p-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "other-name",
							className: "text-sm font-medium",
							children: "Passenger name (if known)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "other-name",
							value: otherName,
							onChange: (e) => setOtherName(e.target.value),
							placeholder: "e.g. Elderly man in the next bay"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "other-age",
							className: "text-sm font-medium",
							children: "Approx. age"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "other-age",
							inputMode: "numeric",
							value: otherAge,
							onChange: (e) => setOtherAge(e.target.value),
							placeholder: "e.g. 60"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "other-relation",
							className: "text-sm font-medium",
							children: "Your relation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "other-relation",
							value: relation,
							onChange: (e) => setRelation(e.target.value),
							placeholder: "Co-passenger / family"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "other-coach",
							className: "text-sm font-medium",
							children: "Their coach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "other-coach",
							value: otherCoach,
							onChange: (e) => setOtherCoach(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "other-seat",
							className: "text-sm font-medium",
							children: "Their seat"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "other-seat",
							value: otherSeat,
							onChange: (e) => setOtherSeat(e.target.value),
							placeholder: "e.g. 44"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground sm:col-span-2",
						children: "Responders will be sent to this location and will know you raised the alert."
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
				children: "Emergency type"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: EMERGENCY_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setTypeId(t.id),
					className: `flex items-center gap-3 rounded-lg border px-4 py-3.5 text-left transition-colors ${typeId === t.id ? "border-critical bg-critical/8" : "border-border hover:bg-muted/50"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: t.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: t.label
					})]
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "symptoms",
					className: "text-sm font-medium",
					children: "Symptoms"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "symptoms",
					rows: 3,
					value: symptoms,
					onChange: (e) => setSymptoms(e.target.value),
					placeholder: "Describe what the passenger is experiencing"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5 h-12 w-full bg-critical text-base text-on-priority hover:bg-critical/90 sm:w-auto sm:px-10",
				onClick: () => j.submitEmergency({
					typeId,
					symptoms: symptoms || "Chest pain and breathlessness",
					patient: {
						forSelf,
						name: otherName,
						...Number(otherAge) ? { age: Number(otherAge) } : {},
						coach: otherCoach,
						seat: otherSeat,
						relation
					}
				}),
				children: "Submit emergency"
			})
		]
	});
}
var TRIAGE_STEPS = [
	"Processing emergency report",
	"Evaluating symptoms",
	"Determining priority",
	"Preparing response"
];
function TriageAnimation() {
	const [step, setStep] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setStep((s) => Math.min(s + 1, TRIAGE_STEPS.length)), 620);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-border bg-navy p-8 text-navy-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-medium uppercase tracking-[0.2em] text-navy-foreground/60",
				children: "Rail Chikitsak"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl font-semibold",
				children: "Analysing emergency information…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: TRIAGE_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 text-sm",
					children: [i < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3.5 w-3.5 animate-pulse rounded-full border border-navy-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: i < step ? "" : "text-navy-foreground/55",
						children: s
					})]
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 h-1 w-full overflow-hidden rounded-full bg-navy-foreground/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-accent",
					animate: { width: `${step / TRIAGE_STEPS.length * 100}%` },
					transition: { duration: .4 }
				})
			})
		]
	});
}
var CALM_LINES = [
	"I'm Asha, your Rail Chikitsak care companion. I'm right here with you.",
	"Breathe in slowly for 4 seconds… hold… and out for 6. Let's do that together.",
	"Help is already moving. You don't have to do anything except stay comfortable.",
	"Loosen tight clothing, stay seated and keep your head supported.",
	"If someone is nearby, ask them to stay with you until the responder arrives.",
	"You're doing well. Every second counts and every one of them is being used."
];
function CalmAssistant() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setI((n) => (n + 1) % CALM_LINES.length), 4200);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-hidden rounded-xl border border-accent/30 bg-accent/6 p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/15 text-xl",
				children: "👩‍⚕️"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground",
						children: "Asha · Rail Chikitsak calm assistant"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -6
							},
							className: "mt-2 font-display text-lg leading-snug",
							children: CALM_LINES[i]
						}, i)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[11px] text-muted-foreground",
						children: "Guided reassurance only — it does not replace medical advice."
					})
				]
			})]
		})
	});
}
function RespondersCard() {
	const em = useJourney().emergency;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Onboard responders alerted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: em.notifiedDoctors.map((d) => {
				const accepted = em.respondingDoctor?.name === d.name;
				const noneAvailable = em.doctorStatus === "NO_RESPONSE" || em.doctorStatus === "DECLINED";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-medium",
							children: d.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block truncate text-xs text-muted-foreground",
							children: [
								d.specialization,
								" · coach ",
								d.coach,
								" · seat ",
								d.seat
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						tone: accepted ? "accent" : noneAvailable ? "critical" : "muted",
						children: accepted ? "Responding" : noneAvailable ? "Unavailable" : "Notified"
					})]
				}, d.name);
			})
		})
	});
}
function HistoryTab() {
	const j = useJourney();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "Emergency history",
			description: "Every medical SOS raised from your Rail Chikitsak account."
		}), j.history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mx-auto h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "No emergencies recorded yet."
			})]
		}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				className: "text-muted-foreground",
				onClick: j.clearHistory,
				children: "Clear"
			}),
			title: "Records",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border",
				children: j.history.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: new Date(r.at).toLocaleString("en-GB", { hour12: false })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate font-medium",
								children: [
									r.type,
									" · ",
									r.station
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate text-xs text-muted-foreground",
								children: [r.doctor ? `Attended by ${r.doctor}` : "No onboard doctor", r.hospital ? ` · ${r.hospital}` : ""]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
							tone: r.priority === "CRITICAL" || r.priority === "HIGH" ? "critical" : "muted",
							children: [
								r.priority,
								" · ",
								r.outcome
							]
						})
					]
				}, r.id))
			})
		})]
	});
}
function FeedbackTab() {
	const { feedback, reports } = useTrust();
	const j = useJourney();
	const [reportOpen, setReportOpen] = (0, import_react.useState)(false);
	const lastCase = j.emergency?.id ?? j.history[0]?.id ?? "RC-EMG-0000";
	const activeReview = (0, import_react.useMemo)(() => reports.find((r) => r.reporterRole === "passenger" && (r.status === "SUBMITTED" || r.status === "UNDER_REVIEW")), [reports]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Feedback & reports",
				description: "Share how a response went, or raise a concern. Concerns are reviewed before any action is taken."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Raise a concern",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "If a response was inappropriate or unprofessional, report the case for review."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "mt-5 w-full",
						onClick: () => setReportOpen(true),
						children: "Report an issue"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Your feedback",
					children: feedback.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No feedback submitted yet."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: feedback.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-b border-border pb-3 text-sm last:border-0 last:pb-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: f.rating
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										f.emergencyId,
										" · ",
										new Date(f.at).toLocaleDateString("en-GB")
									]
								}),
								f.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-muted-foreground",
									children: f.note
								}) : null
							]
						}, f.id))
					})
				})]
			}),
			activeReview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustReviewCard, { report: activeReview }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportDialog, {
				emergencyId: lastCase,
				reporterRole: "passenger",
				open: reportOpen,
				onOpenChange: setReportOpen,
				onSubmitted: () => toast.success("Report submitted — it is now under review")
			})
		]
	});
}
function ProfileTab() {
	const a = useJourney().account;
	const { trust } = useTrust();
	const { t: ti } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Profile",
				description: "Medical details shared with responders during an emergency."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Passenger",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-3",
					children: [
						["Name", a.name],
						["Age", a.age ? String(a.age) : "—"],
						["Blood group", a.bloodGroup ?? "—"],
						["Mobile", a.mobile],
						["Emergency contact", a.emergencyContact ?? "—"],
						["Allergies", a.allergies ?? "None recorded"],
						["Train", TRAIN],
						["Coach", a.coach],
						["Seat", a.seat]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 truncate text-sm font-medium",
							children: v
						})]
					}, k))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: ti("lang.label"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: ti("settings.language.desc")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Account standing",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadge, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(trust.score),
							label: "Trust score"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(trust.emergencyRequests),
							label: "Emergency requests"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(trust.successfulResponses),
							label: "Successful responses",
							tone: "accent"
						})
					]
				})
			})
		]
	});
}
function JourneyCompleted() {
	const j = useJourney();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		className: "mx-auto max-w-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						scale: .7,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: {
						type: "spring",
						stiffness: 220,
						damping: 16
					},
					className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-display text-3xl font-semibold tracking-tight",
					children: "Journey completed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-muted-foreground",
					children: "You have reached Mumbai Central safely."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-8 h-11 px-8",
					onClick: j.start,
					children: "Start new journey"
				})
			]
		})
	});
}
//#endregion
export { PassengerDashboard as component };
