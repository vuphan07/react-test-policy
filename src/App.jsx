import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Stepper, Step } from "react-form-stepper";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Stepper
          steps={[
            { label: "Personal details" },
            { label: "Course details" },
            { label: "Summary" },
          ]}
          activeStep={2}
          styleConfig={{
            activeBgColor: "#2b7cff",
            activeTextColor: "#fff",
            inactiveBgColor: "#fff",
            inactiveTextColor: "#2b7cff",
            completedBgColor: "#fff",
            completedTextColor: "#2b7cff",
            size: "3em",
          }}
          className={"stepper"}
          stepClassName={"stepper__step"}
        />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
