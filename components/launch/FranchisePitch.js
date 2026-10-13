import { localePath, isRtl } from "@/lib/locale";

/**
 * The franchise page.
 *
 * IT DOES NOT TAKE THE APPLICATION. evsworldwide.com already runs the whole
 * funnel — qualifying form, NDA, questionnaire, scoring and an admin pipeline —
 * and a second entry point on a country site would either duplicate that or,
 * worse, collect enquiries nobody is watching. So every call to action here
 * hands off to /franchise/apply on the group site.
 *
 * What this page is for is the half of the job the group site cannot do: make
 * the case for BAHRAIN specifically, and rank for someone searching from here.
 */

const APPLY = "https://evsworldwide.com/franchise/apply";
const OPPORTUNITY = "https://evsworldwide.com/franchise/opportunity";
const REPORT = "https://evsworldwide.com/market-intelligence/bahrain";

const COPY = {
  en: {
    eyebrow: "Franchise",
    heading: "Run an EVS centre in Bahrain.",
    intro:
      "EVS franchises specialist electric-vehicle workshops. Bahrain is an open territory, and the case for it is unusually clean: a young EV parc still inside manufacturer warranty, almost no independent high-voltage capability on the island, and a national charging rollout already underway.",
    whyHeading: "Why Bahrain, specifically",
    why: [
      {
        title: "The parc is young, which is the point",
        body: "Nearly every EV in Bahrain is still under manufacturer warranty, so independent demand has not arrived yet. That is the window. A workshop that opens now owns the market by the time those cars come out of cover — and in a market this size, first mover is a defensible position rather than a slogan.",
      },
      {
        title: "Almost no independent competition",
        body: "Search demand for EV servicing in Bahrain is close to zero today, which tells you nobody has built the category. It also tells you the demand sits in brand names — BYD alone draws between one and ten thousand searches a month here — and whoever captures those captures the market.",
      },
      {
        title: "A small island is an advantage",
        body: "Bahrain is roughly 780 square kilometres. One properly equipped centre can cover the whole country, which is not true in Saudi Arabia or the UAE. You need one site, one set of tooling and one team rather than a network.",
      },
      {
        title: "Heat does the selling",
        body: "Gulf temperatures put sustained load on battery thermal management, and degradation shows up years earlier than in the climates these cars were validated in. That is recurring, high-value diagnostic work that a general garage cannot do.",
      },
    ],
    getHeading: "What a partner gets",
    get: [
      "A defined territory, with the market intelligence report behind it",
      "Workshop specification — tooling, bays, high-voltage safety and quarantine",
      "Technician training and high-voltage certification",
      "Diagnostic platform access and the brand coverage that comes with it",
      "Brand, site and the marketing system this network runs on",
      "The operating playbook from workshops already running in four countries",
    ],
    ctaHeading: "Applications are handled by EVS Worldwide",
    ctaBody:
      "Territory applications go through the group site, which runs the qualifying, the NDA and the territory review. It takes a few minutes to start.",
    apply: "Apply for the Bahrain territory",
    opportunity: "Read the franchise opportunity",
    report: "Bahrain market report",
    note: "Minimum capital requirement: US$1m.",
  },
  ar: {
    eyebrow: "الامتياز",
    heading: "أدِر مركز إي في إس في البحرين.",
    intro:
      "تمنح إي في إس امتيازات لورش متخصصة في صيانة السيارات الكهربائية. والبحرين منطقة متاحة، وحجّتها واضحة: أسطول حديث من السيارات الكهربائية ما زال ضمن ضمان الوكيل، وغياب شبه تام لقدرات الجهد العالي المستقلة، وشبكة شحن وطنية قيد التوسع.",
    whyHeading: "لماذا البحرين تحديداً",
    why: [
      {
        title: "حداثة الأسطول هي الفرصة",
        body: "معظم السيارات الكهربائية في البحرين ما زالت ضمن ضمان الوكيل، لذا لم يصل الطلب المستقل بعد. وهذه هي النافذة. فالورشة التي تفتح الآن تملك السوق حين تخرج تلك السيارات من التغطية.",
      },
      {
        title: "منافسة مستقلة شبه معدومة",
        body: "الطلب على البحث عن صيانة السيارات الكهربائية في البحرين يكاد يكون صفراً اليوم، ما يعني أن أحداً لم يبنِ هذه الفئة بعد. والطلب موجود في أسماء العلامات — بي واي دي وحدها تجذب بين ألف وعشرة آلاف بحث شهرياً هنا.",
      },
      {
        title: "صغر المساحة ميزة",
        body: "مساحة البحرين نحو 780 كيلومتراً مربعاً. ومركز واحد مجهز جيداً يغطي الدولة كاملة، وهو ما لا ينطبق على السعودية أو الإمارات. تحتاج موقعاً واحداً وفريقاً واحداً لا شبكة.",
      },
      {
        title: "الحرارة هي التي تبيع",
        body: "حرارة الخليج تضع حملاً متواصلاً على الإدارة الحرارية للبطاريات، ويظهر التدهور أبكر بسنوات من المناخات التي اختُبرت فيها هذه السيارات. وهذا عمل تشخيصي متكرر وعالي القيمة لا تستطيعه الورش العامة.",
      },
    ],
    getHeading: "ما يحصل عليه الشريك",
    get: [
      "منطقة محددة، مدعومة بتقرير تحليل السوق",
      "مواصفات الورشة — المعدات والمنصات وسلامة الجهد العالي ومنطقة العزل",
      "تدريب الفنيين واعتماد الجهد العالي",
      "الوصول إلى منصات التشخيص وتغطية العلامات",
      "العلامة التجارية والموقع والنظام التسويقي",
      "دليل التشغيل من ورش عاملة في أربع دول",
    ],
    ctaHeading: "الطلبات تُدار عبر إي في إس العالمية",
    ctaBody:
      "تمر طلبات المناطق عبر موقع المجموعة، الذي يتولى التأهيل واتفاقية السرية ومراجعة المنطقة. ولا يستغرق البدء سوى دقائق.",
    apply: "قدّم على منطقة البحرين",
    opportunity: "اقرأ عن فرصة الامتياز",
    report: "تقرير سوق البحرين",
    note: "الحد الأدنى لرأس المال: مليون دولار أمريكي.",
  },
};

