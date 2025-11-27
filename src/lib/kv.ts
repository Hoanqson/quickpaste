// src/lib/kv.ts (phiên bản mới 2025)
import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,  // ← Thay từ KV_REST_API_URL
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,  // ← Thay từ KV_REST_API_TOKEN
});
