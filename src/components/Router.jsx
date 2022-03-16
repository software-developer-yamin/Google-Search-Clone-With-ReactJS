import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Results from "./Results";

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

function Router() {
  return (
    <section className="p-4">
      <Routes>
        <Route path="/" element={<Redirect to="/search" />} />
        <Route path="search" element={<Results />} />
        <Route path="images" element={<Results />} />
        <Route path="news" element={<Results />} />
        <Route path="videos" element={<Results />} />
      </Routes>
    </section>
  );
}

export default Router;
