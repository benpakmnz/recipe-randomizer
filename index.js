var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var ReactDOMServer = __toESM(require("react-dom/server")), import_react = require("@remix-run/react");

// app/src/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/src/theme.ts
var import_styles = require("@mui/material/styles"), theme = (0, import_styles.createTheme)({
  palette: {
    primary: {
      main: "#072c3f"
    },
    secondary: {
      main: "#19857b"
    }
  }
}), theme_default = theme;

// app/entry.server.tsx
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline")), import_styles2 = require("@mui/material/styles"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  function MuiRemixServer() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_styles2.ThemeProvider, { theme: theme_default, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CssBaseline.default, {}, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/entry.server.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }
  let html = ReactDOMServer.renderToString(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MuiRemixServer, {}, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 34,
    columnNumber: 46
  }, this)), { styles } = extractCriticalToChunks(html), stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    let newStyleTag = `<style data-emotion="${`${key} ${ids.join(" ")}`}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  let markup = html.replace(
    /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
    `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var React2 = __toESM(require("react")), import_react4 = require("@remix-run/react"), import_react5 = require("@emotion/react"), import_material2 = require("@mui/material");

// app/src/ClientStyleContext.tsx
var React = __toESM(require("react")), ClientStyleContext_default = React.createContext({
  reset: () => {
  }
});

// app/src/components/AppBar.tsx
var import_Typography = __toESM(require("@mui/material/Typography")), import_material = require("@mui/material"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  import_material.AppBar,
  {
    position: "fixed",
    sx: { zIndex: (theme2) => theme2.zIndex.drawer + 1 },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.Toolbar, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/dish-finder.svg", style: { width: 45 } }, void 0, !1, {
        fileName: "app/src/components/AppBar.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_Typography.default,
        {
          variant: "h6",
          component: import_react3.Link,
          to: "/",
          style: {
            textDecoration: "none",
            color: "inherit",
            fontWeight: "100"
          },
          children: "Recipe Randomizer"
        },
        void 0,
        !1,
        {
          fileName: "app/src/components/AppBar.tsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/src/components/AppBar.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/src/components/AppBar.tsx",
    lineNumber: 7,
    columnNumber: 5
  },
  this
), AppBar_default = Header;

// public/styles/shared-styles.css
var shared_styles_default = "/build/_assets/shared-styles-AYNZ6XHB.css";

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Document = (0, import_react5.withEmotionCache)(
  ({ children, title }, emotionCache) => {
    let clientStyleData = React2.useContext(ClientStyleContext_default);
    return (0, import_material2.unstable_useEnhancedEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "meta",
          {
            name: "emotion-insertion-point",
            content: "emotion-insertion-point"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 11
          },
          this
        ),
        title ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: title }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 51,
          columnNumber: 20
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppBar_default, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Box, { component: "main", sx: { flexGrow: 1, pt: 10 }, children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "background" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this);
  }
), links = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
  },
  {
    rel: "stylesheet",
    href: shared_styles_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: "food-app", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react4.useRouteError)();
  if ((0, import_react4.isRouteErrorResponse)(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, this);
        break;
      case 404:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this);
        break;
      default:
        throw new Error(error.data || error.statusText);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: `${error.status} ${error.statusText}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
        error.status,
        ": ",
        error.statusText
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      message
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this);
  }
  return error instanceof Error ? (console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "There was an error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 139,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 140,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 142,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 138,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 137,
    columnNumber: 7
  }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 151,
    columnNumber: 10
  }, this);
}

// app/routes/recipe.$recipeId.tsx
var recipe_recipeId_exports = {};
__export(recipe_recipeId_exports, {
  default: () => Recipe,
  loader: () => loader
});
var import_material6 = require("@mui/material"), import_react6 = require("@remix-run/react");

// app/data/recipe.ts
var recipesList = [], recipesFavList = [];
async function fetchRecipes(ingredient) {
  try {
    return recipesList = (await (await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient ?? " "}`
    )).json()).meals ?? [], recipesList;
  } catch (err) {
    return console.error(err), [];
  }
}
function getCurrentRecipesList() {
  try {
    return recipesList;
  } catch (err) {
    return console.error(err), [];
  }
}
function getFavRecipesList() {
  try {
    return recipesFavList;
  } catch (err) {
    return console.error(err), [];
  }
}
async function getRecipe(id) {
  try {
    let data = await (await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )).json(), { meals } = data;
    return meals.map((recipeItem) => {
      recipeItem.strInstructions = handleInstruction(
        recipeItem.strInstructions
      ), recipeItem.ingredients = handleIngredients(recipeItem);
    }), meals;
  } catch (err) {
    return console.error(err), [];
  }
}
var handleInstruction = (instructions) => instructions.split(".").filter((str) => !/^\s*\d*\s*$/.test(str)), handleIngredients = (recipeItem) => {
  let ingredientsList = [];
  for (let i = 1; i <= 20; i++) {
    let ingredientName = recipeItem[`strIngredient${i}`], ingredientMeasure = recipeItem[`strMeasure${i}`];
    if (ingredientName && ingredientMeasure) {
      let ingredient = {
        name: ingredientName,
        measure: ingredientMeasure
      };
      ingredientsList.push(ingredient);
    }
  }
  return ingredientsList;
};

