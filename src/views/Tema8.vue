<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 . Logística en el abastecimiento, acondicionamiento y distribución de productos farmacéuticos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2(data-aos="fade-right")
        img(src="@/assets/curso/tema8/img01.png")
      .col
        p Para trasladar y realizar la entrega de los productos farmacéuticos, se debe tener presente los requisitos que están determinados en la Resolución 1403 de 2007, en el Código de Comercio y otras que regulan el transporte de sustancias como los son los productos farmacéuticos
        p.mb-0 Se puede tener las dos alternativas: que el transporte sea propio o de un tercero; en ambos casos se debe garantizar el cumplimiento con la normatividad en cuanto al transporte.

    p Para el transporte se deben tener en cuenta las siguientes consideraciones:

    TabsC.color-primario(data-aos="fade-right")
      .py-3.py-md-4(titulo="Embalaje")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Embalaje 
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Los productos farmacéuticos  transportados deben ir embalados en cajas o cubiertas que garanticen que los protejan de elementos externos. 
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Los materiales del embalaje deben ser resistentes.
            p El transporte siempre debe ir acompañado de los documentos soportes, estos deben ser de fácil acceso y estar protegidos para evitar su deterioro. Deben tener la siguiente información: 
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Fecha en la que se envió la mercancía.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Nombres.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Dirección de quien remite y recibe.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | <a style="font-weight: 900">Información técnica de los productos farmacéuticos:</a>
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
                  span 1
                | Lote.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
                  span 2
                | Fecha de vencimiento.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
                  span 3
                | Pictogramas con la información de su manejo y clasificación.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema8/img02.png")
      .py-3.py-md-4(titulo="Integridad")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Integridad 
            p Se debe:
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Garantizar la integridad de los productos farmacéuticos durante su transporte.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Mantener la humedad y la temperatura en rango aceptables según el tipo de producto.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Proteger contra el hurto.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Facilitar su identificación.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Evitar la confusión y la contaminación.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema8/img03.png")
      .py-3.py-md-4(titulo="Condiciones")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Condiciones 
            p Para garantizar el cumplimiento de la integridad de los productos farmacéuticos durante su transporte, se deben cumplir las siguientes condiciones:
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Garantizar la temperatura de los productos farmacéuticos, en especial si requieren cadena de frío.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Evitar que el hielo seco, en caso de que sea utilizado, haga contacto directo con los medicamentos.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Evidenciar el cumplimiento de los requisitos de aquellos medicamentos que requieran condiciones de almacenamiento especiales.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema8/img04.png")
      .py-3.py-md-4(titulo="Pictogramas")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Pictogramas 
            p Los pictogramas de los productos farmacéuticos facilitan su manejo, tanto en el área de almacenamiento como en su transporte.
            p En la imagen se presentan algunos de los pictogramas utilizados.
            .row
              .col-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span(style="color: #000000; font-weight: 700 ") Pictogramas
                  .indicador--click(v-if="mostrarIndicador")
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema8/img05.png")

    ModalA(:abrir-modal.sync="modal1")
      .p-4
        img(src="@/assets/curso/tema8/img06.png")


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    modal1: false,
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
