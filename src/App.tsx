import { useState, useEffect, useRef } from "react";
import {
  Box, Typography, Button,
  AppBar, Toolbar, Link, Chip,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";
import type { Lang } from "./i18n/translations";
import { translations } from "./i18n/translations";
import PhoneMockup from "./components/PhoneMockup";

const INK = "#11130f";
const PAPER = "#fffaf0";
const PANEL = "#f5f2e8";
const TEAL = "#008f86";
const TEAL_DEEP = "#006960";
const LIME = "#b7f462";
const AMBER = "#f2a33a";
const LINE = "#c9c1af";
const MUTED = "#6f716b";

const theme = createTheme({
  palette: { mode: "light", primary: { main: TEAL }, background: { default: PAPER } },
  typography: { fontFamily: '"Inter", sans-serif' },
  components: {
    MuiCssBaseline: { styleOverrides: { body: { background: PAPER } } },
  },
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <Box ref={ref} sx={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: `opacity .5s ease ${delay}ms, transform .5s ease ${delay}ms` }}>
      {children}
    </Box>
  );
}

function SectionLabel({ children, light = false, sx }: { children: React.ReactNode; light?: boolean; sx?: SxProps<Theme> }) {
  return (
    <Box sx={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "IBM Plex Mono", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: light ? LIME : TEAL_DEEP, mb: 2,
      "&::before": { content: '""', width: 24, height: 2, background: light ? LIME : TEAL, flexShrink: 0 }, ...sx }}>
      {children}
    </Box>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("de");
  const t = translations[lang];

  const FEAT_ICONS = ["🔒", "📵", "📞", "👥", "⏱", "🔑"];
  const FEAT_COLORS = ["rgba(0,143,134,.2)", "rgba(183,244,98,.15)", "rgba(242,163,58,.18)", "rgba(49,111,189,.2)", "rgba(217,72,65,.18)", "rgba(183,244,98,.15)"];
  const STEP_COLORS = [TEAL, AMBER, LIME, "#316fbd"];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: PAPER, color: INK, overflowX: "hidden" }}>

        {/* ── NAV ── */}
        <AppBar position="fixed" elevation={0} sx={{ background: "rgba(255,250,240,.88)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${LINE}`, color: INK }}>
          <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "11px", textDecoration: "none", color: INK }} component="a" href="#">
              <Box sx={{ width: 36, height: 36, background: INK, borderRadius: "9px", display: "grid", placeItems: "center", color: PAPER, fontFamily: "IBM Plex Mono", fontWeight: 700, fontSize: "16px", boxShadow: `4px 4px 0 ${LIME}` }}>P</Box>
              <Typography sx={{ fontFamily: "Space Grotesk", fontSize: "20px", fontWeight: 700, color: INK }}>Pingly</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
                {[t.nav.features, t.nav.security, t.nav.how].map((label, i) => (
                  <Link key={i} href={["#features","#security","#how"][i]} underline="none" sx={{ color: MUTED, fontSize: "14px", fontWeight: 500, "&:hover": { color: INK }, transition: "color .15s" }}>{label}</Link>
                ))}
              </Box>

              {/* Lang toggle */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "2px", background: "rgba(17,19,15,.08)", borderRadius: "9px", p: "3px" }}>
                {(["de","en"] as Lang[]).map(l => (
                  <Box key={l} onClick={() => setLang(l)} sx={{ px: "10px", py: "5px", borderRadius: "7px", fontFamily: "IBM Plex Mono", fontSize: "12px", fontWeight: 700, cursor: "pointer", background: lang === l ? INK : "transparent", color: lang === l ? PAPER : MUTED, transition: "background .15s, color .15s", userSelect: "none" }}>
                    {l === "de" ? "DE" : "EN"}
                  </Box>
                ))}
              </Box>

              <Button href="#download" variant="contained" size="small" sx={{ background: INK, color: PAPER, borderRadius: "9px", fontWeight: 600, boxShadow: `3px 3px 0 ${LIME}`, textTransform: "none", display: { xs: "none", sm: "flex" }, "&:hover": { background: INK, transform: "translate(-1px,-1px)", boxShadow: `4px 4px 0 ${LIME}` }, transition: "transform .12s, box-shadow .12s" }}>
                {t.nav.cta}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* ── HERO ── */}
        <Box id="hero" sx={{ minHeight: "100vh", pt: "64px", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, alignItems: "center", gap: { xs: 4, md: 6 }, px: { xs: 3, md: "5vw" },
          background: `linear-gradient(90deg,rgba(17,19,15,.04) 1px,transparent 1px) 0 0/40px 40px, linear-gradient(0deg,rgba(17,19,15,.03) 1px,transparent 1px) 0 0/40px 40px, ${PANEL}` }}>

          <Box sx={{ py: 5, textAlign: { xs: "center", md: "left" } }}>
            <SectionLabel>{t.hero.eyebrow}</SectionLabel>
            <Typography variant="h1" sx={{ fontFamily: "Space Grotesk", fontSize: { xs: "48px", md: "clamp(48px,6vw,88px)" }, lineHeight: .92, fontWeight: 700, letterSpacing: "-.01em" }}>
              {t.hero.title1}<br /><Box component="em" sx={{ fontStyle: "normal", color: TEAL_DEEP }}>{t.hero.title2}</Box>
            </Typography>
            <Typography sx={{ mt: 3, fontSize: { xs: "16px", md: "clamp(16px,1.8vw,20px)" }, lineHeight: 1.55, color: "#3a3f39", maxWidth: "520px", mx: { xs: "auto", md: 0 } }}>{t.hero.sub}</Typography>
            <Box sx={{ display: "flex", gap: "14px", mt: 4, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
              <Button href="#download" variant="contained" sx={{ background: INK, color: PAPER, borderRadius: "12px", fontWeight: 600, fontSize: "15px", px: 3.5, py: 1.75, boxShadow: `5px 5px 0 ${LIME}`, textTransform: "none", "&:hover": { background: INK, transform: "translate(-2px,-2px)", boxShadow: `7px 7px 0 ${LIME}` }, transition: "transform .12s, box-shadow .12s" }}>{t.hero.btn1}</Button>
              <Button href="#features" variant="outlined" sx={{ borderColor: LINE, color: INK, borderRadius: "12px", fontWeight: 600, fontSize: "15px", px: 3, py: 1.75, textTransform: "none", "&:hover": { borderColor: INK, background: "rgba(17,19,15,.04)" } }}>{t.hero.btn2}</Button>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", mt: 3.5, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
              {[{ color: TEAL, label: t.badges.e2e }, { color: LIME, label: t.badges.open }, { color: AMBER, label: t.badges.ads }].map(b => (
                <Chip key={b.label} size="small" label={<Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}><Box sx={{ width: 7, height: 7, borderRadius: "50%", background: b.color }} />{b.label}</Box>} sx={{ background: "rgba(255,250,240,.9)", border: `1px solid ${LINE}`, color: "#1c211d", fontWeight: 600, fontSize: "12px", height: 28 }} />
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <Box sx={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, rgba(0,143,134,.2), transparent 70%)`, pointerEvents: "none" }} />
            <PhoneMockup lang={lang} />
          </Box>
        </Box>

        {/* ── STATS ── */}
        <Box sx={{ background: TEAL_DEEP, py: { xs: 6, md: 8 }, px: { xs: 3, md: "5vw" }, display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 4 }}>
          {Object.values(t.stats).map((s, i) => (
            <Reveal key={i}>
              <Box sx={{ textAlign: "center", color: PAPER }}>
                <Typography sx={{ fontFamily: "Space Grotesk", fontSize: { xs: "36px", md: "clamp(36px,5vw,60px)" }, fontWeight: 700, lineHeight: 1 }}>{s.num}</Typography>
                <Typography sx={{ mt: 1, fontSize: "14px", color: "rgba(255,250,240,.65)", fontFamily: "IBM Plex Mono", textTransform: "uppercase", letterSpacing: ".04em" }}>{s.label}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>

        {/* ── FEATURES ── */}
        <Box id="features" sx={{ background: INK, py: { xs: 8, md: 12 }, px: { xs: 3, md: "5vw" } }}>
          <Reveal>
            <Box sx={{ maxWidth: 640, mb: 7 }}>
              <SectionLabel light>{t.features.label}</SectionLabel>
              <Typography sx={{ fontFamily: "Space Grotesk", fontSize: { xs: "32px", md: "clamp(32px,4vw,54px)" }, fontWeight: 700, lineHeight: 1.05, color: PAPER, whiteSpace: "pre-line" }}>{t.features.title}</Typography>
              <Typography sx={{ mt: 2, fontSize: "18px", lineHeight: 1.55, color: "#b8b4ac" }}>{t.features.sub}</Typography>
            </Box>
          </Reveal>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "20px" }}>
            {t.features.cards.map((card, i) => (
              <Reveal key={i} delay={i * 60}>
                <Box sx={{ background: "rgba(255,250,240,.06)", border: "1px solid rgba(255,250,240,.1)", borderRadius: "14px", p: "28px", transition: "background .2s, border-color .2s", "&:hover": { background: "rgba(255,250,240,.09)", borderColor: "rgba(255,250,240,.18)" } }}>
                  <Box sx={{ width: 46, height: 46, borderRadius: "12px", background: FEAT_COLORS[i], display: "grid", placeItems: "center", fontSize: "20px", mb: "18px" }}>{FEAT_ICONS[i]}</Box>
                  <Typography sx={{ fontFamily: "Space Grotesk", fontSize: "20px", fontWeight: 700, color: PAPER, mb: "10px" }}>{card.title}</Typography>
                  <Typography sx={{ fontSize: "14px", lineHeight: 1.6, color: "#a8a49c" }}>{card.desc}</Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>

        {/* ── HOW IT WORKS ── */}
        <Box id="how" sx={{ background: PANEL, py: { xs: 8, md: 12 }, px: { xs: 3, md: "5vw" } }}>
          <Reveal>
            <SectionLabel>{t.how.label}</SectionLabel>
            <Typography sx={{ fontFamily: "Space Grotesk", fontSize: { xs: "32px", md: "clamp(32px,4vw,54px)" }, fontWeight: 700, lineHeight: 1.05 }}>{t.how.title}</Typography>
          </Reveal>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "24px", mt: "52px" }}>
            {t.how.steps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <Box>
                  <Typography sx={{ fontFamily: "IBM Plex Mono", fontSize: "11px", fontWeight: 700, color: TEAL, mb: "14px" }}>{step.num}</Typography>
                  <Box sx={{ width: 40, height: 4, borderRadius: 2, background: STEP_COLORS[i], mb: "18px" }} />
                  <Typography sx={{ fontFamily: "Space Grotesk", fontSize: "20px", fontWeight: 700, mb: "10px" }}>{step.title}</Typography>
                  <Typography sx={{ fontSize: "14px", lineHeight: 1.6, color: "#555950" }}>{step.desc}</Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>

        {/* ── SECURITY ── */}
        <Box id="security" sx={{ background: PAPER, py: { xs: 8, md: 12 }, px: { xs: 3, md: "5vw" } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 6, md: "80px" }, alignItems: "center" }}>
            <Box>
              <Reveal><SectionLabel>{t.security.label}</SectionLabel></Reveal>
              <Reveal><Typography sx={{ fontFamily: "Space Grotesk", fontSize: { xs: "32px", md: "clamp(32px,4vw,54px)" }, fontWeight: 700, lineHeight: 1.05, whiteSpace: "pre-line" }}>{t.security.title}</Typography></Reveal>
              <Reveal><Typography sx={{ mt: 2, fontSize: "17px", lineHeight: 1.6, color: "#3a3f39", maxWidth: 440 }}>{t.security.sub}</Typography></Reveal>
              <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: "12px" }}>
                {t.security.pills.map((pill, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <Chip label={<Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}><Box sx={{ width: 7, height: 7, borderRadius: "50%", background: [TEAL, LIME, AMBER][i] }} />{pill}</Box>} sx={{ background: "rgba(255,250,240,.9)", border: `1px solid ${LINE}`, color: "#1c211d", fontWeight: 600, fontSize: "12px", height: 28, width: "fit-content" }} />
                  </Reveal>
                ))}
              </Box>
            </Box>
            <Reveal>
              <Box sx={{ background: INK, borderRadius: "20px", p: "36px", position: "relative", overflow: "hidden" }}>
                <Box sx={{ position: "absolute", inset: 0, opacity: .1, background: "linear-gradient(90deg,#fff 1px,transparent 1px) 0 0/32px 32px, linear-gradient(0deg,#fff 1px,transparent 1px) 0 0/32px 32px" }} />
                {t.security.items.map((item, i) => (
                  <Box key={i} sx={{ position: "relative", zIndex: 1, border: "1px solid rgba(255,250,240,.12)", background: "rgba(255,250,240,.05)", borderRadius: "10px", p: "14px 16px", mb: i < t.security.items.length - 1 ? "10px" : 0, display: "flex", alignItems: "center", gap: "14px" }}>
                    <Box sx={{ width: 9, height: 9, borderRadius: "50%", flexShrink: 0, background: item.ok ? [TEAL, LIME, "#008f86", "#316fbd"][i] || TEAL : "#d94841" }} />
                    <Typography sx={{ fontSize: "13px", color: "rgba(255,250,240,.85)", fontFamily: "IBM Plex Mono", flex: 1 }}>{item.label}</Typography>
                    <Typography sx={{ fontFamily: "IBM Plex Mono", fontSize: "12px", fontWeight: 700, color: item.ok ? LIME : "#d94841" }}>{item.ok ? "✓ ok" : "✗ none"}</Typography>
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Box>
        </Box>

        {/* ── CTA ── */}
        <Box id="download" sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: "5vw" }, textAlign: "center", background: `linear-gradient(90deg,rgba(17,19,15,.04) 1px,transparent 1px) 0 0/40px 40px, linear-gradient(0deg,rgba(17,19,15,.03) 1px,transparent 1px) 0 0/40px 40px, ${PANEL}` }}>
          <Reveal>
            <Box sx={{ maxWidth: 680, mx: "auto" }}>
              <SectionLabel sx={{ justifyContent: "center" }}>{t.cta.label}</SectionLabel>
              <Typography sx={{ fontFamily: "Space Grotesk", fontSize: { xs: "32px", md: "clamp(32px,4vw,54px)" }, fontWeight: 700, lineHeight: 1.05, mt: 1.5 }}>
                {t.cta.title1}<br /><Box component="em" sx={{ fontStyle: "normal", color: TEAL_DEEP }}>{t.cta.title2}</Box>
              </Typography>
              <Typography sx={{ mt: 2, fontSize: "18px", lineHeight: 1.55, color: "#3a3f39" }}>{t.cta.sub}</Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "14px", mt: 4, flexWrap: "wrap" }}>
                <Button variant="contained" sx={{ background: INK, color: PAPER, borderRadius: "12px", fontWeight: 600, fontSize: "15px", px: 3.5, py: 1.75, boxShadow: `5px 5px 0 ${LIME}`, textTransform: "none", "&:hover": { background: INK, transform: "translate(-2px,-2px)", boxShadow: `7px 7px 0 ${LIME}` }, transition: "transform .12s, box-shadow .12s" }}>📱 {t.cta.android}</Button>
                <Button variant="contained" sx={{ background: INK, color: PAPER, borderRadius: "12px", fontWeight: 600, fontSize: "15px", px: 3.5, py: 1.75, boxShadow: `5px 5px 0 ${AMBER}`, textTransform: "none", "&:hover": { background: INK, transform: "translate(-2px,-2px)", boxShadow: `7px 7px 0 ${AMBER}` }, transition: "transform .12s, box-shadow .12s" }}>🍎 {t.cta.ios}</Button>
                <Button variant="outlined" sx={{ borderColor: LINE, color: INK, borderRadius: "12px", fontWeight: 600, fontSize: "15px", px: 3, py: 1.75, textTransform: "none", "&:hover": { borderColor: INK, background: "rgba(17,19,15,.04)" } }}>{t.cta.github}</Button>
              </Box>
            </Box>
          </Reveal>
        </Box>

        {/* ── FOOTER ── */}
        <Box component="footer" sx={{ background: INK, color: PAPER, pt: 6, pb: 4, px: { xs: 3, md: "5vw" } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 4, flexWrap: "wrap", pb: 4, borderBottom: "1px solid rgba(255,250,240,.1)" }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box sx={{ width: 32, height: 32, background: INK, borderRadius: "9px", display: "grid", placeItems: "center", color: PAPER, fontFamily: "IBM Plex Mono", fontWeight: 700, fontSize: "14px", boxShadow: `4px 4px 0 ${LIME}`, border: `1px solid rgba(255,250,240,.2)` }}>P</Box>
                <Typography sx={{ fontFamily: "Space Grotesk", fontSize: "18px", fontWeight: 700 }}>Pingly</Typography>
              </Box>
              <Typography sx={{ mt: 1, fontSize: "13px", color: "rgba(255,250,240,.5)", maxWidth: 260, lineHeight: 1.5 }}>{t.footer.tagline}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {[
                { head: t.footer.product, links: t.footer.links.product },
                { head: t.footer.company, links: t.footer.links.company },
                { head: t.footer.legal, links: t.footer.links.legal },
              ].map(col => (
                <Box key={col.head}>
                  <Typography sx={{ fontFamily: "IBM Plex Mono", fontSize: "11px", textTransform: "uppercase", letterSpacing: ".05em", color: "rgba(255,250,240,.4)", mb: 1.75 }}>{col.head}</Typography>
                  {col.links.map(l => <Link key={l} href="#" display="block" underline="none" sx={{ color: "rgba(255,250,240,.7)", fontSize: "14px", mb: "9px", "&:hover": { color: PAPER }, transition: "color .12s" }}>{l}</Link>)}
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 3, flexWrap: "wrap", gap: 1 }}>
            <Typography sx={{ fontSize: "13px", color: "rgba(255,250,240,.35)" }}>© {t.footer.copy}</Typography>
            <Typography sx={{ fontFamily: "IBM Plex Mono", fontSize: "11px", color: "rgba(255,250,240,.35)" }}>{t.footer.tagline2}</Typography>
          </Box>
        </Box>

      </Box>
    </ThemeProvider>
  );
}
