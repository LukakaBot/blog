/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** 公共基础路径 */
  readonly PUBLIC_APP_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
