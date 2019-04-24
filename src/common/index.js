/**
 * Created by Echonessy on 2019/4/11.
 * 挂载封装
 */
import { readSingleFolderFiles, readFolderSingleFiles } from './utils/io'
class Common {
  constructor (Vue, options) {
    // 记录下Vue实例
    this.vueInstance = Vue;
    // common入口类配置
    this.options = options;

    this.init()
  }
  init () {
    // 加载common模块
    this.loadModules();
  }
  // 初始化加载全部模块
  initAllModules () {
    return Object.assign(
      {},
      this.requireModule('utils'),
    )
  }
  // 加载模块
  loadModules () {
    if (!Array.isArray(this.options)) {
      throw new Error('the options must be array index common entry !')
    }
    this.options.forEach(moduleKey => {
      if (typeof moduleKey === 'string') {
        // 以字符串形式挂载
        this.useModules(moduleKey)
      }
      if (typeof moduleKey === 'object') {
        // 以对象形式挂载
        this.useModules(moduleKey.moduleName, moduleKey.options)
      }
    })
  }
  // 挂载模块到Vue实例
  useModules (moduleName, moduleOptions = {}) {
    const moduleObj = this.requireModuleByName(moduleName);
    if (Object.keys(moduleObj).length) {
      // 挂载私有模块
      this.vueInstance.use(moduleObj[moduleName].default || moduleObj[moduleName], moduleOptions)
    }
  }
  // 按模块名加载
  requireModuleByName (moduleName) {
    return Object.assign({},
      readFolderSingleFiles(require.context('./utils/', true, /\.js$/), moduleName),
    )
  }
  // require全部common模块
  requireModule (moduleKey) {
    const hash = {
      'utils': () => {
        return readSingleFolderFiles(require.context('./utils/', true, /\.js$/), moduleKey)
      }
    };
    return hash[moduleKey]();
  }
}
export default (Vue, options) => {
  return new Common(Vue, options)
}
