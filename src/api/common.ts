// src/api/http.ts
import { getConfig } from "@/config";

export async function getJson<T>(path: string, init?: RequestInit): Promise<T> {
  const base = (getConfig().apiBaseUrl || "").trim();

  // base が空 or 絶対URLでないときは path をそのまま使う（同一オリジンで叩く）
  const url =
    base && /^https?:\/\//i.test(base) ? new URL(path, base).toString() : path;

  const res = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GET ${url} -> ${res.status} ${res.statusText} ${text}`);
  }
  return res.json() as Promise<T>;
}
