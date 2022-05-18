import React, { useState, useRef, useEffect } from "react";
import './FileUpload.css'
import { Button } from "bootstrap";
import imagen from "../assets/image.svg"
import check from "../assets/check.svg"
import { LinearProgress, Box } from "@mui/material";

const FileUpload = ({
  label,
  ...otherProps
}) => {
    const fileInputField = useRef(null);
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [imageUploaded, setImageUploaded] = useState(false)

    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    const handleNewFileUpload = (e) => {
        
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img)
            setIsLoading(true)
        }
    };

    useEffect(() => {
        if(image) {
            setTimeout(() => {
                setIsLoading(false)
                setImageUploaded(true)
            }, 4000)
        }
        console.log(image)
        console.log(imageUploaded)
    }, [image]);

    return(
        <>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="card-drag">
                    {imageUploaded ?
                        (<>
                            <img src={check} alt="check" height={35} width={35} className=""/>
                            <h3>Uploaded Successfully!</h3>
                            <img className="w-100 image-uploaded" src={URL.createObjectURL(image)} alt=""/>
                            <Box className="box" component="span" sx={{ p: 0.3, border: '1px solid #E0E0E0', borderRadius: '8px', backgroundColor: '#F6F8FB', display: 'flex', alignItems: 'center', marginTop: '25px' }}>
                                <p>{URL.createObjectURL(image)}</p>
                                <button onClick={() => {navigator.clipboard.writeText(URL.createObjectURL(image))}}>Copy Link</button>
                            </Box>
                        </>)
                        :                        
                        (<>
                            {isLoading ? 
                                (<>
                                    <h4>Uploading...</h4>
                                    <LinearProgress />
                                </>)
                            : 
                                (<>
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
                                </>)
                            }
                        </>)
                    }
                </div>
            </div>
        </>
    )
}

export default FileUpload