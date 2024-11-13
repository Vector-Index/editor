// HTML (html)
function formatHTML() {
    const code = content.value
    window.editor.prettier.format(code, {
        parser: "html",
        plugins: window.editor.plugins,
    }).then(code => {
        // console.log(code)
        content.value = code
    })
}
formatHTML()