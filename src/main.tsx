import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import GridDefault from './components/GridDefault.tsx'
import GridPaging from './components/GridPaging.tsx';
import GridSorting from './components/GridSorting';
import GridFiltering from './components/GridFiltering.tsx';
import GridSearching from './components/GridSearching.tsx';
import GridEditing from './components/GridEditing.tsx';
import GridColumn from './components/GridColumn.tsx';
import AllFeatures from './components/AllFeatures.tsx';
import GridAggregate from './components/GridAggregate.tsx';
import Grid1MRecords from './components/Grid1MRecords.tsx'
import GridProps from './components/GridProps.tsx'
import GridSelection from './components/GridSelection.tsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';

createRoot(document.getElementById('root')!).render(

  <Router>

    <nav className="nav">
      <NavLink to="/" className="nav-link">
        Default
      </NavLink>
      <NavLink to="/gridprops" className="nav-link">
        Grid Props
      </NavLink>
      <NavLink to="/columns" className="nav-link">
        Column Props
      </NavLink>
      <NavLink to="/paging" className="nav-link">
        Paging
      </NavLink>
      <NavLink to="/sorting" className="nav-link">
        Sorting
      </NavLink>
      <NavLink to="/filtering" className="nav-link">
        Filtering
      </NavLink>
      <NavLink to="/searching" className="nav-link">
        Searching
      </NavLink>
      <NavLink to="/selection" className="nav-link">
        Selection
      </NavLink>
      <NavLink to="/editing" className="nav-link">
        Editing
      </NavLink>
      {/* <NavLink to="/aggregate" className="nav-link">
        Aggregate
      </NavLink> */}
      <NavLink to="/allfeatures" className="nav-link">
        All Features
      </NavLink>
      <NavLink to="/1mrecords" className="nav-link">
        1M Records
      </NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<GridDefault />} />
      <Route path="/paging" element={<GridPaging />} />
      <Route path="/filtering" element={<GridFiltering />} />
      <Route path="/sorting" element={<GridSorting />} />
      <Route path="/searching" element={<GridSearching />} />
      <Route path="/editing" element={<GridEditing />} />
      <Route path="/columns" element={<GridColumn />} />
      <Route path="/aggregate" element={<GridAggregate />} />
      <Route path="/allfeatures" element={<AllFeatures />} />
      <Route path="/1mrecords" element={<Grid1MRecords />} />
      <Route path="/gridprops" element={<GridProps />} />
      <Route path="/selection" element={<GridSelection />} />
    </Routes>
  </Router>
)
