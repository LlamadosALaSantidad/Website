import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import type { MiracleContent } from "../types/miracle-content";
import { parseMarkdown } from "../lib/markdown";
import { PATHS } from "../constants/routes";
import Filter from "../components/ui/Filter";
import AudioPlayer from "../components/ui/AudioPlayer";
import "./miracleDetail.scss";

function EucharisticMiracleDetail() {
    const { slug } = useParams();
    const [content, setContent] = useState<MiracleContent | null>(null);

    useEffect(() => {
        async function loadMiracle() {
            const meta = await fetch(`/content/eucharistic-miracles/${slug}/metadata.json`).then(r => r.json());
            const md = await fetch(`/content/eucharistic-miracles/${slug}/index.md`).then(r => r.text());

            const parsed = await parseMarkdown(md);

            setContent({
                meta,
                markdown: parsed
            });
        }

        loadMiracle();
    }, [slug]);

    if (!content) return null;

    const { meta, markdown } = content;

    const hasAudio = meta.audio?.exists;
    const audio = hasAudio ? meta.audio?.src : "";

    return (
        <>
            <Helmet>
                <title>{meta.seo.title}</title>
                <meta key="description" name="description" content={meta.seo.description} />
            </Helmet>

            <main className="miracleDetail">
                <section
                    className="miracle_banner"
                    style={{ backgroundImage: `url(${meta.portraitImage})` }}
                >
                    <Link to={PATHS.MIRACLES}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13" strokeWidth="1" /></svg>
                        <span>Volver a Milagros Eucarísticos</span>
                    </Link>
                    <Filter
                        variant="primary"
                        state="selected"
                    >
                        {meta.region}
                    </Filter>
                    <h1>{markdown.title}</h1>
                    <div className="miracle_details">
                        <div className="miracle_detail">
                            <svg className="day_icon" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16" strokeWidth="2" /></svg>
                            <span>{meta.day}</span>
                        </div>
                        <div className="miracle_detail">
                            <svg className="location_icon" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 2)" strokeWidth="2"><path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05" /><circle cx="6.5" cy="6.5" r="2.5" /></g></svg>
                            <span>{meta.location.city}, {meta.location.country}</span>
                        </div>
                    </div>
                </section>

                <section className="miracle_content">
                    <aside className="miracle_nav">
                        <h3>Contenido</h3>
                        <ul>
                            {markdown.headings.map(h => (
                                <li key={h.id}>
                                    <a href={`#${h.id}`}>{h.text}</a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <article className="miracle_post">
                        {hasAudio && audio && <AudioPlayer src={audio} />}
                        <div className="miracle_description">
                            <p>{meta.description}</p>
                        </div>
                        <div className="miracle_md" dangerouslySetInnerHTML={{ __html: markdown.html }} />
                    </article>
                </section>
            </main>
        </>
    );
}

export default EucharisticMiracleDetail;