import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { parseMarkdown } from "../lib/markdown";
import type { SaintContent } from "../types/saint-content";
import { PATHS } from "../constants/routes";
import Filter from "../components/ui/Filter";
import "./saintDetail.scss";

type ExtraType = "milagros" | "testimonios";

const FILE_MAP: Record<ExtraType, string> = {
    milagros: "miracles.md",
    testimonios: "testimonies.md",
};

const TITLES: Record<ExtraType, string> = {
    milagros: "Milagros",
    testimonios: "Experiencias y Testimonios",
};

function SaintExtraPage() {
    const { slug, extra } = useParams<{
        slug?: string;
        extra?: string;
    }>();

    const [content, setContent] = useState<SaintContent | null>(null);
    const [exists, setExists] = useState(true);

    const type: ExtraType | null =
        extra === "milagros" || extra === "testimonios" ? extra : null;

    useEffect(() => {
        if (!slug || !type) return;

        const extraType: ExtraType = type;

        async function loadExtra() {
            try {
                const meta = await fetch(
                    `/content/saints/${slug}/metadata.json`
                ).then(r => r.json());

                const mdResponse = await fetch(
                    `/content/saints/${slug}/${FILE_MAP[extraType]}`
                );

                if (!mdResponse.ok) {
                    setExists(false);
                    return;
                }

                const contentType = mdResponse.headers.get("content-type");

                if (!contentType?.includes("text")) {
                    throw new Error("Markdown file not found");
                }

                const md = await mdResponse.text();
                const parsed = await parseMarkdown(md);

                setContent({ meta, markdown: parsed });
            } catch {
                setExists(false);
            }
        }

        loadExtra();
    }, [slug, type]);

    if (!type) {
        return <Navigate to={PATHS.SAINTS} />;
    }

    if (!exists) {
        return <Navigate to={`${PATHS.SAINTS}/${slug}`} />;
    }

    if (!content) return null;

    const { meta, markdown } = content;

    const hasAudio = meta.audioMiracles?.exists || meta.audioTestimonies?.exists;
    const audio = hasAudio ? (meta.audioMiracles?.src || meta.audioTestimonies?.src) : "";

    return (
        <>
            <Helmet>
                <title>
                    {TITLES[type]} | {meta.name}
                </title>
                <meta
                    key="description"
                    name="description"
                    content={`${TITLES[type]} de ${meta.name}`}
                />
            </Helmet>

            <main className="saintDetail">
                <section
                    className="saint_banner"
                    style={{ backgroundImage: `url(${meta.portraitImage})` }}
                >
                    <Link to={`${PATHS.SAINTS}/${slug}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13"
                                strokeWidth="1"
                            />
                        </svg>
                        <span>Volver a la historia</span>
                    </Link>
                    <Filter
                        variant="primary"
                        state="selected"
                    >
                        {meta.category}
                    </Filter>
                    <h1>{TITLES[type]} | {meta.name}</h1>
                </section>

                <section className="saint_content">
                    <aside className="saint_nav">
                        <h3>Contenido</h3>
                        <ul>
                            {markdown.headings.map(h => (
                                <li key={h.id}>
                                    <a href={`#${h.id}`}>{h.text}</a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <article className="saint_extra">
                        {hasAudio ?
                            <div className="saint_audio">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5h3l5-5v16l-5-5h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m10 8q2-1.5 2-5t-2-5m0 3v4" strokeWidth="1" /></svg>
                                <div className="saint_audio_content">
                                    <p>Escuchar historia</p>
                                    <audio src={audio} controls />
                                </div>
                            </div>
                            :
                            null
                        }

                        <div className="saint_md" dangerouslySetInnerHTML={{ __html: markdown.html }} />
                    </article>
                </section>
            </main>
        </>
    );
}

export default SaintExtraPage;
