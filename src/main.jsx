import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import ReactDom from 'react-dom/client';
import ProjectRoutes from "./ProjectRoutes.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDom.createRoot(document.getElementById('root')).render(
  <Router>
    <ProjectRoutes />
  </Router>
);
