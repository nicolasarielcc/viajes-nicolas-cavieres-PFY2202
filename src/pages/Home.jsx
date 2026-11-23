import { useState, useEffect } from "react";
import DestinationCard from "../components/DestinationCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const [destinos, setDestinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let activo = true;

    async function cargarDestinos() {
      setLoading(true);
      setError(null);
      try {
        const respuesta = await fetch(`${import.meta.env.BASE_URL}api/destinos`);
        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status} al cargar los destinos`);
        }
        const datos = await respuesta.json();
        if (activo) {
          setDestinos(datos);
        }
      } catch (err) {
        if (activo) {
          setError(err.message);
        }
      } finally {
        if (activo) {
          setLoading(false);
        }
      }
    }

    cargarDestinos();

    return () => {
      activo = false;
    };
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>Explora tu próximo destino</h1>
        <p>
          Selecciona un destino para conocer los vuelos y hoteles disponibles y
          planificar tu viaje ideal.
        </p>
      </div>

      <h2 className="section-title">Destinos disponibles</h2>

      {loading && <Loading mensaje="Cargando destinos..." />}
      {error && <ErrorMessage mensaje={error} />}

      {!loading && !error && (
        <div className="destinos-grid">
          {destinos.map((destino) => (
            <DestinationCard key={destino.id} destino={destino} />
          ))}
        </div>
      )}
    </section>
  );
}
