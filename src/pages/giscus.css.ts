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
  
  // 生成不同明度的主题色背景
  const bgDefault = mode === 'dark' ? `oklch(0.25 0.08 ${hue})` : `oklch(0.95 0.03 ${hue})`;
  const bgSubtle = mode === 'dark' ? `oklch(0.28 0.09 ${hue})` : `oklch(0.93 0.04 ${hue})`;
  const bgInset = mode === 'dark' ? `oklch(0.22 0.07 ${hue})` : `oklch(0.97 0.02 ${hue})`;
  const bgOverlay = mode === 'dark' ? `oklch(0.30 0.10 ${hue})` : `oklch(0.92 0.05 ${hue})`;
  
  const light = `
    /*! Giscus Custom Theme - Light */
    main {
      --color-canvas-default: ${bgDefault};
      --color-canvas-subtle: ${bgSubtle};
      --color-canvas-inset: ${bgInset};
      --color-border-default: ${borderColor};
      --color-border-muted: ${borderMuted};
      --color-neutral-muted: rgba(175, 184, 193, 0.2);
      --color-accent-fg: oklch(0.50 0.20 ${hue});
      --color-accent-emphasis: oklch(0.45 0.22 ${hue});
      --color-fg-default: #24292f;
      --color-fg-muted: #57606a;
      --color-fg-subtle: #6e7781;
      --color-btn-text: #24292f;
      --color-btn-bg: ${bgSubtle};
      --color-btn-border: ${borderColor};
      --color-btn-hover-bg: ${bgOverlay};
      --color-btn-hover-border: ${borderColor};
      --color-btn-active-bg: ${bgOverlay};
      --color-btn-selected-bg: ${bgOverlay};
      --color-bg-overlay: ${bgOverlay};
      --color-text-secondary: #24292f;
      --color-text-link: oklch(0.50 0.20 ${hue});
      --color-border-primary: ${borderColor};
    }
    
    /* 输入框背景使用主题色 */
    .form-control {
      background-color: ${bgSubtle} !important;
      border-color: ${borderColor} !important;
    }
    
    /* 评论框背景 */
    .gsc-comment-box,
    .gsc-comment,
    .gsc-reply-box {
      background-color: ${bgDefault} !important;
      border-color: ${borderColor} !important;
    }
    
    /* Tab 背景 */
    .gsc-comment-box-tabs,
    .tabnav-tabs {
      background-color: ${bgSubtle} !important;
      border-color: ${borderColor} !important;
    }
    
    .tabnav-tab[aria-selected="false"] {
      border-color: ${borderColor} !important;
      background-color: transparent !important;
    }
    
    .tabnav-tab[aria-selected="true"] {
      border-color: ${borderColor} !important;
      border-bottom-color: ${bgDefault} !important;
      background-color: ${bgDefault} !important;
    }
    
    /* 评论统计文字颜色 */
    .gsc-comments-count,
    .gsc-comment-reactions-count {
      color: #24292f !important;
    }
    
    /* 表情反应菜单背景 */
    .gsc-reactions-popover {
      background-color: ${bgOverlay} !important;
      border-color: ${borderColor} !important;
    }
    
    /* 表情按钮背景 */
    .gsc-social-reaction-summary-item {
      background-color: ${bgSubtle} !important;
      color: #24292f !important;
    }
    
    .gsc-emoji-button {
      background-color: transparent !important;
    }
    
    .gsc-emoji-button:hover {
      background-color: ${borderColor} !important;
    }
  `;
  
  const dark = `
    /*! Giscus Custom Theme - Dark */
    main {
      --color-canvas-default: ${bgDefault};
      --color-canvas-subtle: ${bgSubtle};
      --color-canvas-inset: ${bgInset};
      --color-border-default: ${borderColor};
      --color-border-muted: ${borderMuted};
      --color-neutral-muted: rgba(110, 118, 129, 0.4);
      --color-accent-fg: oklch(0.70 0.15 ${hue});
      --color-accent-emphasis: oklch(0.65 0.18 ${hue});
      --color-fg-default: #ffffff;
      --color-fg-muted: #e0e0e0;
      --color-fg-subtle: #d0d0d0;
      --color-btn-text: #ffffff;
      --color-btn-bg: ${bgSubtle};
      --color-btn-border: ${borderColor};
      --color-btn-hover-bg: ${bgOverlay};
      --color-btn-hover-border: ${borderColor};
      --color-btn-active-bg: ${bgOverlay};
      --color-btn-selected-bg: ${bgOverlay};
      --color-bg-overlay: ${bgOverlay};
      --color-text-secondary: #ffffff;
      --color-text-link: oklch(0.70 0.15 ${hue});
      --color-border-primary: ${borderColor};
    }
    
    /* 输入框背景使用主题色 */
    .form-control {
      background-color: ${bgSubtle} !important;
      border-color: ${borderColor} !important;
      color: #ffffff !important;
    }
    
    /* 评论框背景 */
    .gsc-comment-box,
    .gsc-comment,
    .gsc-reply-box {
      background-color: ${bgDefault} !important;
      border-color: ${borderColor} !important;
    }
    
    /* Tab 背景 */
    .gsc-comment-box-tabs,
    .tabnav-tabs {
      background-color: ${bgSubtle} !important;
      border-color: ${borderColor} !important;
    }
    
    .tabnav-tab[aria-selected="false"] {
      border-color: ${borderColor} !important;
      background-color: transparent !important;
      color: #ffffff !important;
    }
    
    .tabnav-tab[aria-selected="true"] {
      border-color: ${borderColor} !important;
      border-bottom-color: ${bgDefault} !important;
      background-color: ${bgDefault} !important;
      color: #ffffff !important;
    }
    
    /* 评论统计文字颜色 - 白色 */
    .gsc-comments-count,
    .gsc-comment-reactions-count,
    .gsc-replies-count {
      color: #ffffff !important;
    }
    
    /* 表情反应菜单背景 - 使用主题色 */
    .gsc-reactions-popover,
    .color-bg-overlay {
      background-color: ${bgOverlay} !important;
      border-color: ${borderColor} !important;
    }
    
    /* 表情反应菜单内文字 */
    .gsc-reactions-popover p,
    .color-text-secondary {
      color: #ffffff !important;
    }
    
    /* 表情按钮背景 - 使用主题色 */
    .gsc-social-reaction-summary-item,
    .gsc-reactions-button {
      background-color: ${bgSubtle} !important;
      color: #ffffff !important;
      border-color: ${borderColor} !important;
    }
    
    .gsc-social-reaction-summary-item:hover,
    .gsc-reactions-button:hover {
      background-color: ${bgOverlay} !important;
    }
    
    /* 表情选择器按钮 */
    .gsc-emoji-button {
      background-color: transparent !important;
    }
    
    .gsc-emoji-button:hover {
      background-color: oklch(0.35 0.12 ${hue}) !important;
    }
    
    /* 确保表情菜单使用主题色而不是白色 */
    details.gsc-reactions-menu summary {
      background-color: ${bgSubtle} !important;
      color: #ffffff !important;
    }
    
    details.gsc-reactions-menu[open] > summary {
      background-color: ${bgOverlay} !important;
    }
    
    /* 覆盖所有可能的白色背景 */
    .color-bg-default,
    .color-bg-subtle,
    .color-bg-canvas-default {
      background-color: ${bgDefault} !important;
    }
    
    /* 链接颜色 */
    .color-text-link,
    a {
      color: oklch(0.70 0.15 ${hue}) !important;
    }
    
    /* 边框颜色覆盖 */
    .color-border-primary {
      border-color: ${borderColor} !important;
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