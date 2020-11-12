import React from 'react'
import PropTypes from 'prop-types'

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

FileName.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileName
