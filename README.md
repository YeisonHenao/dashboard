# Dashboard App

Este proyecto es una aplicación de Dashboard construida con TypeScript y React. La aplicación incluye una variedad de componentes que permiten visualizar estadísticas, gráficos y tablas de datos.

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables de la aplicación.
    - **layout/**: Contiene los componentes de diseño como `Navbar`, `Sidebar` y `Layout`.
    - **charts/**: Contiene componentes para gráficos como `BarChart`, `LineChart` y `PieChart`.
    - **stats/**: Contiene componentes para mostrar estadísticas como `StatCard` y `StatsGrid`.
    - **tables/**: Contiene componentes para tablas como `DataTable` y `TablePagination`.
  - **pages/**: Contiene las vistas de la aplicación, incluyendo `Dashboard`.
  - **hooks/**: Contiene hooks personalizados, como `useStats`.
  - **types/**: Contiene tipos e interfaces utilizados en el proyecto.
  - **utils/**: Contiene funciones de utilidad.
  - **styles/**: Contiene estilos globales.
  - **App.tsx**: Punto de entrada de la aplicación.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd dashboard-app
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Para iniciar la aplicación, ejecuta:
```bash
npm start
```

La aplicación se abrirá en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.