import SeoHead from "@/components/services/SeoHead";
import FranchisePitch from "@/components/launch/FranchisePitch";
import { getBranchContext } from "@/lib/branches";
import { franchiseJsonLd } from "@/lib/launch-seo";
import { DEFAULT_LOCALE } from "@/lib/locale";

export default function FranchiseRoute({ locale, branch, cities }) {
  return (
    <>
      <SeoHead
        locale={locale}
        branch={branch}
        cities={cities}
        path="franchise"
        title="EV Workshop Franchise in Bahrain | EVS Franchise"
        description="Run a specialist EV service centre in Bahrain. An open territory with a young EV parc, no independent competition and one site covering the whole island."
        jsonLd={franchiseJsonLd(locale)}
      />
      <FranchisePitch locale={locale} />
    </>
  );
}

export async function getStaticProps() {
  const { branch, cities } = await getBranchContext(DEFAULT_LOCALE);
  return { props: { locale: DEFAULT_LOCALE, branch, cities } };
}
