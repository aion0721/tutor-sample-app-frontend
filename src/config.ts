export type AppConfig = { apiBaseUrl: string; mockDefault?: boolean };

let _config: AppConfig | null = null;

export async function loadConfig(): Promise<AppConfig> {
  if (_config) return _config;
  const res = await fetch("/config.json", { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load config.json ${res.status}`);
  _config = await res.json();
  return _config!;
}

export function getConfig(): AppConfig {
  if (!_config) throw new Error("config not loaded yet");
  return _config!;
}
