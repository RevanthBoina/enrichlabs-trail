import { siNotion, siHubspot, siFigma, siLinear, siZapier, siGoogleads, siIntercom, siShopify, siInstagram, siReddit, siWhatsapp, siMailchimp, siWordpress, siGithub, siJira, siStripe, siDiscord } from "simple-icons";

// LinkedIn and Slack SVG paths (from Iconify CC0-licensed SVG Logos)
const linkedinSvg = '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>';
const slackSvg = '<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>';
// Pipedrive logo (simplified funnel icon with Pipedrive orange)
const pipedriveSvg = '<path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.18l6 3v9.64l-6 3-6-3V7.18l6-3zm0 3.64L8.5 13.5 12 16l3.5-2.5L12 10.82zm-4 2.36v6.5l3.5-2.5 3.5 2.5v-6.5l-3.5 2.5-3.5-2.5z"/>';
// Generic API icon
const apiSvg = '<path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19 7.5v7L12 18.5 5 14.5v-7l7-3.32zM12 8a2 2 0 100 4 2 2 0 000-4zm-4 6l8-3v2l-8 3v-2zm8 1l-8 3v-2l8-3v2z"/>';
// Webhook icon
const webhookSvg = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>';
// Teams icon
const teamsSvg = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm2 3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>';
// Gmail icon
const gmailSvg = '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>';
// Google Drive icon
const driveSvg = '<path d="M12 2L4 8.5l8 5 8-5L12 2zm0 8.5L6.5 7 12 3.5 17.5 7 12 10.5zM6 17.5l6-3.5 6 3.5 6-3.5L12 21l-6-3.5z"/>';
// Airtable icon
const airtableSvg = '<path d="M17.5 2H6.5c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5V3.5c0-.8-.7-1.5-1.5-1.5zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5-3.5c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v7z"/>';
// Calendly icon
const calendlySvg = '<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5l-4 4h8l-4-4z"/>';
// Shopify icon
const shopifySvg = '<path d="M15.8 4.2c-.4-.2-.9-.2-1.3 0l-6 2.7c-.4.2-.6.6-.5 1 .1.4.4.7.8.8l2.3.6c.1 0 .2.2.2.3v.3c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.1 0-.2.1-.3l.6-1.8c.1-.3 0-.6-.2-.8l-5.3-2.7c-.4-.2-.9-.1-1.2.2-.3.3-.3.8-.1 1.2l2.5 5.8c.1.2.3.4.5.4h.2c.2-.1.4-.2.5-.4l2-4.8 1.4 2.6c.1.2.3.3.5.3h.2c.2-.1.4-.2.5-.4l1.3-3.3.4 4.5c0 .5.4.9.9.9h.3c.5 0 .9-.4.9-.9l.7-8.2c0-.1 0-.2-.1-.3l-2.3-.6zm-3.7 4.3l-.4-2.2c-.1-.3-.3-.5-.6-.5h-1.1c-.3 0-.5.2-.6.5l-.4 2.2c0 .1-.1.1-.1.2-.1.2-.1.4-.1.6 0 1.1.9 2 2 2s2-.9 2-2c0-.2 0-.4-.1-.6 0-.1-.1-.2-.1-.2z"/>';
// Stripe icon
const stripeSvg = '<path d="M13.5 2c-2.5 0-4.5.2-6 .5 0 .1-.1.3-.1.5 0 .2.1.4.2.5 1.2.5 2.5.8 3.8.9.1 0 .2.1.2.2v1.4c0 .1-.1.2-.2.2-1.2 0-2.4-.3-3.5-.8-.1-.1-.2-.1-.3 0-1.1.6-2.4.9-3.7.9-.4 0-.8 0-1.2-.1-.1 0-.3.1-.3.2v.9c0 .1.1.2.2.2 1.4.1 2.7.1 4-.1 1.8-.3 3.4-1 4.8-2 .1-.1.3-.1.4 0 1.3 1.1 2.9 1.7 4.6 1.9.4.1.8.1 1.2.1.8 0 1.5-.1 2.2-.3.1 0 .2-.1.3-.2 0 0 .1-1.5.1-1.5 0-.2-.1-.4-.2-.5-.8-.4-1.7-.6-2.7-.7-.1 0-.2-.1-.2-.2V7.1c0-.1.1-.2.2-.2 1.3 0 2.6.2 3.8.7.1.1.2.1.3 0 .8-.6 1.7-1 2.6-1.3.1 0 .2-.1.3-.2.1-.2.1-.4 0-.6 0 0-.4-1.5-.5-1.9-.1-.2-.3-.3-.5-.3-.6.1-1.2.2-1.7.3-.3.1-.6.1-.9.2-.2.1-.4.2-.6.4-.2.2-.4.5-.3.8 0 .3.1.5.3.6.3.2.7.3 1.1.3h.1c.1 0 .2.1.2.2v.5c0 .1-.1.2-.2.2h-.1c-.6 0-1.2-.1-1.8-.3-.1 0-.2 0-.3.1 0 0-1.2.5-1.2.5-.1 0-.2.1-.3.1z"/>';
// Salesforce icon
const salesforceSvg = '<path d="M10.5 2c-2.5 0-4.5 2-4.5 4.5 0 1.6.8 3 2 3.9-.1.5-.2 1-.2 1.5 0 .3 0 .6.1.9.3.1.6.2.9.2 1.5 0 2.7-1.2 2.7-2.7 0-.5-.1-.9-.3-1.3.3-.1.5-.2.8-.3.2-.1.3-.4.2-.6-.1-.2-.4-.3-.6-.2-.7.3-1.4.4-2.2.4-.1 0-.2.1-.2.2v2.7c0 .1.1.2.2.2h.2c1 0 1.8-.8 1.8-1.8 0-.4-.1-.7-.3-1 .1 0 .1-.1.2-.1 1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2-.1 0-.2.1-.2.2v.3c0 .1-.1.2-.2.2z"/>';
// Meta icon
const metaSvg = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.9 14.3c-.4.9-1 .9-1.8.9h-2.2c-.8 0-1.4 0-1.8-.9-.3-.6-.4-1.3-.4-2.3V10.5h2.2v3.5c0 .3 0 .5.1.7.2.9.8.9 1.7.9h2.2c.9 0 1.5 0 1.7-.9.1-.2.1-.4.1-.7V10.5h2.2v3.5c0 1-.1 1.7-.4 2.3z"/>';
// X (Twitter) icon
const xSvg = '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>';
// Make (Integromat) icon
const makeSvg = '<path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L18.36 7 12 9.82 5.64 7 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>';
// n8n icon
const n8nSvg = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>';
// Webflow icon
const webflowSvg = '<path d="M1.5 2.5C.7 2.5 0 3.2 0 4s.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5S11.3 2.5 10.5 2.5H1.5zM0 8.5C0 7.7.7 7 1.5 7h21c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-21C.7 10 0 9.3 0 8.5zM1.5 12.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-21zM0 15c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-21C.7 16.5 0 15.8 0 15z"/>';
// Klaviyo icon  
const klaviyoSvg = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1-10c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>';

