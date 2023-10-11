<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Controles del proceso de almacenamiento de productos farmacéuticos
    
    .row.justify-content-end.align-items-end.pt-lg-5.mb-4
      .col-lg-4.col-6.img-02(data-aos="fade-right")
        img.w-85(src="@/assets/curso/tema7/img01.svg" alt="Imagen decorativa")
      .col-lg-12.BG03.p-4(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-8
            p El almacén del establecimiento farmacéutico o el servicio farmacéutico debe contar con mecanismos de control, evaluación y gestión de la calidad durante todas las etapas del proceso de almacenamiento de los productos farmacéuticos, de acuerdo con el Decreto 780 de 2016 y la Resolución 1403 de 2007.
            p Los controles que se realizan se pueden clasificar como: 
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Controles de factores ambientales.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Controles de condiciones de higiene.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Devoluciones de los productos farmacéuticos.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Fechas de vencimiento.

    p(data-aos="fade-right") A continuación, se conocerá más sobre cada uno de ellos.

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Controles de factores ambientales

    p(data-aos="fade-right") Con el objetivo de mantener las condiciones ambientales de almacenamiento de los productos farmacéuticos, se deben considerar características que tengan relación con #[strong la luz, temperatura, cadena de frío y humedad].
    p.mb-5(data-aos="fade-right") El siguiente esquema representa los controles que aplican a cada uno de los cuatro parámetros:
 
    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR09" data-aos="zoom-in")
      .row.justify-content-center(titulo="Luz natural o artificial")
        .col-lg-6.order-lg-1.order-2
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | Los medicamentos fotosensibles deben permanecer en sus envases y empaques originales, bien cerrados y evitar contacto directo con la luz.
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | Verificar que estos vengan en envases ámbar.
          p #[strong Ejemplo]: clozapina, ranitidina, azitromicina, ibuprofeno, mebendazol, entre otros.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema7/img02.png" alt="Imagen decorativa")
      .row.justify-content-center(titulo="Temperatura")
        .col-lg-6.order-lg-1.order-2
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | Situar termómetros calibrados en lugares específicos para llevar registros de temperatura (nevera y almacenamiento).
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | Utilizar ventiladores, extractores, aire acondicionado para mantener la temperatura adecuada.
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | Algunos fármacos termolábiles son: el A.S.A. tabletas, antibióticos, sueros, acetaminofén, entre otros.

        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema7/img03.png" alt="Imagen decorativa")
      .row.justify-content-center(titulo="Cadena de frío")
        .col-lg-6.order-lg-1.order-2
          p Para el control de la cadena de frío, los refrigeradores deben estar a la sombra y lejos de fuente de calor, separados de techos y paredes mínimo 15 cm, bien nivelados y conectados directamente a la pared.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema7/img04.png" alt="Imagen decorativa")
      .row.justify-content-center(titulo="Humedad")
        .col-lg-6.order-lg-1.order-2
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | Mantener la humedad en un rango entre 60% a 70%.
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | Disminuir la humedad utilizando aire acondicionado.
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | Los productos higroscópicos deben llevar en su empaque original una bolsita de sílica gel, la cual debe ser cambiada cuando cambie de color.
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | No sacar los medicamentos y dispositivos médicos de las cajas primarias.
            li
              i.far.fa-check-circle(style="color: #7E5EE3")
              | Algunos fármacos que se alteran con la humedad son: metronidazol, preparados oftálmicos sulfamídicos, tinidazol, dapsona, sales de rehidratación.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema7/img05.png" alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Y dentro de los instrumentos utilizados para realizar los controles ambientales se encuentran los siguientes tipos de termohigrómetro:

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-lg-5(titulo="Digital" :icono="require('@/assets/curso/tema7/img06.png')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Rango de medición
            ul.lista-ul--color.mb-5
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Temperatura interior de 0 a 50 °C.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Temperatura exterior 50 °C a 70 °C.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Humedad relativa 15% a 95%.
            .h4 Funciones
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Memorización de máximos y mínimos para humedad y temperatura.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img07.png" alt="Imagen decorativa")
      .py-4.py-lg-5(titulo="Análogo" :icono="require('@/assets/curso/tema7/img08.png')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | #[strong Rango temperatura:] -30 + 50 ºC.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | #[strong Humedad relativa:] 20 a 100 % HR.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | #[strong División de escala:] 1 °C / 2 % HR.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | #[strong Precisión:] ± 2 °C / ± 10 % HR aprox.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | #[strong Recalibrable.]
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | #[strong Indicación:] medición de temperatura y humedad relativa.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img09.png" alt="Imagen decorativa")

    p(data-aos="fade-right") Para conocer más sobre cómo se interpretan las mediciones de este instrumento, se invita ver el video #[em Cadena/red fría y la importancia de tener un registro de temperatura y humedad en la farmacia] que se encuentra en el material complementario.
    
    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Controles de las condiciones de higiene

    p(data-aos="fade-right") Estas condiciones son importantes, porque de ellas depende la permanencia de la estabilidad a nivel microbiológico de los productos farmacéuticos que están en el área de almacenamiento.
    p.mb-5 Se deben tener presente las siguientes consideraciones: 

    .BGRS03.p-4.mb-4
      .row
        .col-lg-8
          ul.lista-ul--color
            li(data-aos="fade-right")
              i.far.fa-check-circle(style="color: #00BCD4")
              | Contar con un lugar con excelente ventilación y donde no esté la presencia libre de gases que contaminen.
            li(data-aos="fade-right")
              i.far.fa-check-circle(style="color: #00BCD4")
              | Pisos y paredes hechos de materiales que faciliten su limpieza y aseo.
            li(data-aos="fade-right")
              i.far.fa-check-circle(style="color: #00BCD4")
              | Garantizar que los ángulos de las uniones de paredes y pisos no sean rectos, sino curvas que eviten que se acumule polvo y sean de fácil limpieza. 
            li(data-aos="fade-right")
              i.far.fa-check-circle(style="color: #00BCD4")
              | Garantizar el correcto aseo en las áreas sanitarias. 
            li(data-aos="fade-right")
              i.far.fa-check-circle(style="color: #00BCD4")
              | Realizar la fumigación con una frecuencia mínima de seis meses para evitar presencia de roedores, insectos, etc.
            li(data-aos="fade-right")
              i.far.fa-check-circle(style="color: #00BCD4")
              | Realizar limpieza de la nevera y no almacenar alimentos en ella.
            li(data-aos="fade-right")
              i.far.fa-check-circle(style="color: #00BCD4")
              | Diseñar programa de aseo, limpieza y desinfección de las áreas, definiendo fechas, responsables y dejando evidencia de su realización en los formatos indicados.
        .col-2.d-lg-none.d-flex
        .col-lg-3.col-8.img-03(data-aos="fade-left")
          img(src="@/assets/curso/tema7/img10.png" alt="Imagen decorativa")
    
    separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Devoluciones de los productos farmacéuticos

    p.mb-5(data-aos="fade-right") Las devoluciones de medicamentos deben cumplir con los siguientes requerimientos:

    TabsA.color-acento-contenido.mb-4(data-aos="zoom-in")
      .BGR02.p-4(titulo="Área especial de almacenamiento")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Área especial de almacenamiento
            p Dicha área debe estar separada de las demás y evitar que estos productos se puedan distribuir o dispensar.
          .col-lg-5.col-10
            img(src='@/assets/curso/tema7/img11.png' alt="Imagen decorativa")
      .BGR02.p-4(titulo="Condiciones para la reubicación de los productos farmacéuticos")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Condiciones para la reubicación de los productos farmacéuticos
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Los productos farmacéuticos que se  devuelvan, solo podrán distribuirse o dispensarse en los siguientes casos:
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Si están en buenas condiciones y en sus envases originales.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Si se han manipulado de acuerdo con las condiciones dadas por el fabricante y esto se puede evidenciar.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Su fecha de vencimiento es amplia según los requerimientos del establecimiento.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Han sido evaluados y autorizados por el director técnico del establecimiento farmacéutico.
          .col-lg-5.col-10.mb-4
            img(src='@/assets/curso/tema7/img12.png' alt="Imagen decorativa")
          .col-lg-11
            p.mb-0 Si el producto farmacéutico no cumple con las condiciones anteriores debe ser destruido o desnaturalizado.

    separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Controles de fecha de vencimiento

    .row.justify-content-center
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema7/img13.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p El establecimiento o servicio farmacéutico debe contar con una estructura documental donde estén definidos los criterios y especificaciones que permitan realizar seguimiento a las fechas de vencimiento de los productos farmacéuticos, para evitar que impacten en la salud del usuario y para avisar con la suficiente antelación la devolución o cambio al proveedor, de acuerdo con lo negociado previamente.
        .cajon.color-secundario.p-4
          p.mb-0 Se debe apoyar en la metodología FEFO (primeros en vencer primeros en salir) y garantizar que se informará al proveedor con mínimo con tres meses de anticipación.

</template>

<script>
export default {
  name: 'Tema7',
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
