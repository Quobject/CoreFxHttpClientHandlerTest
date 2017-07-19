"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_config_1 = require("./my_config");
describe('A suite', () => {
    it('contains spec with an expectation', () => {
        expect(true).toBe(true);
    });
});
describe('Config', () => {
    it('correct key paths', () => {
        expect(my_config_1.Config.TLS_KEY_FILENAME).toContain('.pem');
        expect(my_config_1.Config.TLS_CERT_FILENAME).toContain('.pem');
        expect(my_config_1.Config.PORT).toBeDefined();
        expect(my_config_1.Config.TLS_PORT).toBeDefined();
    });
});
