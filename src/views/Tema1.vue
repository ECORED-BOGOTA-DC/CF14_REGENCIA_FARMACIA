<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Contextualización del proceso de almacenamiento
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img01.png")
      .col-lg-9(data-aos="fade-left")
        p Es un proceso general basado en un conjunto de actividades que tiene como objetivo principal el cuidado y la conservación de las especificaciones y características técnicas de los productos farmacéuticos almacenados en los establecimientos y servicios farmacéuticos.
        p.mb-0 El proceso de almacenamiento de los productos farmacéuticos pertenece a los procesos generales del servicio o establecimiento farmacéutico. En la siguiente figura se podrá observar su ubicación dentro de estos procesos.

    .row.justify-content-center.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 1
        span Procesos generales del servicio o establecimiento farmacéutico
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/tema1/img02.svg")
    
    .row.justify-content-center.mb-4
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img03.png")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Como se pudo observar en la figura anterior, el proceso de almacenamiento se encuentra entre los procesos de recepción y distribución, siendo el puente entre las actividades donde se reciben los productos farmacéuticos que luego serán distribuidos de manera interna o externa, dependiendo del tipo de distribución y el establecimiento farmacéutico.

    p.mb-5 Para el proceso de almacenamiento de los productos farmacéuticos, las normas que aplican son: 

    TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-4.py-lg-5(titulo="Resolución 1403 de 2007" :icono="require('@/assets/curso/tema1/img04.png')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Resolución 1403 de 2007
            p #[strong Objeto]: determinar los criterios administrativos y técnicos generales del Modelo de Gestión del Servicio Farmacéutico y adoptar el Manual de Condiciones Esenciales y Procedimientos del Servicio Farmacéutico.
            p #[strong Campo de aplicación]: establecimiento farmacéutico donde se almacenen, comercialicen, distribuyan o dispensen medicamentos y dispositivos médicos o se realice cualquier otra actividad o proceso del servicio farmacéutico.
            .row
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/Resolución_1403_de_2007.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[strong Anexo]. Resolución 1403 de 2007.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            .tarjeta.color-secundario.p-4
              img(src="@/assets/curso/tema1/img05.png")
      .py-4.py-lg-5(titulo="Decreto 780 de 2016" :icono="require('@/assets/curso/tema1/img06.png')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Decreto 780 de 2016
            p #[strong Decreto Único Reglamentario del Sector Salud y Protección Social]: compila y simplifica todas las normas reglamentarias preexistentes en el sector de la salud, y tiene como #[strong objetivo] racionalizar las normas de carácter reglamentario que rigen en el sector y contar con un instrumento jurídico único.
            .row
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/Decreto_0780_de_2016.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[strong Anexo]. Decreto 780 de 2016
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            .tarjeta.color-secundario.p-4
              img(src="@/assets/curso/tema1/img07.png")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
