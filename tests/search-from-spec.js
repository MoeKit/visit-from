var expect = require('expect');
var searchFrom = require('index');
var getKey = searchFrom.getKey;
console.log(searchFrom);
describe('search-from', function () {

    it('百度来源', function () {
        expect(getKey('http://www.baidu.com/s?wd=怎样确定是不是意念灰').key).to.be('怎样确定是不是意念灰');
        expect(getKey('http://www.baidu.com/s?word=通水当月怀孕').key).to.be('通水当月怀孕');
        expect(getKey('http://www.baidu.com/s?bs=怀孕16周').key).to.be('怀孕16周');
        expect(getKey('http://www.baidu.com/baidu?word=J打头的女英文名').key).to.be('J打头的女英文名');
        expect(getKey('http://m.baidu.com/from=1000953b/s?word=三十五周早产').key).to.be('三十五周早产');
    });

    it('so', function () {
        expect(getKey('http://www.so.com/s?q=同房AA时间').key).to.be('同房AA时间');
        expect(getKey('http://ly.so.com/s?q=没有卵黄囊  没有胎心').key).to.be('没有卵黄囊  没有胎心');

    });

    it('神马', function () {
        expect(getKey('http://m.sj.sm.cn/s?q=新生儿睡新装修的房子').key).to.be('新生儿睡新装修的房子');

    });


    it('sogou', function () {
        expect(getKey('http://www.sogou.com/sogou?query=男人的JJ').key).to.be('男人的JJ');
        expect(getKey('http://m.sogou.com/web/searchList.jsp?keyword=怀孕肚子汗毛变长男孩').key).to.be('怀孕肚子汗毛变长男孩');
    });

    it('google', function () {
        expect(getKey('https://www.google.com.hk/search?newwindow=1&safe=strict&es_sm=122&q=%E6%92%AD%E7%A7%8D%E7%BD%91+%E5%A4%9A%E5%9B%8A&oq=%E6%92%AD%E7%A7%8D%E7%BD%91++%E5%A4%9A&gs_l=serp.3.0.0.23198.25244.0.27062.9.8.1.0.0.1.840.1783.3-1j0j1j1.3.0....0...1c.1j4.47.serp..6.3.1403.4RLpDKFPuZw').key).to.be('播种网 多囊');
    });

});