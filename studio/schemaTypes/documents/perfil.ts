import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'

export const perfil = defineType({
  name: 'perfil',
  title: 'Perfil',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre completo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rol',
      title: 'Rol / título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biografía corta',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'foto',
      title: 'Foto de perfil',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.email().warning('El email no parece válido'),
    }),
    defineField({
      name: 'telefono',
      title: 'Teléfono',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'URL de LinkedIn',
      type: 'url',
      validation: (rule) =>
        rule.uri({scheme: ['http', 'https']}).warning('Debe ser una URL http(s)'),
    }),
    defineField({
      name: 'ubicacion',
      title: 'Ubicación',
      type: 'string',
    }),
    defineField({
      name: 'stats',
      title: 'Estadísticas destacadas (hero)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'numero', title: 'Número', type: 'string'}),
            defineField({name: 'etiqueta', title: 'Etiqueta', type: 'string'}),
          ],
        }),
      ],
      validation: (rule) => rule.max(3),
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'rol',
      media: 'foto',
    },
  },
})