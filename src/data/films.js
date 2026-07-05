/* HIGH SCHOOL MUSICAL */
import portada1 from '../assets/img/cartelera/high-school-musical/portada.webp';
import portadaCard1 from '../assets/img/cartelera/high-school-musical/portada-card.webp';
import cartel1 from '../assets/img/cartelera/high-school-musical/cartel.webp';
import troyBolton from '../assets/img/cartelera/high-school-musical/personaje-troy_bolton.webp';
import gabriellaMontez from '../assets/img/cartelera/high-school-musical/personaje-gabriella_montez.webp';
import sharpayEvans from '../assets/img/cartelera/high-school-musical/personaje-sharpay_evans.webp';
import ryanEvans from '../assets/img/cartelera/high-school-musical/personaje-ryan_evans.webp';
import chadDanforth from '../assets/img/cartelera/high-school-musical/personaje-chad_danforth.webp';
import taylorMcKessie from '../assets/img/cartelera/high-school-musical/personaje-taylor-mckessie.webp';
import galeriaHs1 from '../assets/img/cartelera/high-school-musical/galeria-1.webp';
import galeriaHs2 from '../assets/img/cartelera/high-school-musical/galeria-2.webp';
import galeriaHs3 from '../assets/img/cartelera/high-school-musical/galeria-3.webp';
import galeriaHs4 from '../assets/img/cartelera/high-school-musical/galeria-4.webp';
import galeriaHs5 from '../assets/img/cartelera/high-school-musical/galeria-5.webp';
import galeriaHs6 from '../assets/img/cartelera/high-school-musical/galeria-6.webp';
import galeriaHs7 from '../assets/img/cartelera/high-school-musical/galeria-7.webp';
import galeriaHs8 from '../assets/img/cartelera/high-school-musical/galeria-8.webp';


