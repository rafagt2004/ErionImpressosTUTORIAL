# Tela Inicial

Ao acessar o programa, o usuário é direcionado para a aba **Início**. A interface é projetada de forma minimalista e divide-se em duas seções principais: o banner de busca rápida e o painel de gerenciamento de etiquetas recentes.

![Tela Inicial Completa](/assets/tela_inicial_completa.png)

## 1. Banner de Busca

![Tela Inicial Recentes](/assets/tela_inicial_banner.png)

* **Barra de Pesquisa:** Localizada ao centro do banner, permite filtrar e localizar rapidamente qualquer etiqueta salva digitando o termo em *"Buscar etiqueta por nome"*.

## 2. Painel de Recentes

![Tela Inicial Recentes](/assets/tela_inicial_recentes.png)
Exibe em formato de grade (cards) os últimos projetos criados ou editados pelo usuário.

Cada card apresenta:
* **Pré-visualização:** Uma miniatura do layout atual da etiqueta.
* **Metadados:** O nome atribuído ao projeto e suas dimensões exatas em milímetros (ex: `40 x 40 mm`).
::: tip 💡 Como abrir um projeto
Basta dar **um clique sobre o card** de qualquer etiqueta recente para abri-la diretamente no editor.
:::

::: info Menu de Ações Rápidas
Ao clicar no ícone de três pontos <span class="tooltip-icone">`⋮`<img src="/assets/tela_inicial_menu.png" class="tooltip-imagem" alt="Menu de ações"></span> no canto inferior direito de qualquer card, um menu suspenso é exibido com as seguintes opções:

1. **Renomear:** Altera o título de identificação da etiqueta.
2. **Imprimir etiqueta:** Atalho direto para abrir a tabela de lançamento de produtos.
3. **Remover:** Exclui o modelo do histórico de recentes.
:::

<details>
  <summary>Clique aqui para ver o vídeo de demonstração</summary>
  <HoverVideo
    src="/videos/tela_inicial.mp4"
    title="Tela inicial"
    description="Demonstração visual da navegação na tela inicial e abertura de projetos."
    :playback-rate="2"
  />
</details>

---

### Navegação Lateral
A barra de ferramentas fixa à esquerda oferece atalhos do programa:
* **Criar** *(ícone de* `+` *acima)*: Abre o modal de criação de etiquetas.
* **Início:** Retorna a esta tela principal.
* **Modelos:** Abre a biblioteca de templates predefinidos.
* **Configurações** *(ícone de engrenagem no rodapé)*: Painel de ajustes técnicos do programa.


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
  top: 10px; /* Joga a imagem um pouco para baixo do ícone */
  right: 50%;
  /* transform: translateX(-50%); */
  max-width: 180px; /* Limita o tamanho para não quebrar o layout */
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