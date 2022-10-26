const App = () => (
    <div>
        <Person name="Billy" age={30} hobbies={["climbing","hiking"]} />
        <Person name="Hippopatamus" age={20} hobbies={["running","fishing","walking"]} />
        <Person name="Sam" age={17} hobbies={["sitting"]} />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);