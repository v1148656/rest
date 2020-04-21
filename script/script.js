$('.mains').click(function () {
    $('.price1').text('$25.89');
    $('.price2').text('$16.89');
    $('.price3').text('$17.89');
    $('.price4').text('$18.89');
    $('.name1').text('Osso Buco');
    $('.name2').text('Pappardelle Mimmo');
    $('.name3').text('Trippa Satriano');
    $('.name4').text('Filetto Di Manzo');
    $('.description1').text('Osso Buco is one of the Italian greats - slow cooked veal in a white wine tomato sauce. Meltingly tender, this is both hearty and luxurious.');
    $('.description2').text('This delicious dish tops long, wide pasta with scallops, lobster, asparagus, butter, sage and truffle oil to cater every palate.');
    $('.description3').text('Thinly sliced herb encrusted ahi tuna topped with diced tomatoes, olives, capers, red onions and fennel. Perfect choice even for the first-time visitors!');
    $('.description4').text('Wonderful combination of prime tenderloin, winter greens, Jerusalem artichoke puree, and oxtail reduction sauce.');
});



$('.desserts').click(function () {
    $('.price1').text('$20.89');
    $('.price2').text('$6.89');
    $('.price3').text('$5.89');
    $('.price4').text('$4.89');
    $('.name1').text('Tiramisu');
    $('.name2').text('Cannoli');
    $('.name3').text('Pistachio Passion');
    $('.name4').text('Chocolate-and-Pistachio Biscotti');
    $('.description1').text('A Pesto’s favorite - classic Italian dessert made with lady fingers, Mascarpone cheese & espresso. Perfect for both kids and adults.');
    $('.description3').text('Trio tower of cannoli filled with smooth ricotta, sugar & cinnamon, with chocolate & raspberry sauces. Single cannoli is also available.');
    $('.description2').text('Layered pistachio cream, cream cheese custard & whipped cream atop a rich walnut crust.');
    $('.description4').text('At Pesto, we vary these wonderful nutty biscotti, while also dipping them in melted dark chocolate for an extra layer of flavor.');
});



$('.drinks').click(function () {
    $('.price1').text('$10.89');
    $('.price2').text('$9.89');
    $('.price3').text('$11.89');
    $('.price4').text('$8.89');
    $('.name1').text('Aperol Spritz');
    $('.name2').text('Negroni');
    $('.name3').text('Negroni Sbagliato');
    $('.name4').text('White Peach Bellini');
    $('.description1').text('The most popular drink in Venice: refreshing, easygoing &…happy! Perfect to be sipped as an “Aperitivo” just before dinner - delightful!');
    $('.description2').text('Reward yourself with a moment of relaxation & pure pleasure while enjoying the full flavour & simplicity of a Negroni, an iconic Italian cocktail.');
    $('.description3').text('A cocktail for those who prefer more delicate flavours but nonetheless want a drink full of taste & personality.');
    $('.description4').text('White Peach Bellini is a classic drink from Venice Italy of white peach purée and Prosecco. It is one of our most popular drinks at Pesto.');
});







$('.greenblocks1').click(function () {
    $('.greenpoints1').css('background-color', 'green');
    $('.greenpoints2').css('background-color', 'grey');
    $('.greenpoints3').css('background-color', 'grey');
    $('.data1').text('JUL 02, 2019');
    $('.data2').text('JUL 12, 2019');
    $('.data3').text('DEC 02, 2019');
    $('.object1').text('Genuine Italian Pizza: Authenticity and Choice');
    $('.object2').text('Italian vs. American Spaghetti: Top 5 Differences');
    $('.object3').text('The Delicious History of Lasagna and Its Origins');
    $('.content1').text('As an Italian restaurant, we are very proud of our delicious authentic pizzas. Our three most popular choices are the Rustica, the Toscana and...');
    $('.content2').text('Commonly, when we hear there is spaghetti for dinner we will be expecting a red tomato sauce with meat and seasonings poured over long...');
    $('.content3').text('Lasagna, could there be a more perfect dish? It’s comfort food on steroids. Layers of cheese generously piled on top of decadent amounts...');
});

