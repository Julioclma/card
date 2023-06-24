let html = "";

const content = {
    produto1: {
        title: 'Camiseta Jeans',
        gender: 'COATS/JACKETS',
        description: 'Check out our new rang of Donut Denim, in a series critics are calling "the sweetest set of donut inspired clothing on the market".'
    },
    produto2: {
        title: 'Camiseta Jeans',
        gender: 'COATS/JACKETS',
        description: 'Check out our new rang of Donut Denim, in a series critics are calling "the sweetest set of donut inspired clothing on the market".'
    },
    produto3: {
        title: 'Camiseta Jeans',
        gender: 'COATS/JACKETS',
        description: 'Check out our new rang of Donut Denim, in a series critics are calling "the sweetest set of donut inspired clothing on the market".'
    },
    produto4: {
        title: 'Camiseta Jeans',
        gender: 'COATS/JACKETS',
        description: 'Check out our new rang of Donut Denim, in a series critics are calling "the sweetest set of donut inspired clothing on the market".'
    },
    produto5: {
        title: 'Camiseta Jeans',
        gender: 'COATS/JACKETS',
        description: 'Check out our new rang of Donut Denim, in a series critics are calling "the sweetest set of donut inspired clothing on the market".'
    },
    produto6: {
        title: 'Camiseta Jeans',
        gender: 'COATS/JACKETS',
        description: 'Check out our new rang of Donut Denim, in a series critics are calling "the sweetest set of donut inspired clothing on the market".'
    },

};

for (const key in content) {
    console.log(content);
    html += '<div class="container-card">\
    <div class="header-card">\
        <span class="span-card">NEW RANGE</span>\
    </div>\
    <div class="content-card">\
        <div>\
            <div> <span class="span-content-card">' + content[key].gender + '</span></div>\
            <div>\
                <h2 class="h2-content-card">' + content[key].title + '</h2>\
            </div>\
            <div>\
                <p class="p-content-card">' + content[key].description + '</p>\
            </div>\
        </div>\
    </div>\
    <div class="footer-card">\
        <div>\
            <span class="span-footer-card">SAVE FOR LATER</span>\
        </div>\
    </div>\
</div>'
}
const section = document.getElementById("cards");


section.innerHTML += html;