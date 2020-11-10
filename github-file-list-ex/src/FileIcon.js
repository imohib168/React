import React from 'react'

function FileIcon({ file }) {
    let icon = "fa-file-text-o";
    if (file.type === "folder") {
        icon = "fa-folder"
    }
    return (
        <div>
            <i className={`fa ${icon}`}></i>
        </div>
    )
}

export default FileIcon
