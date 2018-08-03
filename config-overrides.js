const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(["import", { libraryName: "antd", style: 'css' }], config); // change importing css to
    // less
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            //default color for card-based component in Ant Design Pro
            "@card-actions-background": "#f5f8fa",
        },
    })(config, env);
    return config;
};
