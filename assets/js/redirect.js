const fileSought = window.location.pathname.substring(1);
const mapOfChanges = {
    '01-introducao.html': {
        path: 'introducao.html',
        title: 'Introdução'
    },
    '02-etimologia.html': {
        path: 'etimologia.html',
        title: 'Etimologia'
    },
    '03-inglaterra.html': {
        path: 'inglaterra.html',
        title: 'Inglaterra'
    },
    '04-franca.html': {
        path: 'franca.html',
        title: 'França'
    },
    '05-motivos.html': {
        path: 'motivos.html',
        title: 'Motivos para imigração'
    },
    '06-brasao.html': {
        path: 'brasao.html',
        title: 'Brasão'
    },
    '07-longarone.html': {
        path: 'longarone.html',
        title: 'Longarone'
    },
    '08-viagens.html': {
        path: 'viagens.html',
        title: 'Viagens'
    },
    '09-matteo.html': {
        path: '1-matteo.html',
        title: 'Matteo Mariot'
    },
    '1-cesare.html': {
        path: '2-cesare.html',
        title: 'Cesare Mariot'
    },    
    '10-pietro.html': {
        path: '2-pietro.html',
        title: 'Pietro Mariot'
    },
    '11-giovanni-brigida.html': [
        {
            path: '2-giovanni.html',
            title: 'Giovanni Mariot'
        },
        {
            path: '2-brigida.html',
            title: 'Brigida Mariot'
        }
    ],
    '11-giovanni.html': {
        path: '2-giovanni.html',
        title: 'Giovanni Mariot'
    },
    '12-giosue.html': {
        path: '2-giosue.html',
        title: 'Giosuè Mariot'
    },
    '13-marco.html': {
        path: '2-marco.html',
        title: 'Marco Mariot'
    },
    '14-valentina.html': {
        path: '2-valentina.html',
        title: 'Valentina Mariot'
    },
    '15-teresa.html': {
        path: '2-teresa.html',
        title: 'Teresa Brigida Mariot'
    },
    '16-brigida.html': {
        path: '2-brigida.html',
        title: 'Brigida Mariot'
    },
    '17-margherita.html': {
        path: '2-margherita.html',
        title: 'Margherita Mariot'
    },
    '2-brigida.html': {
        path: 'longarone.html',
        title: 'Longarone'
    }
};

const redirectTo = mapOfChanges[fileSought];
const $warning = document.getElementById('warning');

if (!redirectTo) {
    $warning.innerHTML = "Página não encontrada.";
    const $image = document.getElementById('image');
    $image.style = "display: block;"
} else {
    const $moved = document.getElementById('moved');
    let newUrl = null;
    let timing = 2;
    if (redirectTo instanceof Array) {
        $warning.innerHTML = "Página removida.";
        const $multiple = document.getElementById('multiple');
        const $anchors = document.getElementById('anchors');
        redirectTo.forEach((newAnchor) => {
            if (!newUrl) newUrl = newAnchor.path;
            const $anchor = document.createElement('a');
            $anchor.href = newAnchor.path;
            $anchor.innerHTML = newAnchor.title;
            const $li = document.createElement('li');
            $li.append($anchor);
            $anchors.append($li);
        });
        $multiple.style = "display: block;"
        timing = redirectTo.length * 4;
    } else {
        $warning.innerHTML = "Redirecionando...";
        const $single = document.getElementById('single');
        const $anchorWrapper = document.getElementById('anchor');
        const $anchor = document.createElement('a');
        newUrl = redirectTo.path;
        $anchor.href = redirectTo.path;
        $anchor.innerHTML = redirectTo.title;
        $anchorWrapper.append($anchor);
        $single.style = "display: block;"
    }

    $moved.style = "display: block;"
    const $head = document.getElementsByTagName('head')[0];
    const $redirector = document.createElement('meta');
    $redirector.setAttribute('http-equiv', 'refresh');
    $redirector.setAttribute('content', `${timing}, url='${newUrl}'`);
    $head.append($redirector);
}



