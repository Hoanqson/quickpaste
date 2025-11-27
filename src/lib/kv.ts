// src/lib/kv.ts – PHIÊN BẢN HOÀN HẢO CHO VERCEL + UPSTASH 2025
import { Redis } from '@upstash/redis'

// Vercel + Upstash hiện tại dùng đúng 2 biến tên này (không còn KV_ nữa)
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL ?? '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
})
