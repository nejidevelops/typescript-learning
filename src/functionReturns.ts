function calculateDiscount(price: number): number | string {
  const hasDiscount = true;

  if (hasDiscount) {
    return 'Discount Applied';
  }

  return price;
}

const finalPrice = calculateDiscount(200)