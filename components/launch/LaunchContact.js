import { localePath, isRtl } from "@/lib/locale";

/**
 * The only page on this site that asks the visitor for anything.
 *
 * WHAT IT DELIBERATELY DOES NOT HAVE: a phone number, an address, opening
 * hours, or LocalBusiness schema. There is no Bahrain workshop yet. Publishing
 * a placeholder number would mislead anyone who dialled it, and a placeholder
 * address is how a Google Business Profile gets suspended on the day the real
 * one is finally claimed.
 *
 * THE FORM IS A NETLIFY FORM, which needs three things to work and silently
 * collects nothing if any of them is missing:
 *
 *   1. `data-netlify="true"` on the <form>, so the build step detects it.
 *   2. A hidden `form-name` input whose value matches the form's `name`,
 *      because the browser posts to the same URL and that field is how Netlify
 *      tells one form from another.
 *   3. The markup must be in the STATIC HTML. This page is getStaticProps, so
 *      it is — a form rendered only after hydration is invisible to the build
 *      scan and never registers.
 *
 * `netlify-honeypot` adds a field real people never see and bots fill in;
 * submissions carrying it are dropped without reaching the inbox.
 */

const COPY = {
  en: {
    eyebrow: "Opening soon",
    heading: "EVS is coming to Bahrain.",
    body:
      "We build specialist electric-vehicle workshops — high-voltage diagnostics, battery health, software and bodywork — and Bahrain is next. The centre is not open yet, so there is no number to call today.",
    invite: "Leave your details and we will tell you the moment we open.",
    name: "Your name",
    email: "Email address",
    car: "What do you drive? (optional)",
    carHint: "e.g. BYD Atto 3, Tesla Model Y",
    message: "Anything you want us to know (optional)",
    submit: "Tell me when you open",
    note: "We will only use this to tell you when EVS Bahrain opens. Nothing else, and no one else.",
    orEmail: "Or email us directly:",
    dir: "ltr",
  },
  ar: {
    eyebrow: "قريباً",
    heading: "إي في إس قادمة إلى البحرين.",
    body:
      "نبني مراكز متخصصة في صيانة السيارات الكهربائية — تشخيص الجهد العالي، وصحة البطارية، والبرمجيات، والهيكل والصبغ — والبحرين هي المحطة التالية. المركز لم يفتح بعد، لذا لا يوجد رقم للاتصال اليوم.",
    invite: "اترك بياناتك وسنبلغك فور افتتاحنا.",
    name: "الاسم",
    email: "البريد الإلكتروني",
    car: "ما السيارة التي تقودها؟ (اختياري)",
    carHint: "مثال: بي واي دي آتو 3، تسلا موديل Y",
    message: "أي شيء تود إخبارنا به (اختياري)",
    submit: "أبلغني عند الافتتاح",
    note: "سنستخدم هذه البيانات فقط لإبلاغك بموعد افتتاح إي في إس البحرين. لا شيء آخر، ولا أحد آخر.",
    orEmail: "أو راسلنا مباشرة:",
    dir: "rtl",
  },
};

const EMAIL = "contact@evsworldwide.com";
const FORM_NAME = "bahrain-launch-interest";

const field =
  "w-full rounded-sm border border-line bg-surface-sunken px-4 py-3 text-content placeholder:text-content-muted focus:border-brand-500 focus:outline-none";

export default function LaunchContact({ locale = "en" }) {
  const t = COPY[String(locale).split("-")[0]] ?? COPY.en;
  const rtl = isRtl(locale);

  return (
    <div dir={rtl ? "rtl" : undefined}>
      <section className="evs-shell evs-section">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <span className="evs-eyebrow mb-6 inline-block">{t.eyebrow}</span>
            <h1 className="text-display-2 uppercase">{t.heading}</h1>
            <p className="mt-6 text-lead text-content-secondary">{t.body}</p>
            <p className="mt-4 text-lead text-content-secondary">{t.invite}</p>
          </div>

          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            netlify-honeypot="company-website"
            action={localePath(locale, "thank-you")}
            className="mt-12 flex flex-col gap-4 text-start"
          >
            {/* Netlify matches the submission to the form by this value. */}
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <input type="hidden" name="locale" value={locale} />

            {/* The honeypot. Hidden from people, irresistible to bots. */}
            <p className="hidden">
              <label>
                Do not fill this in: <input name="company-website" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-content">{t.name}</span>
              <input type="text" name="name" required autoComplete="name" className={field} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-content">{t.email}</span>
              <input type="email" name="email" required autoComplete="email" className={field} dir="ltr" />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-content">{t.car}</span>
              <input type="text" name="vehicle" placeholder={t.carHint} className={field} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-content">{t.message}</span>
              <textarea name="message" rows={3} className={field} />
            </label>

            <button type="submit" className="evs-btn evs-btn-primary evs-btn-lg mt-2 justify-center">
              {t.submit}
            </button>

            <p className="mt-2 text-sm text-content-muted">{t.note}</p>
          </form>

          <p className="mt-10 text-center text-sm text-content-muted">
            {t.orEmail}{" "}
            <a href={`mailto:${EMAIL}`} className="text-brand-500 underline underline-offset-4">
              <span dir="ltr" className={rtl ? "evs-latin" : undefined}>
                {EMAIL}
              </span>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
