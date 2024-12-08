<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
        <head>
            <title>Faktura</title>
            <style>
                body {
                    
    margin: 0; /* Usunięcie domyślnych marginesów */
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Środek strony */
    background-color: #f8f8f8; /* Kolor tła strony */
}
                .invoice-container {
    width: 1000px; /* Szerokość kontenera */
    height: 1414px; /* Wysokość kontenera */
    margin: 0 auto; /* Wyśrodkowanie kontenera na stronie */
    position: relative;
    background: url('faktura.jpg') no-repeat top center; /* Pozycjonowanie obrazu w górnej części */
    background-size: contain; /* Dopasowanie obrazu do kontenera */
    background-color: white; /* Tło dla pustych obszarów */
    border: 1px solid #ccc; /* Opcjonalnie: obramowanie */
}

                .field {
                    position: absolute;
                    font-size: 14px;
                    color: black;
                }
                #sellerName { top: 170px; left: 150px; width: 300px; }  /*TEGO JUZ NIE RUSZAM*/
                #sellerAddress { top: 210px; left: 150px; width: 300px; } /*TEGO JUZ NIE RUSZAM*/
                #buyerName { top: 300px; left: 250px; width: 300px; }  /*TEGO JUZ NIE RUSZAM*/
                #buyerAddress { top: 333px; left: 150px; width: 300px; } /*TEGO JUZ NIE RUSZAM*/
                #invoiceDate { top: 100px; left: 800px; width: 150px; } 
                #itemName { top: 425px; left: 100px; width: 300px; } 
                #itemQuantity { top: 420px; left: 450px; width: 100px; }
                #itemPrice { top: 420px; left: 550px; width: 100px; }
                #total { top: 700px; left: 640px; width: 100px; font-weight: bold; }
                input {
                    border: none;
                    background: none;
                    font-size: inherit;
                    width: 100%;
                    color: black;
                    text-align: left;
                }
            </style>
        </head>
        <body>
            <div class="invoice-container">
                <div class="field" id="sellerName">
                <xsl:value-of select="invoice/seller/name" />
                </div>
                <div class="field" id="sellerAddress">
                <xsl:value-of select="invoice/seller/address" />
                </div>
                <div class="field" id="buyerName">
                <input type="text" id="buyerNameInput" placeholder="Imię i nazwisko" />
                </div>
                <div class="field" id="buyerAddress">
                <input type="text" id="buyerAddressInput" placeholder="Adres" />
                </div>
                <div class="field" id="invoiceDate">
                <input type="date" id="invoiceDateInput" />
                </div>
                <div class="field" id="itemName">
                <input type="text" id="itemNameInput" placeholder="Nazwa towaru" />
                </div>
                <div class="field" id="itemQuantity">
                <input type="number" id="itemQuantityInput" value="1" />
                </div>
                <div class="field" id="itemPrice">
                <input type="number" id="itemPriceInput" value="0.00" step="0.01" />
                </div>
                <div class="field" id="total">
                <span id="totalValue">0.00</span> zł
                </div>
            </div>
            <script>
                const quantityInput = document.getElementById('itemQuantityInput');
                const priceInput = document.getElementById('itemPriceInput');
                const totalSpan = document.getElementById('totalValue');

                function updateTotal() {
                    const quantity = parseFloat(quantityInput.value) || 0;
                    const price = parseFloat(priceInput.value) || 0;
                    const total = quantity * price;
                    totalSpan.textContent = total.toFixed(2);
                }

                quantityInput.addEventListener('input', updateTotal);
                priceInput.addEventListener('input', updateTotal);
            </script>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>