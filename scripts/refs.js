var refsSup = document.getElementsByTagName("sup");
var refsDt  = document.getElementsByTagName("dt");

var sups = [];
var dts = [];

for (var i = 0; i < refsSup.length; i++) {
    sups.push(refsSup.item(i));
}

for (var i = 0; i < refsDt.length; i++) {
    dts.push(refsDt.item(i));
}

sups.forEach(function(ref) {
    var num = ref.innerHTML;
    var newTargetAnchor = document.createElement("a");
    var newStaticAnchor = document.createElement("a");
    newStaticAnchor.name = "cite_" + num.replace(/\./, '-');
    newTargetAnchor.href = "#ref_" + num.replace(/\..*/, '');
    newTargetAnchor.innerHTML = "[" + num + "]";
    ref.innerHTML = "";
    ref.append(newStaticAnchor);
    ref.append(newTargetAnchor);
});

var counter = 1;

dts.forEach(function(ref) {
    var newAnchor = document.createElement("a");
    newAnchor.name = "ref_" + counter;
    ref.innerHTML = "" + counter + ".";
    ref.prepend(newAnchor);
    counter++;
});

