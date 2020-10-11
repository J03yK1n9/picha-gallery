import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { motion } from "framer-motion";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/svg+xml','image/jpeg','image/png']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file of type (svg, png or jpeg)')
        }
    }

    return (
        <form>
        <motion.label whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}>
            <input type="file"  onChange={changeHandler}/>
            <span>+</span>
            </motion.label>
            <div className="output">
                {/* if error, output error */}
                { error && <div className="error">{ error }</div> }
                {/* if file, output file name */}
                { file && <div>{ file.name }</div>}
                {/* if file, output progress bar */}
                { file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;