import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../components/icons/SocialIcons";

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
}

export const SOCIAL_LINKS: SocialLink[] = [
    { name: "Facebook", url: "https://www.facebook.com/groups/4158382704411584", icon: FacebookIcon },
    { name: "Instagram", url: "https://www.instagram.com/alasantidadllamados/", icon: InstagramIcon },
    { name: "WhatsApp", url: "https://wa.me/573332530439", icon: WhatsAppIcon },
];
