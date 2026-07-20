const imagenesCartelera = import.meta.glob('../assets/img/cartelera/**/*.{webp,jpg,png}', { eager: true });
const CATALOGO = [

    /* Películas */
    {
        //CARD 
        id: 1,
        slug: 'high-school-musical',
        fecha: 14,
        tituloEsp: 'High School Musical', // poner , y no ; !!!
        tipo: 'Película', // serie, pelicula o actividad
        duracion: 90,
        horario: [
            { hora: '12:30', plazas: 20 },
            { hora: '19:30', plazas: 4 }
        ], // ponemos un array para el horario, ya que puede haber más de uno

        //ARTICULO -- info anterior y esta
        sala: 1,

        //INFO DESPLEGABLE

        tituloVo: 'High School Musical',
        directorx: 'Kenny Ortega',
        bandaSonora: 'We`re All In This Together',
        saga: ['HS Musical 2', 'HS Musical 3'],
        genero: ['Musical', 'Romance'], // categorias
        sinopsis: 'Un atleta popular de secundaria y una chica académicamente talentosa consiguen papeles en el musical de la escuela y desarrollan una amistad que amenaza el orden social de East High.',

        //REPARTO DESPLEGABLE
        personajes: [ // array de objetos, cada objeto con id, imagen, nombre y personaje
            {
                id: 1,
                actor: 'Zac Efron',
                personaje: 'Troy Bolton'
            },
            {
                id: 2,
                actor: 'Vanessa Hudgens',
                personaje: 'Gabriella Montez'
            },

            {
                id: 3,
                actor: 'Ashley French',
                personaje: 'Sharpay Evans'
            },
            {
                id: 4,
                actor: 'Lucas Grabeel',
                personaje: 'Ryan Evans'
            },
            {
                id: 5,
                actor: 'Corbin Bleu',
                personaje: 'Chad Danforth'
            },
            {
                id: 6,
                actor: 'Monique Coleman',
                personaje: 'Taylor McKessie'
            }
        ],


        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/d3fxIvliIj4',
        cita: '«East High es tener amigos que conservaremos por el resto de nuestras vidas, y eso significa que realmente estamos ‘juntos en esto».',
        autorCita: 'Troy Bolton',

        //GALERIA
    }
    ,
    {
        //CARD 
        id: 2,
        slug: 'lemonade-mouth',
        fecha: 13,
        tituloEsp: 'Lemonade Mouth',
        tipo: 'Película',
        duracion: 90,
        horario: [{ hora: '17:00', plazas: 20 }],

        //ARTICULO
        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Lemonade Mouth',
        directorx: 'Patricia Riggen',
        bandaSonora: 'Lemonade Mouth (Banda Sonora)',
        saga: [], // No tiene secuelas oficiales en película
        genero: ['Musical', 'Juvenil'],

        sinopsis: 'Cinco adolescentes de secundaria, Olivia, Wen, Stella, Mo y Charlie, se conocen un día en el aula de castigos y allí descubren que son un buen grupo de música, y se hacen llamar "Lemonade Mouth". Pero tras cantar una canción rebelde al intentar que no les quiten la máquina de limonada, el director les prohíbe tocar en el instituto.',

        //REPARTO DESPLEGABLE
        personajes: [
            {
                id: 1,
                actor: 'Bridgit Mendler',
                personaje: 'Olivia White'
            },
            {
                id: 2,
                actor: 'Adam Hicks',
                personaje: 'Wendell "Wen" Gifford'
            },
            {
                id: 3,

                actor: 'Hayley Kiyoko',
                personaje: 'Stella Yamada'
            },
            {
                id: 4,

                actor: 'Naomi Scott',
                personaje: 'Mo Banjaree'
            },
            {
                id: 5,

                actor: 'Blake Michael',
                personaje: 'Charlie Delgado'
            }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/a4V4xS7Q_5A', // Tráiler oficial de Disney

        cita: '«Si quieren que la gente los escuche, van a tener que hacer algo de ruido».',
        autorCita: 'Stella Yamada',

        //GALERIA
        imagenesGaleria: []
    },
    {
        id: 3,
        slug: 'camp-rock',
        fecha: 13,
        tituloEsp: 'Camp Rock',


        tipo: 'Película',
        duracion: 90,
        horario: [
            { hora: '17:00', plazas: 0 },
            { hora: '19:00', plazas: 4 }
        ],
        //ARTICULO

        sala: 1,

        //INFO DESPLEGABLE
        tituloVo: 'Camp Rock',
        directorx: 'Matthew Diamond',
        bandaSonora: 'Camp Rock (Banda Sonora)',
        saga: ['Camp Rock 2: The Final Jam'],
        genero: ['Musical', 'Juvenil'],

        sinopsis: 'Mitchie Torres es una talentosa joven que desea pasar el verano en un prestigioso campamento de música llamado Camp Rock. Para poder costearlo, su madre acepta trabajar como cocinera con la condición de que Mitchie la ayude en secreto. Las cosas se complican cuando Shane Gray, el egocéntrico líder de la banda Connect 3, la escucha cantar a escondidas y se propone descubrir la identidad de la chica detrás de esa increíble voz.',

        //REPARTO DESPLEGABLE
        personajes: [
            {
                id: 1,

                actor: 'Demi Lovato',
                personaje: 'Mitchie Torres'
            },
            {
                id: 2,

                actor: 'Joe Jonas',
                personaje: 'Shane Gray'
            },
            {
                id: 3,

                actor: 'Meaghan Martin',
                personaje: 'Tess Tyler'
            },
            {
                id: 4,

                actor: 'Alyson Stoner',
                personaje: 'Caitlyn Gellar'
            },
            {
                id: 5,

                actor: 'Nick Jonas',
                personaje: 'Nate Gray'
            },
            {
                id: 6,

                actor: 'Kevin Jonas',
                personaje: 'Jason Gray'
            }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/g_pRE68G_aA',

        cita: '«Eres la canción que he estado escuchando en mi cabeza desde que te oí cantar por primera vez».',
        autorCita: 'Shane Gray',

        //GALERIA
        imagenesGaleria: []
    },
    {
        //CARD 
        id: 4,
        slug: 'descendientes',
        fecha: 15,
        tituloEsp: 'Des-cendientes',


        tipo: 'Película',
        duracion: 120,
        horario: [
            { hora: '12:00', plazas: 20 },
            { hora: '17:00', plazas: 9 }
        ],

        //ARTICULO

        sala: 1,

        //INFO DESPLEGABLE
        tituloVo: 'Descendants',
        directorx: 'Kenny Ortega',
        bandaSonora: 'Rotten to the Core',
        saga: ['Descendientes 2', 'Descendientes 3', 'Descendientes: El ascenso de Red'],
        genero: ['Musical', 'Fantasía', 'Aventura'],
        sinopsis: 'Los hijos adolescentes de los villanos más conocidos de Disney reciben una oportunidad para asistir a la escuela preparatoria en el idílico reino de Auradon junto a los hijos de los héroes.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Dove Cameron', personaje: 'Mal' },
            { id: 2, actor: 'Sofia Carson', personaje: 'Evie' },
            { id: 3, actor: 'Cameron Boyce', personaje: 'Carlos' },
            { id: 4, actor: 'Booboo Stewart', personaje: 'Jay' },
            { id: 5, actor: 'Mitchell Hope', personaje: 'Rey Ben' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/zGl79m8R974',
        cita: '«No somos nuestros padres. Somos libres de elegir nuestro propio camino».',
        autorCita: 'Mal',

        //GALERIA

    },
    {
        //CARD 
        id: 5,
        slug: 'teen-beach-movie',
        fecha: 14,
        tituloEsp: 'Teen Beach Movie',


        tipo: 'Película',
        duracion: 90,
        horario: [{ hora: '12:30', plazas: 3 }],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Teen Beach Movie',
        directorx: 'Jeffrey Hornaday',
        bandaSonora: 'Cruisin` for a Bruisin`',
        saga: ['Teen Beach 2'],
        genero: ['Musical', 'Comedia', 'Fantasía'],
        sinopsis: 'Brady y McKenzie son dos surfistas que acaban siendo transportados mágicamente dentro de una clásica película musical de playa de los años 60 llamada "Amor sin barreras" ("Wet Side Story").',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Ross Lynch', personaje: 'Brady' },
            { id: 2, actor: 'Maia Mitchell', personaje: 'McKenzie (Mack)' },
            { id: 3, actor: 'Grace Phipps', personaje: 'Lela' },
            { id: 4, actor: 'Garrett Clayton', personaje: 'Tanner' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/fD_bM-D6P34',
        cita: '«No puedes simplemente cantar sobre lo que sientes en vez de hacerlo realidad».',
        autorCita: 'McKenzie',

        //GALERIA

    },
    {
        //CARD 
        id: 6,
        slug: 'programa-de-proteccion-de-princesas',
        fecha: 15,
        tituloEsp: 'Protección  de Princesas',


        tipo: 'Película',
        duracion: 90,
        horario: [{ hora: '19:30', plazas: 15 }],

        //ARTICULO

        sala: 1,

        //INFO DESPLEGABLE
        tituloVo: 'Princess Protection Program',
        directorx: 'Allison Liddi-Brown',
        bandaSonora: 'One and the Same',
        saga: [],
        genero: ['Comedia', 'Drama', 'Familiar'],
        sinopsis: 'Cuando el país de una joven princesa es invadido por un dictador, ella entra en el Programa de Protección de Princesas y es enviada a vivir con una chica común en Luisiana para aprender a pasar desapercibida.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Selena Gomez', personaje: 'Carter Mason' },
            { id: 2, actor: 'Demi Lovato', personaje: 'Princesa Rosalinda' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/5D345L-wPxs',
        cita: '«Una verdadera princesa no lleva corona en la cabeza, la lleva en el corazón».',
        autorCita: 'Princesa Rosalinda',

        //GALERIA

    },
    {
        //CARD 
        id: 7,
        slug: 'el-chico-ideal',
        fecha: 13,
        tituloEsp: 'El Chico Ideal',


        tipo: 'Película',
        duracion: 90,
        horario: [{ hora: '19:00', plazas: 5 }],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'How to Build a Better Boy',
        directorx: 'Paul Hoen',
        bandaSonora: 'Something Real',
        saga: [],
        genero: ['Comedia', 'Ciencia Ficción'],
        sinopsis: 'Dos mejores amigas expertas en tecnología, Mae y Gabby, deciden crear al novio virtual perfecto usando un software de diseño militar, sin darse cuenta de que han programado un robot soldado real.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Kelli Berglund', personaje: 'Mae Hartley' },
            { id: 2, actor: 'China Anne McClain', personaje: 'Gabby Harrison' },
            { id: 3, actor: 'Marshall Williams', personaje: 'Albert Banks' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/F6n4U6lR070',
        cita: '«A veces lo perfecto no es tan real, y lo real es mucho mejor».',
        autorCita: 'Gabby Harrison',

        //GALERIA

    },
    {
        //CARD 
        id: 8,
        slug: '16-deseos',
        fecha: 14,
        tituloEsp: '16 Deseos',


        tipo: 'Película',
        duracion: 90,
        horario: [{ hora: '17:00', plazas: 0 }],

        //ARTICULO

        sala: 1,

        //INFO DESPLEGABLE
        tituloVo: '16 Wishes',
        directorx: 'Peter DeLuise',
        bandaSonora: 'A Wish Comes True Everyday',
        saga: [],
        genero: ['Fantasía', 'Comedia', 'Drama'],
        sinopsis: 'Abby Jensen ha planeado su cumpleaños número 16 desde que era niña. Cuando recibe una caja de velas mágicas que hacen realidad sus deseos, descubre que pedir lo que quieres puede tener consecuencias inesperadas.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Debby Ryan', personaje: 'Abby Jensen' },
            { id: 2, actor: 'Jay Kepler', personaje: 'Jay Kepler' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/p17P7V4fO8U',
        cita: '«Ten cuidado con lo que deseas, porque podrías perder lo que realmente importa».',
        autorCita: 'Abby Jensen',

        //GALERIA

    },
    {
        //CARD 
        id: 9,
        slug: 'radio-rebelde',
        fecha: 15,
        tituloEsp: 'Radio Rebelde',


        tipo: 'Película',
        duracion: 90,
        horario: [{ hora: '17:30', plazas: 10 }],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Radio Rebel',
        directorx: 'Peter Howitt',
        bandaSonora: 'We Got the Beat',
        saga: [],
        genero: ['Drama', 'Comedia', 'Juvenil'],
        sinopsis: 'Tara Adams es una tímida estudiante de secundaria que secretamente es Radio Rebelde, la locutora de podcast más popular e influyente de su escuela, que inspira a sus compañeros a expresarse.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Debby Ryan', personaje: 'Tara Adams' },
            { id: 2, actor: 'Audrey', personaje: 'Audrey' },
            { id: 3, actor: 'Gavin', personaje: 'Gavin' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/9Gbeu6E_rRE',
        cita: '«La única voz que importa es la tuya. No dejes que nadie baje tu volumen».',
        autorCita: 'Radio Rebelde',

        //GALERIA

    },

    /* SERIES */

    {
        id: 10,
        slug: 'austin-y-ally',
        fecha: 13,
        tituloEsp: 'Austin y Ally',


        tipo: 'Serie',
        duracion: 30, // Duración aproximada por episodio
        horario: [
            { hora: '17:30', plazas: 20 },
            { hora: '20:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Austin & Ally',
        directorx: 'Kevin Kopelow & Heath Seifert (Creadores)',
        bandaSonora: 'Austin & Ally (Banda Sonora)',
        saga: [],
        genero: ['Comedia', 'Musical', 'Juvenil'],

        sinopsis: 'La serie sigue la alianza musical entre dos polos opuestos: Austin Moon, un extrovertido e imprudente cantante que se convierte en una sensación de Internet de la noche a la mañana, y Ally Dawson, una brillante pero tímida compositora que sufre de pánico escénico. Junto a sus particulares amigos Trish y Dez, intentarán combinar sus talentos para abrirse paso en la industria de la música.',

        //REPARTO DESPLEGABLE
        personajes: [
            {
                id: 1,

                actor: 'Ross Lynch',
                personaje: 'Austin Moon'
            },
            {
                id: 2,

                actor: 'Laura Marano',
                personaje: 'Ally Dawson'
            },
            {
                id: 3,

                actor: 'Raini Rodriguez',
                personaje: 'Trish De la Rosa'
            },
            {
                id: 4,

                actor: 'Calum Worthy',
                personaje: 'Dez Wade'
            }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/5F24K2144nE',

        cita: '«No hay un Austin sin Ally, al igual que no hay canciones sin música».',
        autorCita: 'Austin Moon',

        //GALERIA
        imagenesGaleria: []
    },
    {
        id: 11,
        slug: 'los-magos-de-waverly-place',
        fecha: 14,
        tituloEsp: 'Waverly Place',


        tipo: 'Serie',
        duracion: 30, // Duración aproximada por episodio
        horario: [
            { hora: '17:30', plazas: 3 },
            { hora: '20:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Wizards of Waverly Place',
        directorx: 'Todd J. Greenwald (Creador)',
        bandaSonora: 'Everything Is Not What It Seems',
        saga: ['Los magos de Waverly Place: Vacaciones en el Caribe', 'El retorno de los magos: Alex vs. Alex'],
        genero: ['Comedia', 'Fantasía', 'Juvenil'],

        sinopsis: 'La serie sigue las aventuras de los hermanos Russo: Alex, Justin y Max, tres adolescentes que viven en Manhattan y aparentan ser chicos normales, pero que en realidad son magos en entrenamiento. Bajo la tutela de su padre Jerry, deben aprender a dominar sus poderes mágicos mientras lidian con los retos típicos de la escuela y las relaciones, todo con la vista puesta en la inminente competencia familiar que decidirá quién de los tres conservará la magia para siempre.',

        //REPARTO DESPLEGABLE
        personajes: [
            {
                id: 1,

                actor: 'Selena Gomez',
                personaje: 'Alex Russo'
            },
            {
                id: 2,

                actor: 'David Henrie',
                personaje: 'Justin Russo'
            },
            {
                id: 3,

                actor: 'Jake T. Austin',
                personaje: 'Max Russo'
            },
            {
                id: 4,

                actor: 'Jennifer Stone',
                personaje: 'Harper Finkle'
            },
            {
                id: 5,

                actor: 'Maria Canals-Barrera',
                personaje: 'Theresa Russo'
            },
            {
                id: 6,

                actor: 'David DeLuise',
                personaje: 'Jerry Russo'
            }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/bX_9_0g736U',

        cita: '«En nuestro mundo las cosas nunca son lo que parecen».',
        autorCita: 'Alex Russo',

        //GALERIA
        imagenesGaleria: []
    },
    {
        id: 12,
        slug: 'dulce-hotel-zack-y-cody',
        fecha: 13,
        tituloEsp: 'Dulce hotel',


        tipo: 'Serie',
        duracion: 30, // Duración aproximada por episodio
        horario: [
            { hora: '17:00', plazas: 20 },
            { hora: '19:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'The Suite Life of Zack & Cody',
        directorx: 'Danny Kallis & Jim Geoghan (Creadores)',
        bandaSonora: 'Here I Am',
        saga: ['Zack y Cody: Todos a bordo', 'Zack y Cody: La película'],
        genero: ['Comedia', 'Juvenil'],

        sinopsis: 'La serie sigue las divertidas travesuras de los gemelos idénticos Zack y Cody Martin, quienes viven con su madre Carey en una suite del piso superior del lujoso Hotel Tipton en Boston. El hotel se convierte en su patio de recreo particular, lo que constantemente desquicia al estricto gerente del establecimiento, el Sr. Moseby, mientras los hermanos interactúan con personajes como la millonaria y consentida London Tipton o la ingeniosa Maddie, la chica que atiende el puesto de dulces.',

        //REPARTO DESPLEGABLE
        personajes: [
            {
                id: 1,

                actor: 'Dylan Sprouse',
                personaje: 'Zack Martin'
            },
            {
                id: 2,

                actor: 'Cole Sprouse',
                personaje: 'Cody Martin'
            },
            {
                id: 3,

                actor: 'Ashley Tisdale',
                personaje: 'Maddie Fitzpatrick'
            },
            {
                id: 4,

                actor: 'Brenda Song',
                personaje: 'London Tipton'
            },
            {
                id: 5,

                actor: 'Phill Lewis',
                personaje: 'Sr. Moseby'
            },
            {
                id: 6,

                actor: 'Kim Rhodes',
                personaje: 'Carey Martin'
            }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/I0Wd4r2DqP0',

        cita: '«¡No se corre por el vestíbulo!»',
        autorCita: 'Sr. Moseby',

        //GALERIA
        imagenesGaleria: []
    },
    {
        //CARD 
        id: 13,
        slug: 'zack-y-cody-todos-a-bordo',
        fecha: 14,
        tituloEsp: 'Todos a bordo',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '13:30', plazas: 20 },
            { hora: '18:30', plazas: 2 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'The Suite Life on Deck',
        directorx: 'Danny Kallis (Creador)',
        bandaSonora: 'Livin` the Suite Life',
        saga: ['Hotel, dulce hotel: Las aventuras de Zack y Cody'],
        genero: ['Comedia', 'Familiar'],
        sinopsis: 'Los gemelos Zack y Cody Martin se mudan del hotel Tipton a bordo del lujoso transatlántico SS Tipton, donde asisten a la escuela secundaria marina mientras causan el caos de siempre.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Dylan Sprouse', personaje: 'Zack Martin' },
            { id: 2, actor: 'Cole Sprouse', personaje: 'Cody Martin' },
            { id: 3, actor: 'Brenda Song', personaje: 'London Tipton' },
            { id: 4, actor: 'Debby Ryan', personaje: 'Bailey Pickett' },
            { id: 5, actor: 'Phill Lewis', personaje: 'Marion Moseby' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/L0-mXk5xH6o',
        cita: '«¡Ay del transatlántico si estos dos consiguen graduarse!».',
        autorCita: 'Marion Moseby',

        //GALERIA

    },
    {
        //CARD 
        id: 14,
        slug: 'buena-suerte-charlie',
        fecha: 15,
        tituloEsp: '¡Suerte, Charlie!',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '12:30', plazas: 12 },
            { hora: '20:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Good Luck Charlie',
        directorx: 'Phil Baker (Creador)',
        bandaSonora: 'Hang in There Baby',
        saga: ['¡Buena suerte, Charlie!: Un viaje de película'],
        genero: ['Comedia', 'Familiar', 'Sitcom'],
        sinopsis: 'La adolescente Teddy Duncan graba video-diarios para dar consejos a su hermanita pequeña, Charlie, sobre cómo sobrevivir a su caótica y divertida familia a medida que vaya creciendo.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Bridgit Mendler', personaje: 'Teddy Duncan' },
            { id: 2, actor: 'Mia Talerico', personaje: 'Charlie Duncan' },
            { id: 3, actor: 'Jason Dolley', personaje: 'PJ Duncan' },
            { id: 4, actor: 'Bradley Steven Perry', personaje: 'Gabe Duncan' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/6iB_D8o9n4I',
        cita: '«Sé buena, sé tú misma y... ¡buena suerte, Charlie!».',
        autorCita: 'Teddy Duncan',

        //GALERIA

    },
    {
        //CARD 
        id: 15,
        slug: 'jessie',
        fecha: 13,
        tituloEsp: 'Jessie',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '18:00', plazas: 20 },
            { hora: '20:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Jessie',
        directorx: 'Pamela Eells O`Connell (Creadora)',
        bandaSonora: 'Hey Jessie',
        saga: ['Bunk`d (Acampados)'],
        genero: ['Comedia', 'Familiar', 'Sitcom'],
        sinopsis: 'Una chica de Texas se muda a Nueva York para perseguir sus sueños y termina convirtiéndose en la niñera de los cuatro hijos adoptivos de una adinerada pareja de famosos.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Debby Ryan', personaje: 'Jessie Prescott' },
            { id: 2, actor: 'Peyton List', personaje: 'Emma Ross' },
            { id: 3, actor: 'Cameron Boyce', personaje: 'Luke Ross' },
            { id: 4, actor: 'Karan Brar', personaje: 'Ravi Ross' },
            { id: 5, actor: 'Skai Jackson', personaje: 'Zuri Ross' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/S2pE848D0Sg',
        cita: '«Nueva York es grande, pero con vosotros siempre me siento en casa».',
        autorCita: 'Jessie Prescott',

        //GALERIA

    },
    {
        //CARD 
        id: 16,
        slug: 'mi-perro-tiene-un-blog',
        fecha: 15,
        tituloEsp: 'Mi perro tiene blog',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '13:00', plazas: 20 },
            { hora: '19:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Dog with a Blog',
        directorx: 'Michael B. Kaplan (Creador)',
        bandaSonora: 'Dog with a Blog Theme',
        saga: [],
        genero: ['Comedia', 'Familiar'],
        sinopsis: 'Dos hermanastros que no se llevan bien se unen al descubrir que su nuevo perro adoptado, Stan, sabe hablar y escribe un blog secreto sobre las divertidas dinámicas de la familia.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Kuma / Mick (Voz de Stephen Full)', personaje: 'Stan (El Perro)' },
            { id: 2, actor: 'G. Hannelius', personaje: 'Avery Jennings' },
            { id: 3, actor: 'Blake Michael', personaje: 'Tyler James' },
            { id: 4, actor: 'Francesca Capaldi', personaje: 'Chloe James' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/5DscN3b-7fQ',
        cita: '«Soy un perro que escribe en un blog... y sí, sé escribir con patas».',
        autorCita: 'Stan',

        //GALERIA

    },
    {
        //CARD 
        id: 17,
        slug: 'raven',
        fecha: 14,
        tituloEsp: 'Raven',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '18:00', plazas: 20 },
            { hora: '19:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'That`s So Raven',
        directorx: 'Michael Poryes (Creador)',
        bandaSonora: 'That`s So Raven Theme',
        saga: ['Cory en la Casa Blanca', 'Vuelve Raven'],
        genero: ['Comedia', 'Fantasía', 'Sitcom'],
        sinopsis: 'Raven Baxter es una simpática adolescente con la habilidad psíquica de tener visiones del futuro inmediato. El verdadero problema surge cuando intenta cambiar lo que va a ocurrir.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Raven-Symoné', personaje: 'Raven Baxter' },
            { id: 2, actor: 'Anneliese van der Pol', personaje: 'Chelsea Daniels' },
            { id: 3, actor: 'Orlando Brown', personaje: 'Eddie Thomas' },
            { id: 4, actor: 'Kyle Massey', personaje: 'Cory Baxter' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/i08vWb0X-6k',
        cita: '«¡Sí, ese es mi futuro!».',
        autorCita: 'Raven Baxter',

        //GALERIA

    },
    {
        //CARD 
        id: 18,
        slug: 'hannah-montana',
        fecha: 14,
        tituloEsp: 'Hannah Montana',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '18:00', plazas: 20 },
            { hora: '19:30', plazas: 5 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Hannah Montana',
        directorx: 'Michael Poryes (Creador)',
        bandaSonora: 'Best of Both Worlds',
        saga: ['Hannah Montana: La Película'],
        genero: ['Musical', 'Comedia', 'Sitcom'],
        sinopsis: 'Miley Stewart vive una doble vida secreta: de día es una estudiante ordinaria de secundaria y de noche es Hannah Montana, una superestrella mundial del pop.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Miley Cyrus', personaje: 'Hannah Montana' },
            { id: 2, actor: 'Emily Osment', personaje: 'Lola Luftnagle' },
            { id: 3, actor: 'Mitchel Musso', personaje: 'Oliver Oken' },
            { id: 4, actor: 'Jason Earles', personaje: 'Jackson Stewart' },
            { id: 5, actor: 'Billy Ray Cyrus', personaje: 'Robby Ray Stewart' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/v9IqL1pG-cI',
        cita: '«Nadie es perfecto, pero tienes lo mejor de ambos mundos».',
        autorCita: 'Hannah Montana',

        //GALERIA

    },
    {
        //CARD 
        id: 19,
        slug: 'shake-it-up',
        fecha: 13,
        tituloEsp: 'Shake It Up',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '18:30', plazas: 20 },
            { hora: '20:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Shake It Up',
        directorx: 'Chris Thompson (Creador)',
        bandaSonora: 'Shake It Up Theme',
        saga: [],
        genero: ['Comedia', 'Baile', 'Sitcom'],
        sinopsis: 'Dos inseparables amigas de Chicago, CeCe y Rocky, logran su gran sueño de convertirse en bailarinas de reparto en el popular programa musical local "Shake It Up, Chicago!".',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Bella Thorne', personaje: 'CeCe Jones' },
            { id: 2, actor: 'Zendaya', personaje: 'Rocky Blue' },
            { id: 3, actor: 'Davis Cleveland', personaje: 'Flynn Jones' },
            { id: 4, actor: 'Adam Irigoyen', personaje: 'Deuce Martinez' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/5DscB3H-8fQ',
        cita: '«Baila como si nadie te estuviera mirando, o al menos como si todo Chicago te mirara».',
        autorCita: 'CeCe Jones',

        //GALERIA

    },
    {
        //CARD 
        id: 20,
        slug: 'kc-agente-especial',
        fecha: 15,
        tituloEsp: 'K.C. Agente',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '12:00', plazas: 20 },
            { hora: '20:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'K.C. Undercover',
        directorx: 'Corinne Marshall (Creadora)',
        bandaSonora: 'Keep It Undercover',
        saga: [],
        genero: ['Comedia', 'Acción', 'Espionaje'],
        sinopsis: 'K.C. Cooper es una genio de las matemáticas y cinturón negro en karate que descubre que sus padres son espías encubiertos, lo que la lleva a ser reclutada por la misma agencia gubernamental.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Zendaya', personaje: 'K.C. Cooper' },
            { id: 2, actor: 'Veronica Dunne', personaje: 'Marisa Clark' },
            { id: 3, actor: 'Kamil McFadden', personaje: 'Ernie Cooper' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/Z5g9e-2m7yE',
        cita: '«Tengo la misión de salvar el mundo, y aun así tengo que terminar los deberes de lengua».',
        autorCita: 'K.C. Cooper',

        //GALERIA

    },
    {
        //CARD 
        id: 21,
        slug: 'riley-y-el-mundo',
        fecha: 15,
        tituloEsp: 'Riley y el Mundo',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '13:30', plazas: 10 },
            { hora: '18:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Girl Meets World',
        directorx: 'Michael Jacobs (Creador)',
        bandaSonora: 'Take On the World',
        saga: ['Yo y el Mundo (Boy Meets World)'],
        genero: ['Comedia', 'Drama', 'Familiar'],
        sinopsis: 'Sigue a Riley Matthews, la hija adolescente de Cory y Topanga Matthews, mientras junto a su mejor amiga Maya Hart navega por los altibajos de la vida y el instituto en la ciudad de Nueva York.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Rowan Blanchard', personaje: 'Riley Matthews' },
            { id: 2, actor: 'Sabrina Carpenter', personaje: 'Maya Hart' },
            { id: 3, actor: 'Peyton Meyer', personaje: 'Lucas Friar' },
            { id: 4, actor: 'Ben Savage', personaje: 'Cory Matthews' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/5D34rF-H2kM',
        cita: '«La gente cambia a la gente. Ese es el secreto del mundo».',
        autorCita: 'Riley Matthews',

        //GALERIA

    },
    {
        //CARD 
        id: 22,
        slug: 'lizzie-mcguire',
        fecha: 14,
        tituloEsp: 'Lizzie McGuire',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '12:30', plazas: 20 },
            { hora: '19:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Lizzie McGuire',
        directorx: 'Terri Minsky (Creadora)',
        bandaSonora: 'We`ll Figure It Out',
        saga: ['Lizzie Superestrella (The Lizzie McGuire Movie)'],
        genero: ['Comedia', 'Juvenil'],
        sinopsis: 'Lizzie McGuire es una adolescente normal y corriente de 13 años que, junto a sus amigos Gordo y Miranda, lidia con el instituto. Sus pensamientos más íntimos los expresa su alter ego animado.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Hilary Duff', personaje: 'Lizzie McGuire' },
            { id: 2, actor: 'Adam Lamberg', personaje: 'David "Gordo" Gordon' },
            { id: 3, actor: 'Lalaine', personaje: 'Miranda Sánchez' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/L0H5gZ-2m3k',
        cita: '«A veces solo quiero que mi vida tenga una bonita banda sonora».',
        autorCita: 'Lizzie animada',

        //GALERIA

    },
    {
        //CARD 
        id: 23,
        slug: 'liv-and-maddie',
        fecha: 15,
        tituloEsp: 'Liv and Maddie',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '17:00', plazas: 20 },
            { hora: '20:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Liv and Maddie',
        directorx: 'John D. Beck (Creador)',
        bandaSonora: 'Better in Stereo',
        saga: [],
        genero: ['Comedia', 'Familiar', 'Sitcom'],
        sinopsis: 'Las gemelas idénticas Liv y Maddie Rooney tienen personalidades completamente opuestas: Liv es una refinada estrella de televisión que vuelve a casa, y Maddie es una atleta de instituto apasionada por el baloncesto.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Dove Cameron', personaje: 'Liv Rooney / Maddie Rooney' },
            { id: 2, actor: 'Joey Bragg', personaje: 'Joey Rooney' },
            { id: 3, actor: 'Parker Rooney', personaje: 'Parker Rooney' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/yF_6Rz9q_kE',
        cita: '«Dos de un tipo... pero completamente diferentes».',
        autorCita: 'Liv Rooney',

        //GALERIA

    },
    /* ANIMACIÓN */
    {
        id: 24,
        slug: 'little-einsteins',
        fecha: 15,
        tituloEsp: 'Little Einsteins',


        tipo: 'Serie',
        duracion: 30, // Duración aproximada por episodio
        horario: [
            { hora: '13:00', plazas: 20 },
            { hora: '19:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Little Einsteins',
        directorx: 'Douglas Wood (Creador)',
        bandaSonora: 'Little Einsteins Theme Song',
        saga: [],
        genero: ['Animación', 'Educativo', 'Musical'],

        sinopsis: 'La serie sigue las aventuras de cuatro pequeños amigos (Leo, June, Quincy y Annie) quienes, junto a su nave espacial inteligente llamada Nave (Rocket), viajan por todo el mundo para resolver misiones especiales. En cada episodio, el grupo introduce a los espectadores en el fascinante mundo del arte y la música clásica, invitando a la audiencia a interactuar y participar activamente dando palmaditas o cantando para ayudar a Nave a cumplir su objetivo.',

        //REPARTO DESPLEGABLE
        personajes: [
            {
                id: 1,

                actor: 'Jesse Schwartz',
                personaje: 'Leo'
            },
            {
                id: 2,

                actor: 'Erica Huang',
                personaje: 'June'
            },
            {
                id: 3,

                actor: 'Aiden Pompey',
                personaje: 'Quincy'
            },
            {
                id: 4,

                actor: 'Natalia Wojcik',
                personaje: 'Annie'
            }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/jZ_vBw0N6_k',

        cita: '«¡Misión cumplida!»',
        autorCita: 'Todos',

        //GALERIA
        imagenesGaleria: []
    },
    {
        id: 25,
        slug: 'pecezuelos',
        fecha: 15,
        tituloEsp: 'Pecezuelos',


        tipo: 'Serie',
        duracion: 30, // Duración por bloque de episodios
        horario: [
            { hora: '17:30', plazas: 11 },
            { hora: '19:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Fish Hooks',
        directorx: 'Noah Z. Jones (Creador)',
        bandaSonora: 'Pecezuelos Theme Song',
        saga: [],
        genero: ['Animación', 'Comedia', 'Juvenil'],

        sinopsis: 'La serie sigue las locas aventuras de tres peces amigos: el alocado y fiestero Milo, su neurótico y tímido hermano Oscar, y la dramática Bea, una pez dorada que sueña con convertirse en una estrella de la televisión. Juntos asisten a la escuela secundaria Freshwater High, ubicada en un gigantesco acuario dentro de una tienda de mascotas, donde intentan sobrevivir a los desafíos típicos de la adolescencia (como los exámenes, las citas y la popularidad) mientras evitan ser devorados por hámsteres o langostas gigantes.',

        //REPARTO DESPLEGABLE
        personajes: [
            {
                id: 1,

                actor: 'Kyle Massey',
                personaje: 'Milo'
            },
            {
                id: 2,

                actor: 'Chelsea Kane',
                personaje: 'Bea'
            },
            {
                id: 3,

                actor: 'Justin Roiland',
                personaje: 'Oscar'
            },
            {
                id: 4,

                actor: 'Alex Kramer',
                personaje: 'Shellsea'
            }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/zH03pZbeLss',

        cita: '«¡Esto va a ser una locura total!»',
        autorCita: 'Milo',

        //GALERIA
        imagenesGaleria: []
    }, {
        id: 26,
        slug: 'phineas-y-ferb',
        fecha: 14,
        tituloEsp: 'Phineas y Ferb',


        tipo: 'Serie',
        duracion: 30, // Duración aproximada por episodio
        horario: [
            { hora: '17:00', plazas: 20 },
            { hora: '20:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Phineas and Ferb',
        directorx: 'Dan Povenmire & Jeff "Swampy" Marsh (Creadores)',
        bandaSonora: 'Today Is Gonna Be a Great Day',
        saga: ['Phineas y Ferb: A través de la 2ª dimensión', 'Phineas y Ferb, la película: Candace contra el universo'],
        genero: ['Animación', 'Comedia', 'Ciencia Ficción'],

        sinopsis: 'Phineas Flynn y su hermanastro Ferb Fletcher están decididos a aprovechar al máximo cada uno de los 104 días de sus vacaciones de verano construyendo inventos y proyectos monumentales en su patio trasero. Esto frustra constantemente a su hermana mayor, Candace, quien intenta delatarlos con su madre a toda costa. Sin embargo, sus planes siempre desaparecen misteriosamente justo a tiempo gracias a la doble vida de su mascota, Perry el Ornitorrinco, quien en secreto es el Agente P, un espía que lucha contra las absurdas ocurrencias del malvado Dr. Heinz Doofenshmirtz.',

        //REPARTO DESPLEGABLE
        personajes: [
            {
                id: 1,

                actor: 'Vincent Martella',
                personaje: 'Phineas Flynn'
            },
            {
                id: 2,

                actor: 'Thomas Brodie-Sangster',
                personaje: 'Ferb Fletcher'
            },
            {
                id: 3,

                actor: 'Ashley Tisdale',
                personaje: 'Candace Flynn'
            },
            {
                id: 4,

                actor: 'Dan Povenmire',
                personaje: 'Dr. Heinz Doofenshmirtz'
            },
            {
                id: 5,

                actor: 'Dee Bradley Baker',
                personaje: 'Perry el Ornitorrinco'
            },
            {
                id: 6,

                actor: 'Alyson Stoner',
                personaje: 'Isabella Garcia-Shapiro'
            }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/w74m9U60n4A',

        cita: '«¡Ferb, ya sé qué vamos a hacer hoy!»',
        autorCita: 'Phineas Flynn',

        //GALERIA
        imagenesGaleria: []
    },
    {
        //CARD 
        id: 27,
        slug: 'la-princesa-sofia',
        fecha: 15,
        tituloEsp: 'Princesa Sofia',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '12:00', plazas: 20 },
            { hora: '18:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Sofia the First',
        directorx: 'Craig Gerber (Creador)',
        bandaSonora: 'Sofia the First Theme',
        saga: ['Elena de Ávalor'],
        genero: ['Animación', 'Fantasía', 'Infantil'],
        sinopsis: 'Sofia es una niña plebeya cuya vida cambia drásticamente cuando su madre se casa con el rey Roland II y ella se convierte en princesa de la noche a la mañana.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Ariel Winter (Voz)', personaje: 'Princesa Sofia' },
            { id: 2, actor: 'Wayne Brady (Voz)', personaje: 'Clover (Conejo)' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/v9D4m_9k4xE',
        cita: '«Ser una princesa no se trata de la tiara, sino de cómo tratas a los demás».',
        autorCita: 'Princesa Sofia',

        //GALERIA

    },
    {
        //CARD 
        id: 28,
        slug: 'patoaventuras',
        fecha: 14,
        tituloEsp: 'Pato Aventuras',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '12:00', plazas: 20 },
            { hora: '16:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'DuckTales',
        directorx: 'Matt Youngberg (Creador)',
        bandaSonora: 'DuckTales Theme Song',
        saga: ['DuckTales (1987)'],
        genero: ['Animación', 'Aventura', 'Comedia'],
        sinopsis: 'El multimillonario Gilito McPato (Scrooge McDuck) se reúne con su temperamental sobrino el Pato Donald y sus tres traviesos sobrinos nietos (Juanito, Jaimito y Jorgito) para embarcarse en nuevas aventuras por todo el mundo.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'David Tennant (Voz)', personaje: 'Gilito McPato' },
            { id: 2, actor: 'Tony Anselmo (Voz)', personaje: 'Pato Donald' },
            { id: 3, actor: 'Kate Micucci (Voz)', personaje: 'Rosita (Webby Vanderquack)' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/0-LNgX69B0o',
        cita: '«La vida es como un huracán aquí en Patolandia».',
        autorCita: 'Gilito McPato',

        //GALERIA

    },
    {
        //CARD 
        id: 29,
        slug: 'star-vs-las-fuerzas-del-mal',
        fecha: 15,
        tituloEsp: 'Star vs. Fuerzas',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '13:30', plazas: 20 },
            { hora: '19:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Star vs. the Forces of Evil',
        directorx: 'Daron Nefcy (Creadora)',
        bandaSonora: 'I Think I`m a Clone Now',
        saga: [],
        genero: ['Animación', 'Fantasía', 'Aventura'],
        sinopsis: 'Star Butterfly es una princesa mágica de otra dimensión que es enviada a la Tierra para vivir con la familia Diaz y aprender a controlar los inmensos poderes de su varita mágica.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Eden Sher (Voz)', personaje: 'Star Butterfly' },
            { id: 2, actor: 'Adam McArthur (Voz)', personaje: 'Marco Diaz' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/h-S0u-oRkZk',
        cita: '«¡Arcoíris con purpurina y rayos mágicos!».',
        autorCita: 'Star Butterfly',

        //GALERIA

    },
    {
        //CARD 
        id: 30,
        slug: 'gravity-falls',
        fecha: 14,
        tituloEsp: 'Gravity Falls',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '18:30', plazas: 20 },
            { hora: '20:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Gravity Falls',
        directorx: 'Alex Hirsch (Creador)',
        bandaSonora: 'Gravity Falls Opening Theme',
        saga: [],
        genero: ['Animación', 'Misterio', 'Comedia'],
        sinopsis: 'Los mellizos Dipper y Mabel Pines son enviados a pasar sus vacaciones de verano en la Cabaña del Misterio, un museo para turistas propiedad de su tío abuelo Stan en Gravity Falls, un pueblo lleno de secretos paranormales.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Jason Ritter (Voz)', personaje: 'Dipper Pines' },
            { id: 2, actor: 'Kristen Schaal (Voz)', personaje: 'Mabel Pines' },
            { id: 3, actor: 'Alex Hirsch (Voz)', personaje: 'Tío Stan' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/fD3_H-8mC9g',
        cita: '«No confíes en nadie en este pueblo».',
        autorCita: 'Dipper Pines',

        //GALERIA

    },
    {
        //CARD 
        id: 31,
        slug: 'la-banda-del-patio',
        fecha: 14,
        tituloEsp: 'La banda del patio',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '17:30', plazas: 20 },
            { hora: '19:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Recess',
        directorx: 'Paul Germain (Creador)',
        bandaSanora: 'Recess Theme',
        saga: ['La banda del patio: Llegó el recreo'],
        genero: ['Animación', 'Comedia', 'Infantil'],
        sinopsis: 'Seis valientes alumnos de primaria de la escuela de la Calle Tercera se organizan durante el recreo para resistir las estrictas normas de los adultos y crear su propio sistema social.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Ross Malinger (Voz)', personaje: 'T.J. Detweiler' },
            { id: 2, actor: 'Pamela Adlon (Voz)', personaje: 'Ashley Spinelli' },
            { id: 3, actor: 'Rickey D`Shon Collins (Voz)', personaje: 'Vince LaSalle' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/6iB_D8o9n4I',
        cita: '«¡Esto es el recreo, chicos! La libertad nos llama».',
        autorCita: 'T.J. Detweiler',

        //GALERIA

    },
    {
        //CARD 
        id: 32,
        slug: 'brandy-and-mr-whiskers',
        fecha: 15,
        tituloEsp: 'Brandy & Whiskers',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '12:30', plazas: 20 },
            { hora: '20:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Brandy & Mr. Whiskers',
        directorx: 'Russell Marcus (Creador)',
        bandaSonora: 'Brandy & Mr. Whiskers Theme Song',
        saga: [],
        genero: ['Animación', 'Comedia'],
        sinopsis: 'Brandy, una perrita refinada de la alta sociedad, y Mr. Whiskers, un conejo hiperactivo y caótico, caen de un avión de carga y terminan perdidos en la inhóspita selva del Amazonas.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Kaley Cuoco (Voz)', personaje: 'Brandy Harrington' },
            { id: 2, actor: 'Charlie Adler (Voz)', personaje: 'Mr. Whiskers' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/i08vWb0X-6k',
        cita: '«¡No puedo creer que esté atrapada en el Amazonas con un conejo loco!».',
        autorCita: 'Brandy',

        //GALERIA

    },
    {
        //CARD 
        id: 33,
        slug: 'kim-possible',
        fecha: 13,
        tituloEsp: 'Kim Possible',


        tipo: 'Serie',
        duracion: 30,
        horario: [
            { hora: '18:30', plazas: 20 },
            { hora: '20:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Kim Possible',
        directorx: 'Bob Schooley (Creador)',
        bandaSonora: 'Call Me, Beep Me!',
        saga: ['Kim Possible: Sí es para tanto (So the Drama)'],
        genero: ['Animación', 'Acción', 'Comedia'],
        sinopsis: 'Kim Possible es una estudiante de secundaria promedio que, en su tiempo libre, salva al mundo de supervillanos megalómanos junto a su mejor amigo Ron Imparable y su topo Rufus.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Christy Carlson Romano (Voz)', personaje: 'Kim Possible' },
            { id: 2, actor: 'Will Friedle (Voz)', personaje: 'Ron Imparable' },
            { id: 3, actor: 'John DiMaggio (Voz)', personaje: 'Dr. Drakken' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/X5g9e-2m7yE',
        cita: '«¿Llamame, búscame, si quieres verme? ¡No hay problema!».',
        autorCita: 'Kim Possible',

        //GALERIA

    },

    /* ACTIVIDADES */

    {
        //CARD 
        id: 34,
        slug: 'taller-art-attack-1',
        fecha: 13,
        tituloEsp: 'Art Attack',


        tipo: 'Actividad',
        duracion: 30,
        horario: [
            { hora: '18:30', plazas: 20 }
        ],

        //ARTICULO

        sala: 1,

        //INFO DESPLEGABLE
        tituloVo: 'Art Attack: DIY Workshop',
        directorx: 'Jordi Cruz',
        bandaSonora: 'Sintonía de Art Attack',
        saga: [],
        genero: ['Taller', 'Manualidades', 'Creatividad'],
        sinopsis: 'Primer día de nuestro mini taller de Art Attack. Ven a fabricar paso a paso dos de las manualidades más icónicas de las primeras temporadas del programa: ¡el clásico organizador de escritorio con forma de monstruo y un portafotos de arcilla de secado rápido!',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Jordi Cruz', personaje: 'Presentador Legendario' },
            { id: 2, actor: 'El Cabezón (Animatronic)', personaje: 'Consejero de Arte' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/o-vD3-K9N0s',
        cita: '«¡No necesitas ser un gran artista para hacer cosas hermosas con tus propias manos!».',
        autorCita: 'Jordi Cruz',

        //GALERIA

    },
    {
        //CARD 
        id: 35,
        slug: 'art-attack-2',
        fecha: 15,
        tituloEsp: 'Art Attack',


        tipo: 'Actividad',
        duracion: 30,
        horario: [
            { hora: '19:00', plazas: 15 }
        ],

        //ARTICULO

        sala: 1,

        //INFO DESPLEGABLE
        tituloVo: 'Art Attack: DIY Workshop II',
        directorx: 'Jordi Cruz',
        bandaSonora: 'Sintonía de Art Attack',
        saga: [],
        genero: ['Taller', 'Manualidades', 'Creatividad'],
        sinopsis: 'Segundo día de nuestro taller creativo de Art Attack. En esta sesión aprenderemos a trabajar con el "mejunje Art Attack" (cola blanca y agua) para moldear una increíble hucha con forma de cerdito espacial y un marco texturizado usando papel de periódico.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Jordi Cruz', personaje: 'Presentador Legendario' },
            { id: 2, actor: 'El Cabezón (Animatronic)', personaje: 'Consejero de Arte' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/o-vD3-K9N0s',
        cita: '«Y recordad, ¡este es el mejunje especial que lo pega todo!».',
        autorCita: 'Jordi Cruz',

        //GALERIA

    },
    {
        //CARD 
        id: 36,
        slug: 'gran-obra-escala-art-attack',
        fecha: 14,
        tituloEsp: 'Art Attack Colectivo',


        tipo: 'Actividad',
        duracion: 60,
        horario: [
            { hora: '18:30', plazas: 20 }
        ],

        //ARTICULO

        sala: 1,

        //INFO DESPLEGABLE
        tituloVo: 'Art Attack: Giant Canvas',
        directorx: 'Alex (El Manitas)',
        bandaSonora: 'Sintonía de Art Attack',
        saga: [],
        genero: ['Arte Urbano', 'Colaborativo'],
        sinopsis: '¿Te acuerdas de los dibujos gigantes que hacían en el suelo con ropa, arena o cartones? ¡Es hora de hacerlo realidad! Participa activamente o ven a observar cómo creamos paso a paso un dibujo a escala masiva en el suelo del recinto del festival utilizando materiales reciclados.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Alex "El Manitas"', personaje: 'Artista de campo' },
            { id: 2, actor: 'Jordi Cruz', personaje: 'Coordinador artístico' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/o-vD3-K9N0s',
        cita: '«Visto desde aquí parece solo un montón de ropa vieja, pero si subimos...».',
        autorCita: 'Alex "El Manitas"',

        //GALERIA

    },
    {
        //CARD 
        id: 37,
        slug: 'concurso-just-dance',
        fecha: 14,
        tituloEsp: 'Torneo Just Dance',


        tipo: 'Actividad',
        duracion: 60,
        horario: [
            { hora: '16:30', plazas: 20 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Just Dance Tournament',
        directorx: 'Sergio Martín',
        bandaSonora: 'Sintonía Oficial Just Dance',
        saga: [],
        genero: ['Concurso', 'Videojuegos', 'Baile'],
        sinopsis: 'Torneo Just Dance: Domina el escenario con las coreografías que practicabas en el salón de casa y gana un premio de un cheque de 50€ que puedes utilizar en cualquiera de los stands de nuestro festival, incluido comidas.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Sergio Martín', personaje: 'Presentador y Animador' },
            { id: 2, actor: 'Andrea Guasch', personaje: 'Jurado Estrella de Baile' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/5DscM3H-8fQ',
        cita: '«¡Sacad esos pasos prohibidos que ensayabais delante del espejo!».',
        autorCita: 'Sergio Martín',

        //GALERIA

    },
    {
        //CARD 
        id: 38,
        slug: 'kahoot-premios-zeta',
        fecha: 13,
        tituloEsp: 'Kahoot',


        tipo: 'Actividad',
        duracion: 30,
        horario: [
            { hora: '19:00', plazas: 3 }
        ],

        //ARTICULO

        sala: 1,

        //INFO DESPLEGABLE
        tituloVo: 'The Ultimate Disney Trivia',
        directorx: 'David Moreno',
        bandaSonora: 'Kahoot Lobby Theme (Remix)',
        saga: [],
        genero: ['Concurso', 'Trivia', 'Interactiva'],
        sinopsis: 'Gran Kahoot Zeta: Preguntas nivel experto sobre tramas secundarias y curiosidades. Solo un verdadero fan podrá alzarse con el trofeo, donde puedes ganar un pack de regalo de varias series y películas de tu infancia.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'David Moreno', personaje: 'Presentador del Quiz' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/L0H5gZ-2m3k',
        cita: '«¿Quién se sabe el segundo apellido de London Tipton? ¡Demostradlo ya en vuestras pantallas!».',
        autorCita: 'David Moreno',

        //GALERIA

    },
    {
        //CARD 
        id: 39,
        slug: 'concurso-disfraces',
        fecha: 15,
        tituloEsp: 'Concurso de Disfraces',


        tipo: 'Actividad',
        duracion: 30,
        horario: [
            { hora: '16:30', plazas: 20 }
        ],

        //ARTICULO

        sala: 'TODAS',

        //INFO DESPLEGABLE
        tituloVo: 'Cosplay and Costume Contest',
        directorx: 'Andrea Guasch',
        bandaSonora: 'We`re All In This Together (Dance Mix)',
        saga: [],
        genero: ['Pasarela', 'Concurso', 'Creativo'],
        sinopsis: 'Concurso de Disfraces: Saca del armario tu mejor look de estrella del pop, deportista de instituto o criatura mágica. ¡El mejor disfraz se llevará un premio exclusivo de un pack de merchandising valorado en 100€ de tu serie o película favorita y un gran descuento en nuestras Food Trucks!',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Andrea Guasch', personaje: 'Maestra de Ceremonias' },
            { id: 2, actor: 'Jordi Cruz', personaje: 'Miembro del Jurado' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/zGl79m8R974',
        cita: '«¡Ver a tantas Hannah Montanas y Troy Boltons juntos en este escenario me da años de vida!».',
        autorCita: 'Andrea Guasch',

        //GALERIA

    },
    {
        //CARD 
        id: 40,
        slug: 'gincana-disney-1',
        fecha: 14,
        tituloEsp: 'Gincana',


        tipo: 'Actividad',
        duracion: 30,
        horario: [
            { hora: '12:00', plazas: 20 },
            { hora: '16:30', plazas: 15 }
        ],

        //ARTICULO

        sala: 1,

        //INFO DESPLEGABLE
        tituloVo: 'Scavenger Hunt: Sofia`s Quest',
        directorx: 'Sergio Martín',
        bandaSonora: 'Sintonía de Aventuras Disney',
        saga: [],
        genero: ['Gincana', 'Familiar', 'Juegos'],
        sinopsis: '¡Una gincana interactiva para niños y toda la familia! Ayuda a encontrar el amuleto perdido resolviendo pistas escondidas por los stands y rincones del festival en un tiempo récord de media hora. Temática: Criaturas mágicas y misterios de la Princesa Sofía.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Sergio Martín', personaje: 'Capitán de la Gincana' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/v9D4m_9k4xE',
        cita: '«¡El tiempo corre! Tenéis exactamente 30 minutos para descifrar la última runa».',
        autorCita: 'Sergio Martín',

        //GALERIA

    },
    {
        //CARD 
        id: 41,
        slug: 'kahoot-premios-zeta-2',
        fecha: 14,
        tituloEsp: 'Kahoot',


        tipo: 'Actividad',
        duracion: 30,
        horario: [
            { hora: '12:00', plazas: 20 },
            { hora: '20:00', plazas: 4 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'The Ultimate Disney Trivia',
        directorx: 'David Moreno',
        bandaSonora: 'Kahoot Lobby Theme (Remix)',
        saga: [],
        genero: ['Concurso', 'Trivia', 'Interactiva'],
        sinopsis: 'Gran Kahoot Zeta: Preguntas nivel experto sobre tramas secundarias y curiosidades. Solo un verdadero fan podrá alzarse con el trofeo, donde puedes ganar un pack de regalo de varias series y películas de tu infancia.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'David Moreno', personaje: 'Presentador del Quiz' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/L0H5gZ-2m3k',
        cita: '«¿Quién se sabe el segundo apellido de London Tipton? ¡Demostradlo ya en vuestras pantallas!».',
        autorCita: 'David Moreno',

        //GALERIA

    },
    {
        //CARD 
        id: 42,
        slug: 'taller-dibujo-animacion-1',
        fecha: 14,
        tituloEsp: 'Taller de Dibujo',


        tipo: 'Actividad',
        duracion: 30,
        horario: [
            { hora: '13:30', plazas: 20 }
        ],

        //ARTICULO

        sala: 3,

        //INFO DESPLEGABLE
        tituloVo: 'Disney Animation Workshop: Stitch',
        directorx: 'Rodrigo Septién (Pascu y Rodri)',
        bandaSonora: 'Aloha, E Komo Mai',
        saga: [],
        genero: ['Taller', 'Dibujo', 'Charla'],
        sinopsis: 'Te enseñamos a dibujar a uno de los personajes de animación favoritos de Disney: ¡Stitch! El taller es ideal para todas las edades por su enfoque fácil y dinámico. Además de dibujar, te contaremos anécdotas increíbles sobre cómo se hicieron estas animaciones clásicas y cómo se realiza el doblaje profesional.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Álvaro Pascual (Pascu)', personaje: 'Ilustrador y Divulgador' },
            { id: 2, actor: 'Rodrigo Septién (Rodri)', personaje: 'Narrador e Historiador de Animación' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/X5g9e-2m7yE',
        cita: '«"Ohana" significa familia, y hoy nuestra familia va a aprender a dibujar trazando círculos sencillos».',
        autorCita: 'Pascu y Rodri',

        //GALERIA

    },
    {
        //CARD 
        id: 43,
        slug: 'taller-dibujo-animacion-2',
        fecha: 15,
        tituloEsp: 'Taller de Dibujo',


        tipo: 'Actividad',
        duracion: 30,
        horario: [
            { hora: '17:00', plazas: 2 }
        ],

        //ARTICULO

        sala: 2,

        //INFO DESPLEGABLE
        tituloVo: 'Disney Animation Workshop: Agent P',
        directorx: 'Rodrigo Septién (Pascu y Rodri)',
        bandaSonora: 'Perry the Platypus Theme',
        saga: [],
        genero: ['Taller', 'Dibujo', 'Charla'],
        sinopsis: 'En este segundo taller del día aprenderemos a dibujar al espía más famoso de la televisión: ¡Perry el Ornitorrinco (Agente P)! Una estructura geométrica básica y muy fácil pensada para todas las edades. Entre trazo y trazo, descubriremos los secretos detrás de los efectos de sonido y doblajes de Phineas y Ferb.',

        //REPARTO DESPLEGABLE
        personajes: [
            { id: 1, actor: 'Álvaro Pascual (Pascu)', personaje: 'Ilustrador y Divulgador' },
            { id: 2, actor: 'Rodrigo Septién (Rodri)', personaje: 'Narrador e Historiador de Animación' }
        ],

        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/Z5g9e-2m7yE',
        cita: '«¿Un simple rectángulo azul? ¡No! Le pones un sombrero marrón y... ¡Es Perry el Ornitorrinco!».',
        autorCita: 'Pascu y Rodri',

        //GALERIA

    }
];
function getImagenesPelicula() {

    // Recorremos todas las imágenes encontradas por el glob
    Object.keys(imagenesCartelera).forEach((ruta) => {
        // Verificamos si la ruta pertenece a la película que buscamos
        const resultado = CATALOGO.find(pelicula => ruta.includes(pelicula.slug));
        const url = imagenesCartelera[ruta].default;

        // Extraemos el nombre del archivo para clasificarlo
        const nombreArchivo = ruta.split('/').pop();

        if (nombreArchivo.startsWith('portada.')) resultado.imagen = url;
        else if (nombreArchivo.startsWith('portada-card.')) resultado.imagenCard = url;
        else if (nombreArchivo.startsWith('cartel.')) resultado.cartel = url;
        else if (nombreArchivo.startsWith('personaje-')) {
            // Guardamos los personajes dinámicamente usando su nombre como clave
            const nombrePersonaje = nombreArchivo.replace('personaje-', '').replace('.webp', '').replace('.jpg', '').replace('.png', '');
            if (!resultado.personajes) resultado.personajes = {};
            const personaje = resultado.personajes.find((p) => p.personaje.toLowerCase().trim().replaceAll(" ", "-") === nombrePersonaje);
            if (personaje) personaje.imagen = url;
        }
        else if (nombreArchivo.startsWith('galeria-')) {
            if (!resultado.imagenesGaleria) resultado.imagenesGaleria = [];
            console.log(`Agregando imagen de galería para ${resultado.tituloEsp}: ${url}`);
            resultado.imagenesGaleria.push(url);
        }
    });
}
getImagenesPelicula()
export { CATALOGO };