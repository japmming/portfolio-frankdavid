import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { Nav } from "@/components/nav";
import { Hero, type HeroFoto } from "@/components/hero";
import { type Stat } from "@/components/stats";
import { ProjectsGrid, type ProjectItem } from "@/components/projects-grid";
import { ExperienceTimeline, type ExperienceItem } from "@/components/experience-timeline";
import { SkillsLayers, type SkillGroupItem } from "@/components/skills-layers";
import { ContactCard } from "@/components/contact-card";
import { Footer } from "@/components/footer";

const PERFIL_QUERY = defineQuery(`*[_type == "perfil"][0]{
  _id, nombre, rol, bio, foto, email, telefono, linkedin, ubicacion,
  stats[]{ numero, etiqueta }
}`);

const PROYECTOS_QUERY = defineQuery(`*[_type == "proyecto"] | order(orden asc, _createdAt asc){
  _id, titulo, descripcion, imagen, etiquetaVisual, herramientas, destacado
}`);

const EXPERIENCIA_QUERY = defineQuery(`*[_type == "experiencia"] | order(orden asc, _createdAt asc){
  _id, empresa, cargo, fechaInicio, fechaFin, actual, bullets
}`);

const HABILIDADES_QUERY = defineQuery(`*[_type == "habilidadGrupo"] | order(orden asc, _createdAt asc){
  _id, nombreGrupo, habilidades
}`);

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const [perfil, proyectos, experiencias, grupos] = await Promise.all([
    client.fetch(PERFIL_QUERY, {}, options),
    client.fetch(PROYECTOS_QUERY, {}, options),
    client.fetch(EXPERIENCIA_QUERY, {}, options),
    client.fetch(HABILIDADES_QUERY, {}, options),
  ]);

  const data = {
    nombre: perfil?.nombre ?? "Frank Chávez Marchena",
    nombreCorto: perfil?.nombre ?? "Frank Chávez",
    rol: perfil?.rol ?? "Especialista SIG · Geomática · Drones RPAS",
    bio:
      perfil?.bio ??
      "Geómetra con enfoque en Sistemas de Información Geográfica, drones RPAS y datos espaciales. Construyo mapas, geovisores y dashboards que convierten datos territoriales en decisiones para utilidades, gobiernos locales y consultoras.",
    email: perfil?.email ?? "frank.15726@gmail.com",
    telefono: perfil?.telefono ?? "(+51) 989 952 416",
    linkedin: perfil?.linkedin ?? "https://www.linkedin.com/in/frank-marchena",
    ubicacion: perfil?.ubicacion ?? "Ventanilla, Callao — Lima, Perú",
  };

  const stats: Stat[] = (perfil?.stats ?? []).filter(
    (s): s is { numero: string; etiqueta: string } => Boolean(s?.numero && s?.etiqueta),
  );

  const foto: HeroFoto | null =
    perfil?.foto == null
      ? null
      : {
          src: urlFor(perfil.foto).width(640).auto("format").url(),
          alt: perfil.foto.alt ?? `Retrato de ${data.nombre}`,
        };

  const proyectosView: ProjectItem[] = proyectos.map((p) => ({
    _id: p._id,
    titulo: p.titulo ?? "Sin título",
    descripcion: p.descripcion,
    etiqueta: p.etiquetaVisual ?? "PROYECTO · SIN ETIQUETA",
    herramientas: p.herramientas ?? [],
    destacado: Boolean(p.destacado),
    src: p.imagen ? urlFor(p.imagen).width(1100).auto("format").url() : null,
    alt: p.imagen?.alt ?? undefined,
  }));

  const experienciasView: ExperienceItem[] = experiencias.map((xp) => ({
    _id: xp._id,
    empresa: xp.empresa ?? "",
    cargo: xp.cargo ?? "Cargo",
    fechaInicio: xp.fechaInicio,
    fechaFin: xp.fechaFin,
    actual: Boolean(xp.actual),
    bullets: xp.bullets ?? [],
  }));

  const gruposView: SkillGroupItem[] = grupos.map((g) => ({
    _id: g._id,
    nombreGrupo: g.nombreGrupo ?? "Grupo",
    habilidades: g.habilidades ?? [],
  }));

  return (
    <>
      <Nav nombreCorto={data.nombreCorto} />
      <main>
        <Hero
          nombreCorto={data.nombreCorto}
          rol={data.rol}
          bio={data.bio}
          ubicacion={data.ubicacion}
          linkedin={data.linkedin}
          stats={stats}
          foto={foto}
        />
        <ProjectsGrid proyectos={proyectosView} />
        <ExperienceTimeline experiencias={experienciasView} />
        <SkillsLayers grupos={gruposView} />
        <ContactCard email={data.email} telefono={data.telefono} linkedin={data.linkedin} />
      </main>
      <Footer nombre={data.nombre} ubicacion={data.ubicacion} />
    </>
  );
}