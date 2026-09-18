import {defineArrayMember, defineField, defineType} from 'sanity'
import {StackIcon} from '@sanity/icons/Stack'

export const habilidadGrupo = defineType({
  name: 'habilidadGrupo',
  title: 'Grupo de habilidades',
  type: 'document',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'nombreGrupo',
      title: 'Nombre del grupo (ej. "Software SIG")',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'habilidades',
      title: 'Habilidades',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Orden manual',
      name: 'ordenAsc',
      by: [{field: 'orden', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'nombreGrupo',
    },
  },
})