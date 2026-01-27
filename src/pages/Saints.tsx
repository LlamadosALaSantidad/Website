import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import saintsData from "../content/saints.json"
import Card from "../components/cards/Card";
import type { SaintCategory } from "../types/tag";
import { SAINTS_CATEGORIES } from "../constants/tags";
import Filter from "../components/ui/Filter";
import Button from "../components/ui/Button";

function Saints() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<SaintCategory | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const availableTags = useMemo(() => {
        const tags = new Set<string>();
        saintsData.saints.forEach(saint => saint.tags.forEach(tag => tags.add(tag)));
        return Array.from(tags).sort();
    }, []);

    const filteredSaints = useMemo(() => {
        return saintsData.saints.filter(saint => {
            const searchLower = searchTerm.toLowerCase();
            
            const matchesSearch =
                saint.name.toLowerCase().includes(searchLower) ||
                saint.description.toLowerCase().includes(searchLower);

            const matchesCategory = !selectedCategory || 
                saint.categories.includes(selectedCategory);

            const matchesTag = !selectedTag || 
                saint.tags.includes(selectedTag);

            return matchesSearch && matchesCategory && matchesTag;
        });
    }, [searchTerm, selectedCategory, selectedTag]);

    return (
        <>
            <Helmet>
                <title>Santos | Llamados a la Santidad</title>
                <meta name="description" content="Explora el catálogo de santos de la Iglesia Católica." />
            </Helmet>
            <main className="saints">
                <section className="page_header">
                    <h1>Santos</h1>
                    <p>Hombres y mujeres que hicieron de su vida una ofrenda de amor. Encuentra inspiración en sus historias.</p>
                </section>

                <section className="page_search">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="search_term">
                            <input
                                type="text"
                                name="term"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar por nombre o descripción..."
                            />
                        </div>
                        <div className="search_filters">
                            <div className="search_categories">
                                <div className="filter_header">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5h12m-10 3h8m-6 3h4" stroke-width="1"/></svg>
                                    <span>Categoría</span>
                                </div>
                                <div className="filter_items">
                                    <Filter
                                        variant="primary"
                                        state={`${selectedCategory === null ? 'selected' : ''}`}
                                        type="button"
                                        onClick={() => setSelectedCategory(null)}
                                    >
                                        Todas
                                    </Filter>
                                    {SAINTS_CATEGORIES.map(category => (
                                        <Filter
                                            variant="primary"
                                            state={`${selectedCategory === category ? 'selected' : ''}`}
                                            type="button"
                                            key={category}
                                            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                                        >
                                            {category}
                                        </Filter>
                                    ))}
                                </div>
                            </div>
                            <div className="search_tags">
                                <div className="filter_header">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" transform="translate(3 3)"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.914.5H12.5a2 2 0 0 1 2 2v3.586a1 1 0 0 1-.293.707l-6.793 6.793a2 2 0 0 1-2.828 0l-3.172-3.172a2 2 0 0 1 0-2.828L8.207.793A1 1 0 0 1 8.914.5" stroke-width="1"/><circle cx="12" cy="3" r="1" fill="currentColor"/></g></svg>
                                    <span>Etiquetas</span>
                                </div>
                                <div className="filter_items">
                                    <Filter
                                        variant="secondary"
                                        state={`${selectedTag === null ? 'selected' : ''}`}
                                        type="button"
                                        onClick={() => setSelectedTag(null)}
                                    >
                                        Todas
                                    </Filter>
                                    {availableTags.map(tag => (
                                        <Filter
                                            variant="secondary"
                                            state={`${selectedTag === tag ? 'selected' : ''}`}
                                            type="button"
                                            key={tag}
                                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                                        >
                                            {tag}
                                        </Filter>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {(selectedCategory || selectedTag) && (
                            <div className="search_summary">
                                <span>Filtros activos:</span>
                                {selectedCategory && (
                                    <Filter variant="primary-close">
                                        {selectedCategory}
                                        <button onClick={() => setSelectedCategory(null)}>×</button>
                                    </Filter>
                                )}
                                {selectedTag && (
                                    <Filter variant="secondary-close">
                                        {selectedTag}
                                        <button onClick={() => setSelectedTag(null)}>×</button>
                                    </Filter>
                                )}
                                <Button
                                    variant="error"
                                    onClick={() => { setSelectedCategory(null); setSelectedTag(null); setSearchTerm('') }}
                                >
                                    Limpiar filtros
                                </Button>
                            </div>
                        )}
                    </form>
                </section>

                {filteredSaints.length > 0 ?
                    <section className="page_results">
                        {filteredSaints.map(saint => (
                            <Card key={saint.id} saint={saint} />
                        ))}
                    </section>
                    :
                    <section className="page_void">
                        <p>No se encontraron resultados para tu búsqueda.</p>
                    </section>
                }
            </main>
        </>
    );
}

export default Saints;