// src/api/home.ts
import type { CardData } from "@/types";
import { getJson } from "./common";

export const fetchNotifyData = () => getJson<CardData[]>("/api/notify");

export const fetchOpenData = () => getJson<CardData[]>("/api/open");

export const fetchHistoryData = () => getJson<CardData[]>("/api/history");
