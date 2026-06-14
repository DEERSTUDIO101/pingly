import { Box, Typography } from "@mui/material";
import type { Lang } from "../i18n/translations";
import { translations } from "../i18n/translations";

const INK = "#11130f";
const PAPER = "#fffaf0";
const PANEL = "#f5f2e8";
const TEAL = "#008f86";
const TEAL_DEEP = "#006960";
const LIME = "#b7f462";
const LINE = "#c9c1af";
const MUTED = "#6f716b";

type PhoneMockupProps = {
  lang: Lang;
};

export default function PhoneMockup({ lang }: PhoneMockupProps) {
  const t = translations[lang].phone;

  return (
    <Box
      sx={{
        width: { xs: 280, sm: 330 },
        minHeight: 620,
        borderRadius: "38px",
        background: INK,
        border: "10px solid #23251f",
        boxShadow: "24px 28px 0 rgba(17,19,15,.12), 0 28px 80px rgba(17,19,15,.28)",
        p: "14px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 12,
          left: "50%",
          transform: "translateX(-50%)",
          width: 90,
          height: 24,
          borderRadius: "0 0 16px 16px",
          background: INK,
          zIndex: 3,
        }}
      />

      <Box
        sx={{
          minHeight: 590,
          borderRadius: "28px",
          overflow: "hidden",
          background: PAPER,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            pt: 5,
            px: 2.25,
            pb: 2,
            background: PANEL,
            borderBottom: `1px solid ${LINE}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: "14px",
                background: TEAL_DEEP,
                color: PAPER,
                display: "grid",
                placeItems: "center",
                fontFamily: "Space Grotesk",
                fontWeight: 700,
                boxShadow: `3px 3px 0 ${LIME}`,
              }}
            >
              M
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontFamily: "Space Grotesk", fontWeight: 700, lineHeight: 1.1 }}>
                {t.chatName}
              </Typography>
              <Typography sx={{ fontSize: 12, color: MUTED }}>{t.online}</Typography>
            </Box>
            <Box
              sx={{
                px: 1,
                py: 0.5,
                borderRadius: "999px",
                background: "rgba(0,143,134,.1)",
                color: TEAL_DEEP,
                fontFamily: "IBM Plex Mono",
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {t.status}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            p: 2.25,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: 1.4,
            background:
              "linear-gradient(90deg,rgba(17,19,15,.035) 1px,transparent 1px) 0 0/28px 28px, linear-gradient(0deg,rgba(17,19,15,.025) 1px,transparent 1px) 0 0/28px 28px, #fffaf0",
          }}
        >
          {t.messages.map((message) => (
            <Box
              key={message.text}
              sx={{
                alignSelf: message.own ? "flex-end" : "flex-start",
                maxWidth: "82%",
                px: 1.6,
                py: 1.2,
                borderRadius: message.own ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                background: message.own ? TEAL : PAPER,
                color: message.own ? PAPER : INK,
                border: message.own ? "none" : `1px solid ${LINE}`,
                boxShadow: message.own ? `3px 3px 0 ${LIME}` : "3px 3px 0 rgba(17,19,15,.08)",
              }}
            >
              <Typography sx={{ fontSize: 13.5, lineHeight: 1.45 }}>{message.text}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ p: 2, background: PAPER, borderTop: `1px solid ${LINE}` }}>
          <Box
            sx={{
              minHeight: 44,
              borderRadius: "14px",
              background: PANEL,
              border: `1px solid ${LINE}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 1.5,
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: 13, color: MUTED }}>{t.composer}</Typography>
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "10px",
                background: INK,
                color: PAPER,
                display: "grid",
                placeItems: "center",
                fontSize: 14,
              }}
            >
              ↗
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
