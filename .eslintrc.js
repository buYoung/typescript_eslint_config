/* eslint-env node */
module.exports = {
    root: true,
    env : {
        browser : true,
        commonjs: true,
        es6     : true,
        node    : true
    },
    plugins : [ "html",
                "js",
                "ts",
                "@typescript-eslint" ],
    extends : [
        "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    rules : {
        "@typescript-eslint/ban-ts-comment" : [
            "error",
            {
                "ts-ignore" : "allow-with-description"
            }
        ],
        "@typescript-eslint/explicit-function-return-type" : "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function"             : [ "error", { allow : ["arrowFunctions"] } ],
        "@typescript-eslint/no-explicit-any"               : "error",
        "@typescript-eslint/no-non-null-assertion"         : "off",
        "@typescript-eslint/no-var-requires"               : "off",
        "arrow-body-style"                                 : "off",
        "prefer-arrow-callback"                            : "off",
        "max-statements-per-line"                          : [ "error", { max : 1 } ],
        "multiline-ternary"                                : [ "error", "always-multiline" ],
        "newline-per-chained-call"                         : [ "error", { ignoreChainWithDepth : 2 } ],
        "no-mixed-spaces-and-tabs"                         : [ "error", "smart-tabs" ],
        "no-tabs"                                          : ["error"],
        "operator-linebreak"                               : [ "error", "after" ],
        semi                                               : [ "error", "always" ],
        "yield-star-spacing"                               : [ "error", "after" ],
        "no-extra-semi"                                    : ["error"],
        "semi-spacing"                                     : [
            "error",
            {
                before: false,
                after : true
            }
        ],
        "semi-style"         : [ "error", "last" ],
        "space-before-blocks": ["error"],
        "no-trailing-spaces" : [
            "error",
            {
                ignoreComments: true,
                skipBlankLines: true
            }
        ],
        indent : [
            "error",
            4,
            {
                SwitchCase            : 1,
                MemberExpression      : 1,
                FunctionDeclaration   : { parameters : "first" },
                StaticBlock           : { body : 1 },
                CallExpression        : { arguments : "first" },
                ArrayExpression       : "first",
                ObjectExpression      : "first",
                ImportDeclaration     : "first",
                flatTernaryExpressions: false
            }
        ],
        "space-infix-ops": ["error"],
        "linebreak-style": [ "error", "unix" ],
        "comma-dangle"   : [ "error", "never" ],
        "comma-spacing"  : [
            "error",
            {
                before: false,
                after : true
            }
        ],
        "comma-style"            : [ "error", "last" ],
        "object-property-newline": ["error"],
        "block-spacing"          : ["error"],

        "arrow-spacing" : [
            "error",
            {
                before: true,
                after : true
            }
        ],
        "array-element-newline" : [
            "error",
            {
                multiline: true,
                minItems : 4
            }
        ],
        "array-bracket-spacing" : [
            "error",
            "always",
            {
                singleValue : false
            }
        ],
        "keyword-spacing" : [
            "error",
            {
                overrides : {
                    while: { after : false },
                    if   : { after : false }
                },
                before: true,
                after : true
            }
        ],
        "key-spacing" : [
            "error",
            {
                align : {
                    on        : "colon",
                    afterColon: true
                },
                mode       : "minimum",
                beforeColon: true,
                afterColon : true
            }
        ],
        "implicit-arrow-linebreak" : [ "error", "beside" ]
    },
    parser       : "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project        : ["./tsconfig.json"]
    },
    globals  : { _ : true },
    overrides: [
        {
            files: ["*.js"],
            rules: { "@typescript-eslint/explicit-function-return-type" : "off" }
        }
    ]
};
