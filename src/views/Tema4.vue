<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Talento humano y dotación
    
    p El talento humano requerido para la implementación y continuidad de las buenas prácticas de almacenamiento es fundamental debido a que son de gran importancia para la estructura, organización y planificación del volumen de trabajo del almacén. 
    p.mb-5 Para su selección y adecuada realización de sus funciones, se deben tener en cuenta los siguientes aspectos:

    .row.justify-content-center
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 3
        span Requisitos del talento humano
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/img01.svg")



</template>

<script>
export default {
  name: 'Tema4',
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
