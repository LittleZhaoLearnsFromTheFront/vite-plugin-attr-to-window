
export default (attrs: { [key: string]: string }) => {
    return {
        name: 'vite-plugin-attr-to-window',
        transformIndexHtml: (html: string) => {
            let attrString = ''
            Object.keys(attrs).forEach(key => {
                attrString += `window.${key}="${attrs[key]}"\n`
            })
            return {
                html,
                tags: [{
                    tag: 'script',
                    attrs: {
                        type: 'module'
                    },
                    children: attrString,
                    injectTo: 'head'
                }]
            }
        }
    }
}