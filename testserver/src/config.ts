import * as path from 'path';

const keyPathBase = path.resolve(__dirname, '..', '..', '..', '..', 'keys');

export class Config {
  public static TLS_KEY_FILENAME = path.resolve(keyPathBase, 'privkey4.pem');
  public static TLS_CERT_FILENAME = path.resolve(keyPathBase, 'cert4.pem');
  public static PORT = 80;
  public static TLS_PORT = 443;
}