$('.greenblocks2').click(function () {
    $('.greenpoints1').css('background-color', 'grey');
    $('.greenpoints2').css('background-color', 'green');
    $('.greenpoints3').css('background-color', 'grey');
    $('.data1').text('AUG 15, 2019');
    $('.data2').text('SEP 15, 2019');
    $('.data3').text('SEP 28, 2019');
    $('.object1').text('Making Gelato Like a True Italian: Tips From Our Chef');
    $('.object2').text('Italian Ingredients You Can Easily Grow at Home');
    $('.object3').text('Our Brief Guide to Pairing Wine and Pasta the Right Way');
    $('.content1').text('Most would agree that gelato is the most delicious frozen dessert; the perfect ending to any meal. With origins in Sicily, gelato has been made famous...');
    $('.content2').text('Imagine preparing an Italian dinner but having to stop cooking because you forget an ingredient and must run to the store. How nice would it be to go...');
    $('.content3').text('To Italians, pasta is the food of the gods, and there is nothing better to go with a good pasta than a perfect wine. To the uninitiated, finding the right...');
});


$('.greenblocks3').click(function () {
    $('.greenpoints1').css('background-color', 'grey');
    $('.greenpoints2').css('background-color', 'grey');
    $('.greenpoints3').css('background-color', 'green');
    $('.data2').text('OCT 05, 2019');
    $('.data2').text('OCT 17, 2019');
    $('.data3').text('NOV 10, 2019');
    $('.object1').text('Top 10 Famous Spring Dishes in Italian Restaurants');
    $('.object2').text('What Makes Some Seasonings Truly Italian?');
    $('.object3').text('Types of Italian Sausage and Why They Are Different');
    $('.content1').text('Spring is the time for growth and rebirth. One can see this throughout the countrysides of Italy with blooming flowers and budding trees. Springtime is...');
    $('.content2').text('When thinking of Italian cuisine, dishes like pasta enveloped in hearty sauces come to mind. Certain flavors seem to be found across the different...');
    $('.content3').text('There are many types of Italian sausage. The main difference in Italian sausage when compared to other sausages is the seasoning. The particular...');
});

$('.img1').mouseover(function () {
    $('.zoom1').css('display', 'block');
});

$('.img1').mouseout(function () {
    $('.zoom1').css('display', 'none');
});

$('.img2').mouseover(function () {
    $('.zoom2').css('display', 'block');
});

$('.img2').mouseout(function () {
    $('.zoom2').css('display', 'none');
});

$('.img3').mouseover(function () {
    $('.zoom3').css('display', 'block');
});

$('.img3').mouseout(function () {
    $('.zoom3').css('display', 'none');
});

$('.img4').mouseover(function () {
    $('.zoom4').css('display', 'block');
});

$('.img4').mouseout(function () {
    $('.zoom4').css('display', 'none');
});

$('.img5').mouseover(function () {
    $('.zoom5').css('display', 'block');
});

$('.img5').mouseout(function () {
    $('.zoom5').css('display', 'none');
});

$('.zoom1').mouseover(function () {
    $('.zoom1').css('display', 'block');
});

$('.zoom1').mouseout(function () {
    $('.zoom1').css('display', 'none');
});

$('.zoom2').mouseover(function () {
    $('.zoom2').css('display', 'block');
});

$('.zoom2').mouseout(function () {
    $('.zoom2').css('display', 'none');
});

$('.zoom3').mouseover(function () {
    $('.zoom3').css('display', 'block');
});

$('.zoom3').mouseout(function () {
    $('.zoom3').css('display', 'none');
});

$('.zoom4').mouseover(function () {
    $('.zoom4').css('display', 'block');
});

$('.zoom4').mouseout(function () {
    $('.zoom4').css('display', 'none');
});

$('.zoom5').mouseover(function () {
    $('.zoom5').css('display', 'block');
});

$('.zoom5').mouseout(function () {
    $('.zoom5').css('display', 'none');
});