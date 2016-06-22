const sourceFolderContext = require.context('./', true, /.test\.js$/);
sourceFolderContext.keys().forEach(sourceFolderContext);
