export function convertNumberToCurrencyBRL(price: any) {
  // Converte o valor para número
  price = parseFloat(price);

  // Verifica se o valor é um número válido
  if (isNaN(price)) {
    return "Valor inválido";
  }

  // Formata o valor como moeda brasileira (R$)
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}
