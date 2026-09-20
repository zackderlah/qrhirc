import { defaultDirection, directions, type Direction } from './constants';

const PREVIEW_KEY = 'qrhirc-preview';
const DIRECTION_KEY = 'qrhirc-direction';

function isDirection(value: string | null): value is Direction {
  return directions.some((direction) => direction.id === value);
}

export function readPreviewState(): { preview: boolean; direction: Direction } {
  const params = new URLSearchParams(window.location.search);
  const urlPreview = params.has('preview');
  const urlDirection = params.get('direction');

  if (urlPreview) {
    sessionStorage.setItem(PREVIEW_KEY, '1');
  }

  const preview =
    urlPreview || sessionStorage.getItem(PREVIEW_KEY) === '1';

  let direction: Direction = defaultDirection;
  if (isDirection(urlDirection)) {
    direction = urlDirection;
    sessionStorage.setItem(DIRECTION_KEY, direction);
  } else if (preview) {
    const stored = sessionStorage.getItem(DIRECTION_KEY);
    if (isDirection(stored)) direction = stored;
  }

  return { preview, direction };
}

export function persistPreviewState(preview: boolean, direction: Direction) {
  if (preview) sessionStorage.setItem(PREVIEW_KEY, '1');
  else sessionStorage.removeItem(PREVIEW_KEY);
  sessionStorage.setItem(DIRECTION_KEY, direction);
}

export function syncPreviewUrl(preview: boolean, direction: Direction) {
  const url = new URL(window.location.href);
  if (preview) {
    url.searchParams.set('preview', '');
    url.searchParams.set('direction', direction);
  } else {
    url.searchParams.delete('preview');
    url.searchParams.delete('direction');
  }
  window.history.replaceState({}, '', url);
}

export function withPreviewHref(
  path: string,
  preview: boolean,
  direction: Direction,
): string {
  if (!preview) return path;

  const hashIndex = path.indexOf('#');
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const params = new URLSearchParams();
  params.set('preview', '');
  params.set('direction', direction);

  return `${pathname}?${params.toString()}${hash}`;
}
