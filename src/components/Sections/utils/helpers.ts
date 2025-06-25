export const getInitial = (name: string | undefined): string => {
  const trimmed = (name ?? "").trim();
  if (!trimmed) return "";

  return trimmed.charAt(0).toUpperCase();
};
