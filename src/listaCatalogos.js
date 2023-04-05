export const catalogos = [
  {
    title: 'cofap',
    href: 'https://mmcofap.com.br/catalogo-eletronico-introducao.aspx',
  },
  {
    title: 'viemar',
    href: 'https://catalogoantigo.viemar.com/',
  },
  {
    title: 'nakata',
    href: 'https://www.catalogonakata.com.br/',
  },
  {
    title: 'ngk',
    href: 'https://automotivo.ngkntk.com.br/catalogos-e-lancamentos/?country=br&lang=pt',
  },
  {
    title: 'spicer',
    href: 'https://spicer.com.br/catalogo/',
  },
  {
    title: 'perfect',
    href: 'https://www.perfectautomotive.com/new/catalogo_ideia.asp',
  },
  {
    title: 'wega',
    href: 'https://admin.wegamotors.com/consulta-on-line/',
  },
  {
    title: 'axios-monroe',
    href: 'https://www.monroeaxios.com.br/catalogo-online-e-apps',
  },
  {
    title: 'dayco',
    href: 'https://www.daycoaftermarket.com/pt/catalog/',
  },
].sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});
