import { useCallback, useState } from 'react';

/** Accordion state where at most one item is open. Toggling the open item closes it. */
export function useSingleOpen(initialId: string | null = null) {
  const [openId, setOpenId] = useState<string | null>(initialId);
  const toggle = useCallback((id: string) => setOpenId((current) => (current === id ? null : id)), []);
  const isOpen = useCallback((id: string) => openId === id, [openId]);
  return { isOpen, toggle };
}
