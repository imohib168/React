import React from 'react'

import FileIcon from './FileIcon'

function FileName({ file }) {
    return (
        <div className="file-name">
            <div>
                <FileIcon file={file} />
            </div>
            <div className="file">
                {file.name}
            </div>
        </div>
    )
}

export default FileName
