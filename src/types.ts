export interface Message {
  role: "user" | "model";
  parts: [{ text: string }];
}

export interface ChatHistoryItem {
  role: "user" | "model";
  parts: [{ text: string }];
}
