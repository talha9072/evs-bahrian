/**
 * The About page's structured data, per country.
 *
 * The title, description and keywords used to live here as {{token}} templates.
 * They are `about_page` rows since 0070, along with the whole visible page: the
 * page had 21 strings written in JSX, so keeping three of them in lib/ while the
 * h1 came from a row would have split one page across two places.
 *
 * What stays is the part that is not copy - a graph assembled from the branch row.
 * The old one named evsuae.com and carried `contact@evsuae.com`, an address that
 * appears nowhere else on the site and is not `branches.support_email`.
 */
import { branchTokens } from "@/lib/branches";
import { siteName } from "@/lib/footer";
import { localePath } from "@/lib/locale";


/**
 * AboutPage wrapping an AutomotiveBusiness, which is what the page emitted - but
 * built from the branch row.
 *
 * The old graph's `email` was `contact@evsuae.com`, an address that appears
 * nowhere else in the site and is not `branches.support_email`. Using the stored
 * one means it cannot be a different mailbox from the one the footer prints.
 *
 * `sameAs` was Instagram and LinkedIn only, hand-picked; it is the branch's whole
 * `social_links` set now, which is the same list the footer renders.
 */
export function aboutJsonLd({ locale, branch, cities, social = [] }) {
  const tokens = branchTokens(branch, cities, locale);
  const name = siteName(branch, locale);
  const url = `${branch.site_url}${localePath(locale, "about")}`;

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name,
    description: tokens.country
      ? `Electric Vehicle Services ${tokens.country} - our mission, expertise in EV maintenance, and commitment to sustainable transportation across ${tokens.country_the}.`
      : undefined,
    url,
    inLanguage: locale,
    mainEntity: {
      "@type": "AutomotiveBusiness",
      name,
      url: `${branch.site_url}/`,
      logo: `${branch.site_url}/img/EVS-logo.svg`,
      description: `Electric Vehicle Services ${tokens.country} provides advanced maintenance, repair, and upgrade services for electric vehicles across ${tokens.country_the}.`,
      address: {
        "@type": "PostalAddress",
        addressCountry: branch.country_code,
      },
      telephone: branch.support_phone,
      email: branch.support_email,
      sameAs: social.map((account) => account.href).filter(Boolean),
    },
  };
}
