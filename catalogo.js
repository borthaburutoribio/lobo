/* ===================================================================
   CATÁLOGO DE LOBO — editar solo este archivo para cambiar la tienda
   -------------------------------------------------------------------
   - nombre:     cómo se llama la pieza
   - detalle:    medidas, aroma, colores, lo que haga falta (una línea)
   - foto:       nombre del archivo en assets/img/ (opcional)
   - alt:        descripción de la foto, para Google y lectores de pantalla
   - precio:     precio por menor, solo números (ej: 18500).
                 'consultar' = muestra "Consultar". 0 = relleno ($ 00.000)
   - mayorista:  precio por mayor, igual que arriba
   - nuevo:      true para mostrar la etiqueta "Nuevo"
   Lo que dice Lorem Ipsum es de relleno hasta tener la lista real de Maca.
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
        { nombre: 'Velas peonía', detalle: 'Lila, rosa viejo o blanco · Lorem ipsum cm', foto: 'velas-peonia-lila-y-blanca.jpg', alt: 'Velas con forma de peonía en lila, rosa viejo y blanco sobre una rodaja de madera', precio: 0, mayorista: 0, nuevo: true },
        { nombre: 'Vela flor', detalle: 'Pétalos tallados a mano · Lorem ipsum cm', foto: 'producto-velas-rosas.jpg', alt: 'Velas artesanales con forma de flor, pétalos esculpidos a mano', precio: 0, mayorista: 0 },
        { nombre: 'Vela candelabro esferas', detalle: 'Para candelabro, ideal mesas de evento · Lorem ipsum cm', foto: 'producto-velas-cirio-torcidas.jpg', alt: 'Velas candelabro artesanales con diseño de esferas', precio: 0, mayorista: 0 },
        { nombre: 'Vela bubble', detalle: 'Esferas en relieve · Lorem ipsum cm', foto: 'producto-vela-perlas-pilar.jpg', alt: 'Vela bubble con textura de esferas en relieve', precio: 0, mayorista: 0 }
      ]
    },
    {
      id: 'religiosas',
      nombre: 'Velas religiosas',
      bajada: 'Esculpidas, con caja para regalar.',
      items: [
        { nombre: 'Virgen del Sagrado Corazón', detalle: 'Con aureola, presentada en caja · Lorem ipsum cm', foto: 'vela-virgen-sagrado-corazon-en-caja.jpg', alt: 'Vela esculpida de la Virgen del Sagrado Corazón presentada en caja con papel kraft', precio: 0, mayorista: 0, nuevo: true },
        { nombre: 'Vela Virgen María', detalle: 'Para comuniones y bautismos · Lorem ipsum cm', foto: 'producto-vela-virgen-maria.jpg', alt: 'Vela artesanal esculpida con la forma de la Virgen María', precio: 0, mayorista: 0 },
        { nombre: 'Vela Jesús', detalle: 'Presentada en caja · Lorem ipsum cm', foto: 'producto-vela-jesus.jpg', alt: 'Vela artesanal esculpida con la figura de Jesús, presentada en caja', precio: 0, mayorista: 0 },
        { nombre: 'Vela flor de loto', detalle: 'Con portasahumerio a juego · Lorem ipsum cm', foto: 'producto-vela-flor-loto.jpg', alt: 'Vela con forma de flor de loto y portasahumerio a juego', precio: 0, mayorista: 0 }
      ]
    },
    {
      id: 'microcemento',
      nombre: 'Microcemento',
      bajada: 'Hidrolaqueado, se limpia con un trapo. El envase queda.',
      items: [
        { nombre: 'Vela terrazo con fosforera', detalle: 'Dos pabilos de madera y lugar para los fósforos · Lorem ipsum cm', foto: 'vela-cemento-terrazo-fosforos.jpg', alt: 'Vela en envase de cemento terrazo con dos pabilos de madera y fosforera incorporada', precio: 0, mayorista: 0, nuevo: true },
        { nombre: 'Bandeja efecto mármol', detalle: '24 cm de diámetro · hidrolaqueada', foto: 'producto-plato-marmol.jpg', alt: 'Bandeja decorativa de microcemento hidrolaqueado efecto mármol, 24 cm de diámetro', precio: 0, mayorista: 0 },
        { nombre: 'Vela en cuenco decorativo', detalle: 'Envase reutilizable · Lorem ipsum cm', foto: 'producto-vela-jarra-marmol.jpg', alt: 'Vela en recipiente decorativo efecto mármol, envase reutilizable', precio: 0, mayorista: 0 },
        { nombre: 'Vela con relieve y tapa', detalle: 'Tapa a juego, reutilizable · Lorem ipsum cm', foto: 'producto-vela-jarra-relieve.jpg', alt: 'Vela artesanal en recipiente con relieve decorativo y tapa a juego', precio: 0, mayorista: 0 }
      ]
    },
    {
      id: 'resina',
      nombre: 'Resina epoxi',
      bajada: 'Cada pieza con su veta propia.',
      items: [
        { nombre: 'Lorem ipsum resina', detalle: 'Excepteur sint occaecat · 00 cm', precio: 0, mayorista: 0 },
        { nombre: 'Cupidatat non proident', detalle: 'Sunt in culpa · set x 4', precio: 0, mayorista: 0 },
        { nombre: 'Officia deserunt', detalle: 'Mollit anim id est · 00 cm', precio: 0, mayorista: 0 }
      ]
    },
    {
      id: 'souvenirs',
      nombre: 'Souvenirs y eventos',
      bajada: 'Con etiqueta personalizada. Precio por unidad.',
      items: [
        { nombre: 'Sellos de cera', detalle: 'Para invitaciones, cartas y paquetes · Lorem ipsum', foto: 'producto-sellos-cera.jpg', alt: 'Sellos de cera decorativos para invitaciones y correspondencia', precio: 0, mayorista: 0 },
        { nombre: 'Lorem souvenir mini', detalle: 'Laborum sed ut · etiqueta incluida', precio: 0, mayorista: 0 },
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
