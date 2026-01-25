import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Paul's Resources",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "quartz.paulgleason.dev",
    ignorePatterns: ["private", "templates", ".obsidian", "!(Assets)**/!(*.md)", "!(*.md)"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "rgb(213, 214, 219)",
          lightgray: "#CBCCD1",
          gray: "#9699a3",
          darkgray: "#343b58",
          dark: "#8C4351",
          secondary: "#8c4308",
          tertiary: "#0F7B6C",
          highlight: "#CBCCD1",
        },
        darkMode: {
          light: "#1a1b26", // bg
          lightgray: "#414868", // fg
          gray: "#7aa2f7", // date
          darkgray: "#c0caf5", // text
          dark: "#ff9e64", // headers
          secondary: "#f7768e", // name, tittle
          tertiary: "#73daca", // hover and visited nodes
          highlight: "#414868",
        },
      },
     },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "catppuccin-latte",
          dark: "catppuccin-mocha",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.HardLineBreaks(),
    ],
    filters: [Plugin.RemoveDrafts(),Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
