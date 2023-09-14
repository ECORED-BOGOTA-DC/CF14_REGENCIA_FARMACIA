<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Requisitos para la ubicación y organización de los productos farmacéuticos
    
    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/tema6/img01.jpg' alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR08.hg-02.p-4
          .row.mb-4
            .col-lg-4.col-3
              img(src='@/assets/curso/tema6/img02.svg' alt="Imagen decorativa")
          p La organización sistemática de los productos farmacéuticos dentro del establecimiento o servicio farmacéutico, tiene las siguientes ventajas:
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Facilitar la ubicación para agilizar las actividades de despachos e inventarios.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Aprovechar de mejor forma los espacios disponibles.
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-up")
        .BGR08.hg-02.p-4
          .row.mb-4
            .col-lg-4.col-3
              img(src='@/assets/curso/tema6/img03.svg' alt="Imagen decorativa")
          p Y en su almacenamiento se deben tener en cuenta las siguientes características:
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Su forma farmacéutica.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | A través de su grupo farmacológico.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Por orden alfabético o nivel de atención (movimiento del producto).

      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .BGR08.hg-02.p-4
          .row.mb-4
            .col-lg-4.col-3
              img(src='@/assets/curso/tema6/img04.svg' alt="Imagen decorativa")
          p Y dentro de los requisitos y parámetros para almacenar los productos farmacéuticos, es importante:
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Demanda.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Volumen.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Fechas de vencimiento.

    p(data-aos="fade-right") No se puede definir cuál de los métodos es el más adecuado, porque incluso se puede utilizar la combinación de varios de ellos según las necesidades del establecimiento, buscando la optimización del espacio y que el tipo de método elegido sea eficaz y eficiente en el tiempo.
    p.mb-5(data-aos="fade-right") En las siguientes figuras se presenta un ejemplo de cómo se podrían almacenar los productos farmacéuticos:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema6/img05.png' alt="Imagen decorativa")

      .row.justify-content-center.BGR02.p-3(x="8%" y="76%" numero="1")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema6/img06.png' alt="Imagen decorativa")
        .col-lg-9
          .h5.mb-2 Estante # 1. 
          p.mb-0 Ampollas, empezando por la letra A (ampicilina, aminofilina, …), por la B (betametazona, …) y así sucesivamente.
      .row.justify-content-center.BGR02.p-3(x="18%" y="50%" numero="2")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema6/img07.png' alt="Imagen decorativa")
        .col-lg-9
          .h5.mb-2 Estante # 2. 
          p.mb-0 Jarabes.
      .row.justify-content-center.BGR02.p-3(x="30%" y="16%" numero="3")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema6/img08.png' alt="Imagen decorativa")
        .col-lg-9
          .h5.mb-2 Estante # 3. 
          p.mb-0 Tabletas o cápsulas.  Por la gran rotación de estos productos se mantiene mayor cantidad de existencia física.
      .row.justify-content-center.BGR02.p-3(x="52%" y="45%" numero="4")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema6/img09.png' alt="Imagen decorativa")
        .col-lg-9
          .h5.mb-2 Estante # 4. 
          p.mb-0 Productos de menor rotación como inhaladores, cremas tópicas (en orden alfabético).
      .row.justify-content-center.BGR02.p-3(x="66%" y="62%" numero="5")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema6/img10.png' alt="Imagen decorativa")
        .col-lg-9
          .h5.mb-2 Estante # 5. 
          p.mb-0 Soluciones parentales de gran volumen (mayor a 100 ml).
      .row.justify-content-center.BGR02.p-3(x="83%" y="20%" numero="6")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema6/img11.png' alt="Imagen decorativa")
        .col-lg-9
          .h5.mb-2 Estante # 6. 
          p.mb-0 Bajo llave se almacenan los medicamentos de control especial y alto costo, siendo responsabilidad del auxiliar de farmacia su control.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img12.jpg')})`}"
            data-aos="fade-right"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Con el apoyo de las TIC (Tecnologías de la Información y la Comunicación), como lectores para los códigos de barras, se podría almacenar los embalajes por líneas, siendo el #[em software] el que decide el espacio donde debe ir el producto farmacéutico y su ubicación en todo momento. Los establecimientos que manejen grandes volúmenes de productos son los más beneficiados con estas herramientas.

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") La rotación de los productos es un factor determinante porque evita el vencimiento de estos en el establecimiento, y para lograr esto, los productos farmacéuticos deben ubicarse en las estanterías, teniendo en cuenta su tamaño, y las fechas de vencimiento. Esto se debe realizar apoyándose en el método FEFO (sigla en inglés), en español conocido como método PEPS (primero que entra es lo primero que sale), basándose en la fecha de vencimiento del producto.
        p(data-aos="fade-right") Al realizar la recepción de los productos farmacéuticos, se debe ubicar el producto en el lugar que le corresponde (ubicar los que tengan fecha de vencimiento similar, juntos) y se reporta su ubicación en el sistema. 
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          p.mb-0 Es de vital importancia que cada producto esté identificado con su código de barras, el cual contiene su información.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img13.svg' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema6',
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
