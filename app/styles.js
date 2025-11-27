// styles.js
import { StyleSheet } from "react-native";

// Color variables
const colors = {
  primary: "#020408",
  secondary: "#00D68F",
  success: "#009B31",
  info: "#2B7FFF",
  danger: "#EF4444",
  warning: "#F0B100",
  muted: "#94A3B8",
  text: "#F8FAFC",
  accent: "#003322",
  input: "#1E293B",
};

const styles = StyleSheet.create({
  primaryButton: {
    width: "100%",
    backgroundColor: colors.secondary,
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
    fontWeight: "800",
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
    fontWeight: "700",
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

// Export everything as a default theme object
const theme = {
  colors,
  styles,
};

export default theme;
export { colors, styles };
