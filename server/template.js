export const template = (title, body, initialData) => {
    return `<!doctype html>
        <html>
            <head>
                <title>${title}</title>
                <link rel="stylesheet" href="bootstrap-4.1.1-dist/css/bootstrap.min.css" >
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
            <script src="jquery/jquery-3.3.1.slim.min.js"></script>
            <script src="bootstrap-4.1.1-dist/js/bootstrap.min.js" ></script>
            <script src='app.js'></script>
            <script>
                document.getElementById('root').style.display = "block";
            </script>
        </html>`;
}