export const template = (title, body, initialData) => {
    return `<!doctype html>
        <html>
            <head>
                <title>${title}</title>
            </head>
            <body>
                <style>
                    #root {
                        display: none;
                    }
                </style>
                <div id='root'>${body}</div>
            </body>
            <script>window._initialData=${JSON.stringify(initialData)};</script>
            <script src='app.js'></script>
            <script>
                document.getElementById('root').style.display = "block";
            </script>
        </html>`;
}