export const getInitials = (name?: string | null) => {
  return (name ?? "?")
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
};
