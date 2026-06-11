# Modelos

A aba **Modelos** oferece uma biblioteca de templates predefinidos, desenvolvidos para otimizar o seu tempo. Em vez de criar um layout do zero, basta escolher um modelo pronto e utilizá-lo imediatamente.

A interface segue o padrão visual do sistema, dividindo-se entre o banner de busca superior e a galeria de templates disponíveis.

![Tela de Modelos Completa](/assets/tela_modelos_completa.png)

## 1. Banner de Busca por Templates

![Banner de Busca de Modelos](/assets/tela_modelos_banner.png)

* **Filtros de Localização:** A barra central *"Buscar etiqueta por nome"* permite pesquisar modelo de etiqueta pelo título de identificação. Além disso, logo abaixo dela, é possível filtrar os modelos por dimensões específicas, facilitando a busca pelo tamanho exato de etiqueta que você precisa.

## 2. Galeria de Modelos Disponíveis

![Galeria de Modelos](/assets/tela_modelos_galeria.png)
Exibe em formato de grade (cards) todas as opções de etiquetas padrão configuradas no sistema.

Cada card de modelo apresenta:
* **Pré-visualização do Layout:** Uma miniatura que demonstra a disposição dos elementos (como códigos de barras, preços ou textos).
* **Especificações Técnicas:** O nome do modelo e suas dimensões exatas em milímetros (ex: `60 x 40 mm` ou `33 x 22 mm`).

::: tip 💡 Como utilizar um modelo
Basta dar **um clique sobre o card** do modelo desejado. O projeto será aberto imediatamente e, a partir desse momento, ele também passará a constar na sua seção de **Recentes** (na aba Início) para acessos futuros.
:::

::: info Menu de Ações Rápidas
Se preferir, você também pode clicar no ícone de três pontos <span class="tooltip-icone">`⋮`<img src="/assets/tela_modelos_menu.png" class="tooltip-imagem" alt="Menu do modelo"></span> no canto inferior direito do card. Ele exibirá a opção **Usar modelo**, que possui a mesma função do clique direto no card.
:::

<details>
  <summary>Clique aqui para ver o vídeo de demonstração</summary>
  <HoverVideo
    src="/videos/tela_modelos.mp4"
    title="Aba Modelos"
    description="Demonstração visual de como navegar pela biblioteca de modelos e escolher um template."
    :playback-rate="2"
  />
</details>

<style context="global">
.tooltip-icone {
  position: relative;
  cursor: pointer;
  display: inline-block;
}

/* Esconde a imagem por padrão */
.tooltip-icone .tooltip-imagem {
  display: none;
  position: absolute;
  z-index: 99;
  top: 10px;
  right: 50%;
  max-width: 180px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  background: var(--vp-c-bg);
}

/* Mostra a imagem ao passar o mouse */
.tooltip-icone:hover .tooltip-imagem {
  display: block;
}
</style>