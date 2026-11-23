import { HashRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./graphql/client";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Destino from "./pages/Destino";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destino/:id" element={<Destino />} />
          </Route>
        </Routes>
      </HashRouter>
    </ApolloProvider>
  );
}
