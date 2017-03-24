var fs = require('fs'),
    path = require('path'),
    Mustache = require('mustache');

var descFile = fs.openSync(path.resolve(__dirname, 'data', 'data.json'), 'w');

var data = {data: []};
for (var i = 0; i < 20; i++) {
    var elem = {
        "id": i,
        "message": "Hello, Huy!" + i,
        "message1": "Hello, Huy!" + i,
        "message2": "Hello, Huy!" + i,
        "message3": "Hello, Huy!" + i,
        "message4": "Hello, Huy!" + i,
        "message5": "Hello, Huy!" + i,
        "message6": "Hello, Huy!" + i,
        "message7": "Hello, Huy!" + i,
        "message8": "Hello, Huy!" + i,
        "message9": "Hello, Huy!" + i,
        "message10": "Hello, Huy!" + i,
        "message11": "Hello, Huy!" + i,
        "message12": "Hello, Huy!" + i,
        "message13": "Hello, Huy!" + i,
        "message14": "Hello, Huy!" + i,
        "message15": "Hello, Huy!" + i
    };
        //desc = fs.openSync(path.resolve(__dirname, 'results', 'res'+i+'.html'), 'w'),
        //html = Mustache.render(template, elem);

    // fs.writeFile(path.resolve(__dirname, 'results', 'res'+i+'.html'), html, function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //
    //     //console.log('Success!');
    //
    // });
    //
    // fs.closeSync(desc);

    data.data.push(elem)
}

fs.writeFile(path.resolve(__dirname, 'data', 'data.json'), JSON.stringify(data), function (err) {
    if (err) {
        return console.log(err);
    }

    console.log('Json!');
});
fs.closeSync(descFile);

var start = Date.now();

var template = fs.readFileSync(path.resolve(__dirname, 'mustache_templates', 'index.mustache'), {encoding: 'utf8'}),
    html = Mustache.render(template, elem);

var fd = fs.openSync(path.resolve(__dirname, 'result', 'result.json'), 'w');
fs.writeFile(path.resolve(__dirname, 'result', 'result.html'), html, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log('HTML!');
    var stop = Date.now();

    var res = (stop - start)/1000;
    console.log(res);
});
fs.closeSync(fd);