"use strict";
var Swords = (function () {
    function Swords() {
    }
    Swords.getSwords = function () {
        return this.swords;
    };
    Swords.searchSwords = function (search) {
        if (!search.name && !search.origin)
            return this.swords;
        var searchSwords = [];
        for (var i = 0; i < this.swords.length; i++) {
            var sword = this.swords[i];
            if (search.name && sword.name.indexOf(search.name) > -1) {
                searchSwords.push(sword);
            }
            else if (search.origin && (sword.country.indexOf(search.origin) > -1 || sword.region.indexOf(search.origin) > -1)) {
                searchSwords.push(sword);
            }
        }
        return searchSwords;
    };
    Swords.swords = [{ name: 'Khopesh', region: 'Bronze Age', country: 'Egypt', link: 'www.en.wikipedia.org/wiki/Khopesh', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Khopesh.jpg' },
        { name: 'Xiphos', region: 'Iron Age', country: 'Greece', link: 'www.en.wikipedia.org/wiki/Xiphos', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Xiphos_2.jpg' },
        { name: 'Asi', region: 'Iron Age', country: 'Sanskrit', link: 'www.en.wikipedia.org/wiki/Asi', img: '' },
        { name: 'Makhaira ', region: 'Iron Age', country: 'Greece', link: 'www.en.wikipedia.org/wiki/Makhaira', img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Mycenaean_swords_recostruction.jpg' },
        { name: 'Acinaces', region: 'Iron Age', country: 'Persian ', link: 'www.en.wikipedia.org/wiki/Acinaces', img: '' },
        { name: 'Harpe', region: 'Iron Age', country: 'Greece', link: 'www.en.wikipedia.org/wiki/Harpe', img: '' },
        { name: 'Gladius', region: 'Europe', country: '', link: 'www.en.wikipedia.org/wiki/Gladius', img: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Uncrossed_gladius.jpg' },
        { name: 'Spatha', region: 'Europe', country: '', link: 'www.en.wikipedia.org/wiki/Spatha', img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Spadalongobarda.jpg' },
        { name: 'Viking sword', region: 'Europe', country: '', link: 'www.en.wikipedia.org/wiki/Viking_sword', img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Viking_swords_closeup.jpg' },
        { name: 'Paramerion ', region: 'Europe', country: 'Roman Byzantine', link: '', img: '' },
        { name: 'Khmali sword', region: 'Europe', country: 'Georgian ', link: '', img: '' },
        { name: 'Arming sword', region: 'Europe', country: '', link: 'www.en.wikipedia.org/wiki/Arming_sword', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Albion_SaintMaurice_XIII_horizontal.jpg' },
        { name: 'Estoc ', region: 'Europe', country: '', link: 'www.en.wikipedia.org/wiki/Estoc', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Estoque_1480_dC..jpg' },
        { name: 'Claymore', region: 'Europe', country: '', link: 'www.en.wikipedia.org/wiki/Claymore', img: '' },
        { name: 'Curtana ', region: 'Europe', country: '', link: 'www.en.wikipedia.org/wiki/Curtana', img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Scottish_claymore_replica_%28Albion_Chieftain%292.jpg' },
        { name: 'Flamberge', region: 'Europe', country: 'German', link: 'www.en.wikipedia.org/wiki/Flamberge', img: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Dresden-Zwinger-Armoury-Sword.04.JPG' },
        { name: 'Broadsword', region: 'Europe', country: 'English', link: 'www.en.wikipedia.org/wiki/Broadsword', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Schiavona-Morges.jpg' },
        { name: 'Backsword ', region: 'Europe', country: 'English ', link: 'www.en.wikipedia.org/wiki/Backsword ', img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Svenska_palascher_cropped.jpg' },
        { name: 'Katzbalger', region: 'Europe', country: 'German', link: 'www.en.wikipedia.org/wiki/Katzbalger', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Katzbalger.jpg' },
        { name: 'Rapier', region: 'Europe', country: 'Spanish', link: 'www.en.wikipedia.org/wiki/Rapier', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Different_Rapiers.jpg' },
        { name: 'Cutlass', region: 'Europe', country: 'Caribbean', link: 'www.en.wikipedia.org/wiki/Cutlass', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/MuseeMarine-sabre-p1000456.jpg' },
        { name: 'Sabre', region: 'Europe', country: '', link: 'www.en.wikipedia.org/wiki/Sabre', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Sabre_mg_7029.jpg' },
        { name: 'Shotel', region: 'Africa', country: 'Ethiopian', link: 'www.en.wikipedia.org/wiki/Shotel', img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Shotel_%28Sabre%29.jpg' },
        { name: 'Billao', region: 'Africa', country: 'Somalian', link: 'www.en.wikipedia.org/wiki/Billao', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Somalia-Sword.jpg' },
        { name: 'Pulwar', region: 'Africa', country: 'Afghanistan', link: 'www.en.wikipedia.org/wiki/Pulwar', img: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Z_pulwar_hilt.jpg' },
        { name: 'Shamshir', region: 'Africa', country: 'Persia', link: 'www.en.wikipedia.org/wiki/Shamshir', img: '' },
        { name: 'Kilij', region: 'Africa', country: 'Turkish', link: 'www.en.wikipedia.org/wiki/Kilij', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Ottoman_kilij_from_the_Hellenic_Revolution_of_1821_%288667698557%29.jpg' },
        { name: 'Flyssa', region: 'Africa', country: 'Algeria', link: 'www.en.wikipedia.org/wiki/Flyssa', img: '' },
        { name: 'Kaskara', region: 'Africa', country: 'Sudan', link: 'www.en.wikipedia.org/wiki/Kaskara', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Kaskara-Sword.jpg' },
        { name: 'Nimcha', region: 'Africa', country: 'Morocco', link: 'www.en.wikipedia.org/wiki/Nimcha', img: '' },
        { name: 'Jian', region: 'Asia', country: 'China', link: 'www.en.wikipedia.org/wiki/Jian', img: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Scott_Rodell_cutting_jian.jpg' },
        { name: 'Dao', region: 'Asia', country: 'China', link: 'www.en.wikipedia.org/wiki/Dao', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Chinese_saber.jpg' },
        { name: 'Butterfly sword', region: 'Asia', country: 'China', link: 'www.en.wikipedia.org/wiki/Butterfly_sword', img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Wing_Chun_Hybrid_Blade_Style_Butterfly_Swords.JPG' },
        { name: 'Hook sword', region: 'Asia', country: 'China', link: 'www.en.wikipedia.org/wiki/Hook_sword', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hook_Swords.jpg' },
        { name: 'Zhanmadao', region: 'Asia', country: 'China', link: 'www.en.wikipedia.org/wiki/Zhanmadao', img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zhanmadao.jpg' },
        { name: 'Bokken', region: 'Asia', country: 'Japan', link: 'www.en.wikipedia.org/wiki/Bokken', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Various_bokken_or_bukuto.jpg' },
        { name: 'Hachiwara', region: 'Asia', country: 'Japan', link: 'www.en.wikipedia.org/wiki/Hachiwara', img: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Hachiwari_with_tsuka.jpg' },
        { name: 'Shinken', region: 'Asia', country: 'Japan', link: 'www.en.wikipedia.org/wiki/Shinken', img: 'https://en.wikipedia.org/wiki/Shinken#/media/File:Shinken.jpg' },
        { name: 'Shikomizue', region: 'Asia', country: 'Japan', link: 'www.en.wikipedia.org/wiki/Shikomizue', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Daisho_katana_and_wakizashi_koshirae_2.jpg' },
        { name: 'Hwandudaedo', region: 'Asia', country: 'Korea', link: 'www.en.wikipedia.org/wiki/Hwandudaedo', img: 'https://upload.wikimedia.org/wikipedia/commons/4/40/SillaSwordHilt.jpg' },
        { name: 'Saingeom', region: 'Asia', country: 'Korea', link: 'www.en.wikipedia.org/wiki/Saingeom', img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Three_kingdom_swords.jpg' }
    ];
    return Swords;
}());
exports.Swords = Swords;
for (var i = 0; i < $('#mw-content-text').find('ul').find('li').find('a').length; i++) {
    console.log($($('#mw-content-text').find('ul').find('li').find('a')[i]).attr('title'));
}
//# sourceMappingURL=swords.model.js.map