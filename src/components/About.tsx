import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto relative"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("about.title")}
          </h2>

          {/* AQUI ESTÁ EL CAMBIO: text-lg y leading-relaxed */}
          <p className="text-lg leading-relaxed text-gray-300">
            {t("about.p1")}
          </p>

          {/* AQUI TAMBIÉN */}
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            {t("about.p2")}
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/davidrizo.jpeg"
            alt="Félix David Rizo Serrano"
            className="
              w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-2xl object-cover
              gradient-border
            "
          />
        </div>
      </div>
    </section>
  );
}