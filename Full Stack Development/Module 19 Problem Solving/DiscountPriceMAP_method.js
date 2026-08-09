const applyDiscountPrice = (prices, discount=10) =>{
    const beforeDiscountPrice = prices.map((readyRate) =>{
        const afterDiscount = readyRate - ((readyRate * discount) /100)
        return afterDiscount
    })
    return beforeDiscountPrice
}

let price = [500, 4000, 250]

console.log(applyDiscountPrice(price,20));

// ==============================================

const userSlalery = (selery, gap=10)=>{
    const BeforeCut = selery.map((readySelery) =>{
        const afterCut = readySelery - ((readySelery * gap) / 100)
        return afterCut 
    })
    return BeforeCut
}

let price1 = [500, 4000, 250]
console.log(userSlalery(price1));