export default function FlightCard({ vuelo }) {
  const sinDisponibilidad = vuelo.disponibilidad === 0;

  return (
    <div className="item">
      <div className="item__row">
        <h4 className="item__title">{vuelo.aerolinea}</h4>
        <span className="price">${vuelo.precio}</span>
      </div>
      <div className="item__row">
        <span className="item__meta">
          {vuelo.origen} → {vuelo.fecha} · {vuelo.horaSalida}–{vuelo.horaLlegada}
        </span>
      </div>
      <div className="item__row" style={{ marginTop: "0.4rem" }}>
        <span className="item__meta">Cupos: {vuelo.disponibilidad}</span>
        {sinDisponibilidad ? (
          <span className="badge badge--no">Sin disponibilidad</span>
        ) : vuelo.disponibilidad <= 6 ? (
          <span className="badge badge--warn">Últimos cupos</span>
        ) : (
          <span className="badge badge--ok">Disponible</span>
        )}
      </div>
    </div>
  );
}
