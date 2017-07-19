import { Config } from './my_config';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(true).toBe(true);
  });
});


describe('Config', () => {
  it('correct key paths', () => {
    expect(Config.TLS_KEY_FILENAME).toContain('.pem');
    expect(Config.TLS_CERT_FILENAME).toContain('.pem');
    console.log(Config);
    expect(Config.PORT).toBeDefined();
    expect(Config.TLS_PORT).toBeDefined();
  });
});