const path = require('path');
const { Joi } = require('@docusaurus/utils-validation');
const theme = require('@docusaurus/theme-classic/lib');

const packageName = '@docusaurus/theme-classic';
const themeClassicDir = require.resolve(packageName);
const baseDir = `${themeClassicDir.split(packageName)[0]}${packageName}`;

const themePath = path.join(baseDir, 'lib-next/theme');
const tsThemePath = path.join(baseDir, 'src/theme');

let { ThemeConfigSchema } = require('@docusaurus/theme-classic/lib/validateThemeConfig.js');

module.exports = {
  ...theme,
  default: (config, opts) => {
    return {
      ...theme.default(config, opts),
      getThemePath() {
        return themePath;
      },
      getTypescriptThemePath() {
        return tsThemePath;
      },
    };
  },
  validateThemeConfig: ({ validate, themeConfig }) => {
    const {
      customSchema: {
        navbar: { items },
      },
    } = themeConfig;

    const CustomThemeConfigSchema = ThemeConfigSchema.concat(
      Joi.object({
        navbar: {
          items: items.reduce((acc, cur) => acc.items(cur), Joi.array()),
        },
      })
    );

    return validate(CustomThemeConfigSchema, themeConfig);
  },
};