export const CATALOGO = [
    {
        //CARD 
        id: 1,
        slug: 'high-school-musical',
        dia: 14,
        tituloEsp: 'High School Musical', // poner , y no ; !!!
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Película', // serie, pelicula o actividad
        duracion: 98,
        horario: ['12:30', '19:30'], // ponemos un array para el horario, ya que puede haber más de uno

        //ARTICULO -- info anterior y esta
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Zac Efron',
                personaje: 'Troy Bolton'
            },
            {
                id: 2,
                imagen: gabriellaMontez,
                actor: 'Vanessa Hudgens',
                personaje: 'Gabriella Montez'
            },

            {
                id: 3,
                imagen: sharpayEvans,
                actor: 'Ashley French',
                personaje: 'Sharpay Evans'
            },
            {
                id: 4,
                imagen: ryanEvans,
                actor: 'Lucas Grabeel',
                personaje: 'Ryan Evans'
            },
            {
                id: 5,
                imagen: chadDanforth,
                actor: 'Corbin Bleu',
                personaje: 'Chad Danforth'
            },
            {
                id: 6,
                imagen: taylorMcKessie,
                actor: 'Monique Coleman',
                personaje: 'Taylor McKessie'
            }
        ],


        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/d3fxIvliIj4',
        cita: '«East High es tener amigos que conservaremos por el resto de nuestras vidas, y eso significa que realmente estamos ‘juntos en esto».',
        autorCita: 'Troy Bolton',

        //GALERIA
        imagenesGaleria: [galeriaHs1, galeriaHs2, galeriaHs3, galeriaHs4, galeriaHs5, galeriaHs6, galeriaHs7, galeriaHs8]
    }
    ,
    {
        //CARD 
        id: 2,
        slug: 'lemonade-mouth',
        dia: 13,
        tituloEsp: 'Lemonade Mouth',
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Película',
        duracion: 108,
        horario: ['17:00'],

        //ARTICULO
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Bridgit Mendler',
                personaje: 'Olivia White'
            },
            {
                id: 2,
                imagen: troyBolton,
                actor: 'Adam Hicks',
                personaje: 'Wendell "Wen" Gifford'
            },
            {
                id: 3,
                imagen: troyBolton,
                actor: 'Hayley Kiyoko',
                personaje: 'Stella Yamada'
            },
            {
                id: 4,
                imagen: troyBolton,
                actor: 'Naomi Scott',
                personaje: 'Mo Banjaree'
            },
            {
                id: 5,
                imagen: troyBolton,
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
        dia: 13,
        tituloEsp: 'Camp Rock',
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Película',
        duracion: 94,
        horario: ['17:00', '19:00'],

        //ARTICULO
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Demi Lovato',
                personaje: 'Mitchie Torres'
            },
            {
                id: 2,
                imagen: troyBolton,
                actor: 'Joe Jonas',
                personaje: 'Shane Gray'
            },
            {
                id: 3,
                imagen: troyBolton,
                actor: 'Meaghan Martin',
                personaje: 'Tess Tyler'
            },
            {
                id: 4,
                imagen: troyBolton,
                actor: 'Alyson Stoner',
                personaje: 'Caitlyn Gellar'
            },
            {
                id: 5,
                imagen: troyBolton,
                actor: 'Nick Jonas',
                personaje: 'Nate Gray'
            },
            {
                id: 6,
                imagen: troyBolton,
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
        id: 4,
        slug: 'austin-y-ally',
        dia: 18, // Basado en su estreno en España (18 de mayo)
        tituloEsp: 'Austin y Ally',
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Serie',
        duracion: 25, // Duración aproximada por episodio
        horario: ['17:30', '20:30'],

        //ARTICULO
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Ross Lynch',
                personaje: 'Austin Moon'
            },
            {
                id: 2,
                imagen: troyBolton,
                actor: 'Laura Marano',
                personaje: 'Ally Dawson'
            },
            {
                id: 3,
                imagen: troyBolton,
                actor: 'Raini Rodriguez',
                personaje: 'Trish De la Rosa'
            },
            {
                id: 4,
                imagen: troyBolton,
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
        id: 5,
        slug: 'los-magos-de-waverly-place',
        dia: 14,
        tituloEsp: 'Los magos de Waverly Place',
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Serie',
        duracion: 28, // Duración aproximada por episodio
        horario: ['17:30', '20:00'],

        //ARTICULO
        cartel: cartel1,
        sala: 1,

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
                imagen: troyBolton,
                actor: 'Selena Gomez',
                personaje: 'Alex Russo'
            },
            {
                id: 2,
                imagen: troyBolton,
                actor: 'David Henrie',
                personaje: 'Justin Russo'
            },
            {
                id: 3,
                imagen: troyBolton,
                actor: 'Jake T. Austin',
                personaje: 'Max Russo'
            },
            {
                id: 4,
                imagen: troyBolton,
                actor: 'Jennifer Stone',
                personaje: 'Harper Finkle'
            },
            {
                id: 5,
                imagen: troyBolton,
                actor: 'Maria Canals-Barrera',
                personaje: 'Theresa Russo'
            },
            {
                id: 6,
                imagen: troyBolton,
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
        id: 6,
        slug: 'dulce-hotel-zack-y-cody',
        dia: 13,
        tituloEsp: 'Dulce hotel: Zack y Cody',
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Serie',
        duracion: 22, // Duración aproximada por episodio
        horario: ['17:00', '19:30'],

        //ARTICULO
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Dylan Sprouse',
                personaje: 'Zack Martin'
            },
            {
                id: 2,
                imagen: troyBolton,
                actor: 'Cole Sprouse',
                personaje: 'Cody Martin'
            },
            {
                id: 3,
                imagen: troyBolton,
                actor: 'Ashley Tisdale',
                personaje: 'Maddie Fitzpatrick'
            },
            {
                id: 4,
                imagen: troyBolton,
                actor: 'Brenda Song',
                personaje: 'London Tipton'
            },
            {
                id: 5,
                imagen: troyBolton,
                actor: 'Phill Lewis',
                personaje: 'Sr. Moseby'
            },
            {
                id: 6,
                imagen: troyBolton,
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
        id: 7,
        slug: 'little-einsteins',
        dia: 15,
        tituloEsp: 'Little Einsteins',
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Serie',
        duracion: 24, // Duración aproximada por episodio
        horario: ['13:00', '16:30'],

        //ARTICULO
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Jesse Schwartz',
                personaje: 'Leo'
            },
            {
                id: 2,
                imagen: troyBolton,
                actor: 'Erica Huang',
                personaje: 'June'
            },
            {
                id: 3,
                imagen: troyBolton,
                actor: 'Aiden Pompey',
                personaje: 'Quincy'
            },
            {
                id: 4,
                imagen: troyBolton,
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
        id: 8,
        slug: 'pecezuelos',
        dia: 15,
        tituloEsp: 'Pecezuelos',
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Serie',
        duracion: 22, // Duración por bloque de episodios
        horario: ['17:30', '19:30'],

        //ARTICULO
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Kyle Massey',
                personaje: 'Milo'
            },
            {
                id: 2,
                imagen: troyBolton,
                actor: 'Chelsea Kane',
                personaje: 'Bea'
            },
            {
                id: 3,
                imagen: troyBolton,
                actor: 'Justin Roiland',
                personaje: 'Oscar'
            },
            {
                id: 4,
                imagen: troyBolton,
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
        id: 9,
        slug: 'phineas-y-ferb',
        dia: 14,
        tituloEsp: 'Phineas y Ferb',
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Serie',
        duracion: 22, // Duración aproximada por episodio
        horario: ['16:30', '18:30'],

        //ARTICULO
        cartel: cartel1,
        sala: 2,

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
                imagen: troyBolton,
                actor: 'Vincent Martella',
                personaje: 'Phineas Flynn'
            },
            {
                id: 2,
                imagen: troyBolton,
                actor: 'Thomas Brodie-Sangster',
                personaje: 'Ferb Fletcher'
            },
            {
                id: 3,
                imagen: troyBolton,
                actor: 'Ashley Tisdale',
                personaje: 'Candace Flynn'
            },
            {
                id: 4,
                imagen: troyBolton,
                actor: 'Dan Povenmire',
                personaje: 'Dr. Heinz Doofenshmirtz'
            },
            {
                id: 5,
                imagen: troyBolton,
                actor: 'Dee Bradley Baker',
                personaje: 'Perry el Ornitorrinco'
            },
            {
                id: 6,
                imagen: troyBolton,
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
    }

]