import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // request: (operation) => {
  //   const token = localStorage.getItem("id_token");

  //   operation.setContext({
  //     headers: {
  //       authorization: token ? `Bearer ${token}` : "",
  //     },
  //   });
  // },
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Navbar />
      </>
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
