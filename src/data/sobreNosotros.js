import festivalLocalizacion from '../assets/img/festival-localizacion.webp';
import historiaIconos from '../assets/img/historia-iconos.webp';
import historiaZoog from '../assets/img/historia-zoog.webp';
import quienesSomos from '../assets/img/quienes-somos.webp';

export const sobreNosotros = [
    {
        id: 1,
        pregunta: "¿Quiénes somos?",
        parrafo1: "No somos solo un festival; somos la remasterización de tus mejores recuerdos. En Zeta Channel hemos rescatado los capítulos más icónicos y las películas originales que definieron a una generación que creció con un mando en la mano y canciones pegadizas en la cabeza",
        parrafo2: "Nuestra misión es devolverle el brillo a esa infancia compartida, proyectando en alta fidelidad las historias que nos enseñaron sobre la amistad, el primer amor y la importancia de ser uno mismo. Es hora de volver a ver a tus ídolos, pero esta vez, rodeado de miles de personas que sienten lo mismo que tú.",
        imagen: quienesSomos
    },
    {
        id: 2,
        pregunta: "Localización",
        parrafo1: "Para un festival de cine y series, necesitábamos un lugar con leyenda. Nos trasladamos al Autocine Madrid, un espacio inmenso bajo las estrellas que combina la estética retro con la tecnología actual.",
        lista: ['Pantallas gigantes de última generación.',
            'Espacios abiertos para disfrutar de la música y el ambiente.',
            'Vibras nostálgicas que encajan perfectamente con el espíritu de las Disney Channel Original Movies.'],
        imagen: festivalLocalizacion
    },
    {
        id: 3,
        pregunta: "Historia",
        parrafo1: "Tras más de 20 años siendo el refugio diario de millones de niños y adolescentes en España, el panorama cambió. Con el auge de las plataformas de streaming y el cese de las emisiones tradicionales del canal en abierto, sentimos que se cerraba un ciclo.",
        parrafo2: "Pero los iconos no mueren, se transforman. Zeta Channel nace este año como respuesta a ese vacío televisivo: una primera edición diseñada para celebrar dos décadas de magia. Queremos que el espíritu del canal salga de las pantallas para convertirse en una experiencia física, un punto de encuentro donde la nostalgia de los 2000 cobra más fuerza que nunca.",
        imagen: [historiaIconos, historiaZoog]
    },
    {
        id: 5,
        pregunta: "Preguntas frecuentes",
        faq: ['¿Hay asientos asignados?', '¿Habrá ludoteca infantil?', '¿Se puede llevar comida de fuera?', '¿Qué pasa si llueve?'],
        respuestas: [
            'El acceso es mediante asiento libre por orden de llegada dentro de tu zona seleccionada. ¡Te recomendamos llegar pronto para pillar el mejor sitio frente a la pantalla!',
            '¡Sí! Aunque el festival está enfocado a la generación que creció con el canal, sabemos que ahora muchos sois padres/madres. Contaremos con una Zona Kids (ludoteca) con monitores para que los más pequeños también se diviertan mientras tú disfrutas del maratón e incluso asisten a algunas de las películas infantiles organizadas en la agenda del festival.',
            'Para garantizar la mejor experiencia, el Autocine contará con una amplia oferta de Food Trucks con menús temáticos. No se permite el acceso con comida externa (salvo excepciones por alergias justificadas).',
            '¡El show debe continuar! El Autocine está preparado para eventos al aire libre, pero en caso de condiciones climáticas extremas, se notificará cualquier cambio a través de nuestras redes sociales.'
        ]
    },
    {
        id: 6,
        pregunta: "Concursos y premios",
        parrafo1: "No hemos venido solo a mirar, hemos venido a participar. Prepara tus mejores dotes artísticas:",
        lista: [
            'Concurso de Disfraces: Saca del armario tu mejor look de estrella del pop, deportista de instituto o criatura mágica. ¡El mejor disfraz se llevará un premio exclusivo de un pack de merchandising valorado en 100€ de tu serie o película favorita y un gran descuento en nuestras Food Trucks!',
            'Torneo Just Dance: Domina el escenario con las coreografías que practicabas en el salón de casa y gana un premio de un cheque de 50€ que puedes utilizar en cualquiera de los stands de nuestro festival, incluido comidas.',
            'Gran Kahoot Zeta: Preguntas nivel experto sobre tramas secundarias y curiosidades. Solo un verdadero fan podrá alzarse con el trofeo, donde puedes ganar un pack de regalo de varias series y películas de tu infancia.']
    },
];
