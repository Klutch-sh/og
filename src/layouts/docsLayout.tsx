import React from "react";
import { z } from "zod";
import { DocsIllustration } from "../components/DocsIllustration";
import { ILayout } from "./types";
import { RLogo, GradientBackground } from "./utils";

const docsLayoutConfig = z.object({
  Page: z.string(),
  Url: z.string().nullish(),
});

export type DocsLayoutConfig = z.infer<typeof docsLayoutConfig>;

const Component: React.FC<{ config: DocsLayoutConfig }> = ({ config }) => {
  const url =
    (config.Url ?? "").trim() === ""
      ? "docs.railway.com"
      : (config.Url as string);
  return (
    <div
      tw="relative flex justify-start items-end w-full h-full"
      style={{
        background: `#13111C`,
      }}
    >
      {/* gradient layers */}
      <GradientBackground />

      {/* main text */}
      <div
        tw="flex flex-col text-left border"
        style={{ maxWidth: 740, marginLeft: 96, marginBottom: 90 }}
      >
        <p tw="text-8xl text-white font-bold" style={{ lineHeight: 1.2 }}>
          {config.Page}
        </p>
      </div>

      {/* docs link  */}
      <p tw="absolute right-10 bottom-4 text-xl" style={{ color: "#ffffff" }}>
        {url}
      </p>

      {/* railway logo */}
      <RLogo tw="absolute" style={{ top: 106, right: 97 }} />
    </div>
  );
};

export const docsLayout: ILayout<typeof docsLayoutConfig> = {
  name: "docs",
  config: docsLayoutConfig,
  properties: [
    {
      type: "text",
      name: "Page",
      default: "Railway Documentation",
      placeholder: "Text to display",
    },
    {
      type: "text",
      name: "Url",
      default: "docs.railway.com",
      placeholder: "Url to display",
    },
  ],
  Component,
};
