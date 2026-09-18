import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Perfil')
        .id('perfil')
        .child(S.editor().schemaType('perfil').documentId('perfil')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'perfil',
      ),
    ])