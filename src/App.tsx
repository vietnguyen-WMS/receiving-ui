import { BrowserRouter } from "react-router-dom";
import { ReceivingRoutes } from "./routes";

const isStandalone = import.meta.env.MODE === "standalone";

export default function ReceivingApp() {
  const content = <ReceivingRoutes />;

  return isStandalone ? <BrowserRouter>{content}</BrowserRouter> : content;
}
