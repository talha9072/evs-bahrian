import SeoHead from "@/components/services/SeoHead";
import LaunchContact from "@/components/launch/LaunchContact";
import { getBranchContext } from "@/lib/branches";
import { contactJsonLd } from "@/lib/launch-seo";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/locale";

export default function ContactRoute({ locale, branch, cities }) {
  return (
    <>
      <SeoHead
        locale={locale}
        branch={branch}
        cities={cities}
        path="contact"
        title="تواصل مع إي في إس البحرين | قريباً في المنامة"
        description="إي في إس تفتتح قريباً مركزاً متخصصاً لصيانة السيارات الكهربائية في البحرين. لا يوجد خط هاتف بعد — اترك بياناتك وسنراسلك يوم افتتاح مركز المنامة."
        jsonLd={contactJsonLd(locale)}
      />
      <LaunchContact locale={locale} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({ params: { locale } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const locale = params.locale;
  const { branch, cities } = await getBranchContext(locale);
  return { props: { locale, branch, cities } };
}
