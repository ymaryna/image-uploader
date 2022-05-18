import React, { useState, useRef, useEffect } from "react";
import './FileUpload.css'
import { Button } from "bootstrap";
import imagen from "../assets/image.svg"

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
//   updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    // const addNewFiles = (newFiles) => {
    //     for (let file of newFiles) {
    //     if (file.size < maxFileSizeInBytes) {
    //         if (!otherProps.multiple) {
    //         return { file };
    //         }
    //         files[file.name] = file;
    //     }
    //     }
    //     return { ...files };
    // };

    // const callUpdateFilesCb = (files) => {
    //     const filesAsArray = convertNestedObjectToArray(files);
    //     updateFilesCb(filesAsArray);
    // };

    // const handleNewFileUpload = (e) => {
    //     const { files: newFiles } = e.target;
    //     if (newFiles.length) {
    //     let updatedFiles = addNewFiles(newFiles);
    //     setFiles(updatedFiles);
    //     // callUpdateFilesCb(updatedFiles);
    //     }
    // };

    const handleNewFileUpload = (e) => {
        // debugger
        // if (e.target.files && e.target.files[0]) {
        //     let img = e.target.files[0];
        //     setImage(img)
        // }
    };

    useEffect(() => {
        debugger
        console.log(image)
    }, [files]);


    // const removeFile = (fileName) => {
    //     delete files[fileName];
    //     setFiles({ ...files });
    //     // callUpdateFilesCb({ ...files });
    // };

    return(
        <>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="card-drag">
                    <h3>Upload your image</h3>
                    <p className="specs">File should be Jpeg, Png,...</p>
                    <div className="drop">
                        <img src={imagen} alt="imagen de fondo" />
                        <p>Drag & Drop your image here</p>
                        <input
                            type="file"
                            ref={fileInputField}
                            onChange={handleNewFileUpload}
                            title=""
                            defaultValue=""
                            {...otherProps}
                        />
                    </div>
                    <p className="or">Or</p>
                    <button type="button" onClick={handleUploadBtnClick}>Choose a file</button>
                </div>
            </div>
            
            {/* <section>
                <label>{label}</label>
                <p>Drag and drop your files anywhere or</p>
                <button type="button" onClick={handleUploadBtnClick}>
                    <i className="fas fa-file-upload" />
                    <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
                </button>
                <input
                type="file"
                ref={fileInputField}
                onChange={handleNewFileUpload}
                title=""
                defaultValue=""
                {...otherProps}
                />
            </section>

            <article>
                <span>To Upload</span>
                <section>
                    {Object.keys(files).map((fileName, index) => {
                        let file = files[fileName];
                        
                        let isImageFile = file.type.split("/")[0] === "image";
                        return (
                        <section key={fileName}>
                        <div>
                            {isImageFile && (
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`file preview ${index}`}
                            />
                            )}
                            <div isimagefile={isImageFile.toString()}>
                                <span>{file.name}</span>
                                <aside>
                                    <span>{convertBytesToKB(file.size)} kb</span>
                                    <i className="fas fa-trash-alt" onClick={() => removeFile(fileName)} />
                                </aside>
                            </div>
                        </div>
                        </section>
                    );
                    })}
                </section>
            </article> */}
        </>
    )
}

export default FileUpload