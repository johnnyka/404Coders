const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/index.html');
});
app.get('/:name', (req, res) => {
  res.redirect(`/${req.params.name}.html`);
  res.end();
});


app.listen(port, () => console.log(`Server started on port ${port}`));
