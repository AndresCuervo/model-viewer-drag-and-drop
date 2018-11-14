function dragover_handler(ev) {
    ev.preventDefault();
}

function loadDroppedModel(event) {
    event.preventDefault();
    let fileData = event.dataTransfer.getData("model/gltf-binary")
    let file = event.dataTransfer.files[0]
    if (!file.name.match(/\.(gltf|glb)$/)) {
        alert("This isn't a .gltf or .glb, can't load this file.")
        return;
    }
    if (event.dataTransfer.files.length > 1) {
        alert("Whoops, added more than one file, I'll load the first one!")
    }
    let url = URL.createObjectURL(file)
    event.target.src = url
}
