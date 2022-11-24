export default {
  port: process.env.PORT_TOOL_MQTT,
  host: `mqtt://${process.env.HOST_TOOL_MQTT}`,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: process.env.USERNAME_TOOL_MQTT,
  password: process.env.PASSWORD_TOOL_MQTT,
  keepalive: 60,
  reconnectPeriod: 1000,
  protocolId: 'MQIsdp',
  protocolVersion: 3,
  clean: true,
  encoding: 'utf8'
}
