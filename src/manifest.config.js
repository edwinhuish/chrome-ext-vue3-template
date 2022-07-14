import { defineManifest } from '@crxjs/vite-plugin'
import packageJson from '../package.json'
const { version } = packageJson

export default defineManifest(async (config, env) => {
  // const name = env.mode === 'staging' ? '[INTERNAL] CRXJS Power Tools' : 'CRXJS Power Tools'

  return {
    manifest_version: 3,
    name: 'Chrome 插件开发 示例',
    description: '这是一个 Chrome 开发示例工程',
    version: version,
    action: {
      default_icon: {
        16: 'assets/icons/icon_16.png',
        32: 'assets/icons/icon_32.png',
        64: 'assets/icons/icon_64.png',
        128: 'assets/icons/icon_128.png',
      },
      default_title: 'Popup Sample',
      // 插件在插件区域被点击时的弹出页面
      default_popup: 'pages/popup/index.html',
    },
    // 后台运行脚本
    background: {
      service_worker: 'pages/background/index.js',
    },
    content_scripts: [
      {
        // 当matches返回true时才会注入
        // 比如 ["http://foo.com/bar/*", "https://foobar.com/bar/*"]
        // 表示在foobar.com下的bar路径下会发生注入
        // 插件不支持 "<all_urls>"
        matches: ['http://*/*', 'https://*/*', 'file://*'],
        // 多个JS会按照配置的顺序引入到页面
        js: ['pages/content-scripts/main.js'],
        // 在什么时机引入到页面，三个可选择的值： "document_start"、"document_end"、"document_idle"
        // 默认document_idle。
        // 这个很重要，比如如果引入的JS中使用到了onload就要选择document_start，否则会错过事件
        // 但是如果没有类似的事件的话最好保持默认值document_idle，这样不对原页面的加载速度产生影响
        run_at: 'document_idle',
      },
    ],
    // 配置页面
    options_page: 'pages/options/index.html',
    // 全局icon 会出现在配置页面的icon中
    icons: {
      16: 'assets/icons/icon_16.png',
      32: 'assets/icons/icon_32.png',
      64: 'assets/icons/icon_64.png',
      128: 'assets/icons/icon_128.png',
    },
    // 插件需要的权限
    permissions: ['http://*/*', 'https://*/*', 'storage', 'tabs', 'webRequest'],
  }
})
