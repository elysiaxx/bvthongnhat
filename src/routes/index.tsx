import { useRoutes } from "react-router-dom";

// Routes
import MainRoutes from "./mainRoutes";

export default function ThemeRoutes() {
    return useRoutes(MainRoutes);
}
