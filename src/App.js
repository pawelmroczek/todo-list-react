import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/author/AuthorPage";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom";
import { StyledNavLink, StyledNavigation, StyledList } from "./styled";

const App = () => (
  <HashRouter>
    <StyledNavigation>
      <StyledList>
        <li>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">
            O autorze
          </StyledNavLink>
        </li>
      </StyledList>
    </StyledNavigation>
    <Switch>
    <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
