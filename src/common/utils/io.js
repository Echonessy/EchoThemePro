/**
 * Created by Echonessy on 2019/4/11.
 * 文件检索，用于模块化工程，代码分割
 */
// 获取单文件夹下所有js，不包含文件夹
export const readSingleFolderFiles = (folder, moduleKey = '') => {
  const obj = {};
  const folders = [];
  // 遍历文件夹下所有文件
  folder.keys().forEach(key => {
    // 获取文件夹下每个文件的内容
    const contexts = folder(key);
    // 取所有js文件名
    const fileName = key.match(/[^/]+\.js$/g)[0].replace('.js', '');
    // 取所有文件夹名
    const folderName = key.match(/\/(.*?)\//) ? key.match(/\/(.*?)\//)[1] : '';
    //排除文件夹
    if (!(folderName && !folders.includes(folderName))) {
      // 以文件名命名对象;
      obj[fileName] = {};
      Object.keys(contexts).forEach(name => {
        // 如果存在重复键值，抛出异常
        if (obj[fileName][name]) throw new Error(`context '${fileName} - ${name}' conflict in '${key}'!`);
        // 将文件内容挂载到obj
        obj[fileName][name] = contexts[name]
      })
    }
  });
  return obj
};
// 获取文件夹下所有js，包含多级文件夹所有js
export const readFolderTotalFiles = (folder,moduleName='') =>{
  const obj = {}
  const folderKeys = folder.keys();
  // 遍历文件夹下所有文件
  folderKeys.forEach(key => {
    const file = key.match(/[^/]+\.js$/g)[0];
    const folderName = key.split(file)[0]
    const fileName = file.replace('.js', '');
    //如果文件是index 或者文件夹下有index，只执行index
    if ((fileName !== 'index' && folderKeys.includes(`${folderName}index.js`))) {
      return
    }
    // 该文件名称
    if (moduleName) {
      // 取所有文件夹名
      const folderNamePre = key.match(/\/(.*?)\//) ? key.match(/\/(.*?)\//)[1] : ''
      if ([fileName, folderNamePre].includes(moduleName)) {
        // 读取文件上下文
        const contexts = folder(key)
        obj[moduleName] = contexts
      }
    } else {
      // 新建某文件js对象的key，防止重名
      const newFileName = key.replace(/[.\/]/g, '');
      // 获取文件夹下每个文件的内容
      const contexts = folder(key)
      // 优先以文件夹名创建
      obj[newFileName] = {}
      Object.keys(contexts).forEach(name => {
        // 如果存在重复键值，抛出异常
        if (obj[newFileName][name]) throw new Error(`context '${newFileName} - ${name}' conflict in '${key}'!`)
        // 将文件内容挂载到obj
        obj[newFileName][name] = contexts[name]
      })
    }
  })
  return obj
};
// 获取文件夹下单一文件上下文
export const readFolderSingleFiles = (folder, moduleName) => {
  const obj = {};
  const folders = [];
  // 遍历文件夹下所有文件
  folder.keys().forEach(key => {
    // 取所有js文件名
    const fileName = key.match(/[^/]+\.js$/g)[0].replace('.js', '');
    // 取所有文件夹名
    const folderName = key.match(/\/(.*?)\//) ? key.match(/\/(.*?)\//)[1] : '';
    // 匹配文件名或文件夹名
    if ([fileName, folderName].includes(moduleName)) {
      // 读取文件上下文
      const contexts = folder(key);
      obj[moduleName] = contexts;
    }
  });
  return obj
};

export default Vue => {
  const obj = {
    readSingleFolderFiles: readSingleFolderFiles,
    readFolderTotalFiles: readFolderTotalFiles,
    readFolderSingleFiles: readFolderSingleFiles
  };
  Vue.io = obj;
  Vue.prototype.$io = obj;
}
