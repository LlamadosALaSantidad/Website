import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { parseMarkdown } from "..//lib/markdown";
import type { SaintContent } from "../types/saint-content";
import { PATHS } from "../constants/routes";
import Filter from "../components/ui/Filter";
import "./saintDetail.scss";
import AudioPlayer from "../components/ui/AudioPlayer";

function SaintDetail() {
    const { slug } = useParams();
    const [content, setContent] = useState<SaintContent | null>(null);

    useEffect(() => {
        async function loadSaint() {
            const meta = await fetch(`/content/saints/${slug}/metadata.json`).then(r => r.json());
            const md = await fetch(`/content/saints/${slug}/index.md`).then(r => r.text());

            const parsed = await parseMarkdown(md);

            setContent({
                meta,
                markdown: parsed
            });
        }

        loadSaint();
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

            <main className="saintDetail">
                <section
                    className="saint_banner"
                    style={{ backgroundImage: `url(${meta.portraitImage})` }}
                >
                    <Link to={PATHS.SAINTS}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13" strokeWidth="1" /></svg>
                        <span>Volver a Santos</span>
                    </Link>
                    <Filter
                        variant="primary"
                        state="selected"
                    >
                        {meta.category}
                    </Filter>
                    <h1>{markdown.title}</h1>
                    <div className="saint_details">
                        <div className="saint_detail">
                            <svg className="day_icon" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16" strokeWidth="2" /></svg>
                            <span>{meta.feastDay}</span>
                        </div>
                        <div className="saint_detail">
                            <svg className="location_icon" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 2)" strokeWidth="2"><path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05" /><circle cx="6.5" cy="6.5" r="2.5" /></g></svg>
                            <span>{meta.location.city}, {meta.location.country}</span>
                        </div>
                    </div>
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

                        <h4>Etiquetas</h4>
                        <div className="saint_nav_tags">
                            {meta.tags.map((tag: string) => (
                                <span key={tag}>#{tag}</span>
                            ))}
                        </div>
                    </aside>

                    <article className="saint_history">
                        {hasAudio && audio && <AudioPlayer src={audio} />}
                        <div className="saint_description">
                            <p>{meta.description}</p>
                        </div>
                        <div className="saint_md" dangerouslySetInnerHTML={{ __html: markdown.html }} />
                        <div className="saint_links">
                            {meta.related?.miraclesPage && (
                                <div className="saint_miracles_card">
                                    <h3>Milagros Asociados</h3>
                                    <p>Descubre los milagros atribuidos a su intercesión (distintos a los eucarísticos).</p>
                                    <Link to={`${PATHS.SAINTS}/${slug}/milagros`}><button>Ver milagros</button></Link>
                                </div>
                            )}

                            {meta.related?.testimoniesPage && (
                                <div className="saint_experiences_card">
                                    <h3>Experiencias y Testimonios</h3>
                                    <p>Lee cómo San Francisco de Asís ha intercedido en la vida de otras personas.</p>
                                    <Link to={`${PATHS.SAINTS}/${slug}/testimonios`}><button>Leer testimonios</button></Link>
                                </div>
                            )}
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default SaintDetail;