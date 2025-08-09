import { http, HttpResponse } from "msw";
import { notifyData, openData, historyData } from "./home";

export const handlers = [
  http.get("/api/notify", () => HttpResponse.json(notifyData)),
  http.get("/api/open", () => HttpResponse.json(openData)),
  http.get("/api/history", () => HttpResponse.json(historyData)),
];
