import React from "react";

const entityMap: { [key: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};

export function sanitizeHtml(html: string) {
  return String(html)
    .replace(/[&<>"'\/]/g, key => entityMap[key])
    .replace("\\n", "<br />");
}

export const RLogo: React.FC<{
  theme?: "light" | "dark";
  style?: React.CSSProperties;
}> = ({ theme = "dark", style, ...props }) => {
  const rlogo =
    theme === "dark"
      ? "https://www.klutch.sh/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.dd4adc41.png&w=96&q=75"
      : "https://www.klutch.sh/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.dd4adc41.png&w=96&q=75";

  return (
    <img
      src={rlogo}
      className="rlogo"
      style={{ width: 96, height: 96, ...style }}
      {...props}
    />
  );
};

export const GradientBackground: React.FC<{ theme?: "light" | "dark" }> = ({
  theme = "dark",
}) => {
  if (theme == "dark") {
    return (
      <div
        tw="absolute inset-0 flex justify-start items-end w-full h-full"
        style={{ background: `#13111C` }}
      >
        <div
          tw="absolute inset-0"
          style={{
            background:
              "linear-gradient(327.21deg, rgba(0, 47, 75, 0.35) 3.65%, rgba(0, 59, 136, 0) 40.32%)",
          }}
        />
        <div
          tw="absolute inset-0"
          style={{
            background:
              "linear-gradient(245.93deg, rgba(21, 43, 209, 0.26) 0%, rgba(39, 3, 14, 0) 36.63%)",
          }}
        />
        <div
          tw="absolute inset-0"
          style={{
            background:
              "linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.1) 85.72%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      tw="absolute inset-0 flex justify-start items-end w-full h-full"
      style={{ background: `#ffffff` }}
    >
      <div
        tw="absolute inset-0"
        style={{
          background:
            "linear-gradient(71.9deg, rgba(91, 213, 243, 0.3) -15.4%, rgba(25, 139, 209, 0) 46.76%)",
        }}
      />
      <div
        tw="absolute inset-0"
        style={{
          background:
            "linear-gradient(149.36deg, rgba(74, 94, 242, 0) 37.9%, rgba(94, 149, 252, 0.19) 81.22%)",
        }}
      />
    </div>
  );
};
