import React, { useState } from "react";
import useStore from "../../store";
import styles from "./style.module.scss";

const ImageViewer = () => {
    const { previewUrl, gridColor, textColor, itemsX, itemsY, menuCollapsed, setMenuCollapsed } = useStore();
    const [selectedIndex, setSelectedIndex] = useState(null);

    /**
     * Builds an array to build the grid.
     * 
     * @returns array
     */
    const getBlocks = () => {
        const rows = [];
        if (isNaN(itemsX) || isNaN(itemsY)) {
            return rows;
        }
        for (let rowCnt = 0; rowCnt < itemsY; rowCnt++) {
            const cols = [];
            for (let colCnt = 0; colCnt < itemsX; colCnt++) {
                cols.push(rowCnt * itemsX + colCnt);
            }
            rows.push(cols);
        }

        return rows;
    }

    /**
     * When the tile gets clicked.
     * 
     * @param {*} index 
     */
    const onTileClicked = (index) => {
        setSelectedIndex(index !== selectedIndex ? index : null);
    }

    const blocks = getBlocks();

    return <div className="box">
        <div className={styles.informationBar}>
            <div>{itemsX} x {itemsY} Items</div>
            <div>{selectedIndex && <span>Selected tile: {selectedIndex}</span>}</div>
            <div>
                {menuCollapsed && <button
                    className="button is-small"
                    onClick={() => { setMenuCollapsed(false) }}
                >
                    Settings
                </button>}
            </div>
        </div>
        <div className={styles.imageViewbox}>
            <div className={styles.grid}>
                {blocks.map((row, rowIndex) => {
                    return <div key={rowIndex} className={styles.viewBoxRow}>
                        {row.map((col, colIndex) => {
                            return <div
                                key={`${rowIndex}-${colIndex}`}
                                onClick={() => { onTileClicked(col) }}
                                className={`${styles.viewBoxCol} ${col === selectedIndex ? styles.selectedCol : ''}`}
                                style={{ borderColor: gridColor, color: textColor }}
                                title={col}>
                                {col}
                            </div>
                        })}
                    </div>
                })}
            </div>
            <img src={previewUrl} alt='Preview' />
        </div>
    </div>
}

export default ImageViewer