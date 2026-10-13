import SeoHead from "@/components/services/SeoHead";
import LaunchContact from "@/components/launch/LaunchContact";
import { getBranchContext } from "@/lib/branches";
import { contactJsonLd } from "@/lib/launch-seo";
import { DEFAULT_LOCALE } from "@/lib/locale";

export default function ContactRoute({ locale, branch, cities }) {
  return (
    <>
      <SeoHead
        locale={locale}
        branch={branch}
        cities={cities}
        path="contact"
        title="Contact EVS Bahrain — Opening Soon"
        description="EVS is opening a specialist electric-vehicle service centre in Bahrain. Register your interest and we will tell you the moment we open."
        jsonLd={contactJsonLd(locale)}
      />
      <LaunchContact locale={locale} />
    </>
  );
}

export async function getStaticProps() {
  const { branch, cities } = await getBranchContext(DEFAULT_LOCALE);
  return { props: { locale: DEFAULT_LOCALE, branch, cities } };
}
