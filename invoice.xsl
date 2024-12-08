<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
        <head>
            <title>Faktura</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f8f8f8;
                }
                .invoice-container {
                    width: 1000px;
                    height: 1414px;
                    margin: 0 auto;
                    position: relative;
                    background: url('/mnt/data/image.png') no-repeat center top;
                    background-size: contain;
                    background-color: white;
                    border: 1px solid #ccc; /* Tymczasowe obramowanie */
                }
                .field {
                    position: absolute;
                    font-size: 14px;
                    color: black;
                    border: 1px dashed red; /* Tymczasowe obramowanie pól */
                    background: rgba(255, 255, 255, 0.7); /* Lekko widoczne tło */
                }
                #sellerName { top: 85px; left: 140px; width: 300px; height: 20px; }
                #sellerAddress { top: 125px; left: 140px; width: 300px; height: 20px; }
                #buyerName { top: 205px; left: 140px; width: 300px; height: 20px; }
                #buyerAddress { top: 245px; left: 140px; width: 300px; height: 20px; }
                #invoiceDate { top: 85px; left: 760px; width: 150px; height: 20px; }
                #itemName { top: 370px; left: 140px; width: 300px; height: 20px; }
                #itemQuantity { top: 370px; left: 490px; width: 80px; height: 20px; }
                #itemPrice { top: 370px; left: 640px; width: 100px; height: 20px; }
                #total { top: 580px; left: 640px; width: 100px; height: 20px; font-weight: bold; }
                input {
                    border: none;
                    background: none;
                    font-size: inherit;
                    width: 100%;
                    height: 100%;
                    color: black;
                    text-align: left;
                }
            </style>
        </head>
        <body>
            <div class="invoice-container">
                <div class="field" id="sellerName">
                    <input type="text" placeholder="Jan Kowalski" />
                </div>
                <div class="field" id="sellerAddress">
                    <input type="text" placeholder="Warszawa, ul. Polna 12" />
                </div>
                <div class="field" id="buyerName">
                    <input type="text" placeholder="Imię i nazwisko" />
                </div>
                <div class="field" id="buyerAddress">
                    <input type="text" placeholder="Adres" />
                </div>
                <div class="field" id="invoiceDate">
                    <input type="date" />
                </div>
                <div class="field" id="itemName">
                    <input type="text" placeholder="Nazwa towaru" />
                </div>
                <div class="field" id="itemQuantity">
                    <input type="number" value="1" />
                </div>
                <div class="field" id="itemPrice">
                    <input type="number" value="0.00" step="0.01" />
                </div>
                <div class="field" id="total">
                    <span>0.00</span> zł
                </div>
            </div>
            <script>
                const quantityInput = document.getElementById('itemQuantityInput');
                const priceInput = document.getElementById('itemPriceInput');
                const totalSpan = document.getElementById('totalValue');

                function updateTotal() {
                    const quantity = parseFloat(quantityInput?.value || 0);
                    const price = parseFloat(priceInput?.value || 0);
                    const total = quantity * price;
                    totalSpan.textContent = total.toFixed(2);
                }

                if (quantityInput && priceInput) {
                    quantityInput.addEventListener('input', updateTotal);
                    priceInput.addEventListener('input', updateTotal);
                }
            </script>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
