export const catalogos = [
  {
    title: 'cofap',
    href: 'https://mmcofap.com.br/catalogo-eletronico-introducao.aspx',
    newTab: false,
  },
  {
    title: 'magneti marelli',
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
    title: 'monroe',
    href: 'https://www.monroeaxios.com.br/catalogo-online-e-apps',
    newTab: false,
  },
  {
    title: 'axios',
    href: 'https://www.monroeaxios.com.br/catalogo-online-e-apps',
    newTab: false,
  },
  {
    title: 'dayco',
    href: 'https://www.daycoaftermarket.com/pt/catalog/',
    newTab: false,
  },
  {
    title: 'willtec',
    href: 'https://www.c123.com.br/willtec/',
    newTab: false,
  },
  {
    title: 'ds',
    href: 'https://www.ds.ind.br/pt',
    newTab: false,
  },
  {
    title: 'petronas',
    href: 'https://br.pli-petronas.com/pt-br/Lubrificantes#/brasil?searchMode=text',
    newTab: true,
  },
  {
    title: '* auto-experts *',
    href: 'https://autoexperts.parts/?mercadoId=92314cc6-2fb6-449d-9b64-eb59b0fb9bf8&idioma=pt-br',
    newTab: false,
  },
  {
    title: 'hipper freios',
    href: 'https://www.hipperfreios.com.br/pt-br?gclid=Cj0KCQjw_r6hBhDdARIsAMIDhV9PbU62MyLwGInTJ_m10VANnzpK9NlWfYS2o12h_AsOeoq4DTHkoDUaAo_qEALw_wcB',
    newTab: false,
  },
  {
    title: 'mds',
    href: 'https://www.mds.ind.br/catalogo',
    newTab: false,
  },
  {
    title: 'ikro',
    href: 'https://www.ikro.com.br/produtos/',
    newTab: false,
  },
  {
    title: 'sachs',
    href: 'https://aftermarket.zf.com/la/pt/sachs/catalogos/#/',
    newTab: true,
  },
  {
    title: 'dyna',
    href: 'https://dyna.com.br/',
    newTab: false,
  },
  {
    title: 'efrari',
    href: 'https://www.efrari.com.br/catalogo',
    newTab: false,
  },
  {
    title: 'schadek',
    href: 'https://schadek.com.br/',
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
