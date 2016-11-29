//Averge price
var avgPrice = items.map(cost => cost.price).reduce((a, b) => a + b) / items.length;
var price = Math.round(avgPrice * 100) / 100;

//price range

var things = items.filter(compare => compare.price > 14 && compare.price < 18).map(name => name.title)

// GBP
var currency = items.filter(item => item.currency_code.includes("GBP")).map(name => name.title + " costs £" + name.price)

//wood
var stuff = items.filter(uses => uses.materials.includes("wood")).map(name => name.title + " is made of wood")

//materials
var materials = items.filter(find => find.materials.length > 8).map(name => name.title + " has " + name.materials.length + " materials " + name.materials)
    // var materialsTwo = items.filter(find=>find.materials.length >8).map(name=>name.materials)

//sellers
var owner = items.filter(find => find.who_made.includes("i_did"))
var owners = owner.length + " were made by their sellers"





var node = document.createElement("LI");
var textnode = document.createTextNode("The average price is " + price);
node.appendChild(textnode);
document.getElementById("list").appendChild(node);

var node = document.createElement("LI");
var textnode = document.createTextNode(owners);
node.appendChild(textnode);
document.getElementById("list6").appendChild(node);



function makeUL(array) {
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
}
document.getElementById('list2').appendChild(makeUL(things));
document.getElementById('list3').appendChild(makeUL(currency));
document.getElementById('list4').appendChild(makeUL(stuff));
document.getElementById('list5').appendChild(makeUL(materials));
