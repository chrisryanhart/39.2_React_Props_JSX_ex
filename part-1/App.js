const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Harrison"/>
    </div>
)



// ReactDOM.render(<App/>, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);