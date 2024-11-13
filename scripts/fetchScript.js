async function fetchScript(script) {
    const url = `https://raw.githubusercontent.com/Vector-Index/editor/refs/heads/main/scripts/${script}.js`
    const text = await window.editor.api.get(url)
    content.value = text
}

const kwargs = { script: "bar" }
fetchScript(kwargs.script)