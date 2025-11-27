// src/lib/kv.ts – HOÀN HẢO CHO VERCEL + UPSTASH 2025
import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
