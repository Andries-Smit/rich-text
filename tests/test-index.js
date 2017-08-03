require("./matchers");

var testsContext = require.context("../src/components/__tests__", true, /\.spec$/);
testsContext.keys().forEach(testsContext);
