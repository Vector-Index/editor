async function fetchScript(script) {
    const url = `https://raw.githubusercontent.com/Vector-Index/editor/refs/heads/main/scripts/${script}.js`
    const text = await window.utils.api.get(url)
    content.value = text
}
fetchScript(args.script)