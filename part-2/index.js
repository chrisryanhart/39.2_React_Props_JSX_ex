const App = () => (
    <div>
        <Tweet username="u1" name="bob" date={new Date().toDateString()} message="Here's my tweet" />
        <Tweet username="u2" name="smith" date={new Date().toDateString()} message="I live to tweet" />
        <Tweet username="u3" name="sandy" date={new Date().toDateString()} message="Yay for tweeting!" />
    </div>
)



// ReactDOM.render(<App/>, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);