async function fetchContent(url) {
    const text = await window.editor.api.get(url)
    content.value = text
}
fetchContent(args.url)