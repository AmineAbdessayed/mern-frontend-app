const displayDTCurrency=(num)=>{

    const formatter= new Intl.NumberFormat('ar-TN',{
        style:'currency',
        currency:'TND',
        minimumFractionDigits:2
    })

    return formatter.format(num)


}

export default displayDTCurrency