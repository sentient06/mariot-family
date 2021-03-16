var refsSup = document.getElementsByTagName("sup");
var refsDt  = document.getElementsByTagName("dt");
var refsDd  = document.getElementsByTagName("dd");

var sups = [];
var dts = [];
var dds = [];

for (var i = 0; i < refsSup.length; i++) {
    sups.push(refsSup.item(i));
}

for (var i = 0; i < refsDt.length; i++) {
    dts.push(refsDt.item(i));
}

for (var i = 0; i < refsDd.length; i++) {
    dds.push(refsDd.item(i));
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

var alpha = "abcdefghijk";

dds.forEach(function(ref) {
    var childrenLength = ref.children.length;
    if (childrenLength > 1) {       
        var indexes = [];
        for (var i = 0; i < ref.childNodes.length; i++) {
            var currentChildNode = ref.childNodes[i];
            var isRef = currentChildNode.className === 'ref';
            var mustSkip = Boolean(currentChildNode.dataset && currentChildNode.dataset.skip);
            if (isRef && !mustSkip) indexes.push(i);
        }
        if (indexes.length > 1) {
            var counter = 0;
            for (var i = 0; i < indexes.length; i++) {
                var newTargetAnchor = document.createElement("div");
                newTargetAnchor.className = "subsection";
                newTargetAnchor.innerHTML = alpha.substr(counter, 1);
                counter++;
                ref.childNodes[indexes[i]].prepend(newTargetAnchor);
                // ref.insertBefore(newTargetAnchor, ref.childNodes[indexes[i]]);
            }
        }
    }
});

