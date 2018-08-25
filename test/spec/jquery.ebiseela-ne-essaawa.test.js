(function () {

    'use strict';

    describe('Okugezesa ebya \'plugin\'', function () {
        it('nnina okulaba nti \'objects\' za \'plugin\' ntuufu', function () {
            expect($.ebiseelaNeEssaawa).to.be.an('object');
            expect($.ebiseelaNeEssaawa.fn).to.be.an('object');
            expect($.fn.ebiseelaNeEssaawa).to.be.a('function');
        });
    });

    describe('Okugezesa ebya ebiseela', function () {

        describe('gezesa akakolelo \'olwaleelo\'', function () {
            it('nnina okufuna ekiseela olwaleelo mu endabika entuufu', function () {
                var ebyokwelobozesaako = {
                        endabika: 'm'
                    },
                    leelo = new Date(),
                    omwaka = $.ebiseelaNeEssaawa.omwaka(leelo.getFullYear(), ebyokwelobozesaako),
                    omwezi = $.ebiseelaNeEssaawa.omwezi(leelo.getMonth(), ebyokwelobozesaako),
                    olunaku = $.ebiseelaNeEssaawa.olunaku(leelo.getDate(), ebyokwelobozesaako),
                    enzingu = $.ebiseelaNeEssaawa.enzingu(leelo.getDay(), ebyokwelobozesaako);

                expect($.ebiseelaNeEssaawa.olwaleelo(ebyokwelobozesaako)).to.be.equal(`${enzingu} ${olunaku} ${omwezi}, ${omwaka}`);
            });
        });

        describe('gezesa akakolelo \'ekiseela\'', function () {
            it('nnina okufuna ekiseela mu endabika entuufu', function () {
                var ebyokwelobozesaako = {},
                    owaka = 2018,
                    omwezi = 7, // ogwomunaana/agusito/muwakanya
                    olunaku = 11;
                // enzingu: lwamukaaga/nagawonye

                ebyokwelobozesaako.endabika = 'm';

                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('olwomukaaga 11 ogwomunaana, 2018');

                ebyokwelobozesaako.akagata = '-';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('olwomukaaga-11 ogwomunaana-2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'ms';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('olw6 11 ogw8, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'ma';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('olwomukaaga, kkuminalumu, ogwomunaana, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'mc';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('olwomukaaga, kkuminalumu, ogwomunaana, nkumibbili kkuminamunaana');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'b';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('nagawonye 11 muwakanya, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'bs';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('nag 11 muw, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'ba';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('nagawonye, kkuminalumu, muwakanya, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'bc';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('nagawonye, kkuminalumu, muwakanya, nkumibbili kkuminamunaana');
                ebyokwelobozesaako = {};

                olunaku = 6; //mande/bbalaza/wamunyi

                ebyokwelobozesaako.endabika = 'l';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbalaza 6 agusito, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'ls';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbal 6 agu, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'la';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbalaza, mukaaga, agusito, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'lc';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbalaza, mukaaga, agusito, nkumibbili kkuminamunaana');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'e';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbalaza 6 ogwomunaana, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'es';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbal 6 ogw8, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'ea';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbalaza, mukaaga, ogwomunaana, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'ec';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbalaza, mukaaga, ogwomunaana, nkumibbili kkuminamunaana');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'msd';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('olw1 6 ogwomunaana, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'msm';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('olwokusooka 6 ogw8, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'bsd';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('wam 6 muwakanya, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'bsm';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('wamunyi 6 muw, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'lsd';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbal 6 agusito, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'lsm';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('bbalaza 6 agu, 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kl';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('6 agusito 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'km';
                ebyokwelobozesaako.akagata = '-';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('6-ogwomunaana-2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kb';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('6 muwakanya 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kms';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('6-ogw8-2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kls';
                ebyokwelobozesaako.akagata = ' ';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('6 agu 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kbs';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('6-muw-2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kmn';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('06 ogwomunaana 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kln';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('06 agusito 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kbn';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('06 muwakanya 2018');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kmc';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('mukaaga, ogwomunaana, nkumibbili kkuminamunaana');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'klc';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('mukaaga, agusito, nkumibbili kkuminamunaana');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kbc';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('mukaaga, muwakanya, nkumibbili kkuminamunaana');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kmss';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('6/ogw8/18');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'klss';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('6/agu/18');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'kbss';
                expect($.ebiseelaNeEssaawa.ekiseela({
                    omwaka: owaka,
                    omwezi: omwezi,
                    olunaku: olunaku
                }, ebyokwelobozesaako)).to.be.equal('6/muw/18');
                ebyokwelobozesaako = {};
            });
        });

        describe('gezesa akakolelo \'obudde\'', function () {
            it('nnina okufuna ekiseela mu endabika entuufu', function () {

                var ebyokwelobozesaako = {},
                    omwaka = 2018,
                    omwezi = 7, // ogwomunaana/agusito/muwakanya
                    olunaku = 11,
                    obudde;


                obudde = $.ebiseelaNeEssaawa.obudde({
                    enzingu: {
                        b: 'b'
                    },
                    omwaka: {
                        a: omwaka,
                        b: 'b'
                    },
                    omwezi: {
                        a: omwezi,
                        b: 'l'
                    },
                    olunaku: {
                        a: olunaku,
                        b: 'b'
                    }
                });

                expect(obudde).to.have.property('enzingu').to.be.equal('nagawonye');
                expect(obudde).to.have.property('olunaku').to.be.equal('kkuminalumu');
                expect(obudde).to.have.property('omwezi').to.be.equal('agusito');
                expect(obudde).to.have.property('omwaka').to.be.equal('nkumibbili kkuminamunaana');
            });
        });

        describe('gezesa akakolelo \'olukulu\'', function () {
            it('nnina okufuna olunaku olukulu olutuufu', function () {

                var omwezi = 11,
                    olunaku = 25;

                expect($.ebiseelaNeEssaawa.olukulu(omwezi, olunaku)).to.be.equal('sekukkulu');
            });
        });

        describe('gezesa akakolelo \'olunaku\'', function () {
            it('nnina okufuna olunaku mu endabika entuufu', function () {
                var ebyokwelobozesaako = {},
                    olunaku = 5;

                ebyokwelobozesaako.endabika = 'm';
                expect($.ebiseelaNeEssaawa.olunaku(olunaku, ebyokwelobozesaako)).to.be.equal('5');

                ebyokwelobozesaako.endabika = 'z';
                expect($.ebiseelaNeEssaawa.olunaku(olunaku, ebyokwelobozesaako)).to.be.equal('05');

                ebyokwelobozesaako.endabika = 'b';
                expect($.ebiseelaNeEssaawa.olunaku(olunaku, ebyokwelobozesaako)).to.be.equal('ttaano');

                ebyokwelobozesaako.endabika = 'b';
                olunaku = 25;
                expect($.ebiseelaNeEssaawa.olunaku(olunaku, ebyokwelobozesaako)).to.be.equal('abilimutaano');
            });
        });

        describe('gezesa akakolelo \'omwezi\'', function () {
            it('nnina okufuna omwezi mu endabika entuufu', function () {
                var ebyokwelobozesaako = {},
                    omwezi = 5;

                ebyokwelobozesaako.endabika = 'm';
                expect($.ebiseelaNeEssaawa.omwezi(omwezi, ebyokwelobozesaako)).to.be.equal('ogwomukaaga');

                ebyokwelobozesaako.endabika = 'ms';
                expect($.ebiseelaNeEssaawa.omwezi(omwezi, ebyokwelobozesaako)).to.be.equal('ogw6');

                ebyokwelobozesaako.endabika = 'b';
                expect($.ebiseelaNeEssaawa.omwezi(omwezi, ebyokwelobozesaako)).to.be.equal('ssebaaseka');

                ebyokwelobozesaako.endabika = 'bs';
                expect($.ebiseelaNeEssaawa.omwezi(omwezi, ebyokwelobozesaako)).to.be.equal('sseb');

                ebyokwelobozesaako.endabika = 'l';
                expect($.ebiseelaNeEssaawa.omwezi(omwezi, ebyokwelobozesaako)).to.be.equal('juuni');

                ebyokwelobozesaako.endabika = 'ls';
                expect($.ebiseelaNeEssaawa.omwezi(omwezi, ebyokwelobozesaako)).to.be.equal('juu');

                ebyokwelobozesaako.endabika = 'e';
                expect($.ebiseelaNeEssaawa.omwezi(omwezi, ebyokwelobozesaako)).to.be.equal('ogwomukaaga');

                ebyokwelobozesaako.endabika = 'es';
                expect($.ebiseelaNeEssaawa.omwezi(omwezi, ebyokwelobozesaako)).to.be.equal('ogw6');
            });
        });

        describe('gezesa akakolelo \'enzingu\'', function () {
            it('nnina okufuna enzingu mu endabika entuufu', function () {
                var ebyokwelobozesaako = {},
                    enzingu = 1;

                ebyokwelobozesaako.endabika = 'm';
                expect($.ebiseelaNeEssaawa.enzingu(enzingu, ebyokwelobozesaako)).to.be.equal('olwokusooka');

                ebyokwelobozesaako.endabika = 'ms';
                expect($.ebiseelaNeEssaawa.enzingu(enzingu, ebyokwelobozesaako)).to.be.equal('olw1');

                ebyokwelobozesaako.endabika = 'b';
                expect($.ebiseelaNeEssaawa.enzingu(enzingu, ebyokwelobozesaako)).to.be.equal('wamunyi');

                ebyokwelobozesaako.endabika = 'bs';
                expect($.ebiseelaNeEssaawa.enzingu(enzingu, ebyokwelobozesaako)).to.be.equal('wam');

                ebyokwelobozesaako.endabika = 'l';
                expect($.ebiseelaNeEssaawa.enzingu(enzingu, ebyokwelobozesaako)).to.be.equal('bbalaza');

                ebyokwelobozesaako.endabika = 'ls';
                expect($.ebiseelaNeEssaawa.enzingu(enzingu, ebyokwelobozesaako)).to.be.equal('bbal');

                ebyokwelobozesaako.endabika = 'e';
                expect($.ebiseelaNeEssaawa.enzingu(enzingu, ebyokwelobozesaako)).to.be.equal('bbalaza');

                ebyokwelobozesaako.endabika = 'es';
                expect($.ebiseelaNeEssaawa.enzingu(enzingu, ebyokwelobozesaako)).to.be.equal('bbal');
            });
        });

        describe('gezesa akakolelo \'omwaka\'', function () {
            it('nnina okufuna omwaka mu endabika entuufu', function () {
                var ebyokwelobozesaako = {},
                    omwaka = 2015;

                ebyokwelobozesaako.endabika = 'm';
                expect($.ebiseelaNeEssaawa.omwaka(omwaka, ebyokwelobozesaako)).to.be.equal('2015');

                ebyokwelobozesaako.endabika = 'ms';
                expect($.ebiseelaNeEssaawa.omwaka(omwaka, ebyokwelobozesaako)).to.be.equal('15');

                ebyokwelobozesaako.endabika = 'b';
                expect($.ebiseelaNeEssaawa.omwaka(omwaka, ebyokwelobozesaako)).to.be.equal('nkumibbili kkuminattaano');

                ebyokwelobozesaako.endabika = 'bs';
                expect($.ebiseelaNeEssaawa.omwaka(omwaka, ebyokwelobozesaako)).to.be.equal('kkuminattaano');
            });
        });
    });

    describe('Okugezesa ebya essaawa', function () {
        describe('gezesa akakolelo \'kati\'', function () {
            it('nnina okufuna essaawa kati mu endabika entuufu', function () {
                // MANYA: okugezesa kutono kubanga akakolelo 'kati' kalina enkola yemu ne akakolelo 'meka' wansi-wano akagezeseddwa okujako nti kafuna essaawa kati-kati

                var ebyokwelobozesaako = {
                        endabika: 'ms'
                    },
                    leelo = new Date(),
                    essaawa = $.ebiseelaNeEssaawa.essaawa(leelo.getHours(), ebyokwelobozesaako),
                    eddakiika = leelo.getMinutes();

                expect($.ebiseelaNeEssaawa.kati(ebyokwelobozesaako)).to.be.equal(`${essaawa}:${eddakiika}`);
                ebyokwelobozesaako = {};
            });
        });

        describe('gezesa akakolelo \'meka\'', function () {
            it('nnina okufuna essaawa meka mu endabika entuufu', function () {
                var ebyokwelobozesaako = {},
                    essaawa = 2,
                    eddakiika = 7,
                    akatikitiki = 11;

                ebyokwelobozesaako.endabika = 'm';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('8:7:11');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'ms';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('8:7');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'mss';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('8');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'mkss';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('8 ezettumbi');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'mnss';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('8 ezekilo');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'mtss';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('8 ezekilo');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'mz';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('08:07:11');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'msz';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('08:07');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'mssz';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('08');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'pz';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('02:07:11');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'psz';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('02:07');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'pssz';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('02');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cmk';
                akatikitiki = 33;
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza ettumbi ne eddakiika musanvu ne obutikitiki asatumubusatu');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cmk';
                akatikitiki = 33;
                eddakiika = 30;
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza ettumbi ne ekitundu ne obutikitiki asatumubusatu');
                ebyokwelobozesaako = {};


                ebyokwelobozesaako.endabika = 'cmks';
                eddakiika = 7;
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza ettumbi ne eddakiika musanvu');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cmkss';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza ettumbi');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cmn';
                akatikitiki = 1;
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza ekilo ne eddakiika musanvu ne akatikitiki kamu');
                ebyokwelobozesaako = {};
                akatikitiki = 11;

                ebyokwelobozesaako.endabika = 'cmns';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza ekilo ne eddakiika musanvu');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cmnss';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza ekilo');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cmt';
                essaawa = 14;
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza emisana ne eddakiika musanvu ne obutikitiki kkuminakamu');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cmts';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza emisana ne eddakiika musanvu');
                ebyokwelobozesaako = {};
                essaawa = 2;

                ebyokwelobozesaako.endabika = 'cmtss';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa munaana eza ekilo');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cb';
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa ya matutuma ne eddakiika musanvu ne obutikitiki kkuminakamu');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cbs';
                essaawa = 7;
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa ya maliili ne eddakiika musanvu');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'cbss';
                essaawa = 4;
                expect($.ebiseelaNeEssaawa.meka({
                    essaawa: essaawa,
                    eddakiika: eddakiika,
                    akatikitiki: akatikitiki
                }, ebyokwelobozesaako)).to.be.equal('essaawa ya nkokeeyookubili');
                ebyokwelobozesaako = {};
            });
        });

        describe('gezesa akakolelo \'essawa\'', function () {
            it('nnina okufuna essaawa mu endabika entuufu', function () {
                var ebyokwelobozesaako = {},
                    essaawa = 3;

                ebyokwelobozesaako.endabika = 'm';
                expect($.ebiseelaNeEssaawa.essaawa(essaawa, ebyokwelobozesaako)).to.be.equal('mwenda');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'ms';
                expect($.ebiseelaNeEssaawa.essaawa(essaawa, ebyokwelobozesaako)).to.be.equal('9');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'b';
                expect($.ebiseelaNeEssaawa.essaawa(essaawa, ebyokwelobozesaako)).to.be.equal('nkokeembelebelye');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'bs';
                expect($.ebiseelaNeEssaawa.essaawa(essaawa, ebyokwelobozesaako)).to.be.equal('nko1');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'p';
                expect($.ebiseelaNeEssaawa.essaawa(essaawa, ebyokwelobozesaako)).to.be.equal('ssatu');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'ps';
                expect($.ebiseelaNeEssaawa.essaawa(essaawa, ebyokwelobozesaako)).to.be.equal('3');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'msz';
                expect($.ebiseelaNeEssaawa.essaawa(essaawa, ebyokwelobozesaako)).to.be.equal('09');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'psz';
                expect($.ebiseelaNeEssaawa.essaawa(essaawa, ebyokwelobozesaako)).to.be.equal('03');
                ebyokwelobozesaako = {};

            });
        });
    });

    describe('Okugezesa ebya ekigelo', function () {
        describe('gezesa akakolelo \'ekigelo\'', function () {
            it('nnina okufuna ekigelo mu endabika entuufu', function () {
                var ebyokwelobozesaako = {},
                    essaawa = 5;

                ebyokwelobozesaako.endabika = 'k';
                expect($.ebiseelaNeEssaawa.ekigelo(essaawa, ebyokwelobozesaako)).to.be.equal('amatulutulu');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 'n';
                expect($.ebiseelaNeEssaawa.ekigelo(essaawa, ebyokwelobozesaako)).to.be.equal('amakya');
                ebyokwelobozesaako = {};

                ebyokwelobozesaako.endabika = 't';
                expect($.ebiseelaNeEssaawa.ekigelo(essaawa, ebyokwelobozesaako)).to.be.equal('ekilo');
                ebyokwelobozesaako = {};
            });
        });
    });
})();