import Express from 'express';

import { handleRender } from './handleRender';

const app = Express();
const port = 3000;

app.use('/assets', Express.static('./dist/assets/'));
app.use(handleRender);
app.listen(port, () => console.log('App is listening on', port));
