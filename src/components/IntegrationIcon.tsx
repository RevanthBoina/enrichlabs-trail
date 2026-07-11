import { siNotion, siHubspot, siFigma, siLinear, siZapier, siGoogleads, siIntercom } from "simple-icons";

const iconMap: Record<string, { svg: string; hex: string }> = {
  intercom: { svg: siIntercom.svg, hex: siIntercom.hex },
  notion: { svg: siNotion.svg, hex: siNotion.hex },
  hubspot: { svg: siHubspot.svg, hex: siHubspot.hex },
  figma: { svg: siFigma.svg, hex: siFigma.hex },
  linear: { svg: siLinear.svg, hex: siLinear.hex },
  zapier: { svg: siZapier.svg, hex: siZapier.hex },
  pipedrive: { svg: siHubspot.svg, hex: siHubspot.hex }, // Hubspot as CRM alternative
  googleads: { svg: siGoogleads.svg, hex: siGoogleads.hex },
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
