import { gql } from "@apollo/client";

export const GET_VIAJE = gql`
  query GetViaje($destinoId: ID!) {
    viaje(destinoId: $destinoId) {
      destinoId
      vuelos {
        id
        aerolinea
        origen
        fecha
        horaSalida
        horaLlegada
        precio
        disponibilidad
      }
      hoteles {
        id
        nombre
        categoria
        precioNoche
        disponibilidad
        servicios
      }
    }
  }
`;
