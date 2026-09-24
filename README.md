# Cardápio digital

Aplicação de cardápio para um restaurante fictício. O visitante navega por categorias, adiciona produtos a um pedido, ajusta quantidades e abre o WhatsApp com os itens e o total em uma mensagem pronta.

**Demonstração:** https://cardapio.brunoaraujo.dev.br

## Funcionalidades

- Categorias de lanches, porções, bebidas e sobremesas.
- Indicação de itens indisponíveis e produtos em destaque.
- Carrinho com quantidades, subtotais e total.
- Coleta de nome, forma de pagamento e observações para compor a mensagem do pedido.
- Layout responsivo.

O pedido é encaminhado pelo WhatsApp. O projeto não processa pagamentos nem mantém pedidos em banco de dados. Nome, endereço, horário e telefone em `config/restaurant.ts` são dados de demonstração.

## Tecnologias

Next.js 15, React 19, TypeScript, Tailwind CSS e Lucide React.

## Rodar localmente

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. Para validar a compilação, use `npm run build`.

## Onde personalizar

- `config/restaurant.ts`: nome, identidade visual, contato, endereço e metadados.
- `data/menu.ts`: categorias, produtos, preços e disponibilidade.
- `components/menu-app.tsx`: montagem do pedido e mensagem enviada ao WhatsApp.

As imagens de pratos exibidas no projeto vêm de URLs externas do Unsplash.
