# Documentação do Site da Psicóloga Letícia Alves Carvalho

## Visão Geral
Este documento contém instruções para manutenção e publicação do site desenvolvido para a Psicóloga Letícia Alves Carvalho. O site foi criado como uma aplicação estática utilizando React, seguindo o briefing fornecido e adaptando o design com base no site danielacarneiro.com.

## Estrutura do Projeto
O projeto está organizado da seguinte forma:

```
psicologa-leticia-site/
├── public/               # Arquivos públicos e estáticos
│   ├── css/              # Arquivos CSS para versão estática
│   ├── js/               # Arquivos JavaScript para versão estática
│   ├── images/           # Imagens do site
│   └── index.html        # Arquivo HTML principal
├── src/                  # Código-fonte React
│   ├── components/       # Componentes React
│   │   ├── Header/       # Componente de cabeçalho
│   │   ├── Hero/         # Seção principal (banner)
│   │   ├── AboutMe/      # Seção "Quem Sou"
│   │   ├── Services/     # Seção "Serviços"
│   │   ├── Blog/         # Seção "Blog"
│   │   ├── Contact/      # Seção "Contato"
│   │   ├── Footer/       # Rodapé do site
│   │   └── WhatsAppButton/ # Botão flutuante de WhatsApp
│   ├── styles/           # Estilos globais
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Ponto de entrada
└── package.json          # Dependências e scripts
```

## Instruções para Manutenção

### Alteração de Textos
Para alterar textos do site, você pode editar os arquivos dos componentes em `src/components/`. Cada seção do site tem seu próprio componente com os textos correspondentes.

### Substituição de Imagens
1. Para substituir as imagens padrão, coloque suas novas imagens na pasta `public/images/`
2. Atualize as referências nos arquivos dos componentes correspondentes

### Alteração de Cores
As cores do site estão definidas como variáveis CSS no arquivo `src/styles/global.css`. Para alterar a paleta de cores, edite os valores das variáveis:
- `--color-rosa-claro`: #f6d7da
- `--color-nude-bege`: #fceee9
- `--color-branco`: #ffffff
- `--color-cinza-suave`: #555555

### Atualização de Informações de Contato
Para atualizar informações de contato (telefone, e-mail, endereço), edite os seguintes arquivos:
- `src/components/Contact/Contact.tsx`
- `src/components/Footer/Footer.tsx`
- `src/components/WhatsAppButton/WhatsAppButton.tsx`

### Atualização do Blog
Para adicionar novos artigos ao blog, edite o arquivo `src/components/Blog/Blog.tsx` seguindo o formato dos artigos existentes.

## Instruções para Publicação

### Opção 1: Hospedagem Tradicional
1. Execute `npm run build` para gerar os arquivos estáticos otimizados
2. Faça upload de todo o conteúdo da pasta `build` para o servidor de hospedagem
3. Configure o domínio para apontar para a pasta onde os arquivos foram carregados

### Opção 2: Hospedagem em Plataformas Modernas
O site pode ser facilmente hospedado em plataformas como:
- Netlify
- Vercel
- GitHub Pages

Estas plataformas podem ser conectadas diretamente ao repositório Git do projeto para implantação automática.

## Otimização para SEO
O site já inclui meta tags básicas para SEO, focadas nas palavras-chave:
- Psicóloga Ipatinga
- Psicóloga Online
- Psicoterapia para Mulheres
- Terapia Individual

Para melhorar ainda mais o SEO, considere:
1. Adicionar mais conteúdo textual relevante
2. Criar artigos de blog regulares
3. Registrar o site no Google Search Console
4. Implementar um sitemap.xml

## Suporte e Manutenção
Para quaisquer dúvidas ou necessidades de manutenção adicional, entre em contato com o desenvolvedor.
