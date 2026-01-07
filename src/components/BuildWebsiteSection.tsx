import { motion } from "framer-motion";
import { ArrowRight, Calendar, Globe, Monitor, Smartphone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BuildWebsiteSection = () => {
    const { t } = useTranslation();
    return (
        <section className="relative pt-0 pb-24 px-6 max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col items-center gap-8"
            >
                {/* 
                 * ELIMINADO: El div contenedor con bg-card, border, shadow, etc.
                 * Ahora el contenido flota directamente sobre el fondo.
                 */}

                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    {t("build_website.title")}
                </h2>

                <p className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                    {t("build_website.description")}
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    {/* Hice los badges un poco más sutiles para que combinen mejor con el fondo negro directo */}
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
                        <Monitor className="size-5 text-primary" /> <span className="font-medium">{t("build_website.modern_design")}</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
                        <Smartphone className="size-5 text-primary" /> <span className="font-medium">{t("build_website.fully_responsive")}</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
                        <Globe className="size-5 text-primary" /> <span className="font-medium">{t("build_website.seo_optimized")}</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
                        <MessageCircle className="size-5 text-primary" /> <span className="font-medium">{t("build_website.floating_whatsapp")}</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
                        <Calendar className="size-5 text-primary" /> <span className="font-medium">{t("build_website.booking_system")}</span>
                    </div>
                </div>

                <Link
                    to="/contact"
                    className="
                    mt-10 group relative inline-flex items-center gap-3 
                    px-8 py-4 bg-primary text-black font-bold rounded-full 
                    hover:bg-primary/90 transition-all transform hover:scale-105
                    shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]
                    "
                >
                    {t("build_website.cta")}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>

            </motion.div>
        </section>
    );
};

export default BuildWebsiteSection;
