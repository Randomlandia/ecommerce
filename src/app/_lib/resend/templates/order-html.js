import 'server-only';

export default function Template(products, total, orderId, orderDate) {
  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          width: 80%;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #21643f;
          color: #ffffff;
          padding: 10px 0;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .header h1 {
          margin: 0;
        }
        .order-info {
          margin: 20px 0;
          padding: 10px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          background-color: #f9f9f9;
        }
        .order-info h2 {
          margin-top: 0;
        }
        .product-list {
          margin: 20px 0;
        }
        .product-item {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #e0e0e0;
          padding: 10px 0;
        }
        .product-item img {
          max-width: 100px;
          margin-right: 10px;
          border-radius: 4px;
        }
        .product-item h3 {
          margin: 0;
          font-size: 16px;
          color: #333;
        }
        .product-item p {
          margin: 5px 0 0;
          color: #666;
        }
        .total {
          font-size: 18px;
          font-weight: bold;
          margin: 20px 0;
          text-align: right;
          color: #21643f;
        }
        .footer {
          text-align: center;
          padding: 10px 0;
          font-size: 12px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Detalles de tu compra</h1>
        </div>
        <div class="order-info">
          <h2>Orden ID: ${orderId}</h2>
          <p><strong>Fecha de la Orden:</strong> ${orderDate}</p>
        </div>
        <div class="product-list">
          ${products
            .map(
              (product) => `
            <div class="product-item">
              <img src="${product.image}" alt="${product.name}">
              <div>
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
        <div class="total">
          Total: $${total}
        </div>
        <div class="footer">
          <p>Gracias por tu compra. Pronto recibirás un correo si recibimos tu pago y posteriormente la orden de seguimiento</p>
          <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
        </div>
      </div>
    </body>
  </html>
  `;
}
