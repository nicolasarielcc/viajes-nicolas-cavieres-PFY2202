export default function Loading({ mensaje = "Cargando..." }) {
  return (
    <div className="state">
      <div className="spinner" />
      <p>{mensaje}</p>
    </div>
  );
}
