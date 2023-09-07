<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/intro/img01.jpg" alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img02.png" alt="Imagen decorativa")
      .col-lg-10(data-aos="fade-left")
        p.mb-0 Las Buenas Prácticas de Almacenamiento (BPA) son una valiosa herramienta de control y evaluación de los requisitos y la forma de trabajar de los colaboradores que realizan labores de almacenamiento, el cumplimiento de la normatividad, el mantenimiento y garantía de los requisitos de la calidad, la conservación y el cuidado de los productos farmacéuticos durante su permanencia en el área de almacenamiento, bodega o farmacia, conservando sus características relacionadas con la eficacia y seguridad requeridas por el fabricante, hasta que se lleve a cabo la dispensación al usuario.
    
    p Para su correcta implementación y coordinación, se deben tener muy presente los siguientes cuatro componentes: la infraestructura, el recurso humano, el ordenamiento y la gestión administrativa.
    p Es importante tener presente la gestión ambiental relacionada con los productos vencidos o deteriorados los cuales están regulados tanto por las autoridades sanitarias como la normatividad general a nivel ambiental.
    p ¡Muchos éxitos en este proceso de aprendizaje!
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
