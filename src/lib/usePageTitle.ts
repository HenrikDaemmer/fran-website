import { useEffect } from "react";

const DEFAULT_TITLE = "Fran's – Event-Köchin in Landau & Umgebung";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ?? DEFAULT_TITLE;
  }, [title]);
}
