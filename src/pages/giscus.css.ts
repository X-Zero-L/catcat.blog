import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

function clampHue(v: number) {
  if (!Number.isFinite(v)) return siteConfig.themeColor.hue;
  v = Math.round(v % 360);
  return v < 0 ? v + 360 : v;
}

function cssFor(h: number, mode: 'light' | 'dark') {
  const hue = clampHue(h);
  
  // 基于你的主题色调生成边框颜色 - 与网站一致
  const borderColor = mode === 'dark' ? `oklch(0.35 0.02 ${hue})` : `oklch(0.90 0.02 ${hue})`;
  const borderMuted = mode === 'dark' ? `oklch(0.30 0.015 ${hue})` : `oklch(0.93 0.015 ${hue})`;
  
  // 使用与网站卡片完全一致的背景色
  const bgDefault = mode === 'dark' ? `oklch(0.23 0.015 ${hue})` : `white`;  // 卡片背景
  const bgSubtle = mode === 'dark' ? `oklch(0.27 0.02 ${hue})` : `oklch(0.95 0.025 ${hue})`;  // 按钮/输入框背景
  const bgInset = mode === 'dark' ? `oklch(0.19 0.015 ${hue})` : `white`;  // 浮动面板背景
  const bgOverlay = mode === 'dark' ? `oklch(0.30 0.025 ${hue})` : `oklch(0.90 0.03 ${hue})`;  // hover状态
  
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
    
    /* 修复 GitHub 登录按钮的白边 */
    .gsc-social-reaction-summary-item {
      border: none !important;
    }
    
    /* GitHub 登录按钮样式 */
    .btn-primary, 
    a.btn-primary,
    button[class*="color-btn-primary"] {
      background-color: #24292f !important;
      color: white !important;
      border: none !important;
      box-shadow: none !important;
    }
    
    .btn-primary:hover,
    a.btn-primary:hover,
    button[class*="color-btn-primary"]:hover {
      background-color: #1a1e22 !important;
      border: none !important;
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
    
    /* 修复 GitHub 登录按钮的白边 */
    .gsc-social-reaction-summary-item {
      border: none !important;
    }
    
    /* GitHub 登录按钮样式 - 暗色模式 */
    .btn-primary,
    a.btn-primary,
    button[class*="color-btn-primary"] {
      background-color: var(--color-accent-fg) !important;
      color: var(--color-canvas-default) !important;
      border: none !important;
      box-shadow: none !important;
    }
    
    .btn-primary:hover,
    a.btn-primary:hover,
    button[class*="color-btn-primary"]:hover {
      background-color: var(--color-accent-emphasis) !important;
      border: none !important;
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