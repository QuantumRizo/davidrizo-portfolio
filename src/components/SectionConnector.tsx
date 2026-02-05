
import React from 'react';

interface SectionConnectorProps {
    imageSrc: string;
    altText: string;
    className?: string; // For additional tailwind classes (positioning, rotation, etc.)
}

const SectionConnector: React.FC<SectionConnectorProps> = ({ imageSrc, altText, className }) => {
    return (
        <div className={`absolute z-20 pointer-events-none ${className}`}>
            <img src={imageSrc} alt={altText} className="w-auto h-auto max-w-[200px] md:max-w-[300px]" />
        </div>
    );
};

export default SectionConnector;
