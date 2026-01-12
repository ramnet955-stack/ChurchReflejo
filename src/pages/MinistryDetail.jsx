import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Heart, Home, Sparkles, MapPin, Clock, Shield } from 'lucide-react';

const ministriesData = {
    matrimonios: {
        id: 'matrimonios',
        title: 'Matrimonio Reflejo',
        subtitle: 'Fortaleciendo la unión',
        color: 'from-lime-600 to-green-700',
        description: 'Matrimonios firmes bajo principios bíblicos.',
        content: 'Talleres, consejería y noches especiales para nutrir la comunicación, el compañerismo y la visión compartida en pareja.',
        schedule: 'Jueves 7:00 PM (quincenal)',
        leader: 'Equipo Matrimonios',
        icon: Home
    },
    mujeres: {
        id: 'mujeres',
        title: 'Mujeres Renuevo',
        subtitle: 'Fe, gracia y propósito',
        color: 'from-pink-500 to-rose-600',
        description: 'Mujeres unidas para crecer en el conocimiento de Dios.',
        content: 'Reuniones de estudio bíblico, oración y compañerismo diseñadas especialmente para la mujer de hoy.',
        schedule: 'Martes 10:00 AM',
        leader: 'Equipo Renuevo',
        icon: Heart
    },
    hombres: {
        id: 'hombres',
        title: 'Hombres Refugio de Fe',
        subtitle: 'Integridad y valor',
        color: 'from-blue-900 to-slate-900',
        description: 'Varones comprometidos con su familia y la palabra.',
        content: 'Desayunos, tiempos de palabra y mentoría para hombres que buscan liderar con el ejemplo de Cristo.',
        schedule: 'Sábados 8:00 AM (mensual)',
        leader: 'Equipo Refugio de Fe',
        icon: Shield
    },
    jovenes: {
        id: 'jovenes',
        title: 'Jóvenes Generación R',
        subtitle: 'Identidad y propósito en Cristo',
        color: 'from-orange-500 to-amber-600',
        description: 'Un espacio para jóvenes que buscan crecer y servir.',
        content: 'Reuniones con música, palabra relevante y mentoría. Retos, campamentos y grupos pequeños donde se forjan amistades centradas en Jesús.',
        schedule: 'Martes 9:30 PM (Zoom)',
        leader: 'Equipo Gen R',
        icon: Users
    },
    evangelismo: {
        id: 'evangelismo',
        title: 'Evangelismo Misión R',
        subtitle: 'Compartiendo la esperanza',
        color: 'from-red-600 to-rose-700',
        description: 'Llevando el mensaje de Jesús a nuestra ciudad.',
        content: 'Salidas de evangelismo, entrenamiento en misiones y proyectos sociales para impactar nuestro entorno.',
        schedule: 'Domingos 2:00 PM',
        leader: 'Equipo Misión R',
        icon: Sparkles
    },
    ninos: {
        id: 'ninos',
        title: 'Rebañito',
        subtitle: 'Sembrando la semilla de la fe',
        color: 'from-amber-400 to-orange-500',
        description: 'Ministerio infantil donde los niños aprenden de Jesús de forma divertida.',
        content: 'Clases dinámicas, cantos y actividades manuales para que los más pequeños conozcan el amor de Dios en un ambiente seguro.',
        schedule: 'Domingos 11:30 AM',
        leader: 'Equipo Kids',
        icon: Users
    }
};

const MinistryDetail = () => {
    const { id } = useParams();
    const ministry = ministriesData[id];

    if (!ministry) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Ministerio no encontrado</h2>
                    <Link to="/ministerios" className="text-primary hover:underline">
                        Volver a Ministerios
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = ministry.icon;

    return (
        <div className="min-h-screen bg-white">
            <div className={`relative h-[50vh] bg-gradient-to-r ${ministry.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center z-10">
                    <div className="text-white max-w-4xl">
                        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white font-bold transition-colors">
                            <ArrowLeft size={24} /> Volver
                        </Link>
                        <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-md mb-6 border border-white/30">
                            <Icon size={48} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">{ministry.title}</h1>
                        <p className="text-2xl text-white/90 font-light">{ministry.subtitle}</p>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <blockquote className="text-2xl font-serif italic text-slate-800 mb-8 pl-6 border-l-4 border-slate-200">
                            "{ministry.description}"
                        </blockquote>
                        <div className="prose prose-lg text-slate-600">
                            <p>{ministry.content}</p>
                            <p className="mt-4">
                                Estamos comprometidos con el crecimiento espiritual y el apoyo mutuo. 
                                Te invitamos a ser parte de esta comunidad y descubrir lo que Dios tiene preparado para ti.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Información General</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <Users className="text-slate-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Líder</p>
                                    <p className="font-semibold text-slate-800">{ministry.leader}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <MapPin className="text-slate-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Ubicación</p>
                                    <p className="font-semibold text-slate-800">Sede Principal - Auditorio B</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <Clock className="text-slate-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Horario</p>
                                    <p className="font-semibold text-slate-800">{ministry.schedule}</p>
                                </div>
                            </div>
                        </div>

                        <button className={`w-full mt-8 py-4 bg-gradient-to-r ${ministry.color} text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all`}>
                            Contactar al Ministerio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinistryDetail;