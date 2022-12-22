export const authRoutes = [
    {path: Paths.root, element: <Home />},
    {path: Paths.warehouses, element: <Warehouses />},
    {path: `${Paths.warehouses}/:id`, element: <WarehouseItem />},
    {path: '*', element: <div>404</div>},
]

export const contentRoutes = [
    {path: Paths.root, element: <Home />},
    {path: Paths.warehouses, element: <Warehouses />},
    {path: `${Paths.warehouses}/:id`, element: <WarehouseItem />},
    {path: '*', element: <div>404</div>},
]