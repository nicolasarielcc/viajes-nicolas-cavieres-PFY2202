import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_VIAJE } from "../graphql/queries";
import FlightCard from "../components/FlightCard";
import HotelCard from "../components/HotelCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function Destino() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_VIAJE, {
    variables: { destinoId: id },
  });

  if (loading) {
    return (
      <section>
        <Link to="/" className="back-link">
          ← Volver a destinos
        </Link>
        <Loading mensaje="Consultando vuelos y hoteles..." />
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <Link to="/" className="back-link">
          ← Volver a destinos
        </Link>
        <ErrorMessage mensaje={error.message} />
      </section>
    );
  }

  const viaje = data?.viaje;

  return (
    <section>
      <Link to="/" className="back-link">
        ← Volver a destinos
      </Link>

      <div className="hero">
        <h1>Destino #{id}</h1>
        <p>Revisa las opciones de vuelos y hoteles para tu viaje.</p>
      </div>

      {!viaje ? (
        <ErrorMessage mensaje="No hay información disponible para este destino." />
      ) : (
        <div className="two-col">
          <div>
            <h2 className="section-title">Vuelos disponibles</h2>
            <div className="list">
              {viaje.vuelos.length === 0 ? (
                <p className="state">No hay vuelos disponibles.</p>
              ) : (
                viaje.vuelos.map((vuelo) => (
                  <FlightCard key={vuelo.id} vuelo={vuelo} />
                ))
              )}
            </div>
          </div>

          <div>
            <h2 className="section-title">Hoteles disponibles</h2>
            <div className="list">
              {viaje.hoteles.length === 0 ? (
                <p className="state">No hay hoteles disponibles.</p>
              ) : (
                viaje.hoteles.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
