const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('.')); // serve arquivos estáticos como css, js, imagens

// Rota salva pedido + envia para Discord
app.post('/save-payment', async (req, res) => {
    const data = req.body;
    const file = path.join(__dirname, 'data', 'payments.json');

    let all = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : [];
    all.push(data);
    fs.mkdirSync(path.dirname(file), {recursive:true});
    fs.writeFileSync(file, JSON.stringify(all,null,2));

    // Envio para Discord
    try {
        await axios.post(https://discord.com/api/webhooks/1547793760359030897/imOhbwhcw0KeDqz_AiMsP-d3AZR87oX1LENH4NBPrNA3n7TMr29YdQcNR6J5tfGxoPxj, {
            content: `💸 **NOVO PEDIDO**\n👤 Cliente: ${data.nome}\n🛒 Itens: ${data.pedido.length}\n💰 Total: R$${data.pedido.reduce((a,b)=>a+parseFloat(b.price),0).toFixed(2)}`
        });
    } catch(e) {
        console.error("Erro ao enviar para Discord:", e.response?.data || e.message);
    }

    res.json({success:true});
});

app.listen(PORT, ()=>console.log(`🚀 http://localhost:${PORT}`));
