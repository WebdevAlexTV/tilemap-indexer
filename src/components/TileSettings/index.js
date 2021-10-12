import React from "react";
import useStore from "../../store";
import styles from "./style.module.scss";

const TileSettings = () => {
    const { image, itemsX, itemsY, setItemsX, setItemsY, setImage, setPreviewUrl, gridColor, setGridColor, textColor, setTextColor, setMenuCollapsed } = useStore();

    const onNewImage = () => {
        setImage(null);
        setPreviewUrl(null);
    }

    return <div className={`box ${styles.settingsBox}`}>
        <button className={`delete is-small ${styles.closeButton}`} onClick={() => { setMenuCollapsed(true) }}></button>
        <h2 className="headline is-2">Settings</h2>
        <div className={styles.imageName} title={image.name}>{image.name}</div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">X-Axis</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input
                            value={itemsX}
                            onChange={(event) => { setItemsX(event.target.value) }}
                            min="0"
                            className="input"
                            type="number"
                            placeholder="Items on X axis" />
                    </p>
                </div>
            </div>
        </div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Y-Axis</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input
                            value={itemsY}
                            onChange={(event) => { setItemsY(event.target.value) }}
                            min="0"
                            className="input"
                            type="number"
                            placeholder="Items on X axis" />
                    </p>
                </div>
            </div>
        </div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Grid</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input
                            value={gridColor}
                            onChange={(event) => { setGridColor(event.target.value) }}
                            className="input"
                            type="color"
                            placeholder="Color for the grid" />
                    </p>
                </div>
            </div>
        </div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Text</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input
                            value={textColor}
                            onChange={(event) => { setTextColor(event.target.value) }}
                            className="input"
                            type="color"
                            placeholder="Color for the text" />
                    </p>
                </div>
            </div>
        </div>
        <button className="button is-fullwidth" onClick={onNewImage}>New image</button>
    </div>
};

export default TileSettings