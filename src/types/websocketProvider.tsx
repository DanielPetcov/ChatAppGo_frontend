import { AuthState } from "@/stateManager";
import { useRef, useContext, createContext } from "react";

const WebSocketContext = createContext<WebSocket | null>(null);

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const wsRef = useRef<WebSocket | null>(null);

  const { token } = AuthState();

  if (!wsRef.current && token) {
    wsRef.current = new WebSocket(
      `${import.meta.env.VITE_BACKEND_URL}/v1/ws?token=${token}`
    );

    wsRef.current.onopen = () => {
      console.log("websocket connected");
    };

    wsRef.current.onerror = (err) => {
      console.error("websocket error: ", err);
    };

    wsRef.current.onclose = () => {
      console.log("websocket closed");
    };
  }

  return (
    <WebSocketContext.Provider value={wsRef.current}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocket() {
  return useContext(WebSocketContext);
}
