import { http, HttpResponse } from "msw";
import { notifyData, openData, historyData } from "./home";

export const handlers = [
  http.get("/api/home/notify", () => HttpResponse.json(notifyData)),
  http.get("/api/home/open", () => HttpResponse.json(openData)),
  http.get("/api/home/history", () => HttpResponse.json(historyData)),
];
