import "./App.css";
import ImageUploader from "./components/ImageUploader";
import ImageViewer from "./components/ImageView";
import TileSettings from "./components/TileSettings";
import useStore from "./store";

function App() {
  const { image, menuCollapsed } = useStore();

  return (
    <div className="App">
      <nav
        className="navbar is-dark is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-item has-text-light">Tilemap Indexer</div>
        </div>
      </nav>
      <div className="container has-padding-top-20 pt-5 pb-5">
        <div className="columns">
          {image && (
            <>
              <div className="column">
                <ImageViewer />
              </div>
              {!menuCollapsed && (
                <div className="column is-one-fifth">
                  <TileSettings />
                </div>
              )}
            </>
          )}
        </div>
        {!image && <ImageUploader />}
      </div>
    </div>
  );
}

export default App;
