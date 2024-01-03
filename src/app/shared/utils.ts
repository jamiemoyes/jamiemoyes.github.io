import { format, parseISO } from "date-fns";

function formatDate(stringDate: string) {
  return format(parseISO(stringDate), "MMM yy");
}

function formatDatePreview(
  from?: string | null,
  to?: string | false | undefined
) {
  if (!from) return "";
  return `${formatDate(from)} - ${to ? formatDate(to) : "Present"}`;
}

export { formatDatePreview };
