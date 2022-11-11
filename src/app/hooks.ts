import { theme } from "../theme";
import { useTheme } from "@mui/material/styles";

export const useAppTheme = useTheme<typeof theme>;
