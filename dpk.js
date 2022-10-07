const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;
const HASH_TYPE = "sha3-512";
const DIGEST_TYPE = "hex";


exports.deterministicPartitionKey = (event) => {
  
  if(!event) return TRIVIAL_PARTITION_KEY;

  let candidate = event.partitionKey ? event.partitionKey : createHashFromCandidate(JSON.stringify(event));

  if(!candidate) return TRIVIAL_PARTITION_KEY;

  candidate = typeof candidate !== "string" ? JSON.stringify(candidate) : candidate;
  
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return createHashFromCandidate(candidate)
  }

  return candidate;
};

const createHashFromCandidate = (data) => {
  return crypto.createHash(HASH_TYPE).update(data).digest(DIGEST_TYPE);
}