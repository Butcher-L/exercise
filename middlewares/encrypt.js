import dotenv from 'dotenv'

dotenv.config();
import { createCipheriv, createDecipheriv } from 'crypto';
const algorithm = process.env.ALGORITHM;
const password = process.env.PASSWORD;
const iv = process.env.IV;

export function encrypt(data) {
  const cipher = createCipheriv(algorithm, password, iv );
  let encryptedData = cipher.update(data, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}

export function decrypt(encryptedData) {
  const decipher = createDecipheriv(algorithm, password, iv);
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
  decryptedData += decipher.final('utf8');
  return decryptedData;
}

