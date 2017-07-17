require("./matchers");

var testsContext = require.context("../src/components/__tests__/unit", true, /\.spec$/);
testsContext.keys().forEach(testsContext);
