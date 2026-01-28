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
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 22.5h4v-9h3l1-4h-4v-2a2 2 0 0 1 2-2h2v-4h-4a4 4 0 0 0-4 4v4h-3v4h3z" strokeWidth="1"/>
    </svg>
);

export const InstagramIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        className={className}
    >
        <g fill="none" stroke="currentColor" strokeWidth="1"><path strokeLinejoin="round" d="M18 6.5a.5.5 0 0 1 0-1m0 1a.5.5 0 0 0 0-1M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0"/><path d="M16.5 1.5h-9a6 6 0 0 0-6 6v9a6 6 0 0 0 6 6h9a6 6 0 0 0 6-6v-9a6 6 0 0 0-6-6Z"/></g>
    </svg>
);

export const WhatsAppIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        className={className}
    >
        <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1"><path d="M17 16.5c-1.74 1.74-5.749.257-7.753-1.747S5.76 8.74 7.5 7c.504-.504 1.198-.564 1.622-.544c.245.011.457.155.6.355l.952 1.334a1 1 0 0 1-.107 1.288l-.901.901c.166.5.7 1.7 1.5 2.5s2 1.334 2.5 1.5l.901-.9a1 1 0 0 1 1.288-.108l1.334.952c.2.143.344.355.355.6c.02.424-.04 1.118-.544 1.622Z"/><path d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5S1.5 6.201 1.5 12c0 1.912.511 3.706 1.405 5.25l-.88 4.725l4.725-.88A10.45 10.45 0 0 0 12 22.5Z"/></g>
    </svg>
);

export const CommunityIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 21 21"
        className={className}
    >
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><path d="M8.5 2.5a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3m7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"/><path fill="currentColor" d="M12.52 2.678A3 3 0 0 1 14.5 5.5v1c0 1.297-.848 2.581-2 3q1.01-1.379 1.01-3.5c0-2.122-.331-2.523-.99-3.322M17.5 17.5h1a1 1 0 0 0 1-1v-.728c0-2.17-1.71-3.83-3.847-4.667c0 0 2.847 2.395 1.847 6.395"/></g>
    </svg>
)