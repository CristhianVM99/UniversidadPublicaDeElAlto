import { defineStore } from "pinia";

export const useInstitucionStore = defineStore("Institucion", {
  state: () => ({        
    url_api: process.env.APP_ROOT_API,
    clave_encryptacion: 'UniversidadPublicaDeElAlto',
    color_intermedio: '#511116',
    aniversario_universidad: process.env.APP_ANIVERSARIO_UPEA,
    institucion: null,    
    carreras: null,
    menuAreasyCarreras: null,
    publicacionesCarreras: null,
    publicacionesUniversidad: null,
    serviciosUniversidad: null,
    auditoriasUniversidad: null,
    eventosUniversidad: null,
    gacetasUniversidad: null,
    videosUniversidad: null,
    linksCarreras:[
      {
        carrera: 'SISTEMAS',
        link: 'https://sistemas.upea.bo/paginaInicio'
      },
      {
        carrera:'AGRONOMÍA',
        link: 'https://agronomia.upea.bo/upea/1bwWgdqBKdnOLibXZExG725pL'
      },
      {
        carrera: 'ARQUITECTURA',
        link: 'http://www.arquitectura.upea.edu.bo/l'
      },
      {
        carrera: 'EDUCACIÓN',
        link: 'https://educacionparvularia.upea.bo/'
      },
      {
        carrera: 'DESARROLLO',
        link: 'https://inscripcionesdesarrollo.upea.bo/'
      },
      {
        carrera: 'COMUNICACIÓN',
        link: 'https://comunicacion.upea.bo/'
      },
      {
        carrera: 'CONTADURÍA',
        link: 'https://virtualcontaduria.upea.bo/'
      },
      {
        carrera: 'DERECHO',
        link: 'https://virtualderecho.upea.bo/'
      },
      {
        carrera: 'ENFERMERÍA',
        link: 'https://virtualenfermeria.upea.bo/'
      },
      {
        carrera: 'HISTORIA',
        link: 'https://inscripcioneshistoria.upea.bo/'
      },
      {
        carrera: 'CIVIL',
        link: 'https://ingenieriacivil.upea.bo/paginaInicio'
      },
      {
        carrera: 'PRODUCCIÓN',
        link: 'https://virtualproduccion.upea.bo/'
      },
      {
        carrera: 'IDIOMAS',
        link: 'https://virtuallinguistica.upea.bo/'
      },
      {
        carrera: 'MEDICINA',
        link: 'https://virtualmedicina.upea.bo/'
      },
      {
        carrera: 'SOCIOLOGÍA',
        link: 'https://virtualsociologia.upea.bo/'
      },
      {
        carrera: 'TRABAJO',
        link: 'https://inscripcionestrabajosocial.upea.bo/'
      },
      {
        carrera: 'VETERINARIA',
        link: 'http://www.veterinaria.upea.edu.bo/l'
      },
      {
        carrera: 'ECONOMÍA',
        link: 'https://economia.upea.bo/upea/ygrxaP5LklJgwUbQvJOnGX1Ql'
      },
      {
        carrera: 'PETROQUÍMICA',
        link: 'https://virtualpetroquimica.upea.bo/'
      },
      {
        carrera: 'ADMINISTRACIÓN',
        link: 'https://virtualadministracion.upea.bo/'
      },
      {
        carrera: 'ODONTOLOGÍA',
        link: 'https://inscripcionesodontologia.upea.bo/'
      },
      {
        carrera: 'ELECTRÓNICA',
        link: 'https://virtualelectronica.upea.bo/'
      },
      {
        carrera: 'PLASTICAS',
        link: 'https://virtualartesplasticas.upea.bo/'
      },
      {
        carrera: 'POLITICAS',
        link: 'https://virtualpoliticas.upea.bo/'
      },
      {
        carrera: 'TEXTIL',
        link: 'https://virtualtextil.upea.bo/'
      },
      {
        carrera: 'PARVULARIA',
        link: 'https://educacionparvularia.upea.bo/'
      },
      {
        carrera: 'ELECTRICA',
        link: 'https://inscripcioneselectrica.upea.bo/'
      },
      {
        carrera: 'AUTOTRONICA',
        link: 'https://virtualautotronica.upea.bo/'
      },
      {
        carrera: 'PECUARIA',
        link: 'http://www.izip.upea.edu.bo/l'
      },
      {
        carrera: 'AMBIENTAL',
        link: 'https://inscripcionesambiental.upea.bo/'
      },
      {
        carrera: 'DIETETICA',
        link: 'https://inscripciones.upea.bo/'
      },
      {
        carrera: 'COMERCIO',
        link: 'https://virtualcomercio.upea.bo/'
      },
      {
        carrera: 'TURISTICA',
        link: 'http://www.gth.upea.edu.bo/l'
      },
      {
        carrera: 'PSICOLOGIA',
        link: 'https://virtualpsicologia.upea.bo/'
      },
      {
        carrera: 'CIENCIAS FISICAS',
        link: 'https://virtualfisicas.upea.bo/'
      },
      {
        carrera: 'PSICOMOTRICIDAD Y DEPORTES',
        link: 'https://inscripcionespsicomotricidad.upea.bo/'
      },        
    ],    
    linksCarrerasAll: null,        

    /*

     INFORMACION DE LA PAGINA PRINCIPAL (MAIN) ==========================================================

     */
    /* BANNER:  */
    frase: 'La Universidad del pueblo y para el pueblo',
    imgBanner1: '/images/universidad/oficial/fondobanner1.jpg',
    imgBanner2: '/images/universidad/oficial/fondobanner2.jpg',
    imgBanner3: '/images/universidad/oficial/fondobanner3.png',

    /* ABOUT */
    titleAbout: 'Desafiando barreras "La lucha imparable de la Universidad Pública de El Alto"',
    descripcionAbout: 'La Universidad Pública de El Alto, ubicada en la ciudad de El Alto en Bolivia, ha sido una institución educativa que ha desafiado numerosas barreras a lo largo de su historia. Fundada en el año 2000, esta universidad ha sido un símbolo de lucha y perseverancia para la comunidad de El Alto y ha brindado oportunidades educativas a miles de estudiantes que de otro modo no hubieran tenido acceso a la educación superior.',
    primerPuntoAbout:'Inclusión educativa para comunidades marginadas.',
    segundoPuntoAbout:'Valoración de la diversidad cultural y étnica.',
    tercerPuntoAbout:'Investigación científica y desarrollo local sostenible.',
    imgAbout1: '/images/universidad/oficial/fondoabout.jpg',
    imgAbout2: '/images/universidad/upeaabout2.jpg',

    /* VIDEO */
    videoTitleVideo: 'Universidada Publica de El Alto Desafiando límites y construyendo sueños',

    /* AUTORIDADES  */
    autoridadesSeccionTitulo: 'Nuestras Autoridades',

    /* PUBLICACIONES CARRERAS */
    titlePublicacionesCarreras: 'Comunicados Universitarios',

    /* PUBLICACIONES UPEA */
    preTitlePublicaciones:'lo ultimo de ...',
    titlePublicacionesUpea:'Publicaciones',

    /* CONTACTO */
    titleEmailContacto : 'ponerse en contacto al:',
    titleTelefonoContacto: 'Llamanos a travéz de:',

    /* EVENTOS */
    preTitleEventos: 'lo ultimo de ...',
    titleEventos: 'Eventos',

    /* SERVICIOS */
    preTitleServicios: 'Upea',
    titleServicios: 'Servicios',

    /*

     CARRERAS (TODAS LAS CARREAS) ==========================================================

     */

     titleCarreras: 'Nuestras Carreras'

  }),
  actions:{
    /* METODOS PARA ASIGNAR DATOS A LAS VARIABLES.... */
    asignarInstitucion(colection){
      this.institucion = colection
    },
    asignarCarreras(colection){
      this.carreras = colection
    },
    asignarMenuAreasyCarreras(colection){
      this.menuAreasyCarreras = colection
    },
    asignarPublicacionesCarreras(colection){
      this.publicacionesCarreras = colection
    },
    asignarPublicacionesUniversidad(colection){
      this.publicacionesUniversidad = colection
    },
    asignarServiciosUniversidad(colection){
      this.serviciosUniversidad = colection
    },
    asignarAuditoriasUniversidad(colection){
      this.auditoriasUniversidad = colection
    },
    asignarEventosUniversidad(colection){
      this.eventosUniversidad = colection
    },
    asignarGacetasUniversidad(colection){
      this.gacetasUniversidad = colection
    },
    asignarVideosUniversidad(colection){
      this.videosUniversidad = colection
    },
    asignarLinksCarreras(colection){
      this.linksCarrerasAll = colection
    }
  }
});
