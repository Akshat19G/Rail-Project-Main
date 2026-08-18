import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useI18n, b as useJourney, d as nextTier, f as useTrust, g as HOSPITALS, l as TIERS, n as playAlertTone, o as EARNING_RULES, r as useSettings, s as REDEEMABLES, v as TRAIN, y as formatCountdown } from "./router-Dwfe-FwJ.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { B as Activity, C as Hospital, E as HeartHandshake, I as Award, O as Gift, P as Check, T as HeartPulse, a as Trophy, c as Ticket, d as Sparkles, f as Siren, h as Settings, i as User, j as Copy, l as Stethoscope, m as ShieldAlert, o as TriangleAlert, p as ShieldCheck, x as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { n as LanguageSwitcher } from "./logo-C6-1l70k.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as Tag, a as DialogHeader, b as TriageResult, c as JourneyCard, d as ReportDialog, g as Stat, h as SettingsSection, i as DialogDescription, l as Panel, m as SectionHeading, n as Dialog, o as DialogTitle, p as ReportsSection, r as DialogContent, s as HospitalPanel, t as DashboardShell, u as RailMap, y as TimelineCard } from "./settings-DgW5l6yk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctor-DVykoL11.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function tierLabel(tier) {
	return TIERS.find((t) => t.tier === tier)?.label.toUpperCase() ?? tier;
}
function fmtDate(at) {
	return new Date(at).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});
}
function RewardsCard({ onOpen }) {
	const { rewards, redeemedRewards } = useTrust();
	const { t } = useI18n();
	const next = nextTier(rewards.points);
	const target = next?.min ?? rewards.points;
	const pct = Math.min(100, Math.round(rewards.points / target * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: t("rewards.title"),
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: tierLabel(rewards.tier) }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-reward-gradient p-5 text-reward-foreground shadow-reward",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-semibold tabular-nums tracking-tight",
						children: rewards.points.toLocaleString()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs opacity-85",
						children: t("rewards.points")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-reward-foreground/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3 w-3" }),
							" ",
							tierLabel(rewards.tier)
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 w-full overflow-hidden rounded-full bg-reward-foreground/25",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full rounded-full bg-reward-foreground",
							initial: { width: 0 },
							animate: { width: `${pct}%` },
							transition: {
								duration: .8,
								ease: "easeOut"
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2.5 text-xs opacity-85",
						children: [
							rewards.points.toLocaleString(),
							" / ",
							target.toLocaleString(),
							next ? ` · ${(target - rewards.points).toLocaleString()} to ${next.label}` : " · highest tier reached"
						]
					})]
				})]
			}),
			redeemedRewards.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs text-muted-foreground",
				children: [
					redeemedRewards.length,
					" reward",
					redeemedRewards.length > 1 ? "s" : "",
					" in your wallet"
				]
			}) : null,
			onOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				className: "mt-4 w-full",
				onClick: onOpen,
				children: t("rewards.store")
			}) : null
		]
	});
}
function RewardsSection() {
	const { rewards, redeem, redeemedRewards } = useTrust();
	const { t } = useI18n();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(null);
	const next = nextTier(rewards.points);
	const target = next?.min ?? rewards.points;
	const pct = Math.min(100, Math.round(rewards.points / target * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: t("rewards.title"),
				description: "Recognition for responsible participation — acknowledging alerts, assessing carefully and escalating when it is clinically appropriate. Points are never awarded for a particular medical decision."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-2xl border border-reward/30 bg-card shadow-elevate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative bg-reward-gradient p-7 text-reward-foreground sm:p-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -right-10 -top-14 h-48 w-48 rounded-full bg-reward-foreground/10",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-20 right-24 h-44 w-44 rounded-full bg-reward-foreground/10",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-wrap items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold uppercase tracking-[0.2em] opacity-80",
									children: t("rewards.balance")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-6xl font-semibold tabular-nums leading-none tracking-tight",
									children: rewards.points.toLocaleString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm opacity-85",
									children: t("rewards.points")
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-reward-foreground/18 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3.5 w-3.5" }),
										" ",
										tierLabel(rewards.tier)
									]
								}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs opacity-85",
									children: [
										(next.min - rewards.points).toLocaleString(),
										" points to ",
										next.label
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs opacity-85",
									children: "Highest tier reached"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mt-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 w-full overflow-hidden rounded-full bg-reward-foreground/25",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "h-full rounded-full bg-reward-foreground",
									initial: { width: 0 },
									animate: { width: `${pct}%` },
									transition: {
										duration: .9,
										ease: "easeOut"
									}
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 border-t border-border p-6 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: rewards.points.toLocaleString(),
							label: "Available points"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(redeemedRewards.length),
							label: "Rewards redeemed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: redeemedRewards.reduce((s, r) => s + r.cost, 0).toLocaleString(),
							label: "Points spent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: tierLabel(rewards.tier),
							label: "Current tier"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: t("rewards.wallet"),
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, { children: [
					redeemedRewards.length,
					" item",
					redeemedRewards.length === 1 ? "" : "s"
				] }),
				children: redeemedRewards.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-dashed border-reward/40 bg-reward-surface p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { className: "mx-auto h-5 w-5 text-reward" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-medium",
							children: "No rewards yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Redeem your points below — everything you claim appears here instantly."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: redeemedRewards.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "rounded-xl border border-reward/35 bg-reward-surface p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-medium",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 text-xs text-muted-foreground",
									children: ["Claimed ", fmtDate(r.at)]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex shrink-0 items-center gap-1 rounded-full bg-reward px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-reward-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }),
									" ",
									t("rewards.redeemed")
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								navigator.clipboard?.writeText(r.code);
								toast.success(`Code ${r.code} copied`);
							},
							className: "mt-4 flex w-full items-center justify-between gap-3 rounded-lg border border-reward/40 bg-card px-3 py-2.5 text-left transition-colors hover:border-reward",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm tracking-wider",
								children: r.code
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5 text-muted-foreground" })]
						})]
					}, r.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: t("rewards.store"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: REDEEMABLES.map((r) => {
						const affordable = rewards.points >= r.cost;
						const owned = redeemedRewards.filter((x) => x.rewardId === r.id).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { y: -2 },
							className: `flex flex-col justify-between rounded-xl border p-5 transition-colors ${affordable ? "border-reward/35 bg-card hover:border-reward" : "border-border bg-card"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-reward-surface text-reward",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4" })
									}), owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded-full border border-reward/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-reward",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }),
											" ",
											t("rewards.redeemed"),
											" ×",
											owned
										]
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-medium",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: r.detail
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between gap-3 border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-sm tabular-nums",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-reward",
										children: r.cost.toLocaleString()
									}), " pts"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									disabled: !affordable,
									onClick: () => setSelected(r),
									className: "bg-reward text-reward-foreground hover:bg-reward/90",
									children: affordable ? t("rewards.redeem") : `Need ${(r.cost - rewards.points).toLocaleString()}`
								})]
							})]
						}, r.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Tiers",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: TIERS.map((tier) => {
							const reached = rewards.points >= tier.min;
							const current = rewards.tier === tier.tier;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `h-1.5 w-1.5 rounded-full ${reached ? "bg-reward" : "bg-border"}`,
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-sm ${current ? "font-medium" : "text-muted-foreground"}`,
										children: tier.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-auto font-mono text-xs text-muted-foreground",
										children: [tier.min, Number.isFinite(tier.max) ? `–${tier.max}` : "+"]
									}),
									current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-reward px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-reward-foreground",
										children: "Current"
									}) : null
								]
							}, tier.tier);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: t("rewards.earn"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3.5",
						children: EARNING_RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start justify-between gap-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 text-muted-foreground",
								children: r.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shrink-0 font-mono text-xs text-reward",
								children: ["+", r.points]
							})]
						}, r.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 border-t border-border pt-4 text-xs text-muted-foreground",
						children: "Participation · Responsiveness · Responsible escalation"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Why respond?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						{
							icon: ShieldCheck,
							title: "Professional recognition",
							body: "Build a verified record of emergency-response participation."
						},
						{
							icon: Sparkles,
							title: "Rewards",
							body: "Earn Rail Chikitsak Points through responsible participation."
						},
						{
							icon: HeartHandshake,
							title: "Real-world impact",
							body: "Help passengers who need immediate assistance while travelling."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4 text-reward" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-medium",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: c.body
							})
						]
					}, c.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: "Responding is always voluntary. Responders are never obligated to accept an emergency."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: t("rewards.activity"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: rewards.history.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-4 py-3 text-sm first:pt-0 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate",
								children: h.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-mono text-[11px] text-muted-foreground",
								children: fmtDate(h.at)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `shrink-0 font-mono text-xs ${h.points > 0 ? "text-accent" : "text-reward"}`,
							children: [h.points > 0 ? "+" : "", h.points]
						})]
					}, h.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!selected,
				onOpenChange: (o) => !o && setSelected(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [
							"Redeem ",
							selected?.cost.toLocaleString(),
							" Rail Chikitsak Points?"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: selected?.name })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border border-reward/35 bg-reward-surface p-4 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Balance after"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono",
									children: [Math.max(0, rewards.points - (selected?.cost ?? 0)).toLocaleString(), " pts"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-2 h-11 w-full bg-reward text-reward-foreground hover:bg-reward/90",
							onClick: () => {
								if (!selected) return;
								const issued = redeem(selected);
								setSelected(null);
								if (issued) {
									setDone(issued);
									toast.success(`${issued.name} added to your rewards`);
								} else toast.error("Not enough points");
							},
							children: "Confirm redemption"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!done,
				onOpenChange: (o) => !o && setDone(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-reward" }), " Redemption successful"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							done?.name,
							" · new balance ",
							rewards.points.toLocaleString(),
							" points."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-reward-gradient p-5 text-reward-foreground shadow-reward",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold uppercase tracking-[0.18em] opacity-85",
								children: "Reward code"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 font-mono text-xl tracking-[0.18em]",
								children: done?.code
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "mt-3 h-10 w-full",
							onClick: () => setDone(null),
							children: "Close"
						})
					]
				})
			})
		]
	});
}
function ImpactCard() {
	const { impact } = useTrust();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Your impact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-6 sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: String(impact.assisted),
					label: "Emergencies assisted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: String(impact.successful),
					label: "Successful responses",
					tone: "accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: String(impact.escalations),
					label: "Hospital escalations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: `${impact.reliability}%`,
					label: "Response reliability"
				})
			]
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
			id: "rewards",
			label: t("nav.rewards"),
			icon: Award
		},
		{
			id: "impact",
			label: t("nav.impact"),
			icon: Activity
		},
		{
			id: "reports",
			label: t("nav.reports"),
			icon: ShieldAlert
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
function DoctorDashboard() {
	const j = useJourney();
	const navigate = useNavigate();
	const { available } = useTrust();
	const { settings } = useSettings();
	const NAV = useNav();
	const [tab, setTab] = (0, import_react.useState)("overview");
	(0, import_react.useEffect)(() => {
		if (!j.authReady) return;
		if (!j.account) navigate({
			to: "/auth",
			replace: true
		});
		else if (j.account.role !== "doctor") navigate({
			to: "/journey",
			replace: true
		});
		else if (j.phase === "idle") j.start();
	}, [j.authReady, j.account]);
	(0, import_react.useEffect)(() => {
		if (j.account?.role !== "doctor" || j.phase !== "running" || j.emergency || !available) return;
		const id = setTimeout(() => {
			j.triggerIncomingEmergency();
			setTab("emergency");
			if (settings.alertSound) playAlertTone();
			if (settings.toastAlerts) toast.error(`Incoming medical emergency on ${TRAIN}`);
		}, 8e3);
		return () => clearTimeout(id);
	}, [
		j.account?.role,
		j.phase,
		j.emergency,
		available
	]);
	if (!j.authReady || j.account?.role !== "doctor") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center text-sm text-muted-foreground",
		children: "Loading…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {
		nav: NAV,
		active: tab,
		onNavigate: setTab,
		workspace: "Responder console",
		status: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvailabilityToggle, {}),
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
					tab === "rewards" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RewardsSection, {}) : null,
					tab === "impact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactTab, {}) : null,
					tab === "reports" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsSection, {}) : null,
					tab === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileTab, {}) : null,
					tab === "settings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSection, {}) : null
				]
			}, tab)
		})
	});
}
function AvailabilityToggle() {
	const { available, setAvailable } = useTrust();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center gap-2.5 text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: available ? "text-accent" : "text-muted-foreground",
			children: available ? "Available" : "Unavailable"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			role: "switch",
			"aria-checked": available,
			"aria-label": "Responder availability",
			onClick: () => {
				const v = !available;
				setAvailable(v);
				toast.message(v ? "You are available for emergencies" : "You will not receive new emergencies");
			},
			className: `relative h-5 w-9 shrink-0 rounded-full border transition-colors ${available ? "border-accent bg-accent" : "border-border bg-muted"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 h-3.5 w-3.5 rounded-full bg-background transition-all ${available ? "left-[1.15rem]" : "left-0.5"}` })
		})]
	});
}
function OverviewTab({ onNavigate }) {
	const j = useJourney();
	const a = j.account;
	const { available, impact } = useTrust();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: "Responder console"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1.5 font-display text-3xl font-semibold tracking-tight",
						children: a.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-sm text-muted-foreground",
						children: [
							a.specialization,
							" · coach ",
							a.coach,
							" · seat ",
							a.seat
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
					tone: available ? "accent" : "muted",
					children: available ? "On duty" : "Off duty"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Response performance",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-6 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(impact.assisted),
							label: "Emergencies assisted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: `${impact.reliability}%`,
							label: "Reliability",
							tone: "accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(impact.escalations),
							label: "Hospital escalations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(impact.successful),
							label: "Successful outcomes",
							tone: "accent"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyCard, {
				coach: a.coach,
				seat: a.seat,
				label: "On duty aboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [j.emergency ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: "Active emergency",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: "critical",
							children: "Action required"
						}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-xl font-semibold tracking-tight",
								children: [
									j.emergency.symptoms,
									" · coach ",
									j.emergency.coach
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1.5 text-sm text-muted-foreground",
								children: [
									"Case ",
									j.emergency.id,
									" · halted at ",
									j.emergency.station
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-5",
								onClick: () => onNavigate("emergency"),
								children: "Open emergency"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdleCard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailMap, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RewardsCard, { onOpen: () => onNavigate("rewards") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactCard, {})]
				})]
			})
		]
	});
}
function IdleCard() {
	const { available } = useTrust();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid h-11 w-11 place-items-center rounded-lg bg-accent/12 text-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-xl font-semibold tracking-tight",
				children: "No active emergencies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-md text-sm text-muted-foreground",
				children: available ? `You are marked available on ${TRAIN}. A passenger SOS appears here instantly with a 2-minute response window.` : "You are off duty. Turn availability on to receive incoming emergencies."
			})
		]
	}) });
}
function EmergencyTab() {
	if (!useJourney().emergency) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "Emergency",
			description: "Incoming passenger emergencies appear here automatically."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdleCard, {})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyConsole, {});
}
function EmergencyConsole() {
	const em = useJourney().emergency;
	const hospital = HOSPITALS[em.hospitalStation];
	const [reportOpen, setReportOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-xl border border-critical/35 bg-card shadow-emergency",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-critical px-6 py-5 text-on-priority",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium uppercase tracking-[0.2em] opacity-80",
							children: "Incoming"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-3xl font-semibold tracking-tight",
							children: "Medical emergency"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 text-sm opacity-90",
							children: [
								em.symptoms,
								" · reported in coach ",
								em.coach
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-6",
					children: [
						["Emergency ID", em.id],
						["Train", TRAIN],
						["Passenger", em.passenger],
						["Age", em.age ? `${em.age} yrs` : "Not known"],
						["Coach", em.coach],
						["Seat", em.seat],
						["Halted at", em.station],
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						em.doctorStatus === "PENDING" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponseWindow, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponseOutcome, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriageResult, {}),
						em.doctorStatus === "ACCEPTED" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentPanel, {}) : null,
						em.assessment === "MONITOR" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitoringPanel, {}) : null,
						em.hospitalStatus === "ALERTED" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HospitalPanel, { hospital }) : null,
						em.doctorStatus === "ACCEPTED" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							title: "Case integrity",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "If you believe this emergency request was intentionally false or abusive, report it for review. Reports never penalise a passenger automatically."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "mt-5 gap-2",
								onClick: () => setReportOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4" }), " Report misuse"]
							})]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineCard, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportDialog, {
				emergencyId: em.id,
				reporterRole: "doctor",
				open: reportOpen,
				onOpenChange: setReportOpen,
				onSubmitted: () => toast.success("Report submitted — Rail Chikitsak Trust will review this case")
			})
		]
	});
}
function ResponseWindow() {
	const j = useJourney();
	const { earnPoints } = useTrust();
	const em = j.emergency;
	const urgent = em.countdown <= 30;
	const pct = em.countdown / 120 * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `rounded-xl border p-6 transition-colors ${urgent ? "border-critical/50 bg-critical/6" : "border-border bg-card"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground",
							children: "Response window"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Please respond within 2 minutes."
						}),
						urgent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 inline-flex items-center gap-2 rounded-lg border border-critical/40 bg-critical/10 px-3 py-1.5 text-sm font-medium text-critical",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }), " Response window ending"]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					animate: urgent ? { scale: [
						1,
						1.04,
						1
					] } : { scale: 1 },
					transition: {
						repeat: urgent ? Infinity : 0,
						duration: 1
					},
					className: `shrink-0 font-display text-5xl font-semibold tabular-nums tracking-tight sm:text-6xl ${urgent ? "text-critical" : ""}`,
					children: formatCountdown(em.countdown)
				}, urgent ? "urgent" : "calm")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: `h-full rounded-full ${urgent ? "bg-critical" : "bg-accent"}`,
					animate: { width: `${pct}%` },
					transition: { duration: .4 }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "h-12 flex-1 gap-2 bg-accent text-base text-accent-foreground hover:bg-accent/90 sm:flex-none sm:px-10",
					onClick: () => {
						j.acceptEmergency();
						earnPoints("Emergency accepted", 50);
						toast.success("Emergency accepted · +50 Rail Chikitsak Points");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4" }), " Accept emergency"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "h-12 flex-1 text-base sm:flex-none sm:px-10",
					onClick: j.declineEmergency,
					children: "Decline"
				})]
			})
		]
	});
}
function ResponseOutcome() {
	const em = useJourney().emergency;
	const accepted = em.doctorStatus === "ACCEPTED";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `rounded-xl border p-6 ${accepted ? "border-accent/40 bg-accent/8" : "border-critical/40 bg-critical/6"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground",
				children: "Doctor response"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-1 font-display text-2xl font-semibold ${accepted ? "text-accent" : "text-critical"}`,
				children: accepted ? "Emergency accepted" : em.doctorStatus === "DECLINED" ? "Declined — escalated" : "No response"
			}),
			!accepted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Automatic hospital escalation triggered."
			}) : null
		]
	});
}
var CHOICES = [
	{
		id: "HOSPITAL",
		label: "Hospital required",
		hint: "Hospital team prepares at the halt station."
	},
	{
		id: "MONITOR",
		label: "Monitor / first aid",
		hint: "No hospital escalation; monitoring onboard."
	},
	{
		id: "CRITICAL",
		label: "Critical — immediate response",
		hint: "Immediate hospital and ambulance response."
	}
];
function AssessmentPanel() {
	const j = useJourney();
	const { earnPoints } = useTrust();
	if (j.emergency.assessment) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Medical assessment",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Does the passenger require hospital assistance?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid gap-3 lg:grid-cols-3",
			children: CHOICES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					j.setAssessment(c.id);
					earnPoints("Assessment completed", 30);
				},
				className: "rounded-lg border border-border px-4 py-4 text-left transition-colors hover:border-foreground/25 hover:bg-muted/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: c.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: c.hint
				})]
			}, c.id))
		})]
	});
}
function MonitoringPanel() {
	const j = useJourney();
	const escalated = j.emergency.hospitalStatus === "ALERTED";
	const steps = [
		"SOS received",
		"AI triage completed",
		"Doctor accepted",
		"Medical assessment completed",
		"First aid / monitoring recommended",
		...escalated ? ["Condition worsened — hospital called"] : []
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-medium/40 bg-medium/8 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl font-semibold",
				children: escalated ? "Escalated from monitoring" : "Patient under monitoring"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2 text-sm",
				children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 shrink-0 text-accent" }),
						" ",
						s
					]
				}, s))
			}),
			escalated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				tone: "critical",
				children: "Hospital alerted"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-lg border border-border bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "If the condition worsens during monitoring, escalate to the hospital at the halt station."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-3 h-11 gap-2 bg-critical px-6 text-on-priority hover:bg-critical/90",
					onClick: () => {
						j.escalateAfterMonitoring();
						toast.error("Hospital alerted — condition worsened during monitoring");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hospital, { className: "h-4 w-4" }), " Call hospital"]
				})]
			})
		]
	});
}
function ImpactTab() {
	const { impact, rewards } = useTrust();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Your impact",
				description: "A record of the emergencies you responded to aboard Rail Chikitsak services."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-8 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(impact.assisted),
						label: "Emergencies assisted"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `${impact.reliability}%`,
						label: "Reliability",
						tone: "accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(impact.escalations),
						label: "Hospital escalations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(impact.successful),
						label: "Successful outcomes",
						tone: "accent"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactCard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Recognition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl font-semibold tracking-tight",
						children: [rewards.points, " points"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm text-muted-foreground",
						children: "Points recognise verified responses. They are a recognition programme, never a payment for medical care."
					})]
				})]
			})
		]
	});
}
function ProfileTab() {
	const a = useJourney().account;
	const { available, impact } = useTrust();
	const { t: ti } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Profile",
				description: "Your responder identity shown to passengers during an emergency."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Responder",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
					tone: available ? "accent" : "muted",
					children: available ? "Available" : "Off duty"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-3",
					children: [
						["Name", a.name],
						["Specialization", a.specialization ?? "—"],
						["Mobile", a.mobile],
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
				title: "Availability",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Only available responders receive incoming emergencies. You can change this at any time."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvailabilityToggle, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedeemedRewardsPanel, {}),
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
				title: "Standing",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-6 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(impact.assisted),
							label: "Responses"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: `${impact.reliability}%`,
							label: "Reliability",
							tone: "accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(impact.escalations),
							label: "Escalations"
						})
					]
				})
			})
		]
	});
}
function RedeemedRewardsPanel() {
	const { redeemedRewards } = useTrust();
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: t("profile.rewards"),
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
			tone: redeemedRewards.length ? "accent" : "muted",
			children: redeemedRewards.length
		}),
		children: redeemedRewards.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: t("profile.rewards.empty")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3 sm:grid-cols-2",
			children: redeemedRewards.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3 rounded-lg border border-reward/35 bg-reward-surface px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-sm font-medium",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-mono text-[11px] tracking-wider text-muted-foreground",
						children: r.code
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "shrink-0 font-mono text-xs text-reward",
					children: ["-", r.cost]
				})]
			}, r.id))
		})
	});
}
//#endregion
export { DoctorDashboard as component };
