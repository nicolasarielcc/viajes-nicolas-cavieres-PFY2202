import { http, graphql, HttpResponse, delay } from "msw";
import { destinos, viajes } from "../data/destinos";

export const handlers = [
  http.get("*/api/destinos", async () => {
    await delay(600);
    return HttpResponse.json(destinos);
  }),

  graphql.query("GetViaje", async ({ variables }) => {
    await delay(600);
    const { destinoId } = variables;
    const viaje = viajes[destinoId];

    if (!viaje) {
      return HttpResponse.json({
        errors: [{ message: `No se encontró información para el destino ${destinoId}` }],
      });
    }

    return HttpResponse.json({
      data: {
        viaje: {
          destinoId,
          vuelos: viaje.vuelos,
          hoteles: viaje.hoteles,
        },
      },
    });
  }),
];
