import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
import type { MiracleRegion } from "../types/tag";
import Card from "../components/cards/Card";
import { MIRACLES_REGIONS } from "../constants/tags";
import Filter from "../components/ui/Filter";
import Button from "../components/ui/Button";
import "./eucharisticMiracles.scss";
import type Miracle from "../types/miracle";

function EucharisticMiracles() {
    const [miracles, setMiracles] = useState<Miracle[]>([]);
    useEffect(() => {
        fetch("/content/miracles.json")
            .then(res => res.json())
            .then(data => setMiracles(data.miracles))
            .catch(console.error);
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<MiracleRegion | null>(null);

    const filteredMiracles = useMemo(() => {
        return miracles.filter(miracle => {
            const searchLower = searchTerm.toLowerCase();

            const matchesSearch =
                miracle.name.toLowerCase().includes(searchLower) ||
                miracle.description.toLowerCase().includes(searchLower) ||
                miracle.location.toLowerCase().includes(searchLower);

            const matchesRegion =
                !selectedRegion || miracle.region.includes(selectedRegion);

            return matchesSearch && matchesRegion;
        });
    }, [miracles, searchTerm, selectedRegion]);

    return (
        <>
            <Helmet>
                <title>Milagros Eucarísticos | Llamados a la Santidad</title>
                <meta key="description" name="description" content="Evidencia científica e histórica de la presencia real de Jesús en la Eucaristía." />
            </Helmet>
            <main className="eucharisticMiracles">
                <section className="page_header">
                    <h1>Milagros Eucarísticos</h1>
                    <p>Signos visibles que Dios nos ha regalado a lo largo de la historia para confirmar nuestra fe.</p>
                </section>

                <section className="page_search">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="search_term">
                            <input
                                type="text"
                                name="term"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar por lugar o descripción..."
                            />
                        </div>
                        <div className="search_filters">
                            <div className="search_categories">
                                <div className="filter_items">
                                    <Filter
                                        variant="primary"
                                        state={`${selectedRegion === null ? 'selected' : ''}`}
                                        onClick={() => setSelectedRegion(null)}
                                    >
                                        Todas
                                    </Filter>
                                    {MIRACLES_REGIONS.map(region => (
                                        <Filter
                                            variant="primary"
                                            state={`${selectedRegion === region ? 'selected' : ''}`}
                                            key={region}
                                            onClick={() => setSelectedRegion(selectedRegion === region ? null : region)}
                                        >
                                            {region}
                                        </Filter>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </form>
                </section>

                {filteredMiracles.length > 0 ?
                    <section className="page_results">
                        {filteredMiracles.map(miracle => (
                            <Card key={miracle.id} miracle={miracle} />
                        ))}
                    </section>
                    :
                    <section className="page_void">
                        <p>No se encontraron resultados para tu búsqueda.</p>
                        <Button
                            variant="error"
                            onClick={() => { setSearchTerm(''); setSelectedRegion(null) }}
                        >
                            Limpiar filtros
                        </Button>
                    </section>
                }
            </main>
        </>
    );
}

export default EucharisticMiracles;