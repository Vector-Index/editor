function makeDonut(commentPrefix, commentSuffix, fillCharacter) {
    content.value = window.editor.ascii.donut.make(content.value, commentPrefix, commentSuffix, fillCharacter)
}

const kwargs = {
    prefix: "//",
    suffix: "",
    fill: "-"
}
makeDonut(kwargs.prefix, kwargs.suffix, kwargs.fill)