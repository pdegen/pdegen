// router/routesMeta.ts
export const routesMeta = [
  { path: '/', name: 'Home' },
  { path: '/sandbox', name: 'Sandbox' },
  { path: '/advocacy', name: 'Advocacy' },
  { path: '/lounge', name: 'Lounge' },
]

export const routesMetaFiltered = routesMeta.filter((r) => r.path != '/sandbox')