export default function FranchisePitch({ locale = "en" }) {
  const t = COPY[String(locale).split("-")[0]] ?? COPY.en;

  return (
    <div dir={isRtl(locale) ? "rtl" : undefined}>
      <section className="evs-shell evs-section">
        <div className="max-w-3xl">
          <span className="evs-eyebrow mb-6 inline-block">{t.eyebrow}</span>
          <h1 className="text-display-2 uppercase">{t.heading}</h1>
          <p className="mt-6 text-lead text-content-secondary">{t.intro}</p>
        </div>

        <h2 className="mt-16 text-display-3">{t.whyHeading}</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {t.why.map((item) => (
            <div key={item.title} className="evs-card flex flex-col p-6">
              <h3 className="text-subheading text-content">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-content-secondary">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-display-3">{t.getHeading}</h2>
        <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          {t.get.map((item) => (
            <li key={item} className="flex items-start gap-3 text-content-secondary">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="evs-card mt-16 p-8 md:p-10">
          <h2 className="text-display-3">{t.ctaHeading}</h2>
          <p className="mt-4 max-w-2xl text-lead text-content-secondary">{t.ctaBody}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={APPLY} rel="noopener" className="evs-btn evs-btn-primary evs-btn-lg">
              {t.apply}
            </a>
            <a href={OPPORTUNITY} rel="noopener" className="evs-btn evs-btn-secondary evs-btn-lg">
              {t.opportunity}
            </a>
            <a href={REPORT} rel="noopener" className="evs-btn evs-btn-secondary evs-btn-lg">
              {t.report}
            </a>
          </div>
          <p className="mt-6 text-sm text-content-muted">{t.note}</p>
        </div>

        <p className="mt-10 text-sm text-content-muted">
          <a href={localePath(locale, "our-network")} className="text-brand-500 underline underline-offset-4">
            {locale.startsWith("ar") ? "شبكة إي في إس" : "Where EVS already operates"}
          </a>
        </p>
      </section>
    </div>
  );
}
