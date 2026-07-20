const huaweiClient = require("./huaweiClient");

async function getDeviceInformation() {
  return await huaweiClient.get("/api/device/information");
}
