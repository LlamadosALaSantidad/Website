interface IconProps {
    className?: string;
}

export const FacebookIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        className={className}
    >
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 22.5h4v-9h3l1-4h-4v-2a2 2 0 0 1 2-2h2v-4h-4a4 4 0 0 0-4 4v4h-3v4h3z" stroke-width="1"/>
    </svg>
);

export const InstagramIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        className={className}
    >
        <g fill="none" stroke="currentColor" stroke-width="1"><path stroke-linejoin="round" d="M18 6.5a.5.5 0 0 1 0-1m0 1a.5.5 0 0 0 0-1M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0"/><path d="M16.5 1.5h-9a6 6 0 0 0-6 6v9a6 6 0 0 0 6 6h9a6 6 0 0 0 6-6v-9a6 6 0 0 0-6-6Z"/></g>
    </svg>
);

export const WhatsAppIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        className={className}
    >
        <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1"><path d="M17 16.5c-1.74 1.74-5.749.257-7.753-1.747S5.76 8.74 7.5 7c.504-.504 1.198-.564 1.622-.544c.245.011.457.155.6.355l.952 1.334a1 1 0 0 1-.107 1.288l-.901.901c.166.5.7 1.7 1.5 2.5s2 1.334 2.5 1.5l.901-.9a1 1 0 0 1 1.288-.108l1.334.952c.2.143.344.355.355.6c.02.424-.04 1.118-.544 1.622Z"/><path d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5S1.5 6.201 1.5 12c0 1.912.511 3.706 1.405 5.25l-.88 4.725l4.725-.88A10.45 10.45 0 0 0 12 22.5Z"/></g>
    </svg>
);

export const NewsletterIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 21 21"
    >
        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M3.5 6.5v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2"/><path d="m5.5 7.5l5 3l5-3"/></g>
    </svg>
)