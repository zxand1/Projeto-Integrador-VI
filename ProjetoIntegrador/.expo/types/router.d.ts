/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
<<<<<<< Updated upstream
      StaticRoutes: `/` | `/_sitemap` | `/styles/styles` | `/teste`;
=======
      StaticRoutes: `/` | `/_sitemap` | `/quarta` | `/segunda` | `/terceira`;
>>>>>>> Stashed changes
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
