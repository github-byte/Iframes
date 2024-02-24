import React from 'react'
import './index.css'

const Project3 = () => {

    return (
        <div id="iframeContainer2">
            <iframe src={'https://en.wikipedia.org/wiki/Vietnam'} title={`CORS`} createResponsiveIframe allowfullscreen="" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe>
            <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: 30, textAlign: 'left' }}>
                <h1>Comments on Security</h1>
                The sandbox attribute is used to apply restrictions to the iframe's behavior.
                <br />Here, are specified four values:
                <br />allow-scripts: Disallows JavaScript execution within the iframe.
                <br />allow-same-origin: Disallows the iframe from accessing its parent document's DOM.
                <br />allow-popups: Disallows the iframe from opening new windows or tabs.
                <br />allow-forms: Allows form submission within the iframe.
            </div>
        </div>
    )

}

export default Project3;