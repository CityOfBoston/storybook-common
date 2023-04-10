
declare module "storybook-common" {
  type Children = React.ReactNode;
  type WebpackConfig = any;
  type WebpackContextModule = any;
  type Mode = 'DEVELOPMENT' | 'PRODUCTION'; // 'PRODUCTION' is used when building the static version of storybook.

  export function centerWrapper( props: { children: Children } ): JSX.Element;
  export function narrowWrapper( props: { children: Children } ): JSX.Element;

  export function storybookOptions(projectName): any;
  export function webpackConfig( config: WebpackConfig, _mode?: Mode ): WebpackConfig;
  export function loadStories(...args: WebpackContextModule[]): void;
}
