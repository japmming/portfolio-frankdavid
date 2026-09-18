import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export const experiencia = defineType({
  name: 'experiencia',
  title: 'Experiencia',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'empresa',
      title: 'Empresa',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cargo',
      title: 'Cargo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fechaInicio',
      title: 'Fecha de inicio',
      type: 'date',
    }),
    defineField({
      name: 'fechaFin',
      title: 'Fecha de fin',
      type: 'date',
      description: 'Dejar vacío si es el puesto actual',
    }),
    defineField({
      name: 'actual',
      title: '¿Es el puesto actual?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'bullets',
      title: 'Logros / responsabilidades',
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
      title: 'cargo',
      subtitle: 'empresa',
    },
  },
})