const iconMap: Record<string, { svg: string; hex: string }> = {
  intercom: { svg: siIntercom.svg, hex: siIntercom.hex },
  notion: { svg: siNotion.svg, hex: siNotion.hex },
  hubspot: { svg: siHubspot.svg, hex: siHubspot.hex },
  figma: { svg: siFigma.svg, hex: siFigma.hex },
  linear: { svg: siLinear.svg, hex: siLinear.hex },
  zapier: { svg: siZapier.svg, hex: siZapier.hex },
  pipedrive: { svg: pipedriveSvg, hex: "FF6600" },
  googleads: { svg: siGoogleads.svg, hex: siGoogleads.hex },
  shopify: { svg: siShopify.svg, hex: siShopify.hex },
  instagram: { svg: siInstagram.svg, hex: siInstagram.hex },
  reddit: { svg: siReddit.svg, hex: siReddit.hex },
  whatsapp: { svg: siWhatsapp.svg, hex: siWhatsapp.hex },
  linkedin: { svg: linkedinSvg, hex: "0A66C2" },
  slack: { svg: slackSvg, hex: "4A154B" },
  discord: { svg: siDiscord.svg, hex: siDiscord.hex },
  mailchimp: { svg: siMailchimp.svg, hex: siMailchimp.hex },
  wordpress: { svg: siWordpress.svg, hex: siWordpress.hex },
  github: { svg: siGithub.svg, hex: siGithub.hex },
  jira: { svg: siJira.svg, hex: siJira.hex },
  stripe: { svg: siStripe.svg, hex: siStripe.hex },
  // Custom/composite icons
  teams: { svg: teamsSvg, hex: "6264A7" },
  gmail: { svg: gmailSvg, hex: "EA4335" },
  googledrive: { svg: driveSvg, hex: "1FA463" },
  googleworkspace: { svg: driveSvg, hex: "4285F4" },
  airtable: { svg: airtableSvg, hex: "18BFFF" },
  calendly: { svg: calendlySvg, hex: "006BFF" },
  meta: { svg: metaSvg, hex: "0668E1" },
  x: { svg: xSvg, hex: "000000" },
  make: { svg: makeSvg, hex: "231F20" },
  n8n: { svg: n8nSvg, hex: "EA4E2B" },
  webflow: { svg: webflowSvg, hex: "4353FF" },
  klaviyo: { svg: klaviyoSvg, hex: "5465FF" },
  api: { svg: apiSvg, hex: "6366F1" },
  webhook: { svg: webhookSvg, hex: "10B981" },
};

interface IntegrationIconProps {
  slug: string;
  size?: number;
}

export function IntegrationIcon({ slug, size = 24 }: IntegrationIconProps) {
  const icon = iconMap[slug];
  if (!icon) return null;
  
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={`#${icon.hex}`}
      dangerouslySetInnerHTML={{ __html: icon.svg.replace(/<\/?svg[^>]*>/g, '') }}
    />
  );
}

export const integrationColors: Record<string, string> = Object.fromEntries(
  Object.entries(iconMap).map(([slug, { hex }]) => [slug, `#${hex}`])
);
