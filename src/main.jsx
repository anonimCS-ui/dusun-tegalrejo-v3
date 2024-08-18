import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Page/Home/index.jsx";
import History from "./components/Page/History/index.jsx";
import Manager from "./components/Page/Manager/index.jsx";
import AboutUs from "./components/Page/AboutUs/index.jsx";
import Activity from "./components/Page/Activity/index.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/beranda",
    element: <Home />,
  },
  {
    path: "/tentang-dukuh",
    element: <AboutUs />,
  },
  {
    path: "/fasilitas-dukuh",
    element: <History />,
  },
  {
    path: "/perangkat-dukuh",
    element: <Manager />,
  },
  {
    path: "/aktivitas-dukuh",
    element: <Activity.Main />,
  },
  {
    path: "/aktivitas-dukuh/bermain-bola-voli",
    element: <Activity.VolleyBall />,
  },
  {
    path: "/aktivitas-dukuh/pelaksanaan-tpa",
    element: <Activity.DoingTPA />,
  },
  {
    path: "/aktivitas-dukuh/kumpulan-pkk",
    element: <Activity.GatheringPKK />,
  },
  {
    path: "/aktivitas-dukuh/kumpulan-rt",
    element: <Activity.GatheringRT />,
  },
  {
    path: "/aktivitas-dukuh/kumpulan-pemuda-pemudi",
    element: <Activity.GatheringYoungest />,
  },
  {
    path: "/aktivitas-dukuh/senam-bersama",
    element: <Activity.Gymnastics />,
  },
  {
    path: "/aktivitas-dukuh/posyandu",
    element: <Activity.Posyandu />,
  },
  {
    path: "/aktivitas-dukuh/dasawisma",
    element: <Activity.Dasawisma />,
  },
  {
    path: "/aktivitas-dukuh/kerja-bakti",
    element: <Activity.KerjaBakti />,
  },
  {
    path: "/aktivitas-dukuh/lomba-17-agustus",
    element: <Activity.Lomba17Agustus />,
  },
  {
    path: "/aktivitas-dukuh/malam-tirakatan",
    element: <Activity.Tirakatan />,
  },
  {
    path: "/aktivitas-dukuh/karawitan",
    element: <Activity.Karawitan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
