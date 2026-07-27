import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#302e2b",
        }}
      >
        <span
          style={{
            fontSize: 108,
            fontWeight: 800,
            color: "#f8f6f3",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginTop: 6,
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}
