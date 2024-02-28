import crypto from "crypto";

const passwordHasher = (data: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  const digest = hash.digest("hex");
  return digest;
};

export default passwordHasher;
