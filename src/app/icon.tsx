import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 14,
        }}
      >
        <span
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: "#f8f6f3",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}
