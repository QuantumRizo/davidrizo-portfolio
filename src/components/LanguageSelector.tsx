import { useTranslation } from "react-i18next";
import { GB, ES } from "country-flag-icons/react/3x2";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2 border-l border-white/10 pl-4 ml-2">
            <button
                onClick={() => changeLanguage('es')}
                className={`w-8 h-6 rounded overflow-hidden transition-all ${i18n.language === 'es' ? 'opacity-100 scale-110 shadow-md ring-2 ring-primary/50' : 'opacity-70 hover:opacity-100 hover:scale-105'}`}
                title="Español"
            >
                <ES className="w-full h-full object-cover" />
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`w-8 h-6 rounded overflow-hidden transition-all ${i18n.language === 'en' ? 'opacity-100 scale-110 shadow-md ring-2 ring-primary/50' : 'opacity-70 hover:opacity-100 hover:scale-105'}`}
                title="English"
            >
                <GB className="w-full h-full object-cover" />
            </button>
        </div>
    );
};

export default LanguageSelector;
