export default function HotelCard({ hotel }) {
  return (
    <div className="item item--accent">
      <div className="item__row">
        <h4 className="item__title">{hotel.nombre}</h4>
        <span className="price">${hotel.precioNoche}/noche</span>
      </div>
      <div className="item__row">
        <span className="item__meta">{hotel.categoria}</span>
        {hotel.disponibilidad ? (
          <span className="badge badge--ok">Disponible</span>
        ) : (
          <span className="badge badge--no">Sin disponibilidad</span>
        )}
      </div>
      <div className="chips" style={{ marginTop: "0.5rem" }}>
        {hotel.servicios.map((servicio) => (
          <span key={servicio} className="chip">
            {servicio}
          </span>
        ))}
      </div>
    </div>
  );
}
