(function () {
    'use strict';

    describe('Okugezesa ebya plugin', function () {
        it('nnina okufuna meka mu ndabika entuufu', function () {
            expect($.ebiseelaNeEssaawa).to.be.an('object');
            expect($.ebiseelaNeEssaawa.fn).to.be.an('object');
            expect($.fn.ebiseelaNeEssaawa).to.be.a('function');
        });
    });

    describe('Okugezesa ebya okwelobozesaako ku MEKA', function () {
        describe('gezesa \'ekiseela\'', function () {
            it('nnina okufuna meka mu ndabika entuufu', function () {
                var okwelobozesaako = {},
                    owaka = 2018,
                    omwezi = 7, // ogwomunaana/agusito/muwakanya
                    olunaku = 11;
                // enzingu: lwamukaaga/nagawonye
//console.log($.ebiseelaNeEssaawa);
                okwelobozesaako.endabika = 'm';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olwomukaaga 11 ogwomunaana, 2018');
                okwelobozesaako.akagata = '-';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olwomukaaga-11 ogwomunaana-2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'ms';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olw6 11 ogw8, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'b';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('nagawonye 11 muwakanya, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'bs';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('nag 11 muw, 2018');
                okwelobozesaako = {};

                olunaku = 6; //mande/bbalaza/wamunyi

                okwelobozesaako.endabika = 'l';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('mmande 6 agusito, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'ls';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('mman 6 agu, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'e';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('bbalaza 6 ogwomunaana, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'es';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('bbal 6 ogw8, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'msd';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olw1 6 ogwomunaana, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'msm';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olwokusooka 6 ogw8, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'bsd';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('wam 6 muwakanya, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'bsm';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('wamunyi 6 muw, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'lsd';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('mman 6 agusito, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'lsm';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('mmande 6 agu, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kl';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6 agusito 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'km';
                okwelobozesaako.akagata = '-';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6-ogwomunaana-2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kb';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6 muwakanya 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kms';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6-ogw8-2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kls';
                okwelobozesaako.akagata = ' ';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6 agu 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kbs';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6-muw-2018');
                okwelobozesaako = {};
                
            });
        });
    });

    describe('Okugezesa ebya okwelobozesaako ku KATI', function () {
        describe('gezesa \'ekiseela\'', function () {
            /*it('nnina okufuna meka mu ndabika entuufu', function () {
                var okwelobozesaako = {},
                    owaka = 2018,
                    omwezi = 7, // ogwomunaana/agusito/muwakanya
                    olunaku = 11;
                // enzingu: lwamukaaga/nagawonye

                okwelobozesaako.endabika = 'm';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olwomukaaga 11 ogwomunaana, 2018');
                okwelobozesaako.akagata = '-';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olwomukaaga-11 ogwomunaana-2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'ms';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olw6 11 ogw8, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'b';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('nagawonye 11 muwakanya, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'bs';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('nag 11 muw, 2018');
                okwelobozesaako = {};

                olunaku = 6; //mande/balaza/wamunyi

                okwelobozesaako.endabika = 'l';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('mmande 6 agusito, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'ls';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('mman 6 agu, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'e';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('balaza 6 ogwomunaana, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'es';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('bal 6 ogw8, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'msd';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olw1 6 ogwomunaana, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'msm';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('olwokusooka 6 ogw8, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'bsd';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('wam 6 muwakanya, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'bsm';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('wamunyi 6 muw, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'lsd';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('mman 6 agusito, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'lsm';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('mmande 6 agu, 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kl';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6 agusito 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'km';
                okwelobozesaako.akagata = '-';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6-ogwomunaana-2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kb';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6 muwakanya 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kms';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6-ogw8-2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kls';
                okwelobozesaako.akagata = ' ';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6 agu 2018');
                okwelobozesaako = {};

                okwelobozesaako.endabika = 'kbs';
                expect($.ebiseelaNeEssaawa.ekiseela(owaka, omwezi, olunaku, okwelobozesaako)).to.be.equal('6-muw-2018');
                okwelobozesaako = {};
                
            });*/
        });
    });
})();