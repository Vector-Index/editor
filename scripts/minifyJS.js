function minifyJS() {
    const code = content.value
    window.editor.minifyJs(code).then(result => {
        // console.log(result)
        content.value = result.code
    })
}
minifyJS()