let modelViewerStyle = document.querySelector('model-viewer').shadowRoot.querySelector('style');
modelViewerStyle.insertAdjacentHTML('beforeend',
`
:host { width: 100vw; height: 50vw; }
@media(min-width: 800px) {
    :host {
        width: 70vw;
        height: 35vw;
    }
}
`);
