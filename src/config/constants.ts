import dotenv from 'dotenv'
import { rateLimit } from 'express-rate-limit';


dotenv.config()

export const port =  process.env.PORT || 3000
export const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  });
// export const DATABASE_USER=process.env.DATABASE_USER
// export const DATABASE_PASSWORD=process.env.DATABASE_PASS
export const DB_URL = process.env.DATABASE_URL