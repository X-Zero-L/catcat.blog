import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

function clampHue(v: number) {
  if (!Number.isFinite(v)) return siteConfig.themeColor.hue;
  v = Math.round(v % 360);
  return v < 0 ? v + 360 : v;
}

function cssFor(h: number, mode: 'light' | 'dark') {
  const hue = clampHue(h);
  
  // 基于你的主题色调生成边框颜色 - 更柔和的边框
  const borderColor = mode === 'dark' ? `oklch(0.30 0 0)` : `oklch(0.90 0 0)`;
  const borderMuted = mode === 'dark' ? `oklch(0.25 0 0)` : `oklch(0.94 0 0)`;
  
  // 生成不同明度的背景 - 与卡片背景一致，不使用饱和度
  const bgDefault = mode === 'dark' ? `oklch(0.18 0 0)` : `oklch(1 0 0)`;  // 纯白/深灰
  const bgSubtle = mode === 'dark' ? `oklch(0.20 0 0)` : `oklch(0.97 0 0)`;  // 略深/略浅用于输入框
  const bgInset = mode === 'dark' ? `oklch(0.16 0 0)` : `oklch(1 0 0)`;
  const bgOverlay = mode === 'dark' ? `oklch(0.22 0 0)` : `oklch(0.95 0 0)`;
  
  const light = `
    /*! Giscus Custom Theme - Light */
    :root {
      --color-canvas-default: ${bgDefault};
      --color-canvas-subtle: ${bgSubtle};
      --color-canvas-inset: ${bgInset};
      --color-border-default: ${borderColor};
      --color-border-muted: ${borderMuted};
      --color-neutral-muted: rgba(175, 184, 193, 0.2);
      --color-accent-fg: oklch(0.52 0.16 ${hue});
      --color-accent-emphasis: oklch(0.48 0.18 ${hue});
      --color-fg-default: #24292f;
      --color-fg-muted: #57606a;
      --color-fg-subtle: #6e7781;
      --color-btn-text: #24292f;
      --color-btn-bg: var(--color-canvas-subtle);
      --color-btn-border: var(--color-border-default);
      --color-btn-hover-bg: ${bgOverlay};
      --color-btn-hover-border: var(--color-border-default);
      --color-btn-active-bg: ${bgOverlay};
      --color-btn-selected-bg: ${bgOverlay};
      --color-bg-overlay: ${bgOverlay};
      --color-text-secondary: var(--color-fg-default);
      --color-text-link: var(--color-accent-fg);
      --color-border-primary: ${borderColor};
    }
    
    /* Giscus 工具类覆盖 */
    .color-bg-default {
      background-color: var(--color-canvas-default) !important;
    }
    .color-bg-subtle,
    .color-bg-tertiary {
      background-color: var(--color-canvas-subtle) !important;
    }
    .color-bg-canvas-default {
      background-color: var(--color-canvas-default) !important;
    }
    .color-bg-canvas-subtle {
      background-color: var(--color-canvas-subtle) !important;
    }
    .color-bg-overlay {
      background-color: var(--color-bg-overlay) !important;
    }
    .color-border-default {
      border-color: var(--color-border-default) !important;
    }
    .color-border-muted {
      border-color: var(--color-border-muted) !important;
    }
    .color-border-primary {
      border-color: var(--color-border-default) !important;
    }
    .color-text-primary {
      color: var(--color-fg-default) !important;
    }
    .color-text-secondary {
      color: var(--color-fg-muted) !important;
    }
    .color-text-tertiary {
      color: var(--color-fg-subtle) !important;
    }
    .color-text-link {
      color: var(--color-accent-fg) !important;
    }
    
    /* 输入框背景使用主题色 */
    .form-control {
      background-color: var(--color-canvas-subtle) !important;
      border-color: var(--color-border-default) !important;
    }
    
    /* 评论框背景 */
    .gsc-comment-box {
      background-color: var(--color-canvas-default) !important;
      border-color: var(--color-border-default) !important;
    }
    
    .gsc-comment,
    .gsc-reply-box {
      background-color: var(--color-canvas-default) !important;
      border-color: var(--color-border-default) !important;
    }
    
    /* Tab 背景 */
    .gsc-comment-box-tabs {
      background-color: var(--color-canvas-subtle) !important;
      border-color: var(--color-border-default) !important;
    }
    
    .tabnav-tabs {
      background-color: var(--color-canvas-subtle) !important;
      border-bottom-color: var(--color-border-default) !important;
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
    :root {
      --color-canvas-default: ${bgDefault};
      --color-canvas-subtle: ${bgSubtle};
      --color-canvas-inset: ${bgInset};
      --color-border-default: ${borderColor};
      --color-border-muted: ${borderMuted};
      --color-neutral-muted: rgba(110, 118, 129, 0.4);
      --color-accent-fg: oklch(0.65 0.14 ${hue});
      --color-accent-emphasis: oklch(0.60 0.16 ${hue});
      --color-fg-default: #ffffff;
      --color-fg-muted: #e0e0e0;
      --color-fg-subtle: #d0d0d0;
      --color-btn-text: var(--color-fg-default);
      --color-btn-bg: var(--color-canvas-subtle);
      --color-btn-border: var(--color-border-default);
      --color-btn-hover-bg: ${bgOverlay};
      --color-btn-hover-border: var(--color-border-default);
      --color-btn-active-bg: ${bgOverlay};
      --color-btn-selected-bg: ${bgOverlay};
      --color-bg-overlay: ${bgOverlay};
      --color-text-secondary: var(--color-fg-default);
      --color-text-link: var(--color-accent-fg);
      --color-border-primary: ${borderColor};
    }
    
    /* Giscus 工具类覆盖 - 暗色模式 */
    .color-bg-default {
      background-color: var(--color-canvas-default) !important;
    }
    .color-bg-subtle,
    .color-bg-tertiary {
      background-color: var(--color-canvas-subtle) !important;
    }
    .color-bg-canvas-default {
      background-color: var(--color-canvas-default) !important;
    }
    .color-bg-canvas-subtle {
      background-color: var(--color-canvas-subtle) !important;
    }
    .color-bg-overlay {
      background-color: var(--color-bg-overlay) !important;
    }
    .color-border-default {
      border-color: var(--color-border-default) !important;
    }
    .color-border-muted {
      border-color: var(--color-border-muted) !important;
    }
    .color-border-primary {
      border-color: var(--color-border-default) !important;
    }
    .color-text-primary {
      color: var(--color-fg-default) !important;
    }
    .color-text-secondary {
      color: var(--color-fg-muted) !important;
    }
    .color-text-tertiary {
      color: var(--color-fg-subtle) !important;
    }
    .color-text-link {
      color: var(--color-accent-fg) !important;
    }
    
    /* 输入框背景使用主题色 */
    .form-control {
      background-color: var(--color-canvas-subtle) !important;
      border-color: var(--color-border-default) !important;
      color: var(--color-fg-default) !important;
    }
    
    /* 评论框背景 */
    .gsc-comment-box {
      background-color: var(--color-canvas-default) !important;
      border-color: var(--color-border-default) !important;
    }
    
    .gsc-comment,
    .gsc-reply-box {
      background-color: var(--color-canvas-default) !important;
      border-color: var(--color-border-default) !important;
    }
    
    /* Tab 背景 */
    .gsc-comment-box-tabs {
      background-color: var(--color-canvas-subtle) !important;
      border-color: var(--color-border-default) !important;
    }
    
    .tabnav-tabs {
      background-color: var(--color-canvas-subtle) !important;
      border-bottom-color: var(--color-border-default) !important;
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
      'Access-Control-Allow-Origin': 'https://giscus.app',
      'Access-Control-Allow-Methods': 'GET',
    },
  });
};

export const prerender = false;