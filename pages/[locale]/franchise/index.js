import SeoHead from "@/components/services/SeoHead";
import FranchisePitch from "@/components/launch/FranchisePitch";
import { getBranchContext } from "@/lib/branches";
import { franchiseJsonLd } from "@/lib/launch-seo";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/locale";

export default function FranchiseRoute({ locale, branch, cities }) {
  return (
    <>
      <SeoHead
        locale={locale}
        branch={branch}
        cities={cities}
        path="franchise"
        title="امتياز ورشة سيارات كهربائية في البحرين | إي في إس"
        description="أدِر مركزاً متخصصاً لصيانة السيارات الكهربائية في البحرين. منطقة متاحة بأسطول حديث ومنافسة مستقلة شبه معدومة وموقع واحد يغطي الجزيرة."
        jsonLd={franchiseJsonLd(locale)}
      />
      <FranchisePitch locale={locale} />
    </>
  );
}

export async function getStaticPaths() {
  return { paths: LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({ params: { locale } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const { branch, cities } = await getBranchContext(params.locale);
  return { props: { locale: params.locale, branch, cities } };
}
