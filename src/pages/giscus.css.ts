import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

function clampHue(v: number) {
  if (!Number.isFinite(v)) return siteConfig.themeColor.hue;
  v = Math.round(v % 360);
  return v < 0 ? v + 360 : v;
}

function cssFor(h: number, mode: 'light' | 'dark') {
  const hue = clampHue(h);
  
  // 基于你的主题色调生成边框颜色
  const borderColor = `oklch(0.75 0.14 ${hue})`;
  const borderMuted = mode === 'dark' ? `oklch(0.55 0.08 ${hue})` : `oklch(0.80 0.10 ${hue})`;
  
  const light = `
    /*! Giscus Custom Theme - Light */
    main {
      --color-canvas-default: #ffffff;
      --color-canvas-subtle: #f6f8fa;
      --color-canvas-inset: #eff2f5;
      --color-border-default: ${borderColor};
      --color-border-muted: ${borderMuted};
      --color-neutral-muted: rgba(175, 184, 193, 0.2);
      --color-accent-fg: #0969da;
      --color-accent-emphasis: #0860ca;
      --color-fg-default: #24292f;
      --color-fg-muted: #57606a;
      --color-fg-subtle: #6e7781;
      --color-btn-text: #24292f;
      --color-btn-bg: #f6f8fa;
      --color-btn-border: ${borderColor};
      --color-btn-hover-bg: #f3f4f6;
      --color-btn-hover-border: ${borderColor};
      --color-btn-active-bg: #ebecf0;
      --color-btn-selected-bg: #ebecf0;
    }
    
    /* 强制边框颜色 */
    .gsc-comment-box,
    .gsc-comment,
    .gsc-comment-box-tabs,
    .tabnav-tab[aria-selected="false"],
    .tabnav-tabs,
    .form-control,
    .gsc-reply-box {
      border-color: ${borderColor} !important;
    }
    
    .tabnav-tab[aria-selected="true"] {
      border-color: ${borderColor} !important;
      border-bottom-color: #ffffff !important;
    }
  `;
  
  const dark = `
    /*! Giscus Custom Theme - Dark */
    main {
      --color-canvas-default: #0d1117;
      --color-canvas-subtle: #161b22;
      --color-canvas-inset: #010409;
      --color-border-default: ${borderColor};
      --color-border-muted: ${borderMuted};
      --color-neutral-muted: rgba(110, 118, 129, 0.4);
      --color-accent-fg: #58a6ff;
      --color-accent-emphasis: #1f6feb;
      --color-fg-default: #c9d1d9;
      --color-fg-muted: #8b949e;
      --color-fg-subtle: #6e7681;
      --color-btn-text: #c9d1d9;
      --color-btn-bg: #21262d;
      --color-btn-border: ${borderColor};
      --color-btn-hover-bg: #30363d;
      --color-btn-hover-border: ${borderColor};
      --color-btn-active-bg: #282e33;
      --color-btn-selected-bg: #282e33;
    }
    
    /* 强制边框颜色 */
    .gsc-comment-box,
    .gsc-comment,
    .gsc-comment-box-tabs,
    .tabnav-tab[aria-selected="false"],
    .tabnav-tabs,
    .form-control,
    .gsc-reply-box {
      border-color: ${borderColor} !important;
    }
    
    .tabnav-tab[aria-selected="true"] {
      border-color: ${borderColor} !important;
      border-bottom-color: #0d1117 !important;
    }
  `;
  
  return mode === 'dark' ? dark : light;
}

export const GET: APIRoute = async ({ url }) => {
  const h = Number(url.searchParams.get('h') ?? siteConfig.themeColor.hue);
  const mode = (url.searchParams.get('mode') === 'dark') ? 'dark' : 'light';
  const body = cssFor(h, mode);
  return new Response(body, {
    headers: {
      'Content-Type': 'text/css; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
};