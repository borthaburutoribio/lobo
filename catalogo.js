/* ===================================================================
   CATÁLOGO DE LOBO — editar solo este archivo para cambiar la tienda
   -------------------------------------------------------------------
   - nombre:     cómo se llama la pieza
   - detalle:    medidas, aroma, colores, lo que haga falta (una línea)
   - precio:     precio por menor, solo números (ej: 18500).
                 'consultar' = muestra "Consultar". 0 = relleno ($ 00.000)
   - mayorista:  precio por mayor, igual que arriba
   - nuevo:      true para mostrar la etiqueta "Nuevo"
   Todo lo que dice Lorem Ipsum es de relleno hasta tener la lista real.
   =================================================================== */

window.LOBO_CATALOGO = {
  whatsapp: '5491162351551',
  minimoMayorista: 'Lorem',   // ej: '10' → "desde 10 unidades por artículo"

  categorias: [
    {
      id: 'velas',
      nombre: 'Velas',
      bajada: 'Blend de soja y abeja, pabilo de madera.',
      items: [
        { nombre: 'Lorem ipsum dolor', detalle: 'Sit amet consectetur · 00 cm · 00 h de encendido', precio: 0, mayorista: 0, nuevo: true },
        { nombre: 'Consectetur adipiscing', detalle: 'Elit sed do eiusmod · 00 cm', precio: 0, mayorista: 0 },
        { nombre: 'Tempor incididunt', detalle: 'Ut labore et dolore · aroma a elección', precio: 0, mayorista: 0 },
        { nombre: 'Magna aliqua enim', detalle: 'Ad minim veniam · 00 cm', precio: 0, mayorista: 0 }
      ]
    },
    {
      id: 'religiosas',
      nombre: 'Velas religiosas',
      bajada: 'Esculpidas, con caja para regalar.',
      items: [
        { nombre: 'Lorem ipsum sancta', detalle: 'Quis nostrud exercitation · 00 cm · en caja', precio: 0, mayorista: 0 },
        { nombre: 'Dolor sit amet', detalle: 'Ullamco laboris nisi · 00 cm', precio: 0, mayorista: 0 },
        { nombre: 'Aliquip ex ea', detalle: 'Commodo consequat · 00 cm', precio: 0, mayorista: 0 }
      ]
    },
    {
      id: 'microcemento',
      nombre: 'Microcemento',
      bajada: 'Hidrolaqueado, se limpia con un trapo.',
      items: [
        { nombre: 'Lorem ipsum bandeja', detalle: 'Duis aute irure · 00 cm de diámetro', precio: 0, mayorista: 0 },
        { nombre: 'Reprehenderit cuenco', detalle: 'In voluptate velit · 00 cm', precio: 0, mayorista: 0 },
        { nombre: 'Esse cillum dolore', detalle: 'Eu fugiat nulla · con vela', precio: 0, mayorista: 0 }
      ]
    },
    {
      id: 'resina',
      nombre: 'Resina epoxi',
      bajada: 'Cada pieza con su veta propia.',
      items: [
        { nombre: 'Lorem ipsum resina', detalle: 'Excepteur sint occaecat · 00 cm', precio: 0, mayorista: 0, nuevo: true },
        { nombre: 'Cupidatat non proident', detalle: 'Sunt in culpa · set x 4', precio: 0, mayorista: 0 },
        { nombre: 'Officia deserunt', detalle: 'Mollit anim id est · 00 cm', precio: 0, mayorista: 0 }
      ]
    },
    {
      id: 'souvenirs',
      nombre: 'Souvenirs y eventos',
      bajada: 'Con etiqueta personalizada. Precio por unidad.',
      items: [
        { nombre: 'Lorem souvenir mini', detalle: 'Laborum sed ut · etiqueta incluida', precio: 0, mayorista: 0 },
        { nombre: 'Perspiciatis unde', detalle: 'Omnis iste natus · con bolsita', precio: 0, mayorista: 0 },
        { nombre: 'Centro de mesa lorem', detalle: 'Error sit voluptatem · 00 cm', precio: 0, mayorista: 0 }
      ]
    },
    {
      id: 'empresas',
      nombre: 'Regalos empresariales',
      bajada: 'Con logo o tarjeta de tu empresa.',
      items: [
        { nombre: 'Lorem box empresa', detalle: 'Accusantium doloremque · vela + tarjeta', precio: 0, mayorista: 0 },
        { nombre: 'Laudantium totam', detalle: 'Rem aperiam eaque · vela + bandeja', precio: 0, mayorista: 0 },
        { nombre: 'Ipsa quae ab illo', detalle: 'Inventore veritatis · a medida', precio: 0, mayorista: 0 }
      ]
    }
  ]
};
