'use client';

import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { readPreviewState, withPreviewHref } from '../lib/preview';

export function LinkArrow({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const [resolvedHref, setResolvedHref] = useState(href);

  useEffect(() => {
    const { preview, direction } = readPreviewState();
    setResolvedHref(withPreviewHref(href, preview, direction));
  }, [href]);

  return (
    <a className="text-link" href={resolvedHref}>
      {children}
      <ArrowUpRight aria-hidden="true" size={19} />
    </a>
  );
}
