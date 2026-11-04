import type { AnchorHTMLAttributes } from "react";
/** External sources always open separately; no referrer or window access. */
export function TextLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}
