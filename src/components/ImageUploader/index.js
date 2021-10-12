import React, { useRef } from 'react';
import useStore from '../../store';
import styles from "./style.module.scss";

const ImageUploader = () => {
    const { setImage, setPreviewUrl } = useStore();
    const fileInput = useRef(null);

    const handleFile = file => {
        //you can carry out any file validations here...
        setImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    }

    const handleOndragOver = event => {
        event.preventDefault();
    }

    const handleOndrop = event => {
        //prevent the browser from opening the image
        event.preventDefault();
        event.stopPropagation();
        //let's grab the image file
        handleFile(event.dataTransfer.files[0]);
    }

    return (
        <div
            className={styles.dropZone}
            onDragOver={handleOndragOver}
            onDrop={handleOndrop}
            onClick={() => fileInput.current.click()}
        >
            <p>Click to select or drag and drop image here....</p>
            <input
                type="file"
                accept='image/*'
                ref={fileInput} hidden
                onChange={e => handleFile(e.target.files[0])}
            />
        </div>
    )
}

export default ImageUploader;