export default {
  global: {
    componenteFormativo:
      'Buenas prácticas de almacenamiento de los productos farmacéuticos',
    descripcionCurso:
      'En este componente formativo se abordarán temas relacionados con las buenas prácticas de almacenamiento, las condiciones en la que se deben mantener los productos farmacéuticos, los controles e infraestructura necesaria y la documentación que se debe llevar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contextualización del proceso de almacenamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planificación del proceso de almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Selección del lugar',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diseño de las instalaciones',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medidas de seguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Talento humano y dotación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Requisitos documentales en las buenas prácticas de almacenamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Requisitos para la ubicación y organización de los productos farmacéuticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Controles del proceso de almacenamiento de productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Controles de factores ambientales',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Controles de las condiciones de higiene',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Devoluciones de los productos farmacéuticos',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Controles de fecha de vencimiento',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo:
          'Logística en el abastecimiento, acondicionamiento y distribución de productos farmacéuticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Normatividad ambiental y manejo de residuos peligrosos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF14_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Controles de factores ambientales',
      referencia:
        'Carthez, A. (2018). Cadena/red fría y la importancia de tener un registro de temperatura y humedad en la farmacia (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MSaOOXlji3g',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'acción y resultado de poner o guardar las cosas en un almacén.',
    },
    {
      termino: 'Almacén',
      significado: 'es un lugar o espacio físico para el almacenaje de bienes.',
    },
    {
      termino: 'BPA',
      significado: 'Buenas Prácticas de Abastecimiento.',
    },
    {
      termino: 'Bodega',
      significado: 'espacio destinado al almacenamiento de distintos bienes.',
    },
    {
      termino: 'Cadena de frio',
      significado:
        'cadena de suministro de temperatura controlada 2-8 grados centígrados.',
    },
    {
      termino: 'Establecimiento farmacéutico',
      significado:
        'establecimiento dedicado a la producción, almacenamiento, distribución, comercialización, dispensación, control o aseguramiento de la calidad de los medicamentos, dispositivos médicos o de las materias primas necesarias para su elaboración y demás productos autorizados por ley para su comercialización en dicho establecimiento.',
    },
    {
      termino: 'Estantería',
      significado: 'mueble con estantes horizontales que sirve para almacenar.',
    },
    {
      termino: 'Estibar',
      significado:
        'técnica de poner la carga a bordo para ser transportada con un máximo de seguridad para el buque y su tripulación, ocupando el mínimo espacio posible, evitando averías en la misma y reduciendo al mínimo las demoras en el puerto de descarga.',
    },
    {
      termino: 'Fotosensible',
      significado: 'lo que se degradan rápidamente en presencia de luz.',
    },
    {
      termino: 'Higroscópico',
      significado:
        'que es sensibles a la humedad, generando un deterioro en su forma farmacéutica como ablandamiento, cambio de color (tableta).',
    },
    {
      termino: 'Logística',
      significado:
        'conjunto de medios y métodos necesarios para llevar a cabo la organización de una empresa, o de un servicio, especialmente de distribución.',
    },
    {
      termino: 'Racks de almacenamiento',
      significado:
        'estanterías diseñadas para obtener el máximo aprovechamiento del espacio disponible.',
    },
    {
      termino: 'Servicio farmacéutico',
      significado:
        'servicio de atención en salud responsable de las actividades, procedimientos e intervenciones de carácter técnico, científico y administrativo, relacionados con los medicamentos y los dm, utilizados en la PyP, diagnóstico, tratamiento y rehabilitación de la enfermedad, con el fin de contribuir en forma armónica e integral al mejoramiento de la calidad de vida individual y colectiva.',
    },
    {
      termino: 'Termolábiles',
      significado:
        'medicamentos que deben conservarse en nevera, entre 2 °C y 8 °C.',
    },
  ],
  referencias: [
    {
      referencia:
        'Invima. (s.f.). Buenas prácticas de almacenamiento y distribución.',
      link:
        'https://www.invima.gov.co/images/pdf/inspecion_y_vigilancia/ASS-ESADI072-BUENASPRACTICASDEALMACENAMIENTOYDISTRIBUCION.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2014). Decreto 0351 de 2014. Por el cual se reglamenta la gestión integral de los residuos generados en la atención en salud y otras actividades.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200351%20de%202014.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2009). Resolución 0371 de 2009. Por la cual se establecen los elementos que deben ser considerados en los Planes de Gestión de Devolución de Productos Posconsumo de Fármacos o Medicamentos Vencidos.',
      link:
        'https://www.corporinoquia.gov.co/files/Norma%20Respel/Resolucion_371_de_2009.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2007). Resolución 1403 de 2007. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras Disposiciones.',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
    {
      referencia:
        'Presidencia de la República. (2016). Decreto 0780 de 2016. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Lida Alzáte Suárez',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edwing Amir Moreno Moreno',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
