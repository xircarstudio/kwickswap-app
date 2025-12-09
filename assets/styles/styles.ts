import { StyleSheet } from "react-native";

export interface Gradients {
  green: readonly [string, string];
  top: readonly [string, string];
}

export interface ColorScheme {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  danger: string;
  warning: string;
  muted: string;
  text: string;
  accent: string;
  input: string;
  purple: string;
  pink: string;
  ocean: string;
  gradients: Gradients;
}

export const colors: ColorScheme = {
  primary: "#020408",
  secondary: "#00D68F",
  success: "#009B31",
  info: "#2B7FFF",
  danger: "#EF4444",
  warning: "#FF6900",
  muted: "#94A3B8",
  text: "#F8FAFC",
  accent: "#003322",
  input: "#1E293B",
  purple: "#AD46FF",
  pink: "#F6339A",
  ocean: "#00B8DB",
  gradients: {
    green: ["#020408", "#00D68F"] as const,

    top: ["#AD46FF" + "30", "#2B7FFF" + "30"] as const,
  },
};

export const styles = StyleSheet.create({
  primaryButton: {
    width: "100%",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 6,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: colors.primary,
    fontWeight: "800" as const,
    fontSize: 16,
  },
  outlineButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.muted,
    backgroundColor: "transparent",
  },
  outlineButtonText: {
    color: colors.text,
    fontWeight: "700" as const,
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.text,
  },
  input: {
    backgroundColor: colors.input,
    color: colors.text,
  },
  successText: {
    color: colors.success,
  },
  dangerText: {
    color: colors.danger,
  },
});

const theme = {
  colors,
  styles,
};

export default theme;
