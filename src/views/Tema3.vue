<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Medidas de seguridad
    
    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/tema3/img01.jpg' alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") Para descartar futuros problemas legales de carácter administrativo, es aconsejable implementar algunas medidas de seguridad con miras al correcto manejo del almacén, a saber:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img02.svg' alt="Imagen decorativa")
      .col-lg-8
        ul.lista-ul--color
          li(data-aos="fade-left")
            i.far.fa-check-circle(style="color: #00BCD4")
            | Controlar el acceso del personal que ingresa al área, atendiéndolo en lugares adecuados para ello y que estén retirados del área de almacenamiento.

          li(data-aos="fade-left")
            i.far.fa-check-circle(style="color: #00BCD4")
            | Determinar las áreas restringidas para evitar acceso de personal no autorizado.

          li(data-aos="fade-left")
            i.far.fa-check-circle(style="color: #00BCD4")
            | Proteger los lugares donde se encuentre la documentación y los productos farmacéuticos.
          li(data-aos="fade-left")
            i.far.fa-check-circle(style="color: #00BCD4")
            | Documentar y definir los requisitos que debe cumplir cada colaborador que ingrese, además de la función que va a cumplir.


</template>

<script>
export default {
  name: 'Tema3',
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
