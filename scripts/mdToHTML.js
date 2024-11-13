function mdToHTML() {
    // console.log(content.value)
    content.value = window.editor.md.render(content.value)
}
mdToHTML()