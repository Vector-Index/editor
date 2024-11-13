function minifyJSON() {
    const code = content.value
    content.value = JSON.stringify(code)
}
minifyJSON()