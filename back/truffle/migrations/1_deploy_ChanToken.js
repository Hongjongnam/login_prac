const ChanToken = artifacts.require("ChanToken");

module.exports = function (deployer) {
  deployer.deploy(
    ChanToken
    // "text",
    // "text",
    // "https://gateway.pinata.cloud/ipfs/Qmbn1xFmAkrUuEi9nhxcH3NysdsSAwYVF2sJtMghMUGUUF"
  );
};
