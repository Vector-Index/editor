async function fetchContent(url) {
    const text = await window.editor.api.get(url)
    content.value = text
}

const kwargs = { url: "https://hello.com" }
fetchContent(kwargs.url)