<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Las #[strong buenas prácticas de almacenamiento de productos farmacéuticos] son fundamentales para garantizar la calidad, eficacia y seguridad de los medicamentos y otros productos de salud. En este componente formativo, se abordaron varios aspectos esenciales relacionados con el almacenamiento adecuado de estos.
    p.mb-5 En resumen, las buenas prácticas de almacenamiento de productos farmacéuticos abarcan una serie de aspectos fundamentales, desde la planificación y diseño de las instalaciones hasta los controles, la documentación y el cumplimiento de normativas. Estas prácticas aseguran la calidad y seguridad de los productos y contribuyen a mantener la eficacia de los tratamientos y la confianza de los pacientes. El siguiente esquema proporciona una breve revisión de los temas abordados.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
