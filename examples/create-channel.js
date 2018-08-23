const simple = require('./simple');

(async () => {
  const network = simple;

  const client = await network.getOrdererClient();

  const ordererOpt = network.ordererOptions;
  const orderer = client.newOrderer(ordererOpt.url, ordererOpt.tls);

  const resp = await client.createChannel(orderer, 'my-channel', network.channelTx);
  console.log(resp);
})().catch(console.log);