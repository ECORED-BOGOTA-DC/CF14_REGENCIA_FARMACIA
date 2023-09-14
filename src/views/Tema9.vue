<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Normatividad ambiental y manejo de residuos peligrosos
    
    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/tema9/img01.jpg' alt="Imagen decorativa")
    
    p(data-aos="fade-right") Debido a que gran parte de los productos farmacéuticos, en especial los medicamentos, son catalogados como residuos químicos peligrosos, se hace necesario darles un correcto manejo y disposición final a estos.
    p.mb-5(data-aos="fade-right") A continuación, se presenta el ciclo de vida de un medicamento y cómo se debe hacer la disposición final de este con el objetivo de reducir el impacto en la flora y la fauna.

    .row.justify-content-center.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 4.
        span Ciclo de vida de un medicamento
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema9/img02.svg" alt="Muestra ciclo de vida de un medicamento: <br>Prescripción<br>Dispensación<br>Atención farmacéutica - Uso - Excreción<br>Disposición final")  

</template>

<script>
export default {
  name: 'Tema9',
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
