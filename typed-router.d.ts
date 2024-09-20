/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    'root': RouteRecordInfo<'root', '/', Record<never, never>, Record<never, never>>,
    '$error': RouteRecordInfo<'$error', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    'apps-pointage-dashboard': RouteRecordInfo<'apps-pointage-dashboard', '/apps/pointage/dashboard', Record<never, never>, Record<never, never>>,
    'apps-user-list': RouteRecordInfo<'apps-user-list', '/apps/user/list', Record<never, never>, Record<never, never>>,
    'apps-user-list-add-new-user-drawer': RouteRecordInfo<'apps-user-list-add-new-user-drawer', '/apps/user/list/AddNewUserDrawer', Record<never, never>, Record<never, never>>,
    'apps-user-view-id': RouteRecordInfo<'apps-user-view-id', '/apps/user/view/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'forgot-password': RouteRecordInfo<'forgot-password', '/forgot-password', Record<never, never>, Record<never, never>>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'reset-password-v1': RouteRecordInfo<'reset-password-v1', '/reset-password-v1', Record<never, never>, Record<never, never>>,
    'second-page': RouteRecordInfo<'second-page', '/second-page', Record<never, never>, Record<never, never>>,
    'two-steps-v1': RouteRecordInfo<'two-steps-v1', '/two-steps-v1', Record<never, never>, Record<never, never>>,
    'user': RouteRecordInfo<'user', '/user', Record<never, never>, Record<never, never>>,
  }
}