// app/src/components/Recipe/RecipeLayOut.tsx
var import_material5 = require("@mui/material");

// app/src/components/Recipe/RecipeIngredients.tsx
var import_material3 = require("@mui/material"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), RecipeIngredients = ({ ingredients }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Typography, { variant: "h4", component: "h3", children: "Ingredients" }, void 0, !1, {
    fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Grid, { container: !0, spacing: 3, children: ingredients.map((ing, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Grid, { item: !0, xs: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Paper, { variant: "outlined", square: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Grid, { container: !0, p: 1, spacing: 2, alignItems: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Grid, { item: !0, xs: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_material3.Avatar,
      {
        src: `https://www.themealdb.com/images/ingredients/${ing.name}.png`
      },
      void 0,
      !1,
      {
        fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
        lineNumber: 16,
        columnNumber: 19
      },
      this
    ) }, void 0, !1, {
      fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
      lineNumber: 15,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Grid, { item: !0, xs: 10, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Typography, { variant: "body2", children: ing.measure }, void 0, !1, {
        fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
        lineNumber: 21,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Typography, { variant: "h6", children: ing.name }, void 0, !1, {
        fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
        lineNumber: 22,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
    lineNumber: 14,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
    lineNumber: 13,
    columnNumber: 13
  }, this) }, `${ing.name}-${idx}`, !1, {
    fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
    lineNumber: 12,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/src/components/Recipe/RecipeIngredients.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), RecipeIngredients_default = RecipeIngredients;

// app/src/components/Recipe/RecipeInstructions.tsx
var import_material4 = require("@mui/material"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), RecipeInstructions = ({ instructions }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material4.Typography, { variant: "h4", component: "h3", mt: 4, children: "Recipe" }, void 0, !1, {
    fileName: "app/src/components/Recipe/RecipeInstructions.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material4.List, { className: "instructions-ol", children: instructions.map((step, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material4.ListItem, { divider: !0, children: [
    step,
    "."
  ] }, idx, !0, {
    fileName: "app/src/components/Recipe/RecipeInstructions.tsx",
    lineNumber: 11,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/src/components/Recipe/RecipeInstructions.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/src/components/Recipe/RecipeInstructions.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), RecipeInstructions_default = RecipeInstructions;

// app/src/components/Recipe/RecipeLayOut.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), RecipeLayOut = (recipe) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.ListItem, { sx: { mb: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.Grid, { container: !0, spacing: 5, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.Grid, { item: !0, xs: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.Typography, { variant: "h3", component: "h2", children: [
    recipe.strMeal,
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.Divider, { variant: "fullWidth", sx: { width: "100%" } }, void 0, !1, {
      fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
    lineNumber: 11,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.Grid, { item: !0, xs: 9, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RecipeIngredients_default, { ingredients: recipe.ingredients }, void 0, !1, {
      fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RecipeInstructions_default, { instructions: recipe.strInstructions }, void 0, !1, {
      fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.Grid, { item: !0, xs: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_material5.Avatar,
    {
      src: recipe.strMealThumb,
      sx: { width: "100%", height: "unset" }
    },
    void 0,
    !1,
    {
      fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
      lineNumber: 21,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
  lineNumber: 9,
  columnNumber: 7
}, this) }, recipe.idMeal, !1, {
  fileName: "app/src/components/Recipe/RecipeLayOut.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), RecipeLayOut_default = RecipeLayOut;

// app/routes/recipe.$recipeId.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Recipe() {
  let recipes = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.List, { children: recipes.map((recipe) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RecipeLayOut_default, { ...recipe }, recipe.idMeal, !1, {
    fileName: "app/routes/recipe.$recipeId.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/routes/recipe.$recipeId.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var loader = async ({ params }) => {
  if (!params.recipeId)
    throw new Response("Not Found", { status: 404 });
  return await getRecipe(params.recipeId);
};

// app/routes/$fetch-recipes.tsx
var fetch_recipes_exports = {};
__export(fetch_recipes_exports, {
  action: () => action
});
var import_server_runtime = require("@remix-run/server-runtime");
var action = async ({ request }) => {
  let formData = await request.formData(), params = Object.fromEntries(formData.entries());
  return await fetchRecipes(params.ing), (0, import_server_runtime.redirect)(params.redirectTo);
};

// app/routes/recipe.tsx
var recipe_exports = {};
__export(recipe_exports, {
  default: () => recipe_default,
  links: () => links2,
  loader: () => loader2
});
var import_material11 = require("@mui/material"), import_react11 = require("@remix-run/react");

// app/src/components/RecipesSideBar/RecipesSideBar.tsx
var import_material10 = require("@mui/material");

// app/src/components/RecipesForm.tsx
var import_material7 = require("@mui/material"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), RecipesForm = () => {
  let matches = (0, import_react7.useMatches)(), { pathname } = matches[matches.length - 1], SubmitBtn = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material7.Button, { type: "submit", variant: "contained", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "/images/dish-finder.svg" }, void 0, !1, {
      fileName: "app/src/components/RecipesForm.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    pathname === "/" && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: [
      "Randomize",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/src/components/RecipesForm.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      " a Recipe"
    ] }, void 0, !0, {
      fileName: "app/src/components/RecipesForm.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/components/RecipesForm.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react7.Form,
    {
      id: "contact-form",
      className: "recipe-form",
      method: "post",
      action: "/fetch-recipes",
      replace: !0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", value: pathname, name: "redirectTo" }, void 0, !1, {
          fileName: "app/src/components/RecipesForm.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_material7.TextField,
          {
            sx: { mb: 3 },
            size: "small",
            label: "Main Ingredient?",
            name: "ing",
            type: "text",
            fullWidth: !0
          },
          void 0,
          !1,
          {
            fileName: "app/src/components/RecipesForm.tsx",
            lineNumber: 27,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "submit-btn-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "/images/fork-icon.svg" }, void 0, !1, {
            fileName: "app/src/components/RecipesForm.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          pathname !== "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material7.Tooltip, { title: "Randomize a Recipe", children: SubmitBtn }, void 0, !1, {
            fileName: "app/src/components/RecipesForm.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this) : SubmitBtn,
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "/images/knife-icon.svg" }, void 0, !1, {
            fileName: "app/src/components/RecipesForm.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/src/components/RecipesForm.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/src/components/RecipesForm.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}, RecipesForm_default = RecipesForm;

// app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx
var import_material9 = require("@mui/material"), import_react9 = require("@remix-run/react");

// app/src/components/RecipesSideBar/RecipeListItem.tsx
var import_material8 = require("@mui/material"), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), RecipeListItem = (recipe) => {
  let { idMeal, strMeal, strMealThumb } = recipe;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material8.ListItem, { disablePadding: !0, divider: !0, className: "recipe-li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material8.ListItemButton, { component: import_react8.Link, to: idMeal, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material8.ListItemIcon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material8.Avatar, { src: strMealThumb }, void 0, !1, {
      fileName: "app/src/components/RecipesSideBar/RecipeListItem.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/src/components/RecipesSideBar/RecipeListItem.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material8.ListItemText, { primary: strMeal }, void 0, !1, {
      fileName: "app/src/components/RecipesSideBar/RecipeListItem.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/components/RecipesSideBar/RecipeListItem.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, idMeal, !1, {
    fileName: "app/src/components/RecipesSideBar/RecipeListItem.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}, RecipeListItem_default = RecipeListItem;

// app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx
var import_react10 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), RecipesSideBarTabs = () => {
  let { recipes, recipesFav } = (0, import_react9.useLoaderData)(), [value, setValue] = (0, import_react10.useState)("RECENT"), handleChange = (_event, newValue) => {
    setValue(newValue);
  }, tabPanel = value === "RECENT" ? recipes : recipesFav;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material9.Box, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_material9.Tabs,
      {
        indicatorColor: "primary",
        textColor: "inherit",
        value,
        variant: "standard",
        onChange: handleChange,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material9.Tab, { label: "Recent Searches", value: "RECENT" }, void 0, !1, {
            fileName: "app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material9.Tab, { label: "Favorites", value: "FAV" }, void 0, !1, {
            fileName: "app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    tabPanel.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material9.List, { sx: { px: 1, overflow: "auto" }, children: tabPanel.map((recipe) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(RecipeListItem_default, { ...recipe }, void 0, !1, {
      fileName: "app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material9.Grid, { container: !0, justifyContent: "center", mt: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material9.Typography, { variant: "h6", children: "No Recpies has been added yet..." }, void 0, !1, {
      fileName: "app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/components/RecipesSideBar/RecipesSideBarTabs.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}, RecipesSideBarTabs_default = RecipesSideBarTabs;

// app/src/components/RecipesSideBar/RecipesSideBar.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), RecipesSideBar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  import_material10.Drawer,
  {
    variant: "permanent",
    sx: {
      width: 400,
      flexShrink: 0,
      ["& .MuiDrawer-paper"]: { width: 400, boxSizing: "border-box" }
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_material10.Toolbar, {}, void 0, !1, {
        fileName: "app/src/components/RecipesSideBar/RecipesSideBar.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_material10.Grid, { container: !0, p: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(RecipesForm_default, {}, void 0, !1, {
        fileName: "app/src/components/RecipesSideBar/RecipesSideBar.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/src/components/RecipesSideBar/RecipesSideBar.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_material10.Divider, {}, void 0, !1, {
        fileName: "app/src/components/RecipesSideBar/RecipesSideBar.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(RecipesSideBarTabs_default, {}, void 0, !1, {
        fileName: "app/src/components/RecipesSideBar/RecipesSideBar.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/src/components/RecipesSideBar/RecipesSideBar.tsx",
    lineNumber: 7,
    columnNumber: 5
  },
  this
), RecipesSideBar_default = RecipesSideBar;

// public/styles/recipe-styles.css
var recipe_styles_default = "/build/_assets/recipe-styles-5XNYZDLF.css";

// app/routes/recipe.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), RecipePageLayout = () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  import_material11.Box,
  {
    sx: {
      display: "flex",
      px: 6
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(RecipesSideBar_default, {}, void 0, !1, {
        fileName: "app/routes/recipe.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
        fileName: "app/routes/recipe.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/routes/recipe.tsx",
    lineNumber: 10,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/routes/recipe.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this), recipe_default = RecipePageLayout;
function links2() {
  return [{ rel: "stylesheet", href: recipe_styles_default }];
}
var loader2 = async () => {
  let [recipes, recipesFav] = await Promise.all(
    [
      getCurrentRecipesList(),
      getFavRecipesList()
    ]
  );
  return (0, import_react11.json)({ recipes, recipesFav });
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links3,
  loader: () => loader3
});
var import_Typography3 = __toESM(require("@mui/material/Typography")), import_material13 = require("@mui/material");

// app/src/components/RecipeCard.tsx
var import_Typography2 = __toESM(require("@mui/material/Typography")), import_material12 = require("@mui/material"), import_react12 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), RecipeCard = (recipe) => {
  let { strMeal, strMealThumb, idMeal } = recipe;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material12.Card, { className: "recipe-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material12.CardActionArea, { component: import_react12.Link, to: `recipe/${idMeal}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material12.CardMedia, { image: strMealThumb }, void 0, !1, {
      fileName: "app/src/components/RecipeCard.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material12.CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_Typography2.default, { gutterBottom: !0, variant: "body1", component: "h2", children: strMeal }, void 0, !1, {
      fileName: "app/src/components/RecipeCard.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/src/components/RecipeCard.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/components/RecipeCard.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/src/components/RecipeCard.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}, RecipeCard_default = RecipeCard;

// app/routes/_index.tsx
var import_react13 = require("@remix-run/react");

// public/styles/home-styles.css
var home_styles_default = "/build/_assets/home-styles-U2YSW3CN.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Index() {
  let recipes = (0, import_react13.useLoaderData)(), mainColor = theme_default.palette.primary.main;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_material13.Container,
    {
      sx: {
        textAlign: "center",
        my: 5
      },
      maxWidth: "md",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_Typography3.default,
          {
            variant: "h2",
            align: "center",
            color: mainColor,
            component: "h1",
            mb: 4,
            children: "Discover your next breakfast, dinner, or lunch effortlessly."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 22,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(RecipesForm_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Typography3.default, { component: "h3", variant: "h5", mt: 3, children: "Randomize a dish by choosing your main ingredient or let our culinary commanders do the work for you." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Typography3.default, { color: mainColor, component: "h2", variant: "h5", mt: 3, children: "Elevate your dining experience with just a click!" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_material13.Grid,
          {
            container: !0,
            maxWidth: "md",
            mt: 5,
            spacing: 4,
            sx: { justifyContent: recipes.length >= 4 ? "left" : "center" },
            children: recipes.map(
              (recipe) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material13.Grid, { item: !0, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(RecipeCard_default, { ...recipe }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 49,
                columnNumber: 13
              }, this) }, recipe.idMeal, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 48,
                columnNumber: 9
              }, this)
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 40,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
function links3() {
  return [{ rel: "stylesheet", href: home_styles_default }];
}
var loader3 = async () => await getCurrentRecipesList();

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZZDYZE3E.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-AY7FOO6V.js", "/build/_shared/chunk-4UIL3YCE.js", "/build/_shared/chunk-C5GFFGVS.js", "/build/_shared/chunk-X7HOQLDF.js", "/build/_shared/chunk-GGIQUBVS.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-K3Y5FZJP.js", imports: ["/build/_shared/chunk-GDPP5WT3.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/$fetch-recipes": { id: "routes/$fetch-recipes", parentId: "root", path: ":fetch-recipes", index: void 0, caseSensitive: void 0, module: "/build/routes/$fetch-recipes-LVH6PKU5.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-AE7LQUFP.js", imports: ["/build/_shared/chunk-JAMKMJBJ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/recipe": { id: "routes/recipe", parentId: "root", path: "recipe", index: void 0, caseSensitive: void 0, module: "/build/routes/recipe-OCQ5H4YI.js", imports: ["/build/_shared/chunk-JAMKMJBJ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/recipe.$recipeId": { id: "routes/recipe.$recipeId", parentId: "routes/recipe", path: ":recipeId", index: void 0, caseSensitive: void 0, module: "/build/routes/recipe.$recipeId-S7I7VHPD.js", imports: ["/build/_shared/chunk-GDPP5WT3.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "5d934246", hmr: { runtime: "/build/_shared\\chunk-GGIQUBVS.js", timestamp: 1706521617656 }, url: "/build/manifest-5D934246.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/recipe.$recipeId": {
    id: "routes/recipe.$recipeId",
    parentId: "routes/recipe",
    path: ":recipeId",
    index: void 0,
    caseSensitive: void 0,
    module: recipe_recipeId_exports
  },
  "routes/$fetch-recipes": {
    id: "routes/$fetch-recipes",
    parentId: "root",
    path: ":fetch-recipes",
    index: void 0,
    caseSensitive: void 0,
    module: fetch_recipes_exports
  },
  "routes/recipe": {
    id: "routes/recipe",
    parentId: "root",
    path: "recipe",
    index: void 0,
    caseSensitive: void 0,
    module: recipe_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
