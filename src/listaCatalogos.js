export const catalogos = [
  {
    title: 'cofap',
    href: 'https://mmcofap.com.br/catalogo-eletronico-introducao.aspx',
    newTab: false,
  },
  {
    title: 'viemar',
    href: 'https://catalogoantigo.viemar.com/',
    newTab: false,
  },
  {
    title: 'nakata',
    href: 'https://www.catalogonakata.com.br/',
    newTab: false,
  },
  {
    title: 'ngk',
    href: 'https://automotivo.ngkntk.com.br/catalogos-e-lancamentos/?country=br&lang=pt',
    newTab: false,
  },
  {
    title: 'spicer',
    href: 'https://spicer.com.br/catalogo/',
    newTab: true,
  },
  {
    title: 'perfect',
    href: 'https://www.perfectautomotive.com/new/catalogo_ideia.asp',
    newTab: false,
  },
  {
    title: 'wega',
    href: 'https://admin.wegamotors.com/consulta-on-line/',
    newTab: false,
  },
  {
    title: 'axios-monroe',
    href: 'https://www.monroeaxios.com.br/catalogo-online-e-apps',
    newTab: false,
  },
  {
    title: 'dayco',
    href: 'https://www.daycoaftermarket.com/pt/catalog/',
    newTab: false,
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
