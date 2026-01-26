import { SOCIAL_LINKS } from "../../constants/social-links";

interface Props {
    className?: string; // Para la clase general del <ul>
}

const SocialMenu = ({ className }: Props) => {
    return (
        <ul className={`social ${className}`}>
            {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                    <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={link.name}
                    >
                        <link.icon className="social-icon" />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialMenu;