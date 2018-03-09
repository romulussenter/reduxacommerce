
const initialState = [
    {
        imgSrc: 'https://viaplaceholder.com/100x100',
        name: 'Javelin (warning)',
        price: 500.00,
        count: 0
     },
    { imgSrc: 'https://viaplaceholder.com/100x100',
      name: 'snail',
      price: 3.99,
      count: 0
},
    {imgSrc: 'https://viaplaceholder.com/100x100',
    name: 'Rug',
    price: 99.00,
    count: 0
}
];
const reducer = (state=initialState, action) => {
    console.log(' Product stuff');
    return state;
} 

export default reducer;