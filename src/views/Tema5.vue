<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Requisitos documentales en las buenas prácticas de almacenamiento
    
    p Todo proceso, para su correcto funcionamiento y mejora continua, debe estar documentado, para lograr la estandarización de cada una de sus actividades y que cada uno de sus integrantes realicen sus tareas de la misma forma. A continuación, se indica cuáles son esos documentos.

    TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-4.py-lg-5(titulo="Pirámide documental" :icono="require('@/assets/curso/tema5/img01.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Pirámide documental
            p En la pirámide se relacionan los documentos necesarios para el manejo adecuado y buenas prácticas del proceso de almacenamiento.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img02.svg" alt="Muestra pirámide con lo siguiente:<br>Manual<br>Políticas<br>Procedimientos<br>Instructivos<br>Registros")
      .py-4.py-lg-5(titulo="Requerimientos documentales" :icono="require('@/assets/curso/tema5/img03.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Requerimientos documentales
            p Adicional a los documentos enunciados antes, se tiene la alternativa de contar con un #[em software] que agilice el registro y análisis de la información como insumo para la toma de decisiones, el cual debe contar con el manejo y control de información o procesos descrita en la ilustración.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            .BG05.p-4.mb-lg-4
              .h4 Dotación
              p.mb-0 Estanterías, estibas, congeladores, neveras, termohigrómetro, compartimentos especiales para almacenar medicamentos de control especial, escritorio, sillas, extintores, sistemas de cómputo, #[em software], carretas para movilizar la mercancía, utensilios de oficina, papelería, línea, canecas, para residuos y bibliografía. Los equipos  o instrumentos de medición deben tener hoja de vida y estar en el programa de mantenimiento.
            .row.justify-content-center
              .col-lg-6
                .BG06.hg-01.p-4
                  .h4 Kárdex o #[em software]
                  p.mb-0 Para manejar los temas relacionados con entregas, descargues, recepción y movimientos generales de los productos farmacéuticos.
              .col-lg-6
                .BG07.hg-01.p-4
                  .h4 Informes contables
                  p.mb-0 Informes para los organismos de control o requerimientos internos.

    p A continuación, se detalla la importancia de cada uno de los documentos requeridos en el proceso, se nombran algunos de ellos y, como apoyo complementario, se incluyen los vínculos que llevan a ejemplos para conocer cómo se utilizan en los establecimientos y servicios farmacéuticos.

    .tarjeta.color-secundario.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/img29.png" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.text-ciel.mb-4 Proceso de manejo de medicamentos vencidos, deteriorados, alterados, usados y excedentes
              p.text-white.mb-2 #[strong Función]: establece objetivos y estándares de la compañía en diferentes temas.
              p.text-white.mb-2 #[strong Ejemplo]: plan integral de manejo de residuos hospitalarios y similares.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_de_Gestion_de_Residuos_de_Medicamentos.pdf')" target="_blank")
                span(style="color: #000") Descargar
                i.fas.fa-file-download(style="color: #000")

    .tarjeta.color-secundario.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/img29.png" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.text-ciel.mb-4 Limpieza y desinfección de áreas de almacenamiento de medicamentos y dispositivos médicos
              p.text-white.mb-2 #[strong Función]: detallar paso a paso una actividad que se realice.
              p.text-white.mb-2 #[strong Ejemplo]: instructivo de limpieza.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Instructivo_de_Limpieza_y_desinfección.pdf')" target="_blank")
                span(style="color: #000") Descargar
                i.fas.fa-file-download(style="color: #000")

    .tarjeta.color-secundario.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/img29.png" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.text-ciel.mb-4 Almacenamiento de productos farmacéuticos
              p.text-white.mb-2 #[strong Función]: definir las actividades que se realizan en el proceso.
              p.text-white.mb-2 #[strong Ejemplos]: Procedimiento almacenamiento de productos farmacéuticos. 
              p.text-white.mb-2 Procedimiento de limpieza y desinfección.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Proceso_Almacenamiento.pdf')" target="_blank")
                span(style="color: #000") Descargar
                i.fas.fa-file-download(style="color: #000")

    .tarjeta.color-secundario.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/img29.png" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.text-ciel.mb-4 Control de lotes y fechas de vencimiento de productos farmacéuticos
              p.text-white.mb-2 #[strong Función]: permiten dejar evidencia de la realización de una actividad o tarea.
              p.text-white.mb-2 #[strong Ejemplos]: Matriz de medicamentos, dispositivos médicos e insumos.
              p.text-white.mb-2 Acta de recepción técnica y administrativa de productos farmacéuticos.
              p.text-white.mb-2 Fechas de vencimiento de productos farmacéuticos.
              p.text-white.mb-2 Acta de control de lotes y fechas de vencimiento de productos farmacéuticos.
              p.text-white.mb-2 Registros de inventarios de productos farmacéuticos.
              p.text-white.mb-2 Control de condiciones ambientales y análisis.
              p.text-white.mb-2 Registro de limpieza.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Acta_de_Control_de_Lotes_y_Fechas_de_Vencimiento_de_Productos_Farmaceuticos.pdf')" target="_blank")
                span(style="color: #000") Descargar
                i.fas.fa-file-download(style="color: #000")

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
