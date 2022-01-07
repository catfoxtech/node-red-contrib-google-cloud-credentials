module.exports = function (RED) {
    'use strict';

    function CredentialsConfig(config) {
        RED.nodes.createNode(this, config);
    }

    RED.nodes.registerType('gcp-credentials-config', CredentialsConfig, {
        credentials: {
            privateKey: {
                type: 'text'
            }
        }
    });
}
