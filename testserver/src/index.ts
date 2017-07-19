//
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as https from 'https';
import * as fs from 'fs';
import { Config } from './my_config';

const options: https.ServerOptions = {
  key: fs.readFileSync(Config.TLS_KEY_FILENAME),
  cert: fs.readFileSync(Config.TLS_CERT_FILENAME),
  requestCert: true,
};

console.log(options);

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const httpsServer = https.createServer(options, app);
httpsServer.listen(Config.TLS_PORT, () => {
  console.log('secure server listening');
});

app.get('/get', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/users', (req, res) => {
  let user_id = req.body.id;
  let token = req.body.token;
  let geo = req.body.geo;

  res.send(user_id + ' ' + token + ' ' + geo);
});

app.listen(Config.PORT, () => {
  console.log('Example app listening on port ', Config.PORT);
  console.log(`http://${Config.HOSTNAME}:${Config.PORT}/get`);
  console.log(`https://${Config.HOSTNAME}:${Config.TLS_PORT}/get`);
  console.log(`http://${Config.HOSTNAME}:${Config.PORT}/api/users`);
  console.log(`https://${Config.HOSTNAME}:${Config.TLS_PORT}/api/users`);
});
