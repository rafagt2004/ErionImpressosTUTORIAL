# Configurações

O painel de **Configurações** pode ser acessado a qualquer momento clicando no ícone de engrenagem <span class="nav-icone">⚙️</span> localizado no rodapé da barra lateral de navegação. 

Este painel é dividido em duas abas principais: **Impressora** (para calibração física e layouts de página) e **Geral** (para comportamentos e preferências do sistema).

![Janela de Configurações - Impressora](/assets/config_impressora.png)

## 1. Aba Impressora

Nesta seção, você define a comunicação com o seu hardware de impressão e a estrutura física do papel utilizado.

### Informações Básicas
* **Impressora:** Menu suspenso para selecionar a impressora instalada no sistema que será utilizada.
* **Tipo de Impressora:** Define o protocolo de comunicação. As opções incluem:
  * **Gráfica (PDF/Windows):** Ideal para impressoras convencionais ou uso de folhas A4.
  * **ZPL / PPLB:** Linguagens nativas de impressoras térmicas (ex: Zebra, Argox).
  ::: warning ⚠️ Nota sobre EPL
  O protocolo **EPL** encontra-se em desenvolvimento e não deve ser utilizado no momento.
  :::
* **Papel / Mídia:** Selecione o formato de papel da impressora (ex: `A4` ou `Bobina`).
* **Resolução (DPI):** Define a densidade de pixels da impressão. A grande maioria das impressoras térmicas do mercado opera em **203 DPI**, que é o valor padrão recomendado. Altere apenas se a impressora selecionada especificar uma resolução maior (como 300 DPI).

### Layout (Varia conforme o Papel selecionado)
Esta seção ajusta a distribuição das etiquetas na página para que a impressão saia perfeitamente alinhada:
* **Colunas e Linhas:** Define a quantidade de etiquetas dispostas horizontal e verticalmente (ex: em uma folha A4).
* **Margens da Página (mm):** Ajusta os limites de segurança (Superior, Inferior, Esquerda e Direita) para evitar que o conteúdo saia cortado.

## 2. Aba Geral

Controla o comportamento automatizado do sistema durante os processos de geração e edição de etiquetas.

![Janela de Configurações - Geral](/assets/config_geral.png)

### Seção: Impressão

Esta categoria otimiza o fluxo de envio de arquivos para a impressora:

* **Exibir configurações de impressora ao gerar etiquetas:** Quando ativa, exibe a janela de configuração da impressora antes de cada impressão. Se for utilizar sempre a mesma impressora e layout, pode desativar esta opção para um fluxo mais rápido.
* **Exibir pré-visualização antes de imprimir (Impressora Gráfica):** Gera uma amostra digital da página antes do envio físico. *Nota: Esta função é exclusiva para o modo Gráfico (PDF); linguagens ZPL e PPLB não geram pré-visualização devido a limitações nativas delas.*
* **Rasterizar impressão ZPL / Rasterizar impressão PPLB:** Converte o layout da etiqueta em uma imagem de alta definição antes de enviá-la à impressora térmica. 
  ::: tip 💡 Por que rasterizar?
  As linguagens nativas ZPL e PPLB possuem limitações de fontes e alinhamentos que podem fazer a etiqueta impressa sair diferente do que você montou na tela do editor. A rasterização garante fidelidade entre o editor e o papel.
  :::
* **Pausa entre linhas enviadas (rasterizado):** Como imagens rasterizadas geram arquivos mais pesados, impressões em lote podem sobrecarregar a memória de algumas impressoras, causando travamentos. Se isso acontecer, configure uma pequena pausa neste campo para cadenciar o envio dos dados.

### Seção: Editor

Ajustes finos para o comportamento das ferramentas dentro da área de design:

* **Exibir espessura do código de barras (Narrow):** Utilizado para impressões **não rasterizadas** em ZPL ou PPLB. Como essas linguagens geram o código de barras de forma rígida, habilitar esta opção exibe um parâmetro no editor para identificar a largura das barras pretas.