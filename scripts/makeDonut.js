function makeDonut(commentPrefix, commentSuffix, fillCharacter) {
    content.value = window.editor.ascii.donut.make(content.value, commentPrefix, commentSuffix, fillCharacter)
}
makeDonut(args.prefix, args.suffix, args.fill)