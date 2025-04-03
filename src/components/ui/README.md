# Componentes UI del Dashboard

Esta carpeta contiene los componentes reutilizables del dashboard. Todos los componentes están diseñados para ser consistentes con el tema claro/oscuro y siguen las mejores prácticas de accesibilidad.

## Componentes Disponibles

### Input
Componente de entrada de texto con soporte para etiquetas, errores y texto de ayuda.

```tsx
import Input from './Input';

// Uso básico
<Input label="Email" type="email" placeholder="tu@email.com" />

// Con error
<Input 
  label="Contraseña" 
  type="password" 
  error="La contraseña es requerida" 
/>

// Con texto de ayuda
<Input 
  label="Usuario" 
  helperText="Ingresa tu nombre de usuario" 
/>
```

### Button
Botón con diferentes variantes, tamaños y estados.

```tsx
import Button from './Button';

// Variantes
<Button variant="primary">Primario</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Tamaños
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

// Con iconos
<Button leftIcon={<Icon />}>Con Icono Izquierdo</Button>
<Button rightIcon={<Icon />}>Con Icono Derecho</Button>

// Estado de carga
<Button isLoading>Cargando...</Button>
```

### Card
Contenedor con bordes redondeados y sombras.

```tsx
import Card from './Card';

// Uso básico
<Card>
  Contenido
</Card>

// Con padding personalizado
<Card padding="lg">
  Contenido con padding grande
</Card>
```

### FormContainer
Contenedor especializado para formularios con título y subtítulo.

```tsx
import FormContainer from './FormContainer';

<FormContainer
  title="Registro"
  subtitle="Ingresa tus datos para crear una cuenta"
  maxWidth="md"
>
  {/* Contenido del formulario */}
</FormContainer>
```

### Section
Sección de contenido con opciones de fondo y padding.

```tsx
import Section from './Section';

<Section
  title="Estadísticas"
  subtitle="Resumen de datos importantes"
  padding="lg"
  background="gray"
>
  {/* Contenido de la sección */}
</Section>
```

### StatCard
Tarjeta para mostrar estadísticas con iconos y tendencias.

```tsx
import StatCard from './StatCard';

<StatCard
  title="Usuarios Activos"
  value="1,234"
  icon={<UserIcon />}
  trend={{ value: 12, isPositive: true }}
  description="Usuarios activos en los últimos 30 días"
/>
```

### Table
Tabla con soporte para ordenamiento y selección de filas.

```tsx
import Table from './Table';

const headers = ['Nombre', 'Email', 'Rol'];
const data = [
  { nombre: 'Juan', email: 'juan@example.com', rol: 'Admin' },
  { nombre: 'María', email: 'maria@example.com', rol: 'Usuario' },
];

<Table
  headers={headers}
  data={data}
  onRowClick={(row) => console.log(row)}
/>
```

## Estilos y Temas

Todos los componentes utilizan las variables CSS definidas en `index.css` para mantener la consistencia visual y el soporte para temas claro/oscuro.

### Variables CSS Principales

```css
:root {
  --background: #ffffff;
  --foreground: #1a1a1a;
  --primary-50: #f0f9ff;
  /* ... más variables ... */
}

.tema-oscuro {
  --background: #0f172a;
  --foreground: #f8fafc;
  /* ... variables para tema oscuro ... */
}
```

## Mejores Prácticas

1. **Accesibilidad**
   - Todos los componentes incluyen atributos ARIA cuando es necesario
   - Los colores mantienen un contraste adecuado
   - Los elementos interactivos son accesibles por teclado

2. **Responsive**
   - Los componentes son responsivos por defecto
   - Utilizan unidades relativas y flexbox/grid

3. **Temas**
   - Todos los componentes soportan tema claro/oscuro
   - Utilizan variables CSS para consistencia

4. **Personalización**
   - Los componentes aceptan className para estilos adicionales
   - Las props permiten personalizar el comportamiento 