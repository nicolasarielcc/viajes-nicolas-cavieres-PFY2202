import { Link } from "react-router-dom";

const BANDERAS = {
  Chile: "🇨🇱",
  Argentina: "🇦🇷",
  "Perú": "🇵🇪",
  Brasil: "🇧🇷",
  "España": "🇪🇸",
};

export default function DestinationCard({ destino }) {
  return (
    <article className="card">
      <div className="card__header">
        <span className="card__emoji">{BANDERAS[destino.pais] ?? "🌍"}</span>
        <div>
          <h3 className="card__title">{destino.ciudad}</h3>
          <p className="card__subtitle">{destino.pais}</p>
        </div>
      </div>
      <p className="card__desc">{destino.descripcion}</p>
      <div className="chips">
        {destino.actividades.map((actividad) => (
          <span key={actividad} className="chip">
            {actividad}
          </span>
        ))}
      </div>
      <Link to={`/destino/${destino.id}`} className="btn btn--block">
        Ver vuelos y hoteles
      </Link>
    </article>
  );
}
