import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pt-BR',

  title: 'ErionImpressos Tutorial',
  description: 'Manual de treinamento e suporte do ErionImpressos',

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introdução',
        items: [
          { text: 'O que é o ErionImpressos', link: '/introducao' },
          { text: 'Instalação', link: '/instalacao' }
        ]
      },

      // {
      //   text: 'Configuração Inicial',
      //   items: [
      //     { text: 'Banco de Dados', link: '/config/banco-dados' },
      //     { text: 'Impressora', link: '/config/impressora' },
      //     { text: 'Papel', link: '/config/papel' }
      //   ]
      // },

      {
        text: 'Primeiros Passos',
        items: [
          { text: 'Tela Inicial', link: '/primeiros-passos/inicio' },
          { text: 'Modelos', link: '/primeiros-passos/modelos' },
          { text: 'Configurações', link: '/primeiros-passos/configuracoes' }
        ]
      },

      {
        text: 'Editor',
        items: [
          { text: 'Interface', link: '/editor/interface' },
          { text: 'Elementos', link: '/editor/elementos' },
          { text: 'Propriedades', link: '/editor/propriedades' },
          { text: 'Camadas', link: '/editor/camadas' }
        ]
      },

      {
        text: 'Variáveis',
        items: [
          { text: 'Introdução', link: '/variaveis' },
          { text: 'Código de Barras', link: '/variaveis/codigo-barras' }
        ]
      },

      {
        text: 'Impressão',
        items: [
          { text: 'Lançamento de Itens', link: '/impressao/lancamento' },
          { text: 'Preview', link: '/impressao/preview' }
        ]
      },

      {
        text: 'Suporte',
        items: [
          { text: 'Problemas Comuns', link: '/suporte/problemas' },
          { text: 'FAQ', link: '/suporte/faq' }
        ]
      }
    ],

    outline: {
      label: 'Nesta página'
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    },

    darkModeSwitchLabel: 'Tema',

    sidebarMenuLabel: 'Menu',

    returnToTopLabel: 'Voltar ao topo',

    lastUpdated: {
      text: 'Última atualização'
    },

    socialLinks: []
  }
})