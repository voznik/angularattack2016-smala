export const getTemplate = () => localStorage.getItem('template') || `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<h1>THIS is default template.</h1>

<p>Do something with it!</p>

</body>
</html>`;
