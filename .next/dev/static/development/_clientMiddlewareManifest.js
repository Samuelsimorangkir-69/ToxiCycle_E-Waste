self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/static|_next\\/image|favicon.ico|manifest\\.json|sw\\.js|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest|json)$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next/static|_next/image|favicon.ico|manifest\\.json|sw\\.js|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest|json)$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()