<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planificación del proceso de almacenamiento
    
    p(data-aos="fade-right") Todo el proceso de almacenamiento se debe planificar teniendo en cuenta los aspectos especificados en la siguiente imagen:

    .row.justify-content-center.mb-4
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 2.
        span Etapas planificación del proceso de almacenamiento
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/tema2/img01.svg" alt="Muestra etapas planificación del proceso de almacenamiento:<br>•Selección del lugar. <br>•Diseño de las instalaciones.<br>•Generar criterios, procedimientos y recursos.<br>•Inventarios y rotación de productos.")
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Selección del lugar
    
    p.mb-5(data-aos="fade-right") Para la selección del lugar de almacenamiento de los productos en los servicios y establecimientos farmacéuticos, se deben tener en cuenta los siguientes aspectos: #[strong localización especial, acceso y tamaño], bajo las condiciones que se describen a continuación:
      
    TabsB.color-acento-contenido(data-aos="fade-right")
      .py-4.py-lg-5(titulo="Fuentes de contaminación" :icono="require('@/assets/curso/tema2/img02.png')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Fuentes de contaminación
            ul.lista-ul--color
              li
                i.fas.fa-check-circle(style="color: #00BCD4")
                | Alejados de sitios de contaminación.
              li
                i.fas.fa-check-circle(style="color: #00BCD4")
                | Protegerlos de la temperatura.
              li
                i.fas.fa-check-circle(style="color: #00BCD4")
                | No exponerlos a la luz directa.
              li
                i.fas.fa-check-circle(style="color: #00BCD4")
                | Protegerlos de la exposición directa a la luz solar, contaminantes del aire y la humedad.
              li
                i.fas.fa-check-circle(style="color: #00BCD4")
                | Alejados de calderas, depósitos de basuras, cocinas (contaminación cruzada), estacionamientos y centrales de esterilización.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img03.png" alt="Imagen decorativa")
      .py-4.py-lg-5(titulo="Área de almacenamiento" :icono="require('@/assets/curso/tema2/img04.png')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Área de almacenamiento
            ul.lista-ul--color
              li
                i.fas.fa-check-circle(style="color: #00BCD4")
                | Áreas ubicadas preferiblemente en el primer piso.
              li
                i.fas.fa-check-circle(style="color: #00BCD4")
                | Puertas que faciliten la circulación de materiales y personas.
              li
                i.fas.fa-check-circle(style="color: #00BCD4")
                | El área de almacenamiento no debe interferir con la atención al usuario.
              li
                i.fas.fa-check-circle(style="color: #00BCD4")
                | El almacén central debe estar ubicado en el primer piso y ser equidistante a los servicios que atiendan.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img05.png" alt="Imagen decorativa")
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Diseño de las instalaciones

    p.mb-5(data-aos="fade-right") Con el objetivo de lograr un servicio eficiente, deben definirse las siguientes áreas:

    .BG01.mb-5(data-aos="zoom-in")
      SlyderF.px-2(columnas="col-12")
        .row.justify-content-center
          img(src='@/assets/curso/tema2/img06.jpg' alt="Imagen decorativa")
          .BG02.p-2
            .h4.text-center.mb-0 Recepción
        .row.justify-content-center
          img(src='@/assets/curso/tema2/img07.jpg' alt="Imagen decorativa")
          .BG02.p-2
            .h4.text-center.mb-0 Cuarentena
        .row.justify-content-center
          img(src='@/assets/curso/tema2/img08.jpg' alt="Imagen decorativa")
          .BG02.p-2
            .h4.text-center.mb-0 Almacenamiento
        .row.justify-content-center
          img(src='@/assets/curso/tema2/img09.jpg' alt="Imagen decorativa")
          .BG02.p-2
            .h4.text-center.mb-0 Medicamentos de control especial
        .row.justify-content-center
          img(src='@/assets/curso/tema2/img10.jpg' alt="Imagen decorativa")
          .BG02.p-2
            .h4.text-center.mb-0 Despachos
        .row.justify-content-center
          img(src='@/assets/curso/tema2/img11.jpg' alt="Imagen decorativa")
          .BG02.p-2
            .h4.text-center.mb-0 Medicamentos vencidos o deteriorados
        .row.justify-content-center
          img(src='@/assets/curso/tema2/img12.jpg' alt="Imagen decorativa")
          .BG02.p-2
            .h4.text-center.mb-0 Manejo de residuos
        .row.justify-content-center
          img(src='@/assets/curso/tema2/img13.jpg' alt="Imagen decorativa")
          .BG02.p-2
            .h4.text-center.mb-0 Administrativa
    
    .row.justify-content-end.align-items-end.pt-lg-5.mb-4
      .col-lg-3.col-6.img-01.d-lg-flex.d-none(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img14.svg" alt="Imagen decorativa")
      .col-lg-12.BG03.p-4(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-8
            p Como requisito adicional, se deben determinar espacios para:
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Servicios sanitarios.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Vestier de hombres y mujeres.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Gabinetes de incendios.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Extintores.
              li
                i.far.fa-check-circle(style="color: #00BCD4")
                | Lugar para materiales de riesgo químico como: líquidos inflamables, tóxicos, corrosivos, etc.

    p.mb-5(data-aos="fade-right") Los siguientes factores también son importantes al momento de aplicarse en el diseño de las instalaciones:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR09" data-aos="fade-up")
      .row.justify-content-center(titulo="Señalización")
        .col-lg-5.order-lg-1.order-2
          p Cada área debe tener una adecuada señalización y estar demarcada con los colores definidos en la tabla.
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span(style="color: #000000; font-weight: 700 ") Tabla de Colores
                .indicador--click(v-if="mostrarIndicador")
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img15.png' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Distribución")
        .col-lg-5.order-lg-1.order-2
          p La figura muestra un ejemplo de la distribución de las áreas de un servicio farmacéutico, incluyendo su identificación con colores.
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                span(style="color: #000000; font-weight: 700 ") Distribución de las Áreas
                .indicador--click(v-if="mostrarIndicador")
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img16.png' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Pisos")
        .col-lg-5.order-lg-1.order-2
          p Los pisos del servicio o establecimiento farmacéutico deben cumplir con los siguientes requisitos:
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Garantizar su  impermeabilidad.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Solidez.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Resistencia.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Capacidad antideslizante.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Facilidad de limpieza.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Uniformidad.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Que eviten tropiezos y accidentes.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Los materiales que se utilicen para su construcción no deben propagar ruido ni vibración.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | No utilizar sifón o rejilla, ya que promueve el acceso de roedores. En caso de utilizarlas, instalar mallas o rejillas seguras.

        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img17.png' alt="Imagen decorativa")
          .cajon.color-secundario.p-4
            .h5.mb-0 Los productos farmacéuticos no deben estar en contacto directo con el piso. Para ello, se deben utilizar estibas o estanterías que cumplan con requisitos de resistencia, y materiales que no propaguen la contaminación e incendios.
      .row.justify-content-center(titulo="Temperatura y humedad")
        .col-lg-5.order-lg-1.order-2
          p Las condiciones de temperatura y humedad deben:
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Contar con controles y estrategias para mantenerlas dentro de los rangos aceptables según las recomendaciones dadas por el laboratorio fabricante.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Llevar registro diario con un termohigrómetro calibrado.
          p La siguiente tabla corresponde a los rangos de temperatura de almacenamiento, de acuerdo con lo especificado por los fabricantes de medicamentos y dispositivos médicos.
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                span(style="color: #000000; font-weight: 700 ") Tabla rangos de temperatura
                .indicador--click(v-if="mostrarIndicador")
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img18.png' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Cadena de frío")
        .col-lg-5.order-lg-1.order-2
          p Los productos farmacéuticos que necesitan ser refrigerados deben ser llevados a:
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Cuartos fríos.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Neveras.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Refrigeradores o congeladores.
          p Frente a posibles cortes de energía u otro tipo de inconvenientes que pongan en riesgo la estabilidad de los productos, se debe:
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Tener un plan de emergencia que garantice que las condiciones de la cadena de frio se mantengan.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Contar con instrumentos como un termómetro que registre la temperatura y registrarla varias veces al día.

          p El diagrama presenta un ejemplo de la cadena de frío de las vacunas.
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                span(style="color: #12263F; font-weight: 700 ") Cadena de frío de las vacunas
                .indicador--click(v-if="mostrarIndicador")
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img19.png' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Refrigeración")
        .col-lg-5.order-lg-1.order-2
          p Los cuartos fríos son utilizados cuando se manejan volúmenes muy grandes de productos farmacéuticos que requieren temperaturas muy específicas como se verá en la siguiente figura.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img20.png' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Refrigeración vacunas")
        .col-lg-5.order-lg-1.order-2
          p Uno de los productos farmacéuticos que requiere mayor cuidado en su manipulación y almacenamiento son los biológicos (vacunas).
          p Para su conservación en las neveras se debe tener en cuenta:
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              p.mb-0 <a style="font-weight: 900">Su empaque:</a> su dimensión determina las condiciones de su almacenamiento y transporte.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Lugar donde deben ir almacenadas en la nevera.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Los elementos que sirven como coadyuvantes para su conservación.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img21.png' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Almacenamiento vacunas")
        .col-lg-5.order-lg-1.order-2
          p La identificación de los productos farmacéuticos (vacunas) incluye:
          ul.lista-ul--color
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Tipo de vacuna.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Presentación.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Número de lote.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Fecha de caducidad.
            li
              i.far.fa-check-circle(style="color: #00BCD4")
              | Fecha de ingreso.
          .cajon.color-secundario.p-4
            .h5.mb-0 No se deben almacenar otros productos diferentes a las vacunas en las neveras.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img22.png' alt="Imagen decorativa")

    ModalA(:abrir-modal.sync="modal1")
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th(style="background-color: #E8E8E8;").text-center Área
              th(style="background-color: #E8E8E8;").text-center Color
          tbody    
            tr
              td Recepción
              td.text-center.text-white(style="background-color: #4CD62B;") Verde
            tr
              td Revisión
              td.text-center.text-white(style="background-color: #FF0000;") Rojo
            tr
              td Almacenamiento
              td.text-center(style="background-color: #FFFF00;") Amarillo
            tr
              td Cuarentena No.1
              td.text-center.text-white(style="background-color: #FFBB00;") Naranja
            tr
              td Cuarentena No.2
              td.text-center.text-white(style="background-color: #000000;") Negra
            tr
              td Medicamentos de control
              td.text-center.text-white(style="background-color: #BD00FF;") Violeta
            tr
              td Reciclaje
              td.text-center.text-white(style="background-color: #FF3300;") Rojo rayado
            tr
              td Cadena de frío
              td.text-center.text-white(style="background-color: #0000FF;") Azul
            tr
              td Preparado magistrales
              td.text-center.text-white(style="background-color: #548DD4;") Azul rayado
    
    ModalA(:abrir-modal.sync="modal2")
      figure
        img(src='@/assets/curso/tema2/img-4.png' alt="Muestra áreas de farmacia droguerías:<br>Material reciclable.<br>Bodega.<br>Aseo.<br>Servicios sanitarios.<br>Preparados magistrales.<br>Medicamentos de control especial.<br>Almacenamiento.<br>Dispensación.<br>Sustancias inflamables.<br>Cuarentena.<br>Inyectología.<br>Cadena de frío.<br>Recepción.<br>Administrativa.")  
    
    ModalA(:abrir-modal.sync="modal3")
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th(style="background-color: #E8E8E8;").text-center Condición
              th(style="background-color: #E8E8E8;").text-center Temperatura
          tbody    
            tr
              td Temperatura ambiente controlada
              td 15º a 25º C
            tr
              td Guardar en refrigerdor
              td 2º a 8º C
            tr
              td Guardar en congelador
              td -20º a 0º C
            tr
              td Consérvese en lugar fresco
              td 8º a 15º C <br><br>Si la temperatura ambiente del lugar de almacenamiento es muy alta y la etiqueta recomienda que se deba almacenar en lugar fresco, el producto puede guardarse en un refrigerador, ajustando el rango mediante un termostato.
            tr
              td Sin indicación
              td Si no especifica una temperatura de almacenamiento o en la etiqueta no aparece ninguna de las recomendaciones anteriores, la temperatura del lugar debe mantenerse hasta un máximo de 25º C.  Temperaturas superiores deterioran los medicamentos pues alteran la estabilidad y, por ende, la calidad de los mismos.

    ModalA(:abrir-modal.sync="modal4")
      p-4
        img(src='@/assets/curso/tema2/img23.svg' alt="Muestra cadena de frio: vacunas, gel refrigerante, embalaje térmico, transporte refrigerado, almacenamiento, monitoreo inteligente, distribución")
    
    p.mb-5(data-aos="fade-right") Y siempre se deben tener en cuenta las siguientes características y requisitos:

    TabsA.color-acento-contenido.mb-5(data-aos="zoom-in")
      .BGR02.p-4(titulo="Paredes")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Paredes
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Ser resistentes a factores ambientales.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | De superficie lisa.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Ser sólidas.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Impermeables.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | No debe tener sustancias tóxicas, irritantes o inflamables, los materiales que se utilicen para pintarlas.
          .col-lg-6.col-10
            img(src='@/assets/curso/tema2/img24.png' alt="Imagen decorativa")
      .BGR02.p-4(titulo="Techos y cielo raso")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Techos y cielo raso
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Ser resistentes a factores ambientales.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | De superficie lisa y no combustible.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Ser sólidos.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Impermeables.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | No debe tener sustancias tóxicas, irritantes o inflamables, los materiales que se utilicen para su fabricación o instalación.
          .col-lg-6.col-10
            img(src='@/assets/curso/tema2/img25.png' alt="Imagen decorativa")
      .BGR02.p-4(titulo="Iluminación")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Iluminación
            p Se puede contar con iluminación natural o artificial que permita la conservación adecuada, identificación de los productos farmacéuticos y el buen manejo de la documentación.
          .col-lg-6.col-10
            img(src='@/assets/curso/tema2/img26.png' alt="Imagen decorativa")
      .BGR02.p-4(titulo="Ventilación")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Ventilación
            p Sistema de ventilación natural o artificial para la conservación adecuada de los productos farmacéuticos. 
            .cajon.color-secundario.p-4.mb-4
              p.mb-0 Nota: no se debe malinterpretar o tomar como ventilación natural el hecho de dejar las ventanas o puertas abiertas, porque podrían contaminar los productos farmacéuticos.
            p.mb-0 Dicha contaminación se puede presentar por la presencia de gases como el CO<sub>2</sub> (gas carbónico), el CO (monóxido de carbono) y el vapor de agua, entre otros.
          .col-lg-6.col-10
            img(src='@/assets/curso/tema2/img27.png' alt="Imagen decorativa")
      .BGR02.p-4(titulo="Condiciones ambientales")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Condiciones ambientales
            ul.lista-ul--color
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Existen productos fotosensibles y esto puede alterar las características químicas.
              li
                i.far.fa-check-circle(style="color: #7E5EE3")
                | Evitar contacto directo de la luz solar con los productos farmacéuticos.
          .col-lg-6.col-10
            img(src='@/assets/curso/tema2/img28.png' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Ante posibles inconvenientes, es indispensable contar con un plan de contingencia para garantizar que las condiciones de conservación de los productos farmacéuticos no se alteren.

    .tarjeta.color-secundario.p-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/img29.png" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.text-ciel.mb-1 Plan de contingencia cadena de frio ante falla o interrupción de fluido eléctrico
              p.text-white En el siguiente Anexo se puede ver un ejemplo de un plan de contingencia frente a un posible corte de energía:  
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/plan_de_contingencia_cadena_de_frio_ante_falla_o_interrupcion_de_fluido_electrico.pdf')" target="_blank")
                span(style="color: #000") Enlace
                i.fas.fa-link(style="color: #000